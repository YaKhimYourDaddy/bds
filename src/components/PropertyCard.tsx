"use client";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Property } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSave = async () => {
    if (!session) {
      router.push("/dang-nhap");
      return;
    }
    await supabase.from("saved_properties").insert({
      id: crypto.randomUUID(),
      user_id: session.user.id,
      property_id: property.id,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="mt-2">{property.description}</p>
        <p className="mt-1">Giá: {property.price.toLocaleString()} VND</p>
        <p>Diện tích: {property.area} m²</p>
        <p>
          Địa chỉ: {property.address}, {property.city}
        </p>
        {session && (
          <>
            <p>SĐT: {property.user_id}</p>
            <p>Email: {property.user_id}</p>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={handleSave}>
          <Heart className="mr-2 h-4 w-4" />
          Lưu
        </Button>
        {session ? (
          <Button asChild>
            <Link href={`/tin-nhan?property=${property.id}`}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Nhắn tin
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link href="/dang-nhap">
              <MessageCircle className="mr-2 h-4 w-4" />
              Nhắn tin
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
