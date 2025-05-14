"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/types";

export const propertyTypes = [
  "căn hộ chung cư",
  "chung cư mini, căn hộ dịch vụ",
  "nhà riêng",
  "nhà biệt thự, liền kề",
  "nhà mặt phố",
  "shophouse, nhà phố thương mại",
  "đất nền dự án",
  "đất",
  "trang trại, khu nghỉ dưỡng",
  "condotel",
  "kho, nhà xưởng",
  "cửa hàng, kiot",
  "nhà trọ, phòng trọ",
  "văn phòng",
  "loại bất động sản khác",
];

export const projectTypes = [
  "căn hộ chung cư",
  "cao ốc văn phòng",
  "trung tâm thương mại",
  "khu đô thị mới",
  "khu phức hợp",
  "nhà ở xã hội",
  "khu nghỉ dưỡng, sinh thái",
  "khu công nghiệp",
  "biệt thự liền kề",
  "shophouse",
  "nhà mặt phố",
  "loại dự án khác",
];

const priceRangesSets = {
  buying: [
    "tất cả",
    "thỏa thuận",
    "dưới 500 triệu",
    "500 - 800 triệu",
    "800 triệu - 1 tỷ",
    "1 - 2 tỷ",
    "2 - 3 tỷ",
    "3 - 4 tỷ",
    "4 - 5 tỷ",
    "5 - 7 tỷ",
    "7 - 10 tỷ",
    "10 - 20 tỷ",
    "20 - 30 tỷ",
    "30 - 50 tỷ",
    "trên 50 tỷ",
  ],
  renting: [
    "tất cả",
    "thỏa thuận",
    "dưới 1 triệu",
    "1 - 3 triệu",
    "3 - 5 triệu",
    "5 - 10 triệu",
    "10 - 40 triệu",
    "40 - 70 triệu",
    "70 - 100 triệu",
    "trên 100 triệu",
  ],
  project: [
    "tất cả",
    "thỏa thuận",
    "dưới 5 triệu",
    "5 - 30 triệu",
    "10 - 20 triệu",
    "20 - 35 triệu",
    "50 - 80 triệu",
    "trên 80 triệu",
  ],
};

const areaRanges = [
  "tất cả",
  "dưới 30 m2",
  "30 - 50 m2",
  "50 - 70 m2",
  "70 - 100 m2",
  "100 - 150 m2",
  "150 - 200 m2",
  "200 - 300 m2",
  "300 - 500 m2",
  "trên 500 m2",
];

const filters = [
  {
    label: "Nhà đất bán",
    types: { label: "Loại nhà đất", values: propertyTypes },
    pricelabels: { label: "Mức giá", values: priceRangesSets.buying },
    areaRanges: { label: "Diện tích", values: areaRanges },
  },
  {
    label: "Nhà đất cho thuê",
    types: { label: "Loại nhà đất", values: propertyTypes },
    pricelabels: { label: "Mức giá", values: priceRangesSets.renting },
    areaRanges: { label: "Diện tích", values: areaRanges },
  },
  {
    label: "Dự án bất động sản",
    types: { label: "Loại dự án", values: projectTypes },
    pricelabels: { label: "Mức giá", values: priceRangesSets.project },
    status: {
      label: "Trạng thái",
      values: [
        { value: "tat-ca", label: "tất cả" },
        { value: "sap-mo-ban", label: "sắp mở bán" },
        { value: "dang-mo-ban", label: "đang mở bán" },
        { value: "da-ban-giao", label: "đã bàn giao" },
      ],
    },
  },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(
    searchParams.get("category") || "Nhà đất bán"
  );
  const [type, setType] = useState(searchParams.get("type") || "");
  const [price, setPrice] = useState(searchParams.get("price") || "");
  const [area, setArea] = useState(searchParams.get("area") || "");
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [sort, setSort] = useState("price-asc");
  const [page, setPage] = useState(1);
  const [properties, setProperties] = useState<Property[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const currentFilter = filters.find((f) => f.label === category)!;

  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (type) params.set("type", type);
    if (price) params.set("price", price);
    if (area) params.set("area", area);
    if (city) params.set("city", city);
    if (status) params.set("status", status);
    router.push(`/tim-kiem?${params.toString()}`);
  };

  const handleSearch = async () => {
    updateSearchParams();
    const query = supabase
      .from("properties")
      .select("*", { count: "exact" })
      .eq("status", "approved");

    if (type) query.eq("type", type);
    if (city) query.eq("city", city);
    // Add price and area filters (simplified for brevity)
    if (price && price !== "tất cả" && price !== "thỏa thuận") {
      const [min, max] = price
        .split(" - ")
        .map((v) => parseFloat(v.replace(/[^0-9]/g, "")));
      if (max) query.gte("price", min * 1e6).lte("price", max * 1e6);
      else query.gte("price", min * 1e6);
    }
    if (area && area !== "tất cả") {
      const [min, max] = area
        .split(" - ")
        .map((v) => parseFloat(v.replace(/[^0-9]/g, "")));
      if (max) query.gte("area", min).lte("area", max);
      else query.gte("area", min);
    }

    const { data, count } = await query
      .order("price", { ascending: sort === "price-asc" })
      .range((page - 1) * 10, page * 10 - 1);

    setProperties(data || []);
    setTotalPages(Math.ceil((count || 0) / 10));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 space-y-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              {filters.map((f) => (
                <SelectItem key={f.label} value={f.label}>
                  {f.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder={currentFilter.types.label} />
            </SelectTrigger>
            <SelectContent>
              {currentFilter.types.values.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={price} onValueChange={setPrice}>
            <SelectTrigger>
              <SelectValue placeholder={currentFilter.pricelabels.label} />
            </SelectTrigger>
            <SelectContent>
              {currentFilter.pricelabels.values.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger>
              <SelectValue placeholder={currentFilter.areaRanges?.label} />
            </SelectTrigger>
            <SelectContent>
              {currentFilter.areaRanges?.values.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue placeholder="Thành phố" />
            </SelectTrigger>
            <SelectContent>
              {["Hà Nội", "TP.HCM", "Đà Nẵng", "Hải Phòng", "Cần Thơ"].map(
                (c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          {currentFilter.status && (
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder={currentFilter.status.label} />
              </SelectTrigger>
              <SelectContent>
                {currentFilter.status.values.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <Button onClick={handleSearch} className="w-full">
            Xem kết quả
          </Button>
        </div>
        <div className="col-span-3">
          <div className="flex justify-between mb-4">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                <SelectItem value="price-desc">Giá giảm dần</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                variant={p === page ? "default" : "outline"}
                onClick={() => setPage(p)}
              >
                {p}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
