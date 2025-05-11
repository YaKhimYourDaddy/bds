"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark, MapPin, Bed, Bath, Square } from "lucide-react";

// Sample property data - would come from API in the real app
const featuredProperties = [
  {
    id: "1",
    title: "Căn hộ 2 phòng ngủ tại Vinhomes Central Park",
    price: "3.5 tỷ",
    type: "Căn hộ chung cư",
    location: "Quận Bình Thạnh, TP.HCM",
    area: 75,
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    isForSale: true,
  },
  {
    id: "2",
    title: "Nhà phố liền kề tại Quận 7",
    price: "12 tỷ",
    type: "Nhà phố",
    location: "Quận 7, TP.HCM",
    area: 120,
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    isForSale: true,
  },
  {
    id: "3",
    title: "Biệt thự sang trọng view sông",
    price: "25 tỷ",
    type: "Biệt thự",
    location: "Thảo Điền, Quận 2, TP.HCM",
    area: 350,
    bedrooms: 5,
    bathrooms: 5,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    isForSale: true,
  },
  {
    id: "4",
    title: "Căn hộ cao cấp cho thuê Landmark 81",
    price: "30 triệu/tháng",
    type: "Căn hộ chung cư",
    location: "Quận Bình Thạnh, TP.HCM",
    area: 90,
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    isForSale: false,
  },
];

export default function FeaturedProperties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProperties.map((property) => (
        <Card key={property.id} className="overflow-hidden group">
          <div className="relative h-48 w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
            >
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Lưu tin</span>
            </Button>
            <Badge
              className="absolute top-2 left-2"
              variant={property.isForSale ? "default" : "secondary"}
            >
              {property.isForSale ? "Bán" : "Cho thuê"}
            </Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <Badge variant="outline" className="font-normal mb-2">
                  {property.type}
                </Badge>
                <h3 className="font-semibold line-clamp-2 mb-1">
                  {property.title}
                </h3>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
              <span className="text-xs line-clamp-1">{property.location}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{property.bedrooms} PN</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{property.bathrooms} VS</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1.5" />
                <span className="text-sm">{property.area} m²</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between p-4 pt-0">
            <div className="font-semibold text-primary">{property.price}</div>
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/bat-dong-san/${property.id}`}>Xem chi tiết</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}