// src/components/Home/MarketNews.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MarketNews = () => {
  const [news, setNews] = useState([]);

  // Simulated news data
  useEffect(() => {
    const dummyNews = [
      {
        id: 1,
        title:
          "Thị trường bất động sản phía Nam hồi phục mạnh mẽ trong quý 2/2023",
        summary:
          "Sau thời gian trầm lắng, thị trường BĐS khu vực phía Nam đã có dấu hiệu phục hồi rõ rệt với lượng giao dịch tăng 30% so với quý trước.",
        image: "/news1.jpg",
        date: "18/06/2023",
        category: "Thị trường",
      },
      {
        id: 2,
        title:
          "Chính sách mới về quy hoạch đô thị sẽ tác động thế nào đến BĐS?",
        summary:
          "Luật Quy hoạch Đô thị sửa đổi đã được thông qua, hứa hẹn mang đến nhiều thay đổi tích cực cho thị trường bất động sản.",
        image: "/news2.jpg",
        date: "15/06/2023",
        category: "Chính sách",
      },
      {
        id: 3,
        title: "Top 5 dự án căn hộ đáng sống nhất tại Hà Nội năm 2023",
        summary:
          "Các dự án căn hộ cao cấp tại Hà Nội ngày càng hấp dẫn người mua nhờ hệ thống tiện ích hiện đại và vị trí đắc địa.",
        image: "/news3.jpg",
        date: "12/06/2023",
        category: "Dự án",
      },
    ];

    setNews(dummyNews);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {news.map((item) => {
        // Create slug from title
        const slug = item.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        return (
          <Link
            key={item.id}
            to={`/tin-tuc/${item.id}-${slug}`}
            className="card group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={
                  item.image ||
                  `/api/placeholder/400/250?text=${encodeURIComponent(
                    item.title
                  )}`
                }
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-sm">
                {item.category}
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                {item.summary}
              </p>

              <p className="text-xs text-text-secondary">{item.date}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MarketNews;
