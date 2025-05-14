"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Property } from "@/types";

export default function AdminDashboard() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await supabase
        .from("properties")
        .select("*")
        .eq("status", "pending");
      setProperties(data || []);
    };
    fetchProperties();
  }, []);

  const handleApprove = async (id: string) => {
    await supabase
      .from("properties")
      .update({ status: "approved" })
      .eq("id", id);
    setProperties(properties.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Quản lý tin đăng</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tiêu đề</TableHead>
            <TableHead>Loại</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.title}</TableCell>
              <TableCell>{property.type}</TableCell>
              <TableCell>{property.price.toLocaleString()} VND</TableCell>
              <TableCell>
                {property.address}, {property.city}
              </TableCell>
              <TableCell>
                <Button onClick={() => handleApprove(property.id)}>
                  Phê duyệt
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
