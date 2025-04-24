// src/components/Home/TopAgencies.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TopAgencies = () => {
  const [agencies, setAgencies] = useState([]);

  // Simulated agencies data
  useEffect(() => {
    const dummyAgencies = [
      {
        id: 1,
        name: "Công ty BĐS Vạn Phúc",
        avatar: "/agency1.jpg",
        verified: true,
        listingCount: 152,
        rating: 4.8,
        location: "Hà Nội",
      },
      {
        id: 2,
        name: "Savills Việt Nam",
        avatar: "/agency2.jpg",
        verified: true,
        listingCount: 234,
        rating: 4.9,
        location: "Toàn quốc",
      },
      {
        id: 3,
        name: "Nhà Tốt Group",
        avatar: "/agency3.jpg",
        verified: true,
        listingCount: 187,
        rating: 4.7,
        location: "TP. Hồ Chí Minh",
      },
      {
        id: 4,
        name: "CBRE Việt Nam",
        avatar: "/agency4.jpg",
        verified: true,
        listingCount: 205,
        rating: 4.9,
        location: "Toàn quốc",
      },
      {
        id: 5,
        name: "Địa Ốc Nam Trung",
        avatar: "/agency5.jpg",
        verified: false,
        listingCount: 98,
        rating: 4.5,
        location: "Đà Nẵng",
      },
      {
        id: 6,
        name: "Phúc Land",
        avatar: "/agency6.jpg",
        verified: true,
        listingCount: 134,
        rating: 4.6,
        location: "Bình Dương",
      },
    ];

    setAgencies(dummyAgencies);
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {agencies.map((agency) => (
        <SwiperSlide key={agency.id}>
          <Link
            to={`/moi-gioi/${agency.id}`}
            className="block card p-4 text-center group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-20 h-20 mx-auto mb-3">
              <img
                src={
                  agency.avatar ||
                  `/api/placeholder/80/80?text=${encodeURIComponent(
                    agency.name.charAt(0)
                  )}`
                }
                alt={agency.name}
                className="w-full h-full object-cover rounded-full"
              />
              {agency.verified && (
                <div className="absolute bottom-0 right-0 bg-success text-white rounded-full w-5 h-5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            <h3 className="text-base font-medium mb-1 group-hover:text-primary transition-colors">
              {agency.name}
            </h3>

            <p className="text-sm text-text-secondary mb-2">
              {agency.location}
            </p>

            <div className="flex justify-center items-center mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${
                      star <= Math.floor(agency.rating)
                        ? "text-warning"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-text-secondary ml-1">
                {agency.rating}
              </span>
            </div>

            <p className="text-sm">
              <span className="text-primary font-medium">
                {agency.listingCount}
              </span>
              <span className="text-text-secondary"> tin đăng</span>
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopAgencies;
