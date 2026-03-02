import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page-background bg-opacity-50 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-size-[20px_20px]">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 mt-8 gap-4 lg:gap-20 md:gap-8 sm:gap-4">
        <div className="flex items-center justify-center p-8">
          <img
            src="src/assets/logo-landing.png"
            alt="Company Logo"
            className="max-w-sm md:max-w-lg lg:max-w-2xl h-auto"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 ">
          <h1 className="text-center lg:text-left text-6xl md:text-7xl lg:text-8xl font-black leading-none">
            <span className="block text-logo-secondary">LOREM</span>
            <span className="block text-logo-primary mt-2">IPSUM</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-lg text-justify font-light">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud.
          </p>

          <nav className="flex flex-col lg:flex-row items-stretch lg:items-center lg:justify-end gap-4 mt-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cartoon-button flex items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-all duration-200 w-full lg:w-auto ${
                  isActive
                    ? "bg-accent-mint-hover"
                    : "bg-accent-mint hover:bg-accent-mint-hover"
                }`
              }
            >
              <svg
                className="w-5 h-5 text-page-dark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-page-dark whitespace-nowrap">About Us</span>
            </NavLink>

            <NavLink
              to="/magazines"
              className={({ isActive }) =>
                `cartoon-button flex items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-all duration-200 w-full lg:w-auto ${
                  isActive
                    ? "bg-accent-gold-hover"
                    : "bg-accent-gold hover:bg-accent-gold-hover"
                }`
              }
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M9 9h6" />
                <path d="M9 13h6" />
                <path d="M9 17h4" />
              </svg>
              <span className="text-page-dark whitespace-nowrap">
                Explore Magazines
              </span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `cartoon-button flex items-center justify-center gap-2 px-4 py-3 text-base font-medium transition-all duration-200 w-full lg:w-auto ${
                  isActive
                    ? "bg-accent-green"
                    : "bg-accent-green hover:bg-accent-green-hover"
                }`
              }
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              <span className="text-white whitespace-nowrap">Contact Us</span>
            </NavLink>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
