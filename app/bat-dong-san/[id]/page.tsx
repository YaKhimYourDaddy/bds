"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import {
  Bookmark,
  Share2,
  MapPin,
  ChevronRight,
  User,
  Phone,
  Mail,
  Calendar,
  Home,
  Bath,
  Bed,
  Square,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

// Sample property data - would come from an API in a real app
const propertyData = {
  id: "1",
  title: "Căn hộ 2 phòng ngủ tại Vinhomes Central Park",
  price: "3.5 tỷ",
  type: "Căn hộ chung cư",
  location: "Quận Bình Thạnh, TP.HCM",
  address: "159 Nguyễn Đức Cảnh, Phường 22, Quận Bình Thạnh, TP.HCM",
  area: 75,
  bedrooms: 2,
  bathrooms: 2,
  publishedAt: "12/05/2025",
  views: 256,
  saves: 42,
  description:
    "Căn hộ nằm trong khu đô thị cao cấp Vinhomes Central Park, view sông tuyệt đẹp, nội thất cao cấp, đầy đủ tiện nghi, sẵn sàng chuyển vào ở ngay. Căn hộ gồm 2 phòng ngủ, 2 phòng tắm, phòng khách rộng rãi, ban công thoáng mát.\n\nTòa nhà có đầy đủ tiện ích như hồ bơi, gym, spa, khu vui chơi trẻ em, siêu thị, nhà hàng... Khu vực an ninh 24/7, môi trường sống trong lành.\n\nĐặc biệt, căn hộ nằm gần trung tâm thành phố, thuận tiện di chuyển đến các quận trung tâm, gần trường học quốc tế, bệnh viện, trung tâm thương mại.",
  features: [
    "Nội thất cao cấp",
    "View sông",
    "Ban công rộng",
    "Cửa hướng Đông Nam",
    "Sàn gỗ cao cấp",
    "Bếp đầy đủ thiết bị",
    "Máy lạnh âm trần",
    "Tủ âm tường",
    "Hồ bơi",
    "Gym",
    "Sân chơi trẻ em",
    "An ninh 24/7",
  ],
  images: [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
    "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
  ],
  owner: {
    name: "Nguyễn Văn A",
    phone: "0912345678",
    email: "nguyenvana@example.com",
    avatar: "https://i.pravatar.cc/300",
  },
  isForSale: true,
};

