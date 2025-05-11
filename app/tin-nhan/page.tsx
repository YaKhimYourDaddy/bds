"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Send, Search, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample conversation data - would come from an API in a real app
const sampleConversations = [
  {
    id: "1",
    with: {
      id: "101",
      name: "Nguyễn Văn A",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    lastMessage: {
      content: "Tôi quan tâm đến căn hộ của bạn. Có thể xem nhà vào cuối tuần này không?",
      time: "2025-05-10T08:30:00",
      isRead: true,
      senderId: "101",
    },
    property: {
      id: "1001",
      title: "Căn hộ 2 phòng ngủ tại Vinhomes Central Park",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    unreadCount: 0,
  },
  {
    id: "2",
    with: {
      id: "102",
      name: "Trần Thị B",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    lastMessage: {
      content: "Nhà có bảo hành nội thất không?",
      time: "2025-05-09T14:20:00",
      isRead: false,
      senderId: "102",
    },
    property: {
      id: "1002",
      title: "Nhà phố liền kề tại Quận 7",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    },
    unreadCount: 2,
  },
  {
    id: "3",
    with: {
      id: "103",
      name: "Lê Văn C",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    lastMessage: {
      content: "Tôi sẽ liên hệ lại với bạn vào ngày mai nhé!",
      time: "2025-05-08T16:45:00",
      isRead: true,
      senderId: "user",
    },
    property: {
      id: "1003",
      title: "Biệt thự sang trọng view sông",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    unreadCount: 0,
  },
];

// Sample messages for a conversation
const sampleMessages = [
  {
    id: "1",
    content: "Chào bạn, tôi quan tâm đến căn hộ của bạn. Có thể xem nhà vào cuối tuần này không?",
    time: "2025-05-09T10:30:00",
    senderId: "101",
  },
  {
    id: "2",
    content: "Chào bạn, được chứ. Bạn muốn xem vào thứ bảy hay chủ nhật?",
    time: "2025-05-09T10:35:00",
    senderId: "user",
  },
  {
    id: "3",
    content: "Thứ bảy buổi sáng được không ạ? Khoảng 9h30?",
    time: "2025-05-09T10:40:00",
    senderId: "101",
  },
  {
    id: "4",
    content: "Được, 9h30 sáng thứ bảy. Tôi sẽ gặp bạn tại địa chỉ căn hộ.",
    time: "2025-05-09T10:45:00",
    senderId: "user",
  },
  {
    id: "5",
    content: "Cảm ơn bạn. Bạn có thể cho tôi xin số điện thoại để tiện liên lạc không?",
    time: "2025-05-09T10:50:00",
    senderId: "101",
  },
  {
    id: "6",
    content: "Số của tôi là 0912345678. Bạn có thể liên hệ trước khi đến.",
    time: "2025-05-09T10:55:00",
    senderId: "user",
  },
  {
    id: "7",
    content: "Cảm ơn bạn, tôi đã lưu số. Hẹn gặp bạn vào thứ bảy!",
    time: "2025-05-09T11:00:00",
    senderId: "101",
  },
  {
    id: "8",
    content: "Vâng, hẹn gặp bạn!",
    time: "2025-05-09T11:05:00",
    senderId: "user",
  },
];

export default function MessagesPage() {
  const { toast } = useToast();
  const [conversations, setConversations] = useState(sampleConversations);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  
  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conversation => 
    conversation.with.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conversation.property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get current conversation details
  const currentConversation = conversations.find(c => c.id === selectedConversation);
  
  // Send a new message
  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;
    
    const message = {
      id: Date.now().toString(),
      content: newMessage,
      time: new Date().toISOString(),
      senderId: "user",
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage("");
    
    // Update the last message in the conversation list
    setConversations(prev => 
      prev.map(conv => 
        conv.id === selectedConversation 
          ? {
              ...conv,
              lastMessage: {
                content: newMessage,
                time: new Date().toISOString(),
                isRead: true,
                senderId: "user",
              },
            }
          : conv
      )
    );
    
    // Scroll to bottom
    setTimeout(() => {
      const messagesContainer = document.getElementById("messages-container");
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }, 100);
  };
  
  // Mark conversation as read when selected
  const selectConversation = (id: string) => {
    setSelectedConversation(id);
    
    // Mark as read
    setConversations(prev => 
      prev.map(conv => 
        conv.id === id 
          ? {
              ...conv,
              lastMessage: {
                ...conv.lastMessage,
                isRead: true,
              },
              unreadCount: 0,
            }
          : conv
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tin nhắn</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)] min-h-[500px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <Card className="h-full flex flex-col">
            <CardHeader className="px-4 py-3 border-b">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm tin nhắn..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <ScrollArea className="flex-1">
              <CardContent className="p-0">
                {filteredConversations.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    Không tìm thấy cuộc trò chuyện nào
                  </div>
                ) : (
                  filteredConversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      className={cn(
                        "w-full text-left p-3 hover:bg-muted/50 transition-colors relative",
                        selectedConversation === conversation.id && "bg-muted"
                      )}
                      onClick={() => selectConversation(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={conversation.with.avatar} alt={conversation.with.name} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium truncate">{conversation.with.name}</p>
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(conversation.lastMessage.time), "HH:mm")}
                            </span>
                          </div>
                          <p 
                            className={cn(
                              "text-sm truncate", 
                              conversation.unreadCount > 0 
                                ? "font-medium" 
                                : "text-muted-foreground"
                            )}
                          >
                            {conversation.lastMessage.senderId === "user" && "Bạn: "}
                            {conversation.lastMessage.content}
                          </p>
                          <p className="text-xs text-primary truncate mt-1">
                            {conversation.property.title}
                          </p>
                        </div>
                      </div>
                      {conversation.unreadCount > 0 && (
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {conversation.unreadCount}
                        </div>
                      )}
                      <Separator className="mt-3" />
                    </button>
                  ))
                )}
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
        
        {/* Chat Window */}
        <div className="lg:col-span-2 h-full flex flex-col">
          <Card className="h-full flex flex-col">
            {selectedConversation && currentConversation ? (
              <>
                <CardHeader className="px-4 py-3 border-b flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={currentConversation.with.avatar} alt={currentConversation.with.name} />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{currentConversation.with.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {currentConversation.property.title}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </CardHeader>
                
                <ScrollArea id="messages-container" className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={cn(
                          "flex",
                          message.senderId === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] rounded-lg p-3",
                            message.senderId === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          )}
                        >
                          <p>{message.content}</p>
                          <p className={cn(
                            "text-xs mt-1",
                            message.senderId === "user"
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          )}>
                            {format(new Date(message.time), "HH:mm")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Nhập tin nhắn..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                    />
                    <Button 
                      size="icon" 
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Chọn một cuộc trò chuyện để bắt đầu
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}