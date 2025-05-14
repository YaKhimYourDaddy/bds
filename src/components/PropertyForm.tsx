"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Property {
  id?: string;
  title: string;
  description: string;
  type: string;
  price: number;
  area: number;
  address: string;
  city: string;
  location: { lat: number; lng: number };
  images?: string[];
  status?: string;
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import MapPicker from "./MapPicker";
import { propertyTypes } from "@/app/tim-kiem/page";

export default function PropertyForm({ property }: { property?: Property }) {
  const [title, setTitle] = useState(property?.title || "");
  const [description, setDescription] = useState(property?.description || "");
  const [type, setType] = useState(property?.type || "");
  const [price, setPrice] = useState(property?.price?.toString() || "");
  const [area, setArea] = useState(property?.area?.toString() || "");
  const [address, setAddress] = useState(property?.address || "");
  const [city, setCity] = useState(property?.city || "");
  const [location, setLocation] = useState<{ lat: number; lng: number }>(
    property?.location || { lat: 10.7769, lng: 106.7009 }
  );
  const [images, setImages] = useState<File[]>([]);
  const [locationMethod, setLocationMethod] = useState<
    "address" | "map" | "current"
  >("address");
  const [suggestedLocations, setSuggestedLocations] = useState<
    { name: string; lat: number; lng: number }[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    if (address && locationMethod === "address") {
      // Mock API call to get suggested locations (replace with real API)
      setSuggestedLocations([
        { name: address, lat: location.lat, lng: location.lng },
      ]);
    }
  }, [address, locationMethod, location.lat, location.lng]);

  const handleImageUpload = async (files: File[]) => {
    const urls: string[] = [];
    for (const file of files) {
      const { data, error } = await supabase.storage
        .from("property-images")
        .upload(`public/${crypto.randomUUID()}-${file.name}`, file);
      if (!error) {
        const {
          data: { publicUrl },
        } = supabase.storage.from("property-images").getPublicUrl(data.path);
        urls.push(publicUrl);
      }
    }
    return urls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Vui lòng tải lên ít nhất một hình ảnh");
      return;
    }

    const imageUrls = await handleImageUpload(images);
    const propertyData = {
      title,
      description,
      type,
      price: parseInt(price),
      area: parseInt(area),
      address,
      city,
      location: `POINT(${location.lng} ${location.lat})`,
      images: imageUrls,
      status: property?.status || "pending",
    };

    if (property) {
      await supabase
        .from("properties")
        .update(propertyData)
        .eq("id", property.id);
    } else {
      await supabase.from("properties").insert({
        ...propertyData,
        user_id: (await supabase.auth.getUser()).data.user?.id,
      });
    }

    router.push("/tin-ban-dang");
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationMethod("current");
      },
      () => alert("Không thể lấy vị trí hiện tại")
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <div>
        <Input
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Mô tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Loại bất động sản" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          placeholder="Giá (VND)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Diện tích (m²)"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div>
        <Input
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
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
      </div>
      <div>
        <Select
          value={locationMethod}
          onValueChange={(v: "address" | "map" | "current") =>
            setLocationMethod(v)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Chọn cách xác định vị trí" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="address">Dựa trên địa chỉ</SelectItem>
            <SelectItem value="map">Chọn trên bản đồ</SelectItem>
            <SelectItem value="current">Vị trí hiện tại</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {locationMethod === "address" && suggestedLocations.length > 0 && (
        <div>
          <Select
            onValueChange={(v) => {
              const loc = suggestedLocations.find((l) => l.name === v);
              if (loc) setLocation({ lat: loc.lat, lng: loc.lng });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Chọn vị trí gợi ý" />
            </SelectTrigger>
            <SelectContent>
              {suggestedLocations.map((loc) => (
                <SelectItem key={loc.name} value={loc.name}>
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      {locationMethod === "map" && (
        <MapPicker location={location} setLocation={setLocation} />
      )}
      {locationMethod === "current" && (
        <Button type="button" onClick={getCurrentLocation}>
          <MapPin className="mr-2 h-4 w-4" />
          Lấy vị trí hiện tại
        </Button>
      )}
      <div>
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setImages(Array.from(e.target.files || []))}
        />
      </div>
      <Button type="submit">{property ? "Cập nhật" : "Đăng tin"}</Button>
    </form>
  );
}
