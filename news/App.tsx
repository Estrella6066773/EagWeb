
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    const hash = currentHash.replace('#', '');
    
    if (hash === '/' || hash === '') {
      return <NewsList />;
    }

    if (hash.startsWith('/news/')) {
      const id = hash.split('/')[2];
      return <NewsDetail id={id} />;
    }

    return <NewsList />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {renderContent()}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-20 flex flex-col space-y-4 z-40">
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:scale-110 transition-all">
          <i className="fas fa-phone-alt"></i>
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-500 hover:scale-110 transition-all">
          <i className="fas fa-th-large"></i>
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-[#333] rounded-sm shadow-lg flex items-center justify-center text-white hover:bg-red-600 transition-all"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>

      {/* Black Footer per screenshot */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs tracking-tight">
            ©2024 - Eagle Technology (Shenzhen) Co., Ltd. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
