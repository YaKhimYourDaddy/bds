"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Tìm kiếm", href: "/tim-kiem" },
    { name: "Tin bạn đăng", href: "/tin-ban-dang" },
    { name: "Tin đã lưu", href: "/tin-da-luu" },
    { name: "Tin nhắn", href: "/tin-nhan" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-4 bg-background">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VinHouse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <ModeToggle />

            <div className="hidden lg:flex items-center space-x-2">
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
              className="lg:hidden"
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
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.name}
              </Link>
            ))}
            <div className="border-t border-border pt-2 flex flex-col space-y-2">
              <Link href="/dang-nhap" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start">
                  Đăng nhập
                </Button>
              </Link>
              <Link href="/dang-ky" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start">Đăng ký</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
