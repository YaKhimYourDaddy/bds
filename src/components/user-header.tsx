"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  MoonIcon,
  SunIcon,
  Menu,
  X,
  Home,
  Search,
  User,
  Heart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
export const menuItems = [
  { href: "/nha-dat-ban", name: "Nhà đất bán" },
  { href: "/nha-dat-cho-thue", name: "Nhà đất cho thuê" },
  { href: "/du-an", name: "Dự án" },
  { href: "/wiki", name: "Wiki" },
  { href: "/phone-book", name: "Danh bạ" },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-background border-b ">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BDS.com.vn</span>
          </Link>

          <div className="hidden lg:block">
            <ul className="flex gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {theme === "dark" ? (
                    <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Chuyển đổi giao diện</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Sáng
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Tối
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  Hệ thống
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex items-center space-x-2">
              <Link href="/dang-nhap">
                <Button variant="ghost" size="sm">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/dang-ky">
                <Button size="sm">Đăng ký</Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/bat-dong-san"
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Bất động sản</span>
            </Link>
            <Link
              href="/tim-kiem"
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Tìm kiếm</span>
            </Link>
            <Link
              href="/huong-dan"
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Hướng dẫn</span>
            </Link>
            <Link
              href="/gioi-thieu"
              className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              <span>Giới thiệu</span>
            </Link>
            <div className="border-t border-border pt-2 flex flex-col space-y-2">
              <Link href="/dang-nhap" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/dang-ky" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Đăng ký
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
