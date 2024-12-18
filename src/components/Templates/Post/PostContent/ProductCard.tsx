'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Star, Check, Shield, Heart, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';

const ProfessionalCard = ({ item, index }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null) as any;
  const [fullHeight, setFullHeight] = useState('300px');

  useEffect(() => {
    if (contentRef.current) {
      setIsAnimating(true);
      contentRef.current.style.maxHeight = 'auto';
      const height = contentRef.current.scrollHeight;
      setFullHeight(`${height}px`);

      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const toggleExpand = (e: any) => {
    e.preventDefault();
    if (!isAnimating) {
      const newHeight = isExpanded ? '300px' : fullHeight;
      if (contentRef.current) {
        contentRef.current.style.maxHeight = newHeight;
      }
      setIsExpanded(!isExpanded);
    }
  };

  const calculateRating = (rateIndex: any) => {
    let tag = "Very Good";
    let point = 9.7;

    switch (rateIndex) {
      case 1:
        tag = "Exceptional";
        point = 9.9;
        break;
      case 2:
        tag = "Exceptional";
        point = 9.7;
        break;
      case 3:
        tag = "Excellent";
        point = 9.4;
        break;
      case 4:
        tag = "Excellent";
        point = 9.2;
        break;
      case 5:
        tag = "Excellent";
        point = 9.0;
        break;
      case 6:
        tag = "Excellent";
        point = 8.9;
        break;
      case 7:
        tag = "Very Good";
        point = 8.7;
        break;
      case 8:
        tag = "Very Good";
        point = 8.5;
        break;
      case 9:
        tag = "Very Good";
        point = 8.4;
        break;
      case 10:
        tag = "Good";
        point = 8.2;
        break;
      default:
        tag = "Good";
        point = 8.0;
        break;
    }

    return [tag, point] as any;
  };

  // Render individual star
  const renderStar = (filled = false, partial = 0, starKey: any) => {
    if (filled) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          key={starKey}
          viewBox="0 0 24 24"
          fill="#ffb506"
          className="feather feather-star"
          style={{ marginRight: '0px' }}
        >
          <polygon
            stroke="#ffb506"
            strokeWidth="1"
            points="12 2 15 8.5 22 9.2 17 14 18.4 21 12 17.8 5.6 21 7 14 2 9.2 9 8.5 12 2"
          />
        </svg>
      );
    } else if (partial > 0) {
      const percent = partial * 100;
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          key={starKey}
          viewBox="0 0 24 24"
          fill="none"
          className="feather feather-star"
          style={{ marginRight: '0px' }}
        >
          <defs>
            <linearGradient id={`grad${percent}`}>
              <stop offset={`${percent}%`} stopColor="#ffb506" />
              <stop offset={`${percent}%`} stopColor="#fff" />
            </linearGradient>
          </defs>
          <polygon
            stroke="#ffb506"
            strokeWidth="1"
            points="12 2 15 8.5 22 9.2 17 14 18.4 21 12 17.8 5.6 21 7 14 2 9.2 9 8.5 12 2"
            fill={`url(#grad${percent})`}
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          key={starKey}
          viewBox="0 0 24 24"
          fill="#f1f1f1"
          className="feather feather-star"
          style={{ marginRight: '0px' }}
        >
          <polygon
            stroke="#ffb506"
            strokeWidth="1"
            points="12 2 15 8.5 22 9.2 17 14 18.4 21 12 17.8 5.6 21 7 14 2 9.2 9 8.5 12 2"
          />
        </svg>
      );
    }
  };

  // Render full rating component
  const renderRating = (rating: any, index: any) => {
    rating = Number(rating.toFixed(1));

    if (rating >= 9.7) {
      rating = 5;
    } else if (rating >= 9 && rating < 9.7) {
      rating = rating - 5 + 0.01;
    } else if (rating > 8.2 && rating < 9) {
      rating = 4;
    } else {
      rating = 3.5;
    }

    return (
      <div className="stars" key={rating + "-" + index} style={{ display: 'flex', alignItems: 'center', marginTop: '3px' }}>
        {[...Array(5)].map((_, i) => {
          const starKey = `star-${index}-${i}`;
          if (rating >= i + 1) {
            return renderStar(true, undefined, starKey);
          } else if (rating > i && rating < i + 1) {
            const partial = rating - i;
            return renderStar(false, partial, starKey);
          } else {
            return renderStar(false, undefined, starKey);
          }
        })}
      </div>
    );
  };

  const stringToArray = (str: any) => {
    if (!str) return [];

    return str.split('\n')
      .map((line: any) => line.trim())
      .filter((line: any) => line.length > 0);
  };

  const pointToArray = (point: any) => {
    if (!point) return [];

    return point.split(' ')
      .map((line: any) => line.trim())
      .filter((line: any) => line.length > 0);
  };

  const processDescription = (desc: any) => {
    if (!desc) return [];

    let result = [];

    if (desc.toLowerCase().includes('<ul>') && desc.toLowerCase().includes('<li>')) {
      const regex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      const matches = [...desc.matchAll(regex)];
      result = matches.map(match => match[1].trim());
    } else {
      result = desc.split('<br />')
        .map((line: any) => line.trim())
        .filter((line: any) => line.length > 0);
    }

    return result;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-[1000px] mx-auto border border-gray-100 relative mb-8">
      <Link href={item?.url ?? "/"} className="relative">
        <div className='overflow-hidden'>
          <div className={`
            relative transform-gpu
            ${isAnimating ? 'transition-transform duration-500 ease-in-out' : ''}
            ${isExpanded ? 'scale-100' : 'scale-[0.999]'}
          `}>
            {index == 0 && (
              <div className="inline-flex items-center absolute top-0 left-0 z-10 bg-orange-500">
                <div className="relative">
                  <div className="w-10 h-9 bg-orange-500 transform" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="bg-gray-50 text-black py-2 px-3">
                  <span className="font-medium text-sm">Editor's Choice</span>
                </div>
              </div>
            )}

            {index == 1 && (
              <div className="inline-flex items-center absolute top-0 left-0 z-10 bg-orange-500">
                <div className="relative">
                  <div className="w-10 h-9 bg-orange-500 transform" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="bg-gray-50 text-black py-2 px-3">
                  <span className="font-medium text-sm">Best Value</span>
                </div>
              </div>
            )}

            <div className="p-4 md:p-6">
              <div ref={contentRef}
                className={`
            flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out
            ${isAnimating ? 'transition-timing-function-ease-in-out' : ''}
          `}
                style={{ maxHeight: '300px' }}>
                <div className="featuredImage flex justify-center items-center md:w-48 shrink-0">
                  <div className="bg-white rounded-xl flex items-center justify-center mt-20">
                    <img src={item?.img} alt={item?.title} className="w-32 h-32 object-contain" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 line-clamp-2 mb-10 md:mb-0">{item?.title}</h2>
                      {item?.percentageSaved > 0 && (
                        <span className='bg-red-500 text-white py-0.5 px-2.5 rounded text-sm my-2 block w-fit'>-{item?.percentageSaved}%</span>
                      )}
                    </div>
                    <div className="polygon-tag flex flex-col items-center gap-2 mb-4 bg-blue-50 pt-3 pb-8 px-3 -mt-8">
                      <div className="text-3xl font-bold text-purple-600">{calculateRating(index + 1)?.[1]?.toFixed(1)}</div>
                      <div>{calculateRating(index + 1)?.[0]}</div>
                      <div className="flex gap-0.5">
                        {renderRating(calculateRating(index + 1)?.[1], index)}
                      </div>
                    </div>
                  </div>

                  {pointToArray(item?.specs_points)?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {pointToArray(item?.specs_points)?.map((scoreItem: any, idx: any) => (
                        <div key={idx} className="bg-orange-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Check className="w-5 h-5 text-orange-600" />
                            <div className="text-lg font-bold text-gray-900">{scoreItem}</div>
                          </div>
                          <div className="text-sm text-gray-500">{stringToArray(item?.specs)[idx]}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {stringToArray(item?.feats)?.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h3>
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {stringToArray(item?.feats).map((feature: any, idx: any) => (
                          <div key={idx} className="flex items-center gap-3 rounded-xl">
                            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                              <Check className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700 text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`${(stringToArray(item?.feats)?.length > 0 || pointToArray(item?.specs_points)?.length > 0) ? 'mt-8' : ''}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Highlights</h3>
                    {item?.cusDescContent1 ? (
                      <>
                        <div className="space-y-4 list-disc">
                          <div className="flex gap-3 bg-purple-50 p-4 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                              <Shield className='text-white w-4 h-4' />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">{item?.cusDescTitle1}</h4>
                              <p className="text-gray-600 text-sm">{item?.cusDescContent1}</p>
                            </div>
                          </div>

                          <div className="flex gap-3 bg-purple-50 p-4 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                              <Lightbulb className='text-white w-4 h-4' />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">{item?.cusDescTitle2}</h4>
                              <p className="text-gray-600 text-sm">{item?.cusDescContent2}</p>
                            </div>
                          </div>

                          <div className="flex gap-3 bg-purple-50 p-4 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                              <Users className='text-white w-4 h-4' />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">{item?.cusDescTitle3}</h4>
                              <p className="text-gray-600 text-sm">{item?.cusDescContent3}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) :
                      <ul className="space-y-4 list-disc pl-4">
                        {processDescription(item?.description)?.map((highlight: any, index: any) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isExpanded && (
          <div
            className={`
              absolute bottom-[72px] left-0 right-0 h-24 
              bg-gradient-to-t from-white to-transparent 
              pointer-events-none transition-opacity duration-500
              ${isAnimating ? 'opacity-0' : 'opacity-100'}
            `}
          />
        )}

        <div className="bg-white p-4 border-gray-100 sticky bottom-0 rounded-bl-2xl rounded-br-2xl">
          <div className="flex flex-col items-center gap-3">
            <button
              className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-all duration-300 w-fit text-center transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Deal
            </button>
            <button
              onClick={toggleExpand}
              disabled={isAnimating}
              className="px-8 py-2 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300 w-fit transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ProductReviewCards = ({ toplistData }: any) => (
  <div className='container'>
    {toplistData?.length > 0 && toplistData?.map((item: any, index: any) => (
      <ProfessionalCard item={item} index={index} key={item.id || `product-${index}`} />
    ))}
  </div>
);

export default ProductReviewCards;