// src/components/Common/PropertyCard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiCamera, FiCheck } from "react-icons/fi";

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Create slug from title
  const slug = property.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <Link to={`/chi-tiet/${property.id}-${slug}`} className="block">
        <div className="relative">
          <img
            src={
              property.image ||
              `/api/placeholder/400/250?text=${encodeURIComponent(
                property.title
              )}`
            }
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <button
            className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ${
              isFavorite
                ? "bg-primary text-white"
                : "bg-white text-text-secondary"
            }`}
            onClick={toggleFavorite}
          >
            <FiHeart className={isFavorite ? "fill-current" : ""} />
          </button>

          {property.imageCount && (
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs rounded px-2 py-1 flex items-center">
              <FiCamera className="mr-1" />
              <span>{property.imageCount}</span>
            </div>
          )}

          {property.status === "sale" && (
            <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-sm">
              Mua bán
            </div>
          )}

          {property.status === "rent" && (
            <div className="absolute top-2 left-2 bg-info text-white text-xs font-medium px-2 py-1 rounded-sm">
              Cho thuê
            </div>
          )}
        </div>

        <div className="p-3">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-base font-medium line-clamp-2 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
          </div>

          <div className="flex justify-between mb-2">
            <div className="text-primary font-medium">{property.price}</div>
            <div className="text-text-secondary text-sm">{property.area}</div>
          </div>

          <div className="text-sm text-text-secondary mb-2 flex items-center">
            <span className="line-clamp-1">{property.address}</span>
            {property.isVerified && (
              <span
                className="ml-1 text-success flex items-center"
                title="Đã xác thực"
              >
                <FiCheck className="text-xs" />
              </span>
            )}
          </div>

          {(property.bedrooms || property.bathrooms) && (
            <div className="flex text-sm text-text-secondary">
              {property.bedrooms && (
                <div className="mr-3">{property.bedrooms} PN</div>
              )}

              {property.bathrooms && <div>{property.bathrooms} WC</div>}
            </div>
          )}

          <div className="text-xs text-text-secondary mt-2 pt-2 border-t border-border-color">
            {property.postedDate}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
