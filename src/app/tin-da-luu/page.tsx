"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Property } from "@/types";
import Link from "next/link";

export default function SavedProperties() {
  const { data: session } = useSession();
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (session) {
      const fetchSaved = async () => {
        const { data } = await supabase
          .from("saved_properties")
          .select("properties!inner(*)")
          .eq("user_id", session.user.id);
        setProperties(data?.map((sp) => sp.properties[0]) || []);
      };
      fetchSaved();
    }
  }, [session]);

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Vui lòng đăng nhập để xem tin đã lưu.</p>
        <Button asChild>
          <Link href="/dang-nhap">Đăng nhập</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tin đã lưu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
