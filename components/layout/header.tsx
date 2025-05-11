"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  FileText,
  Bookmark,
  MessageCircle,
  Menu,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  // Demo purpose only - replace with actual auth check
  useEffect(() => {
    // This would be replaced with your actual auth check
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "/tim-kiem",
      label: "Tìm kiếm bất động sản",
      icon: <Search className="mr-2 h-4 w-4" />,
    },
    {
      href: isAuthenticated ? "/tin-ban-dang" : "/dang-nhap",
      label: "Tin bạn đăng",
      icon: <FileText className="mr-2 h-4 w-4" />,
      protected: true,
    },
    {
      href: isAuthenticated ? "/tin-da-luu" : "/dang-nhap",
      label: "Tin đã lưu",
      icon: <Bookmark className="mr-2 h-4 w-4" />,
      protected: true,
    },
    {
      href: isAuthenticated ? "/tin-nhan" : "/dang-nhap",
      label: "Tin nhắn",
      icon: <MessageCircle className="mr-2 h-4 w-4" />,
      protected: true,
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 font-bold text-xl"
          >
            <Home className="h-6 w-6" />
            <span>BatDongSan</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          <div className="hidden md:flex items-center space-x-2">
            {!isAuthenticated ? (
              <>
                <Button variant="outline" asChild>
                  <Link href="/dang-nhap">Đăng nhập</Link>
                </Button>
                <Button asChild>
                  <Link href="/dang-ki">Đăng ký</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/dang-tin">Đăng tin</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/tai-khoan">Tài khoản</Link>
                </Button>
                <Button variant="destructive">Đăng xuất</Button>
              </>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-4 mt-4 flex flex-col space-y-2">
                  {!isAuthenticated ? (
                    <>
                      <Button className="w-full" asChild>
                        <Link href="/dang-nhap">Đăng nhập</Link>
                      </Button>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/dang-ki">Đăng ký</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="w-full" asChild>
                        <Link href="/dang-tin">Đăng tin</Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/tai-khoan">Tài khoản</Link>
                      </Button>
                      <Button variant="destructive" className="w-full">
                        Đăng xuất
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;