import React, { useState } from "react";

import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50 bg-opacity-50 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px] ">
      {/* Header */}
      <header className="relative flex flex-wrap justify-between items-center p-6 md:p-8 max-w-7xl mx-auto gap-8 lg:justify-between sm:justify-between md:justify-center ">
        <div className="text-2xl font-light italic tracking-tight text-gray-800 ">
          SUSS Digital Magazine
        </div>

        <button
          className="block md:hidden p-2 rounded-md border-2 border-black shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`
            ${isMenuOpen ? "flex" : "hidden"} 
            md:flex 
            flex-col md:flex-row md:flex-wrap 
            items-start 
            gap-6 
            absolute top-full left-0 w-full md:static md:w-auto 
            p-4 md:p-0 
            bg-amber-50 md:bg-transparent 
            shadow-lg md:shadow-none 
            z-10
          `}
        >
          <a
            href="#"
            className="cartoon-button flex items-center gap-2 bg-amber-300 hover:bg-amber-400 transition-all duration-200 justify-center w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>About Us</span>
          </a>

          <a
            href="/magazines"
            className="cartoon-button flex items-center gap-2 bg-emerald-300 hover:bg-emerald-400 transition-all duration-200 justify-center w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M9 9h6" />
              <path d="M9 13h6" />
              <path d="M9 17h4" />
            </svg>
            <span>Published Magazines</span>
          </a>

          <a
            href="#"
            className="cartoon-button flex items-center gap-2 bg-rose-300 hover:bg-rose-400 transition-all duration-200 justify-center w-full md:w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            <span>Contact Us</span>
          </a>
        </div>
      </header>

      {/* Main content (unchanged) */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="flex items-center justify-center p-8">logo</div>
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
            <span className="block text-gray-900">LOREM</span>
            <span className="block text-amber-600 mt-2">IPSUM</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
