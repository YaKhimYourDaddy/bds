export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">NhàVN</h3>
            <p className="text-muted-foreground">
              Nền tảng kết nối bất động sản hàng đầu Việt Nam, giúp bạn tìm kiếm 
              và chia sẻ thông tin bất động sản một cách dễ dàng và hiệu quả.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><a href="/bat-dong-san" className="text-muted-foreground hover:text-foreground transition-colors">Bất động sản</a></li>
              <li><a href="/tim-kiem" className="text-muted-foreground hover:text-foreground transition-colors">Tìm kiếm</a></li>
              <li><a href="/huong-dan" className="text-muted-foreground hover:text-foreground transition-colors">Hướng dẫn</a></li>
              <li><a href="/gioi-thieu" className="text-muted-foreground hover:text-foreground transition-colors">Giới thiệu</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li><a href="/dang-tin" className="text-muted-foreground hover:text-foreground transition-colors">Đăng tin</a></li>
              <li><a href="/lien-he-quang-cao" className="text-muted-foreground hover:text-foreground transition-colors">Liên hệ quảng cáo</a></li>
              <li><a href="/gioi-thieu-co-hoi" className="text-muted-foreground hover:text-foreground transition-colors">Giới thiệu cơ hội</a></li>
              <li><a href="/giai-quyet-khieu-nai" className="text-muted-foreground hover:text-foreground transition-colors">Giải quyết khiếu nại</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Email: lienhe@nhavn.vn</li>
              <li className="text-muted-foreground">Điện thoại: 0123 456 789</li>
              <li className="text-muted-foreground">Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} NhàVN. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}