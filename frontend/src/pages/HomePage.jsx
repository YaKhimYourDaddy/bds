// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import ProjectShowcase from "../components/Home/ProjectShowcase";
import MarketNews from "../components/Home/MarketNews";
import PropertyByLocation from "../components/Home/PropertyByLocation";
import TopAgencies from "../components/Home/TopAgencies";
import PropertyInsights from "../components/Home/PropertyInsights";
import HeroBanner from "../components/Home/HeroBanner";
import SearchSuggestions from "../components/Home/SearchSuggestions";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pb-8">
      <HeroBanner />

      <div className="container-custom mt-6">
        <SearchSuggestions />

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Bất động sản nổi bật</h2>
            <Link
              to="/bat-dong-san-noi-bat"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <FeaturedProperties />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Dự án nổi bật</h2>
            <Link
              to="/du-an-noi-bat"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <ProjectShowcase />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Bất động sản theo địa điểm</h2>
            <Link
              to="/bat-dong-san-theo-dia-diem"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <PropertyByLocation />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Tin tức thị trường</h2>
            <Link
              to="/tin-tuc"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <MarketNews />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Nhà môi giới tiêu biểu</h2>
            <Link
              to="/moi-gioi"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <TopAgencies />
        </section>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Kiến thức bất động sản</h2>
            <Link
              to="/kien-thuc"
              className="text-sm text-primary hover:underline"
            >
              Xem tất cả
            </Link>
          </div>
          <PropertyInsights />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
