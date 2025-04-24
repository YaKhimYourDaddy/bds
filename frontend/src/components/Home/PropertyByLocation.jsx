// src/components/Home/PropertyByLocation.jsx
import { Link } from "react-router-dom";

const PropertyByLocation = () => {
  const locations = [
    {
      id: 1,
      name: "Hà Nội",
      image: "/hanoi.jpg",
      count: 12506,
      slug: "ha-noi",
    },
    {
      id: 2,
      name: "TP. Hồ Chí Minh",
      image: "/hcmc.jpg",
      count: 18432,
      slug: "ho-chi-minh",
    },
    {
      id: 3,
      name: "Đà Nẵng",
      image: "/danang.jpg",
      count: 3251,
      slug: "da-nang",
    },
    {
      id: 4,
      name: "Bình Dương",
      image: "/binhduong.jpg",
      count: 4587,
      slug: "binh-duong",
    },
    {
      id: 5,
      name: "Đồng Nai",
      image: "/dongnai.jpg",
      count: 3980,
      slug: "dong-nai",
    },
    {
      id: 6,
      name: "Quảng Ninh",
      image: "/quangninh.jpg",
      count: 2145,
      slug: "quang-ninh",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {locations.map((location) => (
        <Link
          key={location.id}
          to={`/bat-dong-san/${location.slug}`}
          className="block group"
        >
          <div className="card overflow-hidden">
            <div className="relative h-32">
              <img
                src={
                  location.image ||
                  `/api/placeholder/200/150?text=${encodeURIComponent(
                    location.name
                  )}`
                }
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                <h3 className="text-white font-medium">{location.name}</h3>
                <p className="text-white text-sm">
                  {location.count.toLocaleString()} bất động sản
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PropertyByLocation;
