"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import PropertyForm from "@/components/PropertyForm";
import { Property } from "@/types";
import { useRouter } from "next/navigation";

export default function PostProperty({ params }: { params: { id?: string } }) {
  const { data: session } = useSession();
  const [property, setProperty] = useState<Property | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      const fetchProperty = async () => {
        const { data } = await supabase
          .from("properties")
          .select("*")
          .eq("id", params.id)
          .eq("user_id", session?.user.id)
          .single();
        setProperty(data);
      };
      fetchProperty();
    }
  }, [params.id, session]);

  if (!session) {
    router.push("/dang-nhap");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {params.id ? "Chỉnh sửa tin" : "Đăng tin mới"}
      </h1>
      <PropertyForm property={property} />
    </div>
  );
}
