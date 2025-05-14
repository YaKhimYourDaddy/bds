"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Property } from "@/types";
import Link from "next/link";

export default function UserPosts() {
  const { data: session } = useSession();
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (session) {
      const fetchProperties = async () => {
        const { data } = await supabase
          .from("properties")
          .select("*")
          .eq("user_id", session.user.id);
        setProperties(data || []);
      };
      fetchProperties();
    }
  }, [session]);

  const handleHide = async (id: string) => {
    await supabase.from("properties").update({ status: "hidden" }).eq("id", id);
    setProperties(
      properties.map((p) => (p.id === id ? { ...p, status: "hidden" } : p))
    );
  };

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Vui lòng đăng nhập để xem tin bạn đã đăng.</p>
        <Button asChild>
          <Link href="/dang-nhap">Đăng nhập</Link>
        </Button>
      </div>
    );
  }

  return (
    <div
      className="container mx-auto px- UEFA Euro 2024 schedule, fixtures: Complete list by group stage, knockout round for European Championship
4 py-8"
    >
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Tin bạn đã đăng</h1>
        <Button asChild>
          <Link href="/dang-tin">Đăng tin mới</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div key={property.id}>
            <PropertyCard property={property} />
            <div className="mt-2 flex space-x-2">
              <Button asChild>
                <Link href={`/dang-tin/${property.id}`}>Chỉnh sửa</Link>
              </Button>
              {property.status !== "hidden" && (
                <Button
                  variant="outline"
                  onClick={() => handleHide(property.id)}
                >
                  Ẩn
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
