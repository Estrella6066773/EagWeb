
import React, { useState } from 'react';
import NewsCard from '../components/NewsCard';
import { NEWS_DATA } from '../data/newsData';

const NewsList: React.FC = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const featuredNews = NEWS_DATA.slice(0, 2);
  const allRegularNews = NEWS_DATA.slice(2);
  
  const totalPages = Math.ceil(allRegularNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRegularNews = allRegularNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Section - Matching the highway interchange background and typography */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1545147986-a9d6f210df77?auto=format&fit=crop&q=80&w=1920" 
          alt="News Center Banner" 
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight flex items-center space-x-2">
              <span className="text-gray-300 text-5xl md:text-7xl mr-2">“</span>
              <span className="font-bold">新闻资讯</span>
              <span className="mx-4 text-3xl md:text-5xl font-extralight text-gray-100">News Center</span>
              <span className="text-gray-300 text-5xl md:text-7xl ml-2">”</span>
            </h1>
            <div className="w-24 h-[2px] bg-white mt-8"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredNews.map(news => (
            <NewsCard key={news.id} news={news} featured />
          ))}
        </div>

        {/* News List Container */}
        <div className="flex flex-col bg-white shadow-sm rounded-sm">
          {currentRegularNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Dynamic Pagination Section */}
        <div className="mt-20 flex justify-center items-center space-x-2">
          {totalPages > 1 && (
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-red-500 hover:border-red-500 transition-all disabled:opacity-30"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
          )}

          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded transition-all font-bold ${
                  currentPage === page 
                    ? "bg-red-600 text-white cursor-default" 
                    : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:text-red-500 hover:border-red-500 transition-all disabled:opacity-30"
            >
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
