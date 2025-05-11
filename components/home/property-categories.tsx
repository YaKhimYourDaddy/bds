import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Building, Home, Warehouse, Store, Hotel, Building2 } from "lucide-react";

const categories = [
  {
    id: "can-ho-chung-cu",
    name: "Căn hộ chung cư",
    icon: Building,
    color: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "nha-rieng",
    name: "Nhà riêng",
    icon: Home,
    color: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "dat-nen-du-an",
    name: "Đất nền dự án",
    icon: Building2,
    color: "bg-amber-100 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "shophouse",
    name: "Shophouse",
    icon: Store,
    color: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "khu-nghi-duong",
    name: "Khu nghỉ dưỡng",
    icon: Hotel,
    color: "bg-red-100 dark:bg-red-900/20",
    textColor: "text-red-600 dark:text-red-400",
  },
  {
    id: "kho-nha-xuong",
    name: "Kho, nhà xưởng",
    icon: Warehouse,
    color: "bg-slate-100 dark:bg-slate-900/20",
    textColor: "text-slate-600 dark:text-slate-400",
  },
];

export default function PropertyCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/tim-kiem?loai=${category.id}`}>
          <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
              <div className={cn("p-3 rounded-full mb-3", category.color)}>
                <category.icon className={cn("h-6 w-6", category.textColor)} />
              </div>
              <h3 className="font-medium text-sm sm:text-base">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}