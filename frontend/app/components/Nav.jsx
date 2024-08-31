import React from 'react';

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-10 py-2 bg-gray-900 text-green-600 shadow-md">
      <div className="font-bold tracking-wide text-xl">
        SUBMASTER
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-1">
          <div className="text-lg">🎥</div>
          <p className="hidden md:block text-sm">Movies</p>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-lg">🎬</div>
          <p className="hidden md:block text-sm">Subtitles</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-md border border-gray-600 bg-gray-800 text-sm text-green-600 focus:outline-none focus:border-green-500" // Changed border color
          />
        </div>
        <div className="hidden md:block text-sm bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-green-50">
          Forum
        </div>
        <div className="hidden md:block bg-green-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-green-500 text-sm">
          Login
        </div>
      </div>
    </div>
  );
};

export default Nav;
