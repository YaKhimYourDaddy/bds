"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import {
  Search,
  ChevronDown,
  MapPin,
  Bed,
  Bath,
  Square,
  CheckCircle2,
  XCircle,
  Eye,
  ArrowUpRight,
  BarChart2,
  Users,
  FileText,
  Calendar,
  Loader2,
} from "lucide-react";

// Sample data for the admin dashboard
const sampleStats = [
  {
    title: "Tổng tin đăng",
    value: "1,234",
    change: "+12%",
    icon: FileText,
  },
  {
    title: "Tin đang chờ duyệt",
    value: "42",
    change: "-5%",
    icon: Calendar,
  },
  {
    title: "Người dùng",
    value: "856",
    change: "+8%",
    icon: Users,
  },
  {
    title: "Lượt xem",
    value: "45.2K",
    change: "+24%",
    icon: Eye,
  },
];

const sampleChartData = [
  { name: "T1", tinDang: 65, nguoiDung: 40 },
  { name: "T2", tinDang: 78, nguoiDung: 52 },
  { name: "T3", tinDang: 90, nguoiDung: 63 },
  { name: "T4", tinDang: 81, nguoiDung: 58 },
  { name: "T5", tinDang: 95, nguoiDung: 71 },
  { name: "T6", tinDang: 110, nguoiDung: 79 },
  { name: "T7", tinDang: 102, nguoiDung: 83 },
];

// Sample pending listings
const samplePendingListings = [
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
    user: {
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
    },
    createdAt: "12/05/2025",
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
    user: {
      name: "Trần Thị B",
      email: "tranthib@example.com",
    },
    createdAt: "10/05/2025",
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
    user: {
      name: "Lê Văn C",
      email: "levanc@example.com",
    },
    createdAt: "05/05/2025",
  },
];

export default function AdminDashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingListings, setPendingListings] = useState(samplePendingListings);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter pending listings based on search query
  const filteredListings = pendingListings.filter(listing =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Approve or reject listing
  const handleListingAction = (id: string, action: 'approve' | 'reject') => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Remove the listing from pending list
      setPendingListings(prev => prev.filter(listing => listing.id !== id));
      setIsLoading(false);
      
      toast({
        title: action === 'approve' ? "Tin đã được duyệt" : "Tin đã bị từ chối",
        description: action === 'approve' 
          ? "Tin này sẽ được hiển thị công khai trên trang tìm kiếm" 
          : "Tin này sẽ không được hiển thị công khai và người đăng sẽ nhận được thông báo",
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">Admin Dashboard</h1>
        <div className="flex space-x-2">
          <Button>
            Xuất báo cáo
          </Button>
          <Button variant="outline">
            Cài đặt
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="pending">Chờ duyệt ({pendingListings.length})</TabsTrigger>
          <TabsTrigger value="users">Người dùng</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className={`text-xs mt-2 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} so với tháng trước
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Thống kê hoạt động</CardTitle>
              <CardDescription>
                Biểu đồ thống kê số lượng tin đăng và người dùng mới theo tháng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sampleChartData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="tinDang" 
                      name="Tin đăng" 
                      fill="hsl(var(--chart-1))" 
                      radius={[4, 4, 0, 0]} 
                    />
                    <Bar 
                      dataKey="nguoiDung" 
                      name="Người dùng mới" 
                      fill="hsl(var(--chart-2))" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Hoạt động gần đây</CardTitle>
              <CardDescription>
                Những hoạt động mới nhất trên hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Tin đăng đã được duyệt</p>
                    <p className="text-sm text-muted-foreground">Căn hộ 3 phòng ngủ tại Quận 2</p>
                    <p className="text-xs text-muted-foreground">2 giờ trước</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Người dùng mới đăng ký</p>
                    <p className="text-sm text-muted-foreground">5 người dùng mới đã đăng ký</p>
                    <p className="text-xs text-muted-foreground">5 giờ trước</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-3">
                    <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium">Tin đăng đã bị từ chối</p>
                    <p className="text-sm text-muted-foreground">Nhà đất quận 9 - Thông tin không chính xác</p>
                    <p className="text-xs text-muted-foreground">6 giờ trước</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Tin đăng mới</p>
                    <p className="text-sm text-muted-foreground">10 tin đăng mới đã được tạo</p>
                    <p className="text-xs text-muted-foreground">12 giờ trước</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-right">
                <Button variant="ghost" size="sm" className="gap-1">
                  Xem tất cả <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tin đăng chờ duyệt</CardTitle>
              <CardDescription>
                Danh sách các tin đăng cần được kiểm duyệt trước khi hiển thị công khai
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Tìm kiếm tin đăng..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {filteredListings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Không có tin đăng nào đang chờ duyệt</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredListings.map((listing) => (
                    <div key={listing.id} className="flex flex-col sm:flex-row border rounded-lg overflow-hidden">
                      <div className="relative h-48 sm:h-auto sm:w-48 md:w-64">
                        <Image
                          src={listing.image}
                          alt={listing.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
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
                        
                        <div className="flex flex-wrap justify-between items-center">
                          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
                            <p>Người đăng: {listing.user.name}</p>
                            <p>Email: {listing.user.email}</p>
                            <p>Ngày đăng: {listing.createdAt}</p>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                            >
                              <Link href={`/admin/preview/${listing.id}`}>
                                <Eye className="mr-2 h-4 w-4" />
                                Xem chi tiết
                              </Link>
                            </Button>
                            
                            <Button
                              variant="destructive"
                              size="sm"
                              disabled={isLoading}
                              onClick={() => handleListingAction(listing.id, 'reject')}
                            >
                              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              <XCircle className="mr-2 h-4 w-4" />
                              Từ chối
                            </Button>
                            
                            <Button
                              size="sm"
                              disabled={isLoading}
                              onClick={() => handleListingAction(listing.id, 'approve')}
                            >
                              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              <CheckCircle2 className="mr-2 h-4 w-4" />
                              Duyệt
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quản lý người dùng</CardTitle>
              <CardDescription>
                Danh sách người dùng đã đăng ký trên hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Chức năng quản lý người dùng sẽ được cập nhật sau
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}