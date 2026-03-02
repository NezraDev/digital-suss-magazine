import React from "react";
import type { Magazine } from "../types/magazine";

interface MagazineCardProps {
  magazine: Magazine;
  index: number;
  isExpanded: boolean;
  isMobile: boolean;
  onCardClick: (index: number) => void;
  onReadMore: (magazine: Magazine) => void;
  bgColor: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  magazine,
  index,
  isMobile,
  onCardClick,
  onReadMore,
  bgColor,
}) => {
  const handleClick = () => onCardClick(index);

  const handleReadMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    onReadMore(magazine);
  };

  return (
    <article
      onClick={handleClick}
      className={`
        ${bgColor} p-3 border border-black rounded-3xl shadow-lg shadow-gray-600
        transition-all duration-300 ease-in-out cursor-pointer
        flex flex-col sm:flex-row items-stretch gap-6
        max-w-4xl mx-auto w-full
        ${!isMobile ? "hover:scale-105 hover:shadow-2xl" : ""}
      `}
    >
      <div
        className={`
          w-full sm:w-2/5 relative flex-shrink-0
          max-lg:aspect-[1/1.414]  /* A4 aspect ratio on mobile/tablet */
          ${isMobile ? "mb-4" : ""}
        `}
      >
        <img
          src={magazine.imageUrl}
          alt={`Magazine ${magazine.issueNumber}`}
          className="w-full h-full object-cover rounded-2xl border border-black transition-all duration-300"
        />
      </div>

      <div className="w-full sm:w-3/5 flex flex-col flex-1 gap-2">
        <h2 className="text-xl font-bold leading-tight">{magazine.title}</h2>
        <p className="text-xs opacity-80">
          Issue No. <span className="font-bold">{magazine.issueNumber}</span>
        </p>
        <p className="text-sm line-clamp-3">{magazine.description}</p>
        <button
          onClick={handleReadMore}
          className="
            cursor-pointer cartoon-button mt-2 mx-auto
            max-lg:w-full max-lg:justify-center
            lg:justify-start
            flex items-center gap-2 text-sm sm:text-base font-medium
            bg-white focus:outline-none transition-all duration-150 hover:bg-gray-300
          "
        >
          Read More →
        </button>
      </div>
    </article>
  );
};

export default MagazineCard;