export default function PropertyDetail({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  
  const toggleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Đã xóa khỏi danh sách đã lưu" : "Đã lưu tin",
      description: isSaved 
        ? "Bạn có thể không tìm thấy tin này trong mục Tin đã lưu" 
        : "Bạn có thể xem lại tin này trong mục Tin đã lưu",
    });
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog or copy link to clipboard
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Đã sao chép liên kết",
      description: "Liên kết đã được sao chép vào clipboard",
    });
  };
  
  const handleContact = () => {
    // In a real app, this would show contact form or initiate a call
    toast({
      title: "Đang liên hệ",
      description: "Kết nối với chủ sở hữu...",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-6 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="text-muted-foreground hover:text-primary">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
        <Link href="/tim-kiem" className="text-muted-foreground hover:text-primary">
          Tìm kiếm
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
        <Link 
          href={`/tim-kiem?loai=${encodeURIComponent(propertyData.type)}`}
          className="text-muted-foreground hover:text-primary"
        >
          {propertyData.type}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
        <span className="text-foreground font-medium truncate">
          {propertyData.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="relative rounded-xl overflow-hidden mb-6">
            <div className="relative aspect-video">
              <Image
                src={propertyData.images[selectedImage]}
                alt={propertyData.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                    variant="outline"
                  >
                    Xem tất cả ảnh
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <Carousel>
                    <CarouselContent>
                      {propertyData.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video">
                            <Image 
                              src={image} 
                              alt={`${propertyData.title} - ảnh ${index + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {propertyData.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2",
                  selectedImage === index 
                    ? "border-primary" 
                    : "border-transparent hover:border-muted"
                )}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                />
              </div>
            ))}
          </div>

          {/* Property Title & Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div>
              <Badge variant="outline" className="mb-2">
                {propertyData.type}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                {propertyData.title}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{propertyData.location}</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                {propertyData.price}
              </div>
              <div className="text-sm text-muted-foreground">
                {(propertyData.area && propertyData.price) 
                  ? `${Math.round(parseInt(propertyData.price) * 1000000000 / propertyData.area).toLocaleString()} VNĐ/m²` 
                  : ""}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button 
              onClick={toggleSave}
              variant={isSaved ? "default" : "outline"} 
              size="sm"
            >
              <Bookmark className={cn("h-4 w-4 mr-2", isSaved ? "fill-current" : "")} />
              {isSaved ? "Đã lưu" : "Lưu tin"}
            </Button>
            <Button 
              onClick={handleShare}
              variant="outline" 
              size="sm"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Chia sẻ
            </Button>
          </div>

          <Tabs defaultValue="thong-tin" className="mb-8">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="thong-tin">
                Thông tin bất động sản
              </TabsTrigger>
              <TabsTrigger value="vi-tri">
                Vị trí
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="thong-tin" className="space-y-6">
              {/* Property Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Thông tin chi tiết</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                      <Bed className="h-6 w-6 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Phòng ngủ</span>
                      <span className="font-medium">{propertyData.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                      <Bath className="h-6 w-6 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Phòng tắm</span>
                      <span className="font-medium">{propertyData.bathrooms}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                      <Square className="h-6 w-6 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Diện tích</span>
                      <span className="font-medium">{propertyData.area} m²</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
                      <Home className="h-6 w-6 mb-2 text-primary" />
                      <span className="text-sm text-muted-foreground">Loại</span>
                      <span className="font-medium">{propertyData.isForSale ? "Bán" : "Cho thuê"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Mô tả</h3>
                  <div className="space-y-4 text-muted-foreground whitespace-pre-line">
                    {propertyData.description}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Tiện nghi & đặc điểm</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                    {propertyData.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="vi-tri">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Địa chỉ</h3>
                  <p className="text-muted-foreground mb-4">{propertyData.address}</p>
                  
                  {/* Placeholder for an actual map */}
                  <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Bản đồ sẽ được hiển thị ở đây
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          {/* Owner Information */}
          <Card className="mb-6 sticky top-20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={propertyData.owner.avatar}
                    alt={propertyData.owner.name}
                    fill
                    className="object-cover"
                    sizes="50px"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{propertyData.owner.name}</h3>
                  <p className="text-sm text-muted-foreground">Chủ sở hữu</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <Button className="w-full" onClick={handleContact}>
                  <Phone className="mr-2 h-4 w-4" />
                  {propertyData.owner.phone}
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                
                <Button variant="secondary" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Nhắn tin
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <div className="flex justify-between mb-2">
                  <span>Mã tin:</span>
                  <span>#{params.id}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Ngày đăng:</span>
                  <span>{propertyData.publishedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lượt xem:</span>
                  <span>{propertyData.views}</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                * Vui lòng tham khảo kỹ thông tin trước khi liên hệ với người bán.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Similar Properties */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Bất động sản tương tự</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/tim-kiem">
              Xem thêm <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48 w-full">
                <Image
                  src={propertyData.images[index % propertyData.images.length]}
                  alt="Similar property"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                  variant={index % 2 === 0 ? "default" : "secondary"}
                >
                  {index % 2 === 0 ? "Bán" : "Cho thuê"}
                </Badge>
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="font-normal mb-2">
                  Căn hộ chung cư
                </Badge>
                <h3 className="font-semibold line-clamp-2 mb-1">
                  Căn hộ {index + 2} phòng ngủ tại Quận {(index + 1) * 2}
                </h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                  <span className="text-xs line-clamp-1">
                    Quận {(index + 1) * 2}, TP.HCM
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="font-semibold text-primary">
                    {(index + 2).toFixed(1)} tỷ
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/bat-dong-san/${index + 2}`}>
                      Chi tiết
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}