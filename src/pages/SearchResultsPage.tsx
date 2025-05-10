import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UIContext } from '../context/UIContext';
import LoadingSpinner from '../components/common/LoadingSpinner';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const { searchFilters } = useContext(UIContext);
  
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<any[]>([]);
  
  useEffect(() => {
    document.title = 'Kết quả tìm kiếm - Batdongsan.com.vn';
    
    // Simulate loading results
    const loadResults = async () => {
      setLoading(true);
      
      // In a real app, this would make an API call with the searchParams and searchFilters
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Mock data
      setResults([]);
      setLoading(false);
    };
    
    loadResults();
  }, [searchParams, searchFilters]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="py-4 px-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Kết quả tìm kiếm</h2>
          </div>
          
          <div className="p-6">
            {results.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-2">Không tìm thấy kết quả phù hợp</p>
                <p className="text-gray-500 text-sm">Vui lòng thử lại với các tiêu chí tìm kiếm khác</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Property cards would go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
