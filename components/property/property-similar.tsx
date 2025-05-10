"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_PROPERTIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PropertySimilarProps {
  currentId: string;
  type: string;
  transactionType: string;
}

export default function PropertySimilar({ 
  currentId,
  type,
  transactionType
}: PropertySimilarProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) 
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const similarProperties = MOCK_PROPERTIES
    .filter((property) => 
      property.id !== currentId && 
      property.type === type && 
      property.transactionType === transactionType
    )
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {similarProperties.map((property) => (
        <Card key={property.id} className="overflow-hidden group transition-all duration-300 hover:shadow-md">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-primary rounded-full"
              onClick={() => toggleFavorite(property.id)}
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition-colors",
                  favorites.includes(property.id) ? "fill-red-500 text-red-500" : ""
                )}
              />
            </Button>
            
            <div className="absolute bottom-2 left-2">
              <Badge className="mr-2">{property.type}</Badge>
              <Badge variant="secondary">{property.transactionType}</Badge>
            </div>
          </div>
          
          <CardContent className="pt-4">
            <Link href={`/bat-dong-san/${property.id}`}>
              <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                {property.title}
              </h3>
            </Link>
            <p className="text-muted-foreground line-clamp-1 mb-2">{property.address}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-primary">
                {property.price.toLocaleString('vi-VN')} {property.transactionType === "Cho thuê" ? "đ/tháng" : "đ"}
              </span>
              <div className="text-sm">
                <span className="text-muted-foreground">{property.area}m² · </span>
                <span className="text-muted-foreground">{property.bedrooms} PN · </span>
                <span className="text-muted-foreground">{property.bathrooms} WC</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="text-sm text-muted-foreground">
              Đăng {property.postedDate}
            </div>
            <Link href={`/bat-dong-san/${property.id}`}>
              <Button variant="ghost" size="sm">
                Xem chi tiết
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}