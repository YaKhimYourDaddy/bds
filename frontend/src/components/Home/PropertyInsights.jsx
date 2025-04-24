// src/components/Home/PropertyInsights.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PropertyInsights = () => {
  const [insights, setInsights] = useState([]);

  // Simulated insights data
  useEffect(() => {
    const dummyInsights = [
      {
        id: 1,
        title: "Kinh nghiệm mua nhà lần đầu: Những điều cần biết",
        summary:
          "Mua nhà là một quyết định lớn trong đời, đặc biệt là với những người mới lần đầu. Bài viết chia sẻ những kinh nghiệm hữu ích cho người mua nhà lần đầu.",
        image: "/insight1.jpg",
        date: "20/06/2023",
        category: "Kinh nghiệm mua",
      },
      {
        id: 2,
        title: "Cách tính giá trị thực của bất động sản khi đầu tư",
        summary:
          "Khi đầu tư bất động sản, việc xác định giá trị thực của tài sản là vô cùng quan trọng. Tìm hiểu các yếu tố và phương pháp đánh giá bất động sản hiệu quả.",
        image: "/insight2.jpg",
        date: "18/06/2023",
        category: "Đầu tư",
      },
      {
        id: 3,
        title: "Xu hướng thiết kế nội thất căn hộ năm 2023",
        summary:
          "Khám phá những xu hướng thiết kế nội thất mới nhất cho căn hộ trong năm 2023, từ phong cách tối giản đến sự kết hợp giữa truyền thống và hiện đại.",
        image: "/insight3.jpg",
        date: "16/06/2023",
        category: "Thiết kế",
      },
    ];

    setInsights(dummyInsights);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {insights.map((item) => {
        // Create slug from title
        const slug = item.title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        return (
          <Link
            key={item.id}
            to={`/kien-thuc/${item.id}-${slug}`}
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
              <div className="absolute top-2 left-2 bg-info text-white text-xs font-medium px-2 py-1 rounded-sm">
                {item.category}
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-text-secondary mb-3 line-clamp-3">
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

export default PropertyInsights;
