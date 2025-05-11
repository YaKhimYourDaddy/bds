"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import {
  Building,
  Home,
  Search,
  MapPin,
  Bed,
  Bath,
  Square,
  Bookmark,
  Grid,
  List as ListIcon,
  Building2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { filters, cities } from "@/lib/constants";

// Sample property data - would come from an API in a real app
const sampleProperties = [
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
  {
    id: "5",
    title: "Shophouse 2 mặt tiền Phú Mỹ Hưng",
    price: "45 tỷ",
    type: "Shophouse",
    location: "Quận 7, TP.HCM",
    area: 200,
    bedrooms: 5,
    bathrooms: 5,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    isForSale: true,
  },
  {
    id: "6",
    title: "Căn hộ studio The Rainbow",
    price: "1.8 tỷ",
    type: "Căn hộ chung cư",
    location: "Quận 9, TP.HCM",
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
    isForSale: true,
  },
];

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Determine active tab from URL or default to "ban"
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "ban"
  );
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get("thanh-pho") || "");
  const [selectedType, setSelectedType] = useState(searchParams.get("loai") || "");
  const [selectedPrice, setSelectedPrice] = useState(searchParams.get("gia") || "");
  const [selectedArea, setSelectedArea] = useState(searchParams.get("dien-tich") || "");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  // Get current filter set based on active tab
  const currentFilter = filters.find(filter => filter.value === activeTab) || filters[0];
  
  // Update URL with filters when search button is clicked
  const updateSearchParams = () => {
    const params = new URLSearchParams();
    
    if (activeTab) params.set("tab", activeTab);
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCity) params.set("thanh-pho", selectedCity);
    if (selectedType) params.set("loai", selectedType);
    if (selectedPrice) params.set("gia", selectedPrice);
    if (selectedArea) params.set("dien-tich", selectedArea);
    
    router.push(`/tim-kiem?${params.toString()}`);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCity("");
    setSelectedType("");
    setSelectedPrice("");
    setSelectedArea("");
    
    router.push(`/tim-kiem?tab=${activeTab}`);
  };
  
  // Update active tab and reset filters when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    resetFilters();
    router.push(`/tim-kiem?tab=${value}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tìm kiếm bất động sản</h1>
      
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="w-full mb-6 grid grid-cols-3 h-auto">
          {filters.map((filter) => (
            <TabsTrigger 
              key={filter.value} 
              value={filter.value}
              className="py-3"
            >
              {filter.value === "ban" && <Home className="mr-2 h-4 w-4" />}
              {filter.value === "thue" && <Building className="mr-2 h-4 w-4" />}
              {filter.value === "du-an" && <Building2 className="mr-2 h-4 w-4" />}
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {filters.map((filter) => (
          <TabsContent key={filter.value} value={filter.value} className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Nhập từ khoá tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="lg:hidden flex-1"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Bộ lọc
                </Button>
                
                <div className="hidden lg:flex items-center space-x-2 flex-1">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Thành phố" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {cities.map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={filter.types.label} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {filter.types.values.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="flex-1" onClick={updateSearchParams}>
                  <Search className="h-4 w-4 mr-2" />
                  Xem kết quả
                </Button>
              </div>
            </div>
            
            {/* Responsive filters panel */}
            {showFilters && (
              <div className="lg:hidden bg-background border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Bộ lọc tìm kiếm</h3>
                  <Button size="icon" variant="ghost" onClick={() => setShowFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Thành phố</label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn thành phố" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {cities.map((city) => (
                            <SelectItem key={city.value} value={city.value}>
                              {city.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">{filter.types.label}</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Chọn ${filter.types.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {filter.types.values.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">{filter.pricelabels.label}</label>
                    <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Chọn ${filter.pricelabels.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {filter.pricelabels.values.map((price) => (
                            <SelectItem key={price.value} value={price.value}>
                              {price.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">{filter.areaRanges.label}</label>
                    <Select value={selectedArea} onValueChange={setSelectedArea}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Chọn ${filter.areaRanges.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {filter.areaRanges.values.map((area) => (
                            <SelectItem key={area.value} value={area.value}>
                              {area.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {filter.value === "du-an" && filter.status && (
                    <div>
                      <label className="text-sm font-medium mb-1 block">{filter.status.label}</label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={`Chọn ${filter.status.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {filter.status.values.map((status) => (
                              <SelectItem key={status.value} value={status.value}>
                                {status.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" className="flex-1" onClick={resetFilters}>
                      Đặt lại
                    </Button>
                    <Button className="flex-1" onClick={() => {
                      updateSearchParams();
                      setShowFilters(false);
                    }}>
                      Áp dụng
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Desktop filters sidebar */}
              <div className="hidden lg:block w-64 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">{filter.pricelabels.label}</h3>
                  <div className="space-y-2">
                    {filter.pricelabels.values.map((price) => (
                      <div 
                        key={price.value}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-muted transition-colors",
                          selectedPrice === price.value ? "bg-primary/10 text-primary font-medium" : ""
                        )}
                        onClick={() => setSelectedPrice(price.value)}
                      >
                        {price.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">{filter.areaRanges.label}</h3>
                  <div className="space-y-2">
                    {filter.areaRanges.values.map((area) => (
                      <div 
                        key={area.value}
                        className={cn(
                          "px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-muted transition-colors",
                          selectedArea === area.value ? "bg-primary/10 text-primary font-medium" : ""
                        )}
                        onClick={() => setSelectedArea(area.value)}
                      >
                        {area.label}
                      </div>
                    ))}
                  </div>
                </div>
                
                {filter.value === "du-an" && filter.status && (
                  <>
                    <Separator />
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">{filter.status.label}</h3>
                      <div className="space-y-2">
                        {filter.status.values.map((status) => (
                          <div 
                            key={status.value}
                            className="px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-muted transition-colors"
                          >
                            {status.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <Separator />
                
                <Button variant="outline" className="w-full" onClick={resetFilters}>
                  Đặt lại bộ lọc
                </Button>
              </div>
              
              {/* Results area */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-muted-foreground">
                      Hiển thị <span className="font-medium text-foreground">{sampleProperties.length}</span> kết quả
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-muted-foreground mr-2 hidden sm:block">Hiển thị:</p>
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("list")}
                    >
                      <ListIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProperties.map((property) => (
                      <Card key={property.id} className="overflow-hidden group">
                        <div className="relative h-48 w-full">
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                            <a href={`/bat-dong-san/${property.id}`}>Xem chi tiết</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sampleProperties.map((property) => (
                      <Card 
                        key={property.id} 
                        className="overflow-hidden group"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-48 sm:h-auto sm:w-48 md:w-64">
                            <Image
                              src={property.image}
                              alt={property.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, 33vw"
                            />
                            <Badge
                              className="absolute top-2 left-2"
                              variant={property.isForSale ? "default" : "secondary"}
                            >
                              {property.isForSale ? "Bán" : "Cho thuê"}
                            </Badge>
                          </div>
                          
                          <div className="flex-1 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <Badge variant="outline" className="font-normal mb-2">
                                  {property.type}
                                </Badge>
                                <h3 className="font-semibold text-lg mb-1">
                                  {property.title}
                                </h3>
                                <div className="flex items-center text-muted-foreground mb-4">
                                  <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                                  <span className="text-sm">{property.location}</span>
                                </div>
                              </div>
                              <div className="font-semibold text-primary text-lg">{property.price}</div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center">
                                <Bed className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{property.bedrooms} Phòng ngủ</span>
                              </div>
                              <div className="flex items-center">
                                <Bath className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{property.bathrooms} Phòng tắm</span>
                              </div>
                              <div className="flex items-center">
                                <Square className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">{property.area} m²</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <Button variant="ghost" size="sm" asChild>
                                <a href={`/bat-dong-san/${property.id}`}>Xem chi tiết</a>
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                              >
                                <Bookmark className="h-4 w-4" />
                                <span className="sr-only">Lưu tin</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}