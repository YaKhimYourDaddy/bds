// src/components/Footer/Footer.jsx
import { Link } from "react-router-dom";
import { FiFacebook, FiYoutube, FiLinkedin, FiInstagram } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white pt-8 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <img
              src={logo || "/placeholder-logo.png"}
              alt="Batdongsan.com.vn"
              className="h-8 mb-4"
            />
            <p className="text-sm text-text-secondary mb-4">
              Batdongsan.com.vn - Kênh thông tin số 1 về bất động sản tại Việt
              Nam
            </p>
            <div className="flex space-x-3 mb-4">
              <a
                href="#"
                className="text-lg text-text-secondary hover:text-primary"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="text-lg text-text-secondary hover:text-primary"
              >
                <FiYoutube />
              </a>
              <a
                href="#"
                className="text-lg text-text-secondary hover:text-primary"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="text-lg text-text-secondary hover:text-primary"
              >
                <FiInstagram />
              </a>
            </div>
            <p className="text-xs text-text-secondary">
              © 2007-2025 Công ty cổ phần PropertyGuru
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-base font-medium mb-3">Hướng dẫn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/huong-dan/dang-tin"
                  className="text-text-secondary hover:text-primary"
                >
                  Hướng dẫn đăng tin
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan/thanh-toan"
                  className="text-text-secondary hover:text-primary"
                >
                  Quy định thanh toán
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan/bao-gia"
                  className="text-text-secondary hover:text-primary"
                >
                  Bảng giá dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan/bao-mat"
                  className="text-text-secondary hover:text-primary"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  to="/huong-dan/gioi-thieu"
                  className="text-text-secondary hover:text-primary"
                >
                  Giới thiệu batdongsan.com.vn
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-base font-medium mb-3">Danh mục</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/mua-ban/can-ho-chung-cu"
                  className="text-text-secondary hover:text-primary"
                >
                  Mua bán căn hộ chung cư
                </Link>
              </li>
              <li>
                <Link
                  to="/mua-ban/nha-rieng"
                  className="text-text-secondary hover:text-primary"
                >
                  Mua bán nhà riêng
                </Link>
              </li>
              <li>
                <Link
                  to="/mua-ban/dat-nen"
                  className="text-text-secondary hover:text-primary"
                >
                  Mua bán đất nền
                </Link>
              </li>
              <li>
                <Link
                  to="/cho-thue/can-ho-chung-cu"
                  className="text-text-secondary hover:text-primary"
                >
                  Cho thuê căn hộ chung cư
                </Link>
              </li>
              <li>
                <Link
                  to="/cho-thue/nha-rieng"
                  className="text-text-secondary hover:text-primary"
                >
                  Cho thuê nhà riêng
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-base font-medium mb-3">Liên hệ</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-text-secondary">Hotline: 1900 1881</li>
              <li className="text-text-secondary">
                Email: hotro@batdongsan.com.vn
              </li>
              <li className="text-text-secondary">
                Trụ sở HN: Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ
                Liêm, Hà Nội
              </li>
              <li className="text-text-secondary">
                VP HCM: Tầng 19, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Phường
                Bến Nghé, Quận 1, TPHCM
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border-color my-6" />

        <div className="text-xs text-text-secondary">
          <p className="mb-2">CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</p>
          <p className="mb-2">
            Giấy ĐKKD số 0123456789 do Sở KH&ĐT TP. Hà Nội cấp ngày 01/01/2007
          </p>
          <p className="mb-2">
            Người chịu trách nhiệm nội dung: Nguyễn Văn A - Điện thoại liên hệ:
            1900 1881
          </p>
          <p>Copyright © 2007-2025 batdongsan.com.vn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
