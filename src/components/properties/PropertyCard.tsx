import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
      <Link to={`/properties/${property.id}`} className="block relative">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover"
          />
          <div className={`absolute top-2 left-2 py-1 px-2 rounded text-xs text-white font-medium ${property.type === 'sale' ? 'bg-primary-600' : 'bg-secondary-600'}`}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </div>
          <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-neutral-600 hover:text-primary-600">
            <Heart className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-neutral-500 mr-1" />
            <span className="text-sm text-neutral-500 truncate">{property.location}</span>
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2 line-clamp-1">{property.title}</h3>
          <div className="mb-3">
            <span className="text-xl font-bold text-primary-600">${property.price.toLocaleString()}</span>
            {property.type === 'rent' && <span className="text-sm text-neutral-500">/month</span>}
          </div>
          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center text-neutral-500">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-neutral-500">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-neutral-500">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.area}m²</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;