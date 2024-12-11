import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Zap, Clock, TrendingUp, Crown } from 'lucide-react';

type ProductReview = {
  category: string;
  title: string;
  description: string;
  image: string;
  score: number;
  updateFrequency: 'Weekly' | 'Monthly';
  isFeatured?: boolean;
  pros: string[];
  testCount: number;
  slug: string;
}

const categories = [
  { 
    name: 'Electronics',
    count: 156,
    trending: true
  },
  { 
    name: 'Home & Kitchen',
    count: 98,
  },
  { 
    name: 'Computers',
    count: 124,
    trending: true
  },
  { 
    name: 'Health & Household',
    count: 87,
  },
];

export default function ProductReviewsGrid() {
  return (
    <div className="container space-y-12 mt-10">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-medium">Expert Reviews</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Latest Product Reviews
            </h2>
            <p className="text-gray-400">
              In-depth analysis based on rigorous testing and real-world usage
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="group relative bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl transition-all hover:ring-2 hover:ring-blue-500/50"
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">({category.count})</span>
                </div>
                {category.trending && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Hot
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Reviews */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Large Featured Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border">
          <div className="aspect-video relative">
            <Image
              src="/api/placeholder/800/400"
              alt="Featured Review"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Editor's Choice
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                Top 10 Stealth Radar Detectors For Urban Driving 2024
              </h3>
              <div className="flex items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Weekly Updates
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  9.6/10
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Long Range Detection', 'False Alert Filtering', 'Stealth Technology'].map((pro, index) => (
                <span 
                  key={index}
                  className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-sm"
                >
                  {pro}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500">
                Based on 120+ hours of testing
              </div>
              <Link 
                href="/reviews/radar-detectors"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group"
              >
                Read Review
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Grid of Smaller Cards */}
        <div className="grid gap-6">
          {[1, 2].map((item) => (
            <div 
              key={item}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border flex flex-wrap"
            >
              <div className="w-40 h-40 relative flex-shrink-0">
                <Image
                  src="/api/placeholder/160/160"
                  alt="Product Review"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <div className="text-sm text-blue-600 mb-2">Breathalyzers</div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  8 Premium Smartphone Breathalyzers Based on Lab Testing
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Monthly
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    9.4/10
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div 
            key={item}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-blue-600 mb-2">Sheets & Pillowcases</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    Top Grounding Bed Sheets Reviews for Better Sleep 2024
                  </h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Weekly
                </div>
                <div>9.8/10</div>
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/api/placeholder/400/300"
                  alt="Product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">48+ models tested</div>
                <Link 
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group/link text-sm md:text-base"
                >
                  View Details
                  <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}