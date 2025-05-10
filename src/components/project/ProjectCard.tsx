import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';

interface ProjectCardProps {
  project: {
    _id: string;
    name: string;
    developer: string;
    province: string;
    district: string;
    images: string[];
    priceMin: number;
    priceMax: number;
    priceUnit: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    _id,
    name,
    developer,
    province,
    district,
    images,
    priceMin,
    priceMax,
    priceUnit
  } = project;

  // Project detail URL
  const detailUrl = `/du-an/${_id}`;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image container */}
      <Link to={detailUrl} className="block relative overflow-hidden h-56">
        {/* Project badge */}
        <div className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold bg-green-600 text-white rounded z-10">
          Dự án
        </div>
        
        {/* Favorite button */}
        <button 
          className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
          aria-label="Add to favorites"
        >
          <svg 
            className="w-5 h-5 text-gray-600 hover:text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
        
        {/* Fallback image in case the image array is empty */}
        <img 
          src={images[0] || '/src/assets/project-placeholder.jpg'} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </Link>
      
      {/* Content container */}
      <div className="p-4">
        <Link to={detailUrl} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-green-600 transition">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm truncate">{`${district}, ${province}`}</span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-700">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814l-4.419-4.419L6.581 16.814A1 1 0 015 16V4zm2-1a1 1 0 00-1 1v10.586l3.293-3.293a1 1 0 011.414 0L13 13.586V4a1 1 0 00-1-1H6z" clipRule="evenodd"></path>
          </svg>
          <span className="text-sm truncate">{developer}</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="text-green-600 font-bold text-lg">
            {priceMin === priceMax 
              ? formatCurrency(priceMin, priceUnit)
              : `${formatCurrency(priceMin, priceUnit)} - ${formatCurrency(priceMax, priceUnit)}`
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
