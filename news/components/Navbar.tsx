
import React from 'react';
import { NavLink } from '../types';

const LINKS: NavLink[] = [
  { label: 'Home', href: '#/' },
  { label: 'Products', href: '#/' },
  { label: 'Solutions', href: '#/' },
  { label: 'News', href: '#/' },
  { label: 'About Us', href: '#/' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a] text-white z-50 px-4 py-2 shadow-2xl h-16">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        
        {/* Logo Section - Left */}
        <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => window.location.hash = '/'}>
          <div className="bg-[#e41e26] rounded-full p-2 w-10 h-10 flex items-center justify-center">
            <i className="fas fa-eagle text-white text-xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-none">鹰驾科技</span>
            <span className="text-[10px] tracking-[0.2em] text-gray-300 font-medium">EAGLE DRIVE</span>
          </div>
        </div>

        {/* Links Section - Centered */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center text-sm font-light tracking-wide">
            {LINKS.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className={`px-4 hover:text-red-500 transition-colors ${
                    link.label === 'News' ? 'text-red-500 font-medium' : 'text-gray-100'
                  }`}
                >
                  {link.label}
                </a>
                {index < LINKS.length - 1 && (
                  <span className="text-gray-600 text-[10px]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right side placeholder to keep center alignment perfect */}
        <div className="w-[140px] hidden md:block"></div>
      </div>
    </nav>
  );
};

export default Navbar;
