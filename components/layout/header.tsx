"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu, X, Home, Search, User, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NhàVN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/bat-dong-san"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Bất động sản
            </Link>
            <Link
              href="/tim-kiem"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Tìm kiếm
            </Link>
            <Link
              href="/huong-dan"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Hướng dẫn
            </Link>
            <Link
              href="/gioi-thieu"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Giới thiệu
            </Link>
          </nav>

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