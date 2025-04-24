// src/components/Home/HeroBanner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroBanner = () => {
  const banners = [
    {
      id: 1,
      image: "/banner1.jpg",
      title: "Cơ hội đầu tư bất động sản",
      link: "/campaigns/dau-tu-bds",
    },
    {
      id: 2,
      image: "/banner2.jpg",
      title: "Mua nhà ở ngay với lãi suất ưu đãi",
      link: "/campaigns/lai-suat-uu-dai",
    },
    {
      id: 3,
      image: "/banner3.jpg",
      title: "Tìm nhà đất dễ dàng",
      link: "/campaigns/tim-nha-dat",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-64 md:h-80 lg:h-96"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${
                  banner.image ||
                  `/api/placeholder/1200/400?text=${encodeURIComponent(
                    banner.title
                  )}`
                })`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-center px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {banner.title}
                </h2>
                <a href={banner.link} className="btn btn-primary">
                  Xem ngay
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
