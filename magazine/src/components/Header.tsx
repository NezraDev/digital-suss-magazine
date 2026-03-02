import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const fullText = "Lorem, ipsum dolor.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <header className="border-b border-gray-300 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 max-w-7xl mx-auto gap-4">
        <div className="flex items-center gap-6">
          <img
            src="src/assets/logo.png"
            className="w-20 h-auto sm:w-30 cursor-pointer"
            alt="Logo"
          />
          <span className="text-xl sm:text-2xl font-medium tracking-tight text-gray-800">
            {displayedText}
            <span
              className="ml-0.5"
              style={{ opacity: index < fullText.length ? 1 : 0 }}
            >
              |
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
