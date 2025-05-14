"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import ChatWindow from "@/components/ChatWindow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Messages() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const propertyId = searchParams.get("property");
  const receiverId = searchParams.get("receiver") || ""; // Replace with actual receiver ID

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Vui lòng đăng nhập để nhắn tin.</p>
        <Button asChild>
          <Link href="/dang-nhap">Đăng nhập</Link>
        </Button>
      </div>
    );
  }

  if (!propertyId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Tin nhắn</h1>
        <p>Chọn một bất động sản để bắt đầu nhắn tin.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tin nhắn</h1>
      <ChatWindow propertyId={propertyId} receiverId={receiverId} />
    </div>
  );
}
