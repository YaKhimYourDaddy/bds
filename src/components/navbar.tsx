"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  const links = [
    { href: "/ban", label: "Nhà đất bán" },
    { href: "/thue", label: "Nhà đất cho thuê" },
    { href: "/du-an", label: "Dự án" },
  ];

  const guestButtons = [
    { label: "Đăng nhập", onClick: () => router.push("/login") },
    { label: "Đăng kí", onClick: () => router.push("/register") },
  ];

  const userButtons = [
    { label: "Đăng xuất", onClick: toggleLogin },
    { label: "Tài khoản", onClick: () => router.push("/account") },
  ];

  const commonButtons = [
    { label: "Đăng tin", onClick: () => router.push("/post") },
    { label: "Tin đã lưu", onClick: () => router.push("/saved") },
    { label: "Tin nhắn", onClick: () => router.push("/messages") },
    { label: "Toggle theme", onClick: () => console.log("Toggle theme") },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-20 bg-background p-4 items-center justify-between">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={28} />
        </button>
      </div>
      <nav
        className={`flex-col md:flex md:flex-row ${
          isMenuOpen ? "flex" : "hidden"
        } w-full md:w-auto items-center mt-0 space-y-0 md:space-x-6`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-md">
            {link.label}
          </Link>
        ))}
        {commonButtons.map((btn, index) => (
          <Button key={index} variant="ghost" onClick={btn.onClick}>
            {btn.label}
          </Button>
        ))}
        {(isLoggedIn ? userButtons : guestButtons).map((btn, index) => (
          <Button key={index} variant="ghost" onClick={btn.onClick}>
            {btn.label}
          </Button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
