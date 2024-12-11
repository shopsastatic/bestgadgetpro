import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  showScore?: boolean;
  className?: string;
}

export function ProductRating({ rating, showScore = true, className = '' }: ProductRatingProps) {
  const TRUSTPILOT_COLOR = '#00b67a';
  const MAX_STARS = 5;
  
  // Convert 10-point scale to 5-point scale
  const fiveStarRating = (rating / 2);

  // Render a single star with precise fill amount
  const renderStar = (starIndex: number) => {
    const fillPercentage = Math.min(Math.max((fiveStarRating - starIndex) * 100, 0), 100);

    if (fillPercentage === 0) {
      return (
        <Star 
          key={starIndex}
          size={20} 
          className="text-gray-300" 
        />
      );
    }

    if (fillPercentage === 100) {
      return (
        <Star 
          key={starIndex}
          size={20} 
          fill={TRUSTPILOT_COLOR} 
          color={TRUSTPILOT_COLOR} 
        />
      );
    }

    return (
      <div key={starIndex} className="relative">
        <Star size={20} className="text-gray-300" />
        <div 
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star 
            size={20} 
            fill={TRUSTPILOT_COLOR} 
            color={TRUSTPILOT_COLOR}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Render all stars */}
      {Array.from({ length: MAX_STARS }).map((_, index) => renderStar(index))}

      {/* Numeric score */}
      {showScore && (
        <span className="ml-1 text-sm font-medium" style={{ color: TRUSTPILOT_COLOR }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}