"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
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
  Search,
  Bookmark,
  MessageCircle,
  Phone,
  Trash2,
  Loader2,
} from "lucide-react";

// Sample saved listings data - would come from an API in a real app
const sampleSavedListings = [
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
    savedAt: "12/05/2025",
    owner: {
      name: "Nguyễn Văn A",
      phone: "0912345678",
    },
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
    savedAt: "10/05/2025",
    owner: {
      name: "Trần Thị B",
      phone: "0923456789",
    },
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
    savedAt: "05/05/2025",
    owner: {
      name: "Lê Văn C",
      phone: "0934567890",
    },
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
    savedAt: "01/05/2025",
    owner: {
      name: "Phạm Thị D",
      phone: "0945678901",
    },
  },
];

export default function SavedListings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [savedListings, setSavedListings] = useState(sampleSavedListings);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("all");
  
  // Filter listings based on search query and property type
  const filteredListings = savedListings
    .filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = propertyTypeFilter === "all" || listing.type === propertyTypeFilter;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
      if (sortBy === "oldest") return new Date(a.savedAt).getTime() - new Date(b.savedAt).getTime();
      if (sortBy === "price-asc") return parseFloat(a.price) - parseFloat(b.price);
      if (sortBy === "price-desc") return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });
  
  // Remove from saved listings
  const removeSavedListing = (id: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSavedListings(prev => prev.filter(listing => listing.id !== id));
      setIsLoading(false);
      
      toast({
        title: "Đã xóa khỏi danh sách đã lưu",
        description: "Bất động sản đã được xóa khỏi danh sách đã lưu của bạn",
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tin đã lưu</h1>
      
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm theo tên hoặc địa điểm..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={propertyTypeFilter} onValueChange={setPropertyTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Loại BĐS" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="Căn hộ chung cư">Căn hộ chung cư</SelectItem>
                <SelectItem value="Nhà phố">Nhà phố</SelectItem>
                <SelectItem value="Biệt thự">Biệt thự</SelectItem>
                <SelectItem value="Đất nền">Đất nền</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="oldest">Cũ nhất</SelectItem>
                <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
                <SelectItem value="price-desc">Giá cao đến thấp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <p className="text-muted-foreground">
          Hiển thị {filteredListings.length} tin đã lưu
        </p>
      </div>
      
      {filteredListings.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent>
            <div className="mx-auto my-6 text-muted-foreground">
              <Bookmark className="mx-auto h-12 w-12 mb-4 text-muted-foreground/50" />
              <p className="mb-4">Bạn chưa lưu tin đăng nào</p>
              <Button asChild>
                <Link href="/tim-kiem">Tìm kiếm bất động sản</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge
                  className="absolute top-2 left-2"
                  variant={listing.isForSale ? "default" : "secondary"}
                >
                  {listing.isForSale ? "Bán" : "Cho thuê"}
                </Badge>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-90 hover:opacity-100"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Xóa khỏi danh sách đã lưu</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Xóa khỏi danh sách đã lưu?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Bạn có chắc chắn muốn xóa bất động sản này khỏi danh sách đã lưu không?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Hủy</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => removeSavedListing(listing.id)}
                        disabled={isLoading}
                      >
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Xóa
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <CardContent className="p-4 flex-1">
                <div className="mb-2">
                  <Badge variant="outline" className="font-normal mb-2">
                    {listing.type}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-1">
                    <Link 
                      href={`/bat-dong-san/${listing.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {listing.title}
                    </Link>
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1.5" />
                    <span className="text-sm">{listing.bedrooms} PN</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1.5" />
                    <span className="text-sm">{listing.bathrooms} VS</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1.5" />
                    <span className="text-sm">{listing.area} m²</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="font-semibold text-primary">{listing.price}</div>
                  <div className="text-xs text-muted-foreground">
                    Lưu ngày: {listing.savedAt}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <div className="w-full grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <Link href={`/tin-nhan?property=${listing.id}`}>
                      <MessageCircle className="mr-1 h-4 w-4" />
                      Nhắn tin
                    </Link>
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      toast({
                        title: "Gọi người bán",
                        description: `Số điện thoại: ${listing.owner.phone}`,
                      });
                    }}
                  >
                    <Phone className="mr-1 h-4 w-4" />
                    Gọi điện
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}