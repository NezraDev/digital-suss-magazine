import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import PageFlip from "react-pageflip";
import { X } from "lucide-react";

interface MagazineModeProps {
  pages: string[];
  onClose: () => void;
}

const MagazineMode: React.FC<MagazineModeProps> = ({ pages, onClose }) => {
  const flipRef = useRef<any>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    action: () => void,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl maxh-[90vh] overflow-hidden p-1 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          onKeyDown={(e) => handleButtonKeyDown(e, onClose)}
          type="button"
          className="cursor-pointer absolute top-1 right-1 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 aspect-square flex items-center justify-center text-black bg-black/10 hover:bg-black/20 rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Close magazine mode"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          {/* @ts-ignore - react-pageflip types may be incomplete */}
          <PageFlip
            ref={flipRef}
            width={550}
            height={700}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1000}
            drawShadow
            flippingTime={500}
            usePortrait={false}
            startZIndex={10}
            autoSize
            showCover
            mobileScrollSupport
            className="magazine-flipbook cursor-pointer"
            style={{ backgroundColor: "transparent" }}
          >
            {pages.map((pageUrl, index) => (
              <div
                key={index}
                className="relative w-full h-full bg-white shadow-xl overflow-visible"
              >
                <img
                  src={pageUrl}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-contain"
                />
                {/* Page number: centered on mobile, right side on tablet/desktop */}
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-4 sm:transform-none text-xs sm:text-sm text-page-text bg-white/90 px-2 py-1 rounded-full shadow-md z-30">
                  {index + 1}
                </span>
              </div>
            ))}
          </PageFlip>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MagazineMode;
