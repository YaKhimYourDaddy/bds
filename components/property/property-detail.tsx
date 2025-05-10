"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Share2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Eye,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  User,
  Home,
  Bath,
  Bed,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PropertyDetailProps {
  property: any; // In a real app, this would be a proper type
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.address}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
            <Heart className={cn(
              "h-4 w-4 mr-2",
              isFavorite ? "fill-red-500 text-red-500" : ""
            )} />
            Lưu
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Chia sẻ
          </Button>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            156
          </Button>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="relative mb-8">
        <div className="aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
          onClick={prevImage}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
          onClick={nextImage}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="sm"
              className="absolute right-4 bottom-4 opacity-80 hover:opacity-100"
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Xem tất cả ảnh
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="overflow-hidden aspect-video">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto py-2">
              {property.images.map((image: string, index: number) => (
                <div 
                  key={index}
                  onClick={() => goToImage(index)}
                  className={cn(
                    "w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2",
                    currentImageIndex === index ? "border-primary" : "border-transparent"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`Ảnh ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="flex gap-2 overflow-x-auto py-2 mt-2">
          {property.images.map((image: string, index: number) => (
            <div 
              key={index}
              onClick={() => goToImage(index)}
              className={cn(
                "w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2",
                currentImageIndex === index ? "border-primary" : "border-transparent"
              )}
            >
              <img 
                src={image} 
                alt={`Ảnh ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {property.price.toLocaleString('vi-VN')} {property.transactionType === "Cho thuê" ? "đ/tháng" : "đ"}
                </div>
                <div className="space-x-2">
                  <Badge>{property.type}</Badge>
                  <Badge variant="secondary">{property.transactionType}</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Home className="h-5 w-5 mb-2 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">Diện tích</div>
                  <div className="font-medium">{property.area} m²</div>
                </div>
                {property.bedrooms > 0 && (
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Bed className="h-5 w-5 mb-2 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Phòng ngủ</div>
                    <div className="font-medium">{property.bedrooms}</div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Bath className="h-5 w-5 mb-2 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Phòng tắm</div>
                    <div className="font-medium">{property.bathrooms}</div>
                  </div>
                )}
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Calendar className="h-5 w-5 mb-2 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">Ngày đăng</div>
                  <div className="font-medium">{property.postedDate}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="description">
            <TabsList className="mb-6">
              <TabsTrigger value="description">Mô tả</TabsTrigger>
              <TabsTrigger value="features">Đặc điểm</TabsTrigger>
              <TabsTrigger value="location">Vị trí</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Thông tin mô tả</h3>
                  <p className="whitespace-pre-line">{property.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="features" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Đặc điểm bất động sản</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                    {property.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="location" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Vị trí bất động sản</h3>
                  <div className="aspect-[16/9] bg-muted rounded-md flex items-center justify-center mb-4">
                    <p className="text-muted-foreground">Bản đồ sẽ được hiển thị ở đây</p>
                  </div>
                  <p className="font-medium">{property.address}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{property.owner.name}</h3>
                  <p className="text-sm text-muted-foreground">Chủ sở hữu</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <Button className="w-full flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {property.owner.phone}
                </Button>
                <Button variant="outline" className="w-full flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {property.owner.email}
                </Button>
                <Button variant="secondary" className="w-full flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Nhắn tin
                </Button>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Gửi yêu cầu xem nhà</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Liên hệ ngay để đặt lịch xem bất động sản
                </p>
                <Button className="w-full">Đặt lịch xem nhà</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}