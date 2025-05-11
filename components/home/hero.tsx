"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Home,
  Building,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32 md:py-40 lg:py-48 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
          Tìm kiếm bất động sản dễ dàng tại Việt Nam
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Khám phá hàng ngàn bất động sản để mua, thuê hoặc đầu tư trên khắp Việt Nam
        </p>

        <Card className="w-full max-w-3xl mx-auto">
          <CardContent className="p-0">
            <Tabs defaultValue="ban" className="w-full">
              <TabsList className="w-full grid grid-cols-3 bg-muted rounded-none rounded-t-lg">
                <TabsTrigger value="ban" className="rounded-none rounded-tl-lg data-[state=active]:bg-background">
                  <Home className="mr-2 h-4 w-4" />
                  Nhà đất bán
                </TabsTrigger>
                <TabsTrigger value="thue" className="rounded-none data-[state=active]:bg-background">
                  <Building className="mr-2 h-4 w-4" />
                  Nhà đất cho thuê
                </TabsTrigger>
                <TabsTrigger value="du-an" className="rounded-none rounded-tr-lg data-[state=active]:bg-background">
                  <Search className="mr-2 h-4 w-4" />
                  Dự án
                </TabsTrigger>
              </TabsList>

              {["ban", "thue", "du-an"].map((tab) => (
                <TabsContent 
                  key={tab} 
                  value={tab} 
                  className="p-6 space-y-4"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button asChild className="md:w-auto">
                      <Link href={`/tim-kiem?tab=${tab}&q=${encodeURIComponent(searchQuery)}`}>
                        Tìm kiếm
                      </Link>
                    </Button>
                  </div>
                  <div className="text-right">
                    <Link 
                      href={`/tim-kiem?tab=${tab}`} 
                      className="text-sm text-primary hover:underline"
                    >
                      Tìm kiếm nâng cao
                    </Link>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}