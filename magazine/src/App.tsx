import React, { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

const issues = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
  issueNumber: i + 1,
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolore architecto maxime repellat maiores. Libero laboriosam harum labore magni debitis.`,
  imageUrl: `https://picsum.photos/seed/${i + 100}/400/400`,
}));

const pastelColors = [
   'bg-white'
];

const PublishedIssues: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (!isMobile) return;
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="font-poppins max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-8 text-center border-b-4 border-black pb-4 inline-block">
        Published Issues
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {issues.map((issue, idx) => {
          const bgColor = pastelColors[idx % pastelColors.length];
          const isExpanded = isMobile ? expandedIndex === idx : false;

          return (
            <article
              key={issue.id}
              onClick={() => handleCardClick(idx)}
              className={`
                ${bgColor} p-3
                border-4 border-black rounded-3xl shadow-xl
                transition-all duration-300 ease-in-out
                ${isMobile ? 'cursor-pointer' : 'group hover:scale-105 hover:rotate-1 hover:shadow-2xl'}
                ${!isMobile ? 'group-hover:aspect-auto' : (isExpanded ? 'aspect-auto' : 'aspect-square')}
                overflow-hidden max-w-xs mx-auto w-full
              `}
            >
              <div className="flex flex-col">
                {/* Image container - always square */}
                <div className="w-full aspect-square relative">
                  <img
                    src={issue.imageUrl}
                    alt={`Issue ${issue.issueNumber}`}
                    className="w-full h-full object-cover rounded-2xl border-2 border-black"
                  />
                    
                </div>

                {/* Details - hidden when collapsed, slide in when expanded */}
                <div
                  className={`
                    transition-all duration-300 overflow-hidden flex flex-col p-2 gap-2
                    ${
                      !isMobile
                        ? 'group-hover:max-h-80 group-hover:mt-3 max-h-0'
                        : (isExpanded ? 'max-h-80 mt-3' : 'max-h-0')
                    }
                  `}
                >
                  <h2 className="text-xl font-bold leading-tight">
                    {issue.title}
                  </h2>
                  <p className="text-xs opacity-80">
                    Issue No. <span className="font-bold">{issue.issueNumber}</span>
                  </p>
                  <p className="text-sm line-clamp-3">{issue.description}</p>
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

export default PublishedIssues;