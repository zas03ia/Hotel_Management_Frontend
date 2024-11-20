'use client'
import React, { useState } from 'react';

const Menu = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-between items-center bg-white mt-2 border-b border-gray-300 text-xs font-semibold">
      <div className="hidden sm:flex space-x-6 mr-auto">
        <a
          href="#"
          className={`text-gray-900 hover:text-black ${activeLink === 'overview' ? 'text-blue-800 border-b-2 border-blue-800 pb-2' : 'hover:border-b-2 hover:border-black pb-2'}`}
          onClick={() => handleLinkClick('overview')}
        >
          Overview
        </a>
        <a
          href="#amenities"
          className={`text-gray-900 hover:text-black ${activeLink === 'amenities' ? 'text-blue-800 border-b-2 border-blue-800 pb-2' : 'hover:border-b-2 hover:border-black pb-2'}`}
          onClick={() => handleLinkClick('amenities')}
        >
          Amenities
        </a>
        <a
          href="#policies"
          className={`text-gray-900 hover:text-black ${activeLink === 'policies' ? 'text-blue-800 border-b-2 border-blue-800 pb-2' : 'hover:border-b-2 hover:border-black pb-2'}`}
          onClick={() => handleLinkClick('policies')}
        >
          Policies
        </a>
      </div>
    </div>
  );
};

export default Menu;
