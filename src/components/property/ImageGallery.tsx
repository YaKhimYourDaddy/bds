import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from 'react-icons/fa';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  // Handle keyboard events for fullscreen mode
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isFullscreen) {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    }
  };
  
  return (
    <div className="relative" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Property image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
        
        {/* Fullscreen button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition"
          onClick={toggleFullscreen}
        >
          <FaExpand />
        </button>
        
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-50 rounded text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex overflow-x-auto scrollbar-hide py-2 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-20 h-20 cursor-pointer ${
              index === currentIndex ? 'ring-2 ring-red-500' : 'opacity-70'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              className="text-white hover:text-gray-300 transition"
              onClick={toggleFullscreen}
            >
              <FaTimes size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-5xl">
              <img
                src={images[currentIndex]}
                alt={`Property image ${currentIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Fullscreen navigation buttons */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition"
                onClick={handlePrev}
              >
                <FaChevronLeft size={20} />
              </button>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition"
                onClick={handleNext}
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Fullscreen thumbnails */}
          <div className="p-4 flex justify-center">
            <div className="flex overflow-x-auto gap-2 max-w-3xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 cursor-pointer ${
                    index === currentIndex ? 'ring-2 ring-red-500' : 'opacity-70'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
