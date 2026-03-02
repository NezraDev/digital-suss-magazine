import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useMagazines } from "../hooks/useMagazine";
import MagazineCard from "../components/MagazineCard";
import Readmore from "./ReadMore";
import type { Magazine } from "../types/magazine";

const pastelColors = [
  "bg-accent-rose",
  "bg-accent-gold",
  "bg-accent-cream",
  "bg-accent-mint",
  "bg-accent-green",
  "bg-accent-teal",
  "bg-white",
];

const PublishedMagazines: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { magazines, loading, error } = useMagazines();

  // TODO: Replace with actual data from backend (liked and favorite statuses)
  const [likedMagazines, setLikedMagazines] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(
    null,
  );

  const handleCardClick = (index: number) => {
    if (!isMobile) return;
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const openModal = (magazine: Magazine) => {
    setSelectedMagazine(magazine);
  };

  const closeModal = () => setSelectedMagazine(null);

  const toggleFavorite = (magazineId: number) => {
    // TODO: Call API to toggle favorite
    console.log("Toggle favorite for magazine", magazineId);
    setFavorites((prev) =>
      prev.includes(magazineId.toString())
        ? prev.filter((id) => id !== magazineId.toString())
        : [...prev, magazineId.toString()],
    );
  };

  const handleDownload = (magazine: Magazine) => {
    // TODO: Trigger actual file download via API
    console.log("Download magazine", magazine.id);
    alert("Download functionality will be connected to the backend.");
  };

  const handleLike = (magazineId: number) => {
    // TODO: Call API to like/unlike
    console.log("Toggle like for magazine", magazineId);
    setLikedMagazines((prev) =>
      prev.includes(magazineId)
        ? prev.filter((id) => id !== magazineId)
        : [...prev, magazineId],
    );
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-xl">Loading magazines...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 z-10 w-full bg-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-xl lg:text-4xl md:text-xl sm:text-xs font-bold">
            Published Magazines
          </h1>

          <div className="flex flex-row items-end gap-2 text-lg sm:text-xl">
            <button
              onClick={() => navigate("/liked")}
              className="cursor-pointer relative px-2 py-1 hover:underline rounded"
              aria-label="View liked magazines"
            >
              <span>Likes</span>
              {likedMagazines.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-logo-primary text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1 flex items-center justify-center">
                  {likedMagazines.length}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate("/favorites")}
              className="cursor-pointer relative px-2 py-1 hover:underline rounded"
              aria-label="View favorited magazines"
            >
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-logo-secondary text-white text-xs font-bold rounded-full min-w-[1.25rem] h-5 px-1 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen px-4 py-8 bg-page-background bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-size-[20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {magazines.map((magazine, idx) => {
              const bgColor = pastelColors[idx % pastelColors.length];
              const isExpanded = isMobile ? expandedIndex === idx : false;

              return (
                <MagazineCard
                  key={magazine.id}
                  magazine={magazine}
                  index={idx}
                  isExpanded={isExpanded}
                  isMobile={isMobile}
                  onCardClick={handleCardClick}
                  onReadMore={openModal}
                  bgColor={bgColor}
                />
              );
            })}
          </div>
        </div>
      </div>

      {selectedMagazine && (
        <Readmore
          magazine={selectedMagazine}
          onClose={closeModal}
          isFavorite={favorites.includes(selectedMagazine.id.toString())}
          onFavoriteToggle={() => toggleFavorite(selectedMagazine.id)}
          onDownload={() => handleDownload(selectedMagazine)}
          onLike={() => handleLike(selectedMagazine.id)}
          isLiked={likedMagazines.includes(selectedMagazine.id)}
        />
      )}
    </>
  );
};

export default PublishedMagazines;
