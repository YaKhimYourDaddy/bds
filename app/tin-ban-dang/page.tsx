"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Edit,
  Eye,
  EyeOff,
  Plus,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

// Sample listing data - would come from an API in a real app
const sampleListings = [
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
    status: "approved",
    createdAt: "12/05/2025",
    views: 256,
    isHidden: false,
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
    status: "pending",
    createdAt: "10/05/2025",
    views: 32,
    isHidden: false,
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
    status: "rejected",
    createdAt: "05/05/2025",
    views: 128,
    isHidden: false,
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
    status: "approved",
    createdAt: "01/05/2025",
    views: 345,
    isHidden: true,
  },
];

export default function UserListings() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sorting, setSorting] = useState("newest");
  const [listings, setListings] = useState(sampleListings);
  
  // Filter and sort listings
  const filteredListings = listings
    .filter(listing => {
      if (filter === "all") return true;
      if (filter === "approved") return listing.status === "approved";
      if (filter === "pending") return listing.status === "pending";
      if (filter === "rejected") return listing.status === "rejected";
      if (filter === "hidden") return listing.isHidden;
      return true;
    })
    .sort((a, b) => {
      if (sorting === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sorting === "oldest") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sorting === "price-asc") return parseFloat(a.price) - parseFloat(b.price);
      if (sorting === "price-desc") return parseFloat(b.price) - parseFloat(a.price);
      if (sorting === "views-desc") return b.views - a.views;
      return 0;
    });
  
  // Toggle listing visibility
  const toggleVisibility = (id: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setListings(prev => 
        prev.map(listing => 
          listing.id === id 
            ? { ...listing, isHidden: !listing.isHidden } 
            : listing
        )
      );
      
      setIsLoading(false);
      
      toast({
        title: "Cập nhật thành công",
        description: "Trạng thái hiển thị của tin đăng đã được cập nhật",
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Tin bạn đăng</h1>
        <Button asChild>
          <Link href="/dang-tin">
            <Plus className="mr-2 h-4 w-4" />
            Đăng tin mới
          </Link>
        </Button>
      </div>
      
      <div className="mb-8">
        <Tabs defaultValue="all" onValueChange={setFilter}>
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="all">
              Tất cả ({listings.length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Đã duyệt ({listings.filter(l => l.status === "approved").length})
            </TabsTrigger>
            <TabsTrigger value="pending">
              Chờ duyệt ({listings.filter(l => l.status === "pending").length})
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Từ chối ({listings.filter(l => l.status === "rejected").length})
            </TabsTrigger>
            <TabsTrigger value="hidden">
              Đã ẩn ({listings.filter(l => l.isHidden).length})
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-muted-foreground">
            Hiển thị {filteredListings.length} tin đăng
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm mr-2 hidden sm:inline-block">Sắp xếp:</span>
          <Select value={sorting} onValueChange={setSorting}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mới nhất</SelectItem>
              <SelectItem value="oldest">Cũ nhất</SelectItem>
              <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
              <SelectItem value="price-desc">Giá cao đến thấp</SelectItem>
              <SelectItem value="views-desc">Lượt xem nhiều nhất</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredListings.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent>
            <div className="mx-auto my-6 text-muted-foreground">
              <p className="mb-4">Không có tin đăng nào</p>
              <Button asChild>
                <Link href="/dang-tin">
                  <Plus className="mr-2 h-4 w-4" />
                  Đăng tin mới
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className={listing.isHidden ? "opacity-70" : ""}>
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-48 sm:h-auto sm:w-48 md:w-64">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Badge
                    className="absolute top-2 left-2"
                    variant={listing.status === "approved" ? "default" : listing.status === "pending" ? "secondary" : "destructive"}
                  >
                    {listing.status === "approved" ? "Đã duyệt" : listing.status === "pending" ? "Chờ duyệt" : "Từ chối"}
                  </Badge>
                  {listing.isHidden && (
                    <Badge
                      className="absolute top-2 right-2"
                      variant="outline"
                    >
                      Đã ẩn
                    </Badge>
                  )}
                </div>
                
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge variant="outline" className="font-normal mb-2">
                        {listing.type}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-1">
                        {listing.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                        <span className="text-sm">{listing.location}</span>
                      </div>
                    </div>
                    <div className="font-semibold text-primary text-lg">{listing.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">{listing.bedrooms} Phòng ngủ</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">{listing.bathrooms} Phòng tắm</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1.5" />
                      <span className="text-sm">{listing.area} m²</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="text-sm text-muted-foreground mb-2 sm:mb-0">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Đăng ngày: {listing.createdAt}
                      </span>
                      <span className="flex items-center mt-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Lượt xem: {listing.views}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={listing.status === "pending"}
                        asChild={listing.status === "approved"}
                      >
                        {listing.status === "approved" ? (
                          <Link href={`/bat-dong-san/${listing.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </Link>
                        ) : (
                          <>
                            <Eye className="mr-2 h-4 w-4" />
                            Xem
                          </>
                        )}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <Link href={`/chinh-sua/${listing.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Sửa
                        </Link>
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button 
                            variant={listing.isHidden ? "default" : "outline"} 
                            size="sm"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : listing.isHidden ? (
                              <Eye className="mr-2 h-4 w-4" />
                            ) : (
                              <EyeOff className="mr-2 h-4 w-4" />
                            )}
                            {listing.isHidden ? "Hiện tin" : "Ẩn tin"}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              {listing.isHidden ? "Hiện tin đăng này?" : "Ẩn tin đăng này?"}
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              {listing.isHidden 
                                ? "Tin đăng sẽ được hiển thị lại trên trang tìm kiếm và các người dùng khác có thể xem tin của bạn." 
                                : "Tin đăng sẽ tạm thời bị ẩn khỏi trang tìm kiếm và không ai có thể xem tin của bạn. Bạn có thể hiện lại tin bất cứ lúc nào."}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Hủy</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => toggleVisibility(listing.id)}
                            >
                              {listing.isHidden ? "Hiện tin" : "Ẩn tin"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
              </div>
              
              {listing.status === "rejected" && (
                <CardFooter className="bg-muted/50 p-4 border-t flex">
                  <XCircle className="h-5 w-5 text-destructive mr-2 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Lý do từ chối:</p>
                    <p className="text-muted-foreground">Thông tin cung cấp chưa đầy đủ hoặc không chính xác. Vui lòng kiểm tra lại thông tin về vị trí, giá cả và diện tích.</p>
                  </div>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}