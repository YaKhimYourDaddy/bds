"use client";

import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { PROPERTY_TYPES, TRANSACTION_TYPES, PROVINCES } from "@/lib/constants";

export default function PropertyFilter() {
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [areaRange, setAreaRange] = useState([0, 500]);
  
  const formatPrice = (value: number) => {
    if (value === 0) return "0";
    if (value < 1) return `${value * 1000} triệu`;
    return `${value} tỷ`;
  };
  
  return (
    <div className="bg-card border rounded-lg p-4 sticky top-20">
      <h2 className="font-semibold text-lg mb-4">Bộ lọc tìm kiếm</h2>
      
      <Accordion type="multiple" defaultValue={["location", "type", "price"]}>
        <AccordionItem value="location">
          <AccordionTrigger>Khu vực</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn tỉnh/thành phố" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn quận/huyện" />
                </SelectTrigger>
                <SelectContent>
                  {/* Districts would be populated based on selected province */}
                </SelectContent>
              </Select>
              
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn phường/xã" />
                </SelectTrigger>
                <SelectContent>
                  {/* Wards would be populated based on selected district */}
                </SelectContent>
              </Select>
              
              <Input placeholder="Đường/Phố" />
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="type">
          <AccordionTrigger>Loại hình & Loại bất động sản</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Loại hình giao dịch</Label>
                <div className="grid grid-cols-2 gap-2">
                  {TRANSACTION_TYPES.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <Checkbox id={type.value} />
                      <Label htmlFor={type.value}>{type.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Loại bất động sản</Label>
                <div className="grid grid-cols-2 gap-2">
                  {PROPERTY_TYPES.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <Checkbox id={type.value} />
                      <Label htmlFor={type.value}>{type.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Khoảng giá</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <Slider 
                value={priceRange} 
                min={0} 
                max={30} 
                step={0.5} 
                onValueChange={setPriceRange} 
              />
              <div className="flex justify-between items-center">
                <Input 
                  className="w-[45%]" 
                  value={formatPrice(priceRange[0])} 
                  readOnly 
                />
                <span className="mx-2">-</span>
                <Input 
                  className="w-[45%]" 
                  value={formatPrice(priceRange[1])} 
                  readOnly 
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="area">
          <AccordionTrigger>Diện tích</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <Slider 
                value={areaRange} 
                min={0} 
                max={500} 
                step={5} 
                onValueChange={setAreaRange} 
              />
              <div className="flex justify-between items-center">
                <Input 
                  className="w-[45%]" 
                  value={`${areaRange[0]} m²`} 
                  readOnly 
                />
                <span className="mx-2">-</span>
                <Input 
                  className="w-[45%]" 
                  value={`${areaRange[1]} m²`} 
                  readOnly 
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="features">
          <AccordionTrigger>Đặc điểm</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="space-y-2">
                <Label>Số phòng ngủ</Label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox id={`bedroom-${num}`} />
                      <Label htmlFor={`bedroom-${num}`}>{num}+</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <Label>Số phòng vệ sinh</Label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <Checkbox id={`bathroom-${num}`} />
                      <Label htmlFor={`bathroom-${num}`}>{num}+</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <Label>Hướng nhà</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Đông", "Tây", "Nam", "Bắc", "Đông Nam", "Đông Bắc", "Tây Nam", "Tây Bắc"].map((direction) => (
                    <div key={direction} className="flex items-center space-x-2">
                      <Checkbox id={`direction-${direction}`} />
                      <Label htmlFor={`direction-${direction}`}>{direction}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 grid grid-cols-2 gap-2">
        <Button variant="outline">Đặt lại</Button>
        <Button>Áp dụng</Button>
      </div>
    </div>
  );
}