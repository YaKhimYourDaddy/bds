// src/components/Home/ProjectShowcase.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../Common/ProjectCard";

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  // Simulated project data
  useEffect(() => {
    const dummyProjects = [
      {
        id: 1,
        name: "Vinhomes Smart City",
        location: "Nam Từ Liêm, Hà Nội",
        developer: "Vingroup",
        price: "Từ 2 tỷ/căn",
        status: "Đang mở bán",
        type: "Khu đô thị phức hợp",
        image: "/project1.jpg",
        handoverDate: "Quý 4/2023",
      },
      {
        id: 2,
        name: "Masteri Centre Point",
        location: "Quận 9, TP. Hồ Chí Minh",
        developer: "Masterise Homes",
        price: "Từ 2.5 tỷ/căn",
        status: "Đang mở bán",
        type: "Căn hộ cao cấp",
        image: "/project2.jpg",
        handoverDate: "Quý 2/2024",
      },
      {
        id: 3,
        name: "Ecopark Grand",
        location: "Văn Giang, Hưng Yên",
        developer: "Ecopark",
        price: "Từ 3 tỷ/căn",
        status: "Đang mở bán",
        type: "Khu đô thị sinh thái",
        image: "/project3.jpg",
        handoverDate: "Quý 1/2024",
      },
      {
        id: 4,
        name: "The Metropole Thủ Thiêm",
        location: "Quận 2, TP. Hồ Chí Minh",
        developer: "SonKim Land",
        price: "Từ 8 tỷ/căn",
        status: "Đang mở bán",
        type: "Căn hộ hạng sang",
        image: "/project4.jpg",
        handoverDate: "Quý 3/2023",
      },
      {
        id: 5,
        name: "Imperia Smart City",
        location: "Tây Mỗ, Hà Nội",
        developer: "MIK Group",
        price: "Từ 1.8 tỷ/căn",
        status: "Đang mở bán",
        type: "Khu đô thị thông minh",
        image: "/project5.jpg",
        handoverDate: "Quý 4/2024",
      },
    ];

    setProjects(dummyProjects);
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectShowcase;
