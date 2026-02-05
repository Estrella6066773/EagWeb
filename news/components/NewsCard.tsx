
import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  const handleClick = () => {
    window.location.hash = `/news/${news.id}`;
    window.scrollTo(0, 0);
  };

  if (featured) {
    return (
      <div 
        onClick={handleClick}
        className="group cursor-pointer flex flex-col h-full bg-white p-6 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative border border-transparent hover:border-gray-50"
      >
        <div className="overflow-hidden rounded-sm mb-5 aspect-[16/10]">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-sm text-gray-400 mt-3 font-medium">{news.date}</p>
        <p className="text-sm text-gray-500 mt-4 line-clamp-3 leading-relaxed mb-8">
          {news.summary}
        </p>
        
        <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-red-500 transition-colors transform group-hover:translate-x-1 duration-300">
          <i className="fas fa-long-arrow-alt-right text-2xl"></i>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer bg-white px-8 py-10 relative border-b border-gray-100 hover:shadow-2xl hover:z-20 hover:-translate-y-1 transition-all duration-300 first:rounded-t-sm last:rounded-b-sm last:border-0"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-tight flex-1 pr-12">
          {news.title}
        </h3>
        <span className="text-sm text-gray-400 font-medium whitespace-nowrap">{news.date}</span>
      </div>
      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed pr-12 mb-2">
        {news.summary}
      </p>
      
      <div className="absolute bottom-6 right-8 text-gray-300 group-hover:text-red-500 transition-colors transform group-hover:translate-x-1 duration-300">
        <i className="fas fa-long-arrow-alt-right text-xl"></i>
      </div>
    </div>
  );
};

export default NewsCard;
