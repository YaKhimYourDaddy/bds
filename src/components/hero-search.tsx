"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function HeroSearch() {
  const router = useRouter();
  const [searchType, setSearchType] = useState("mua");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("diaDiem", location);
    if (propertyType) params.append("loaiBDS", propertyType);
    if (priceRange) params.append("giaCa", priceRange);
    params.append("loaiGiaoDich", searchType);

    router.push(`/tim-kiem?${params.toString()}`);
  };

  return (
    <Card className="shadow-lg">
      <CardContent className="p-0">
        <Tabs
          defaultValue="mua"
          className="w-full"
          onValueChange={setSearchType}
        >
          <TabsList className="w-full rounded-t-lg grid grid-cols-3 h-14">
            <TabsTrigger value="mua" className="text-base">
              Mua
            </TabsTrigger>
            <TabsTrigger value="thue" className="text-base">
              Thuê
            </TabsTrigger>
            <TabsTrigger value="duAn" className="text-base">
              Dự án
            </TabsTrigger>
          </TabsList>

          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Địa điểm</label>
                <Input
                  placeholder="Tỉnh/Thành phố, Quận/Huyện..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Loại bất động sản</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại bất động sản" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canHo">Căn hộ/Chung cư</SelectItem>
                    <SelectItem value="nhaPho">Nhà phố</SelectItem>
                    <SelectItem value="bietThu">Biệt thự</SelectItem>
                    <SelectItem value="datNen">Đất nền</SelectItem>
                    <SelectItem value="vanPhong">Văn phòng</SelectItem>
                    <SelectItem value="matBang">Mặt bằng kinh doanh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Khoảng giá</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khoảng giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">Dưới 1 tỷ</SelectItem>
                    <SelectItem value="1-2">1 - 2 tỷ</SelectItem>
                    <SelectItem value="2-3">2 - 3 tỷ</SelectItem>
                    <SelectItem value="3-5">3 - 5 tỷ</SelectItem>
                    <SelectItem value="5-7">5 - 7 tỷ</SelectItem>
                    <SelectItem value="7-10">7 - 10 tỷ</SelectItem>
                    <SelectItem value="10-20">10 - 20 tỷ</SelectItem>
                    <SelectItem value="20-50">20 - 50 tỷ</SelectItem>
                    <SelectItem value="50+">Trên 50 tỷ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 text-right">
              <Button onClick={handleSearch} className="min-w-[120px]">
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
