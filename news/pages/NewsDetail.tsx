
import React, { useEffect, useState } from 'react';
import { NewsItem } from '../types';
import { NEWS_DATA } from '../data/newsData';

interface NewsDetailProps {
  id: string;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ id }) => {
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const item = NEWS_DATA.find(n => n.id === id);
    if (item) {
      setNews(item);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '/';
  };

  if (!news) {
    return (
      <div className="pt-32 pb-20 text-center text-gray-500">
        Article not found. <button onClick={handleGoBack} className="text-red-500 underline">Return Home</button>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Detail Page Banner */}
      <div className="h-40 md:h-56 overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920" 
          alt="Detail Banner" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10"></div>
      </div>

      {/* Breadcrumb / Back button at top */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <button 
          onClick={handleGoBack}
          className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors group text-sm font-medium"
        >
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          <span>Back to News List</span>
        </button>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            {news.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-400">
            <span className="flex items-center"><i className="far fa-calendar-alt mr-2"></i> {news.date}</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center"><i className="far fa-clock mr-2"></i> 17:57</span>
          </div>
        </header>

        {news.subHeader && (
          <div className="bg-gray-50 border-l-4 border-red-500 p-6 mb-12 italic text-gray-700 leading-relaxed text-lg">
            {news.subHeader}
          </div>
        )}

        <div className="prose prose-lg prose-red max-w-none text-gray-600 leading-[1.8] space-y-8 mb-16">
          {news.content.map((p, idx) => (
            <p key={idx} className="text-justify">{p}</p>
          ))}
        </div>

        {/* Detailed Images Section */}
        <div className="space-y-10 mt-12 mb-20">
          {(news.detailedImages || [news.imageUrl]).map((img, idx) => (
            <div key={idx} className="shadow-lg rounded-sm overflow-hidden bg-white">
              <img 
                src={img} 
                alt={`Detail ${idx + 1}`} 
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
          <button 
            onClick={handleGoBack}
            className="flex items-center space-x-3 px-8 py-3 bg-gray-900 text-white rounded-sm hover:bg-red-600 transition-all shadow-md active:scale-95"
          >
            <i className="fas fa-list-ul"></i>
            <span className="font-semibold">Back to News List</span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
