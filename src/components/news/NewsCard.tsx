import { Link } from 'react-router-dom';
import { getRelativeTime } from '../../utils/formatters';

interface NewsCardProps {
  news: {
    _id: string;
    title: string;
    summary: string;
    image: string;
    createdAt: string;
  };
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { _id, title, summary, image, createdAt } = news;

  // News detail URL
  const detailUrl = `/tin-tuc/${_id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image container */}
      <Link to={detailUrl} className="block relative overflow-hidden h-48">
        {/* Time badge */}
        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-gray-800 text-white rounded z-10">
          {getRelativeTime(createdAt)}
        </div>
        
        {/* News image */}
        <img 
          src={image || '/src/assets/news-placeholder.jpg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </Link>
      
      {/* Content container */}
      <div className="p-4">
        <Link to={detailUrl} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{summary}</p>
        
        <Link 
          to={detailUrl} 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
        >
          Xem thêm
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
