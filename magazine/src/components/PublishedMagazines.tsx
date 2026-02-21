import React, { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useMagazines } from "../hooks/useMagazine";

const pastelColors = ["bg-white"];

const PublishedMagazines: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { magazines, loading, error } = useMagazines();

  const handleCardClick = (index: number) => {
    if (!isMobile) return;
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  if (loading) {
    return (
      <div className="font-poppins max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-xl">Loading magazines...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-poppins max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="font-poppins max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8 text-center border-b-4 border-black pb-4 inline-block">
        Published Magazines
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {magazines.map((magazine, idx) => {
          const bgColor = pastelColors[idx % pastelColors.length];
          const isExpanded = isMobile ? expandedIndex === idx : false;

          return (
            <article
              key={magazine.id}
              onClick={() => handleCardClick(idx)}
              className={`
                ${bgColor} p-3
                border-4 border-black rounded-3xl shadow-xl
                transition-all duration-300 ease-in-out cursor-pointer
                ${isMobile ? "cursor-pointer" : "group hover:scale-105 hover:rotate-1 hover:shadow-2xl"}
                ${!isMobile ? "group-hover:aspect-auto" : isExpanded ? "aspect-auto" : "aspect-square"}
                overflow-hidden max-w-xs mx-auto w-full
              `}
            >
              <div className="flex flex-col">
                {/* Image container - always square */}
                <div className="w-full aspect-square relative">
                  <img
                    src={magazine.imageUrl}
                    alt={`Magazine ${magazine.issueNumber}`}
                    className="w-full h-full object-cover rounded-2xl border-2 border-black"
                  />
                </div>

                {/* Details - hidden when collapsed, slide in when expanded */}
                <div
                  className={`
                    transition-all duration-300 overflow-hidden flex flex-col p-2 gap-2
                    ${
                      !isMobile
                        ? "group-hover:max-h-80 group-hover:mt-3 max-h-0"
                        : isExpanded
                          ? "max-h-80 mt-3"
                          : "max-h-0"
                    }
                  `}
                >
                  <h2 className="text-xl font-bold leading-tight">
                    {magazine.title}
                  </h2>
                  <p className="text-xs opacity-80">
                    Issue No.{" "}
                    <span className="font-bold">{magazine.issueNumber}</span>
                  </p>
                  <p className="text-sm line-clamp-3">{magazine.description}</p>
                  <button className="mt-2 bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PublishedMagazines;
