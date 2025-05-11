"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, User, LogOut, Bell, Lock, Edit, UserCircle } from "lucide-react";

export default function AccountPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  // Simulated user data - would come from an API in a real app
  const [userData, setUserData] = useState({
    id: "1",
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0912345678",
    address: "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
    bio: "Chuyên môi giới bất động sản khu vực TP.HCM với hơn 5 năm kinh nghiệm. Tư vấn tận tâm, trung thực và chuyên nghiệp.",
    avatar: "https://i.pravatar.cc/300",
  });
  
  // Form state for profile editing
  const [formData, setFormData] = useState({
    fullName: userData.fullName,
    phone: userData.phone,
    address: userData.address,
    bio: userData.bio,
  });
  
  // Form state for password change
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setUserData((prev) => ({ ...prev, ...formData }));
      
      toast({
        title: "Cập nhật thành công",
        description: "Thông tin cá nhân của bạn đã được cập nhật",
      });
    }, 1500);
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Lỗi",
        description: "Mật khẩu mới không khớp",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      
      toast({
        title: "Cập nhật thành công",
        description: "Mật khẩu của bạn đã được thay đổi",
      });
    }, 1500);
  };
  
  const handleLogout = () => {
    setIsLoading(true);
    
    // Simulate logout
    setTimeout(() => {
      setIsLoading(false);
      
      // In a real app, this would clear the auth token
      localStorage.removeItem("token");
      
      toast({
        title: "Đăng xuất thành công",
        description: "Hẹn gặp lại bạn sau!",
      });
      
      // Redirect to home page
      router.push("/");
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tài khoản của tôi</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={userData.avatar} alt={userData.fullName} />
                  <AvatarFallback>
                    <UserCircle className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{userData.fullName}</h2>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>
              
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/tin-ban-dang">
                    <User className="mr-2 h-4 w-4" />
                    Tin bạn đăng
                  </Link>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/tin-da-luu">
                    <Bell className="mr-2 h-4 w-4" />
                    Tin đã lưu
                  </Link>
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/tin-nhan">
                    <Bell className="mr-2 h-4 w-4" />
                    Tin nhắn
                  </Link>
                </Button>
                
                <Button
                  variant="destructive"
                  className="w-full mt-4"
                  onClick={handleLogout}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <LogOut className="mr-2 h-4 w-4" />
                  )}
                  Đăng xuất
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="thong-tin">
            <TabsList className="w-full grid grid-cols-2 mb-8">
              <TabsTrigger value="thong-tin">
                <User className="mr-2 h-4 w-4" />
                Thông tin cá nhân
              </TabsTrigger>
              <TabsTrigger value="mat-khau">
                <Lock className="mr-2 h-4 w-4" />
                Đổi mật khẩu
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="thong-tin">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="relative">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={userData.avatar} alt={userData.fullName} />
                          <AvatarFallback>
                            <UserCircle className="h-12 w-12" />
                          </AvatarFallback>
                        </Avatar>
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Thay đổi ảnh đại diện</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <p className="text-lg font-medium">{userData.fullName}</p>
                        <p className="text-sm text-muted-foreground">
                          Email: {userData.email}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-3 w-3" />
                            Cập nhật email
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Họ tên</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleProfileChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleProfileChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Giới thiệu</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleProfileChange}
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Lưu thay đổi
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mat-khau">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Mật khẩu mới</Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Cập nhật mật khẩu
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}