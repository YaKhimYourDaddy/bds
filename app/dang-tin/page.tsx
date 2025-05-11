"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Upload, Trash2, MapPin, ChevronLeft } from "lucide-react";
import { propertyTypes, projectTypes } from "@/lib/constants";

export default function CreateListing() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [listingType, setListingType] = useState("ban");
  
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    address: "",
    location: {
      city: "",
      district: "",
      ward: "",
    },
    description: "",
  });
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLocationChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      location: {
        ...prev.location,
        [field]: value,
      },
    }));
  };
  
  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    
    if (files && files.length > 0) {
      // In a real app, you would upload these to a server
      // Here we're just creating temporary URLs for demo purposes
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      
      setUploadedImages(prev => [...prev, ...newImages]);
      
      toast({
        title: "Tải lên thành công",
        description: `Đã tải lên ${files.length} hình ảnh`,
      });
    }
  };
  
  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (uploadedImages.length === 0) {
      toast({
        title: "Lỗi",
        description: "Vui lòng tải lên ít nhất một hình ảnh",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Đăng tin thành công",
        description: "Tin đăng của bạn đang chờ được phê duyệt",
      });
      
      // Redirect to listings page
      router.push("/tin-ban-dang");
    }, 1500);
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6"
        asChild
      >
        <Link href="/tin-ban-dang">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Link>
      </Button>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Đăng tin bất động sản</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Listing Type */}
            <div className="space-y-3">
              <Label>Loại tin đăng</Label>
              <RadioGroup 
                defaultValue="ban" 
                className="flex flex-wrap gap-4"
                onValueChange={setListingType}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ban" id="ban" />
                  <Label htmlFor="ban" className="cursor-pointer">Nhà đất bán</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="thue" id="thue" />
                  <Label htmlFor="thue" className="cursor-pointer">Nhà đất cho thuê</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="du-an" id="du-an" />
                  <Label htmlFor="du-an" className="cursor-pointer">Dự án</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Tiêu đề <span className="text-destructive">*</span></Label>
              <Input
                id="title"
                name="title"
                placeholder="VD: Căn hộ 2 phòng ngủ tại Vinhomes Central Park"
                value={formData.title}
                onChange={handleTextChange}
                required
              />
            </div>
            
            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="type">
                {listingType === "du-an" ? "Loại dự án" : "Loại bất động sản"} <span className="text-destructive">*</span>
              </Label>
              <Select 
                value={formData.type} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn loại" />
                </SelectTrigger>
                <SelectContent>
                  {(listingType === "du-an" ? projectTypes : propertyTypes).map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Price */}
            <div className="space-y-2">
              <Label htmlFor="price">
                Giá {listingType === "thue" ? "thuê" : "bán"} <span className="text-destructive">*</span>
              </Label>
              <div className="flex">
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  placeholder={listingType === "thue" ? "VD: 15000000" : "VD: 2000000000"}
                  value={formData.price}
                  onChange={handleTextChange}
                  required
                />
                <div className="bg-muted flex items-center px-3 rounded-r-md border border-l-0 border-input">
                  <span className="text-sm text-muted-foreground">
                    VND {listingType === "thue" ? "/ tháng" : ""}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Nhập số tiền, không cần nhập dấu phân cách.
              </p>
            </div>
            
            {/* Area */}
            <div className="space-y-2">
              <Label htmlFor="area">Diện tích <span className="text-destructive">*</span></Label>
              <div className="flex">
                <Input
                  id="area"
                  name="area"
                  type="number"
                  min="0"
                  placeholder="VD: 75"
                  value={formData.area}
                  onChange={handleTextChange}
                  required
                />
                <div className="bg-muted flex items-center px-3 rounded-r-md border border-l-0 border-input">
                  <span className="text-sm text-muted-foreground">
                    m²
                  </span>
                </div>
              </div>
            </div>
            
            {/* Bedrooms & Bathrooms */}
            {listingType !== "du-an" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Số phòng ngủ</Label>
                  <Input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    min="0"
                    placeholder="VD: 2"
                    value={formData.bedrooms}
                    onChange={handleTextChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Số phòng tắm</Label>
                  <Input
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    min="0"
                    placeholder="VD: 2"
                    value={formData.bathrooms}
                    onChange={handleTextChange}
                  />
                </div>
              </div>
            )}
            
            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Địa chỉ chi tiết</Label>
              <Input
                id="address"
                name="address"
                placeholder="VD: 123 Nguyễn Văn Linh"
                value={formData.address}
                onChange={handleTextChange}
              />
            </div>
            
            {/* Location */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Khu vực <span className="text-destructive">*</span></Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Select 
                    value={formData.location.city} 
                    onValueChange={(value) => handleLocationChange("city", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tỉnh/Thành phố" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ho-chi-minh">TP. Hồ Chí Minh</SelectItem>
                      <SelectItem value="ha-noi">Hà Nội</SelectItem>
                      <SelectItem value="da-nang">Đà Nẵng</SelectItem>
                      <SelectItem value="hai-phong">Hải Phòng</SelectItem>
                      <SelectItem value="can-tho">Cần Thơ</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    value={formData.location.district} 
                    onValueChange={(value) => handleLocationChange("district", value)}
                    disabled={!formData.location.city}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Quận/Huyện" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.location.city === "ho-chi-minh" && (
                        <>
                          <SelectItem value="quan-1">Quận 1</SelectItem>
                          <SelectItem value="quan-2">Quận 2</SelectItem>
                          <SelectItem value="quan-3">Quận 3</SelectItem>
                          <SelectItem value="quan-4">Quận 4</SelectItem>
                          <SelectItem value="quan-5">Quận 5</SelectItem>
                        </>
                      )}
                      {/* Add more districts for other cities */}
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    value={formData.location.ward} 
                    onValueChange={(value) => handleLocationChange("ward", value)}
                    disabled={!formData.location.district}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Phường/Xã" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* This would be populated based on district selection */}
                      <SelectItem value="phuong-1">Phường 1</SelectItem>
                      <SelectItem value="phuong-2">Phường 2</SelectItem>
                      <SelectItem value="phuong-3">Phường 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Chọn vị trí trên bản đồ</Label>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center justify-center min-h-[200px] bg-muted/50">
                    <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-center">
                      Nhấn vào đây để chọn vị trí chính xác trên bản đồ
                    </p>
                    <Button variant="outline" className="mt-4">
                      Chọn vị trí
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Mô tả chi tiết <span className="text-destructive">*</span></Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Mô tả chi tiết về bất động sản của bạn"
                value={formData.description}
                onChange={handleTextChange}
                rows={6}
                required
              />
              <p className="text-xs text-muted-foreground">
                Tối thiểu 30 ký tự, tối đa 3000 ký tự
              </p>
            </div>
            
            {/* Image Upload */}
            <div className="space-y-3">
              <Label>Hình ảnh <span className="text-destructive">*</span></Label>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Kéo thả hoặc <span className="text-primary">nhấn để chọn</span> hình ảnh
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          JPG, PNG (tối đa 10 hình, mỗi hình không quá 5MB)
                        </p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  
                  {uploadedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square relative rounded-md overflow-hidden border">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={image}
                              alt={`Uploaded image ${index + 1}`}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImage(index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="border-t pt-6">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Đăng tin
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Tin đăng sẽ được kiểm duyệt trước khi hiển thị công khai
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}