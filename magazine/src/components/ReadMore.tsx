import React, { useState } from "react";
import { createPortal } from "react-dom";
import type { Magazine } from "../types/magazine";
import {
  Heart,
  Bookmark,
  Download,
  X,
  BookOpen,
  Eye,
  Clock,
} from "lucide-react";
import MagazineMode from "./MagazineMode";

interface ReadmoreProps {
  magazine: Magazine;
  onClose: () => void;
  isFavorite: boolean;
  isLiked: boolean;
  onFavoriteToggle: () => void;
  onDownload: () => void;
  onLike: () => void;
}

const Readmore: React.FC<ReadmoreProps> = ({
  magazine,
  onClose,
  isFavorite,
  isLiked,
  onFavoriteToggle,
  onDownload,
  onLike,
}) => {
  const [isMagazineMode, setIsMagazineMode] = useState(false);
  const [showNoDownloadModal, setShowNoDownloadModal] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
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

  const handleLike = () => {
    // TODO: Call API to like/unlike this magazine
    onLike();
  };

  const handleFavoriteToggle = () => {
    // TODO: Call API to favorite/unfavorite this magazine
    onFavoriteToggle();
  };

  const handleDownload = () => {
    if (magazine.pdfUrl) {
      // TODO: Trigger actual file download (likely via API endpoint)
      onDownload();
    } else {
      setShowNoDownloadModal(true);
    }
  };

  const openMagazineMode = () => setIsMagazineMode(true);
  const closeMagazineMode = () => setIsMagazineMode(false);
  const closeNoDownloadModal = () => setShowNoDownloadModal(false);

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/30 backdrop-blur-md"
        onClick={handleBackdropClick}
      >
        <div
          className="relative bg-white rounded-3xl border border-gray-400 shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            onKeyDown={(e) => handleButtonKeyDown(e, onClose)}
            type="button"
            className="cursor-pointer absolute top-1 right-1 sm:top-3 sm:right-3 z-10 p-2 aspect-square flex items-center justify-center text-page-dark bg-white border backdrop-blur-sm rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-size-[20px_20px]">
            <div className="md:w-2/5 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-full aspect-[1/1.414]">
                <img
                  src={magazine.imageUrl}
                  alt={`Magazine ${magazine.issueNumber}`}
                  className="w-full h-full object-cover rounded-2xl border border-black shadow-lg"
                />
              </div>
            </div>

            <div className="md:w-3/5 flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-page-dark">
                  {magazine.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-page-text">
                  Issue No.{" "}
                  <span className="font-bold text-page-text">
                    {magazine.issueNumber}
                  </span>
                </p>

                <div className="flex flex-row flex-wrap gap-3 sm:gap-6 mt-2">
                  <p className="italic font-light text-page-dark flex items-center gap-2">
                    <Heart
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                    <span className="font-medium not-italic">
                      {magazine.likes}
                    </span>
                  </p>
                  <p className="italic font-light text-page-dark flex items-center gap-2">
                    <Bookmark
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                    <span className="font-medium not-italic">
                      {magazine.favorites}
                    </span>
                  </p>
                  <p className="italic font-light text-page-dark flex items-center gap-2">
                    <Download
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                    <span className="font-medium not-italic">
                      {magazine.downloads}
                    </span>
                  </p>
                  <p className="italic font-light text-page-dark flex items-center gap-2">
                    <Eye className="inline-block w-4 h-4" aria-hidden="true" />
                    <span className="font-medium not-italic">
                      {magazine.clicks}
                    </span>
                  </p>
                  <p className="italic font-light text-page-dark flex items-center gap-2">
                    <Clock
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                    <span className="font-medium not-italic">
                      {magazine.avgReadingMinutes} min
                    </span>
                  </p>
                </div>

                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed wrap-break-word">
                  {magazine.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleLike}
                  onKeyDown={(e) => handleButtonKeyDown(e, handleLike)}
                  className={`hover:bg-gray-300 cursor-pointer cartoon-button flex items-center justify-center gap-2 text-sm sm:text-base font-medium focus:outline-none transition-all duration-150 min-w-11 min-h-11 ${
                    isLiked
                      ? "bg-logo-primary text-white hover:bg-logo-primary-hover"
                      : "bg-white"
                  }`}
                >
                  {isLiked ? (
                    <Heart fill="currentColor" size={18} />
                  ) : (
                    <Heart size={18} />
                  )}
                  {isLiked ? "Liked" : "Like"}
                </button>

                <button
                  type="button"
                  onClick={handleFavoriteToggle}
                  onKeyDown={(e) =>
                    handleButtonKeyDown(e, handleFavoriteToggle)
                  }
                  className={`cursor-pointer cartoon-button flex items-center justify-center gap-2 text-sm sm:text-base font-medium focus:outline-none transition-all duration-150 min-w-11 min-h-11 ${
                    isFavorite
                      ? "bg-accent-gold text-black hover:bg-accent-gold-hover"
                      : "bg-white hover:bg-gray-300"
                  }`}
                >
                  {isFavorite ? (
                    <Bookmark fill="currentColor" size={18} />
                  ) : (
                    <Bookmark size={18} />
                  )}
                  {isFavorite ? "Favorited" : "Favorite"}
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  onKeyDown={(e) => handleButtonKeyDown(e, handleDownload)}
                  className="hover:bg-gray-300 cursor-pointer cartoon-button flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white focus:outline-none transition-all duration-150 min-w-11 min-h-11"
                >
                  <Download size={18} /> Download
                </button>

                <button
                  type="button"
                  onClick={openMagazineMode}
                  onKeyDown={(e) => handleButtonKeyDown(e, openMagazineMode)}
                  className="hover:bg-gray-300 cursor-pointer cartoon-button flex items-center justify-center gap-2 text-sm sm:text-base font-medium bg-white focus:outline-none transition-all duration-150 min-w-11 min-h-11"
                >
                  <BookOpen size={18} /> Magazine Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMagazineMode &&
        createPortal(
          <MagazineMode
            pages={magazine.pages || [magazine.imageUrl]}
            onClose={closeMagazineMode}
          />,
          document.body,
        )}

      {showNoDownloadModal &&
        createPortal(
          <div
            className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md"
            onClick={(e) =>
              e.target === e.currentTarget && closeNoDownloadModal()
            }
          >
            <div
              className="relative bg-white rounded-3xl border-4 border-black shadow-2xl max-w-[90%] sm:max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeNoDownloadModal}
                onKeyDown={(e) => handleButtonKeyDown(e, closeNoDownloadModal)}
                type="button"
                className="cursor-pointer absolute top-2 right-2 z-10 p-2 aspect-square flex items-center justify-center text-2xl font-bold text-page-dark bg-white border rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-page-dark">
                  Download Unavailable
                </h3>
                <p className="text-sm sm:text-base text-page-text mb-6">
                  Sorry, no downloadable file is available for this magazine.
                </p>
                <button
                  onClick={closeNoDownloadModal}
                  className="cursor-pointer cartoon-button px-6 py-2 bg-accent-mint text-black border-2 border-black rounded-full hover:bg-accent-mint-hover transition-colors font-medium focus:outline-none min-w-11 min-h-11"
                >
                  OK
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>,
    document.body,
  );
};

export default Readmore;
