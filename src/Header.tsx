import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      {/* Left side: Logo or title */}
      <div className="text-white font-bold text-xl">
        <a href="/" className="hover:underline">
          Association for Computing Machinery // UT Austin
        </a>
      </div>

      {/* Right side: Navigation */}
      <nav>
        <ul className="flex space-x-4 text-white">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/resources" className="hover:underline">Resources</a></li>
          <li><a href="/al2s" className="hover:underline">AL2's</a></li>
          <li><a href="/calendar" className="hover:underline">Calendar</a></li>
          <li><a href="/sponsorship" className="hover:underline">Sponsorship</a></li>
          <li><a href="/forms" className="hover:underline">Forms</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
