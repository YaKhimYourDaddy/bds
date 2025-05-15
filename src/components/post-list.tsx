"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Grid, List, ArrowUpDown, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_PROPERTIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PropertyList() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [sortOrder, setSortOrder] = useState<
    "newest" | "price-asc" | "price-desc"
  >("newest");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const sortedProperties = [...MOCK_PROPERTIES].sort((a, b) => {
    if (sortOrder === "newest") {
      return 0; // In a real app, you'd sort by date
    } else if (sortOrder === "price-asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-muted-foreground">
          Hiển thị {MOCK_PROPERTIES.length} bất động sản
        </div>
        <div className="flex space-x-2">
          <Button
            variant={viewType === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("grid")}
            className="h-9 w-9"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewType === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewType("list")}
            className="h-9 w-9"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setSortOrder(
                sortOrder === "newest"
                  ? "price-asc"
                  : sortOrder === "price-asc"
                  ? "price-desc"
                  : "newest"
              )
            }
            className="h-9"
          >
            <ArrowUpDown className="h-4 w-4 mr-2" />
            {sortOrder === "newest"
              ? "Mới nhất"
              : sortOrder === "price-asc"
              ? "Giá tăng dần"
              : "Giá giảm dần"}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          viewType === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            : "flex flex-col space-y-4"
        )}
      >
        {sortedProperties.map((property) => (
          <Card
            key={property.id}
            className={cn(
              "overflow-hidden group transition-all duration-300 hover:shadow-md",
              viewType === "list" && "flex flex-col md:flex-row"
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden",
                viewType === "grid"
                  ? "aspect-[4/3]"
                  : "md:w-1/3 aspect-[4/3] md:aspect-auto"
              )}
            >
              <Image
                src={property.images[0]}
                alt={property.title}
                width={400}
                height={600}
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
                    favorites.includes(property.id)
                      ? "fill-red-500 text-red-500"
                      : ""
                  )}
                />
              </Button>

              <div className="absolute bottom-2 left-2">
                <Badge className="mr-2">{property.type}</Badge>
                <Badge variant="secondary">{property.transactionType}</Badge>
              </div>
            </div>

            <div
              className={cn(
                viewType === "list" ? "md:w-2/3 flex flex-col" : ""
              )}
            >
              <CardContent className="pt-4">
                <Link href={`/bat-dong-san/${property.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                    {property.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground flex items-center gap-1 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="line-clamp-1">{property.address}</span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-primary">
                    {property.price.toLocaleString("vi-VN")}{" "}
                    {property.transactionType === "Cho thuê" ? "đ/tháng" : "đ"}
                  </span>
                  <div className="text-sm">
                    <span className="text-muted-foreground">
                      {property.area}m² ·{" "}
                    </span>
                    {property.bedrooms > 0 && (
                      <span className="text-muted-foreground">
                        {property.bedrooms} PN ·{" "}
                      </span>
                    )}
                    {property.bathrooms > 0 && (
                      <span className="text-muted-foreground">
                        {property.bathrooms} WC
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="border-t pt-4 flex justify-between mt-auto">
                <div className="text-sm text-muted-foreground">
                  Đăng {property.postedDate}
                </div>
                <Link href={`/bat-dong-san/${property.id}`}>
                  <Button variant="ghost" size="sm">
                    Xem chi tiết
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
