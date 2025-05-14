"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/types";

interface ChatWindowProps {
  propertyId: string;
  receiverId: string;
}

export default function ChatWindow({
  propertyId,
  receiverId,
}: ChatWindowProps) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from("messages")
        .select("*")
        .eq("property_id", propertyId)
        .or(
          `sender_id.eq.${session?.user.id},receiver_id.eq.${session?.user.id}`
        )
        .order("created_at", { ascending: true });
      setMessages(data || []);
    };
    fetchMessages();

    const channel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `property_id=eq.${propertyId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [propertyId, session]);

  const handleSend = async () => {
    if (!newMessage.trim()) return;
    await supabase.from("messages").insert({
      id: crypto.randomUUID(),
      sender_id: session?.user.id,
      receiver_id: receiverId,
      property_id: propertyId,
      content: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="border rounded-md p-4 max-w-2xl mx-auto">
      <div className="h-96 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 ${
              msg.sender_id === session?.user.id ? "text-right" : ""
            }`}
          >
            <p className="inline-block bg-gray-100 rounded-md p-2">
              {msg.content}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(msg.created_at).toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
        />
        <Button onClick={handleSend}>Gửi</Button>
      </div>
    </div>
  );
}
