import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Mail, Phone, Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6" />
              <span className="font-bold text-xl">BatDongSan</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Nền tảng kết nối người mua, bán và thuê bất động sản hàng đầu Việt Nam
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Về chúng tôi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gioi-thieu" className="text-muted-foreground hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/dieu-khoan-su-dung" className="text-muted-foreground hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/huong-dan" className="text-muted-foreground hover:text-primary transition-colors">
                  Hướng dẫn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  contact@batdongsan.com
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  1900 1234
                </span>
              </li>
              <li className="text-muted-foreground">
                123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Đăng ký nhận tin</h3>
            <p className="text-muted-foreground mb-4">
              Nhận thông tin mới nhất về bất động sản và ưu đãi
            </p>
            <div className="flex flex-col space-y-2">
              <Input placeholder="Email của bạn" type="email" />
              <Button>Đăng ký</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 BatDongSan. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;