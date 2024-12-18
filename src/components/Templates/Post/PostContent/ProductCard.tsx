'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Star, Check, Shield, Heart, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';

const ProfessionalCard = ({ item, index }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null) as any;
  const [fullHeight, setFullHeight] = useState('350px');

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
      const newHeight = isExpanded ? '350px' : fullHeight;
      if (contentRef.current) {
        contentRef.current.style.maxHeight = newHeight;
      }
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-[1000px] mx-auto border border-gray-100 relative mb-8">
      <div className="relative">
        <div
          className='overflow-hidden'
        >
          <div className={`
            relative transform-gpu
            ${isAnimating ? 'transition-transform duration-500 ease-in-out' : ''}
            ${isExpanded ? 'scale-100' : 'scale-[0.999]'}
          `}>
            <div className="inline-flex items-center absolute top-4 left-4 z-10">
              <div className="relative">
                <div className="w-12 h-9 bg-orange-500 transform" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-50 text-black py-2 px-3">
                <span className="font-medium text-sm">Editor's Choice</span>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <div ref={contentRef}
                className={`
            flex flex-col md:flex-row gap-6 transition-all duration-500 ease-in-out
            ${isAnimating ? 'transition-timing-function-ease-in-out' : ''}
          `}
                style={{ maxHeight: '350px' }}>
                <div className="flex justify-center items-center md:w-48 shrink-0">
                  <div className="bg-white rounded-xl flex items-center justify-center mt-10">
                    <img src={item?.img} alt={item?.title} className="w-32 h-32 object-contain" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mb-5">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 line-clamp-3">{item?.title}</h2>
                    </div>
                    <div className="polygon-tag flex flex-col items-center gap-2 mb-4 bg-blue-50 pt-3 pb-8 px-3 -mt-8">
                      <div className="text-3xl font-bold text-purple-600">9.9</div>
                      <div>Exceptional</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 gap-0 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { score: '9.9', label: 'High Accuracy Detection' },
                      { score: '9.9', label: 'Fast 3-Second Results' },
                      { score: '9.7', label: 'Multi-Purpose' }
                    ].map((scoreItem, idx) => (
                      <div key={idx} className="bg-orange-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <div className="text-lg font-bold text-gray-900">{scoreItem.score}</div>
                        </div>
                        <div className="text-sm text-gray-500">{scoreItem.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h3>
                    <div className="grid grid-cols-1 gap-4 mb-8">
                      {[
                        'Detects multiple radiation types with upgraded Geiger-Müller tube',
                        'Quick 3-second results with color touchscreen display',
                        'Tests water quality and environmental radiation',
                        'Professional Grade Results'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-xl">
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700 text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Highlights</h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: <Shield className="w-4 h-4 text-white" />,
                          title: 'Key Features',
                          description: 'Advanced radiation detection, water quality testing, and quick results display make this device a comprehensive safety tool.'
                        },
                        {
                          icon: <Lightbulb className="w-4 h-4 text-white" />,
                          title: 'Ideal for Environmental Safety Monitoring',
                          description: 'Perfect for homeowners, travelers, and safety professionals who need reliable radiation and water quality monitoring.'
                        },
                        {
                          icon: <Users className="w-4 h-4 text-white" />,
                          title: 'Praised for Versatile Testing Capabilities',
                          description: 'Users appreciate the device\'s ability to test multiple elements, from radiation to water quality, with quick and accurate results.'
                        }
                      ].map((highlight, idx) => (
                        <div key={idx} className="flex gap-3 bg-purple-50 p-4 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                            {highlight.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">{highlight.title}</h4>
                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
            <Link
              href={item?.url ?? "/"}
              className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-all duration-300 w-fit text-center transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Deal
            </Link>
            <button
              onClick={toggleExpand}
              disabled={isAnimating}
              className="px-8 py-2 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300 w-fit transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
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