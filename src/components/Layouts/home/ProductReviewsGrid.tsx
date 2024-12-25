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
    uri: "/electronics",
    trending: true
  },
  {
    name: 'Home & Kitchen',
    uri: "/home-kitchen",
    count: 98,
  },
  {
    name: 'Computers',
    count: 124,
    uri: "/computers-accessories-34081",
    trending: true
  },
  {
    name: 'Health & Household',
    uri: "/health-household",
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
              <Link href={category?.uri ?? "/"}>
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Reviews */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Large Featured Card */}
        <Link href={"https://bestgadgetpro.com/best-smart-doorbell-cameras-home-security/"} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border">
          <div className="aspect-video relative">
            <Image
              src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/possessed-photography-VnKD8piPEcQ-unsplash-scaled.jpg"
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
              <h4 className="text-xl font-bold text-white mb-2 line-clamp-2">
                10 Best Smart Doorbell Cameras Tested for Home Security in 2025
              </h4>
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
              {['	Electronics', 'Home Security Systems', 'Security & Surveillance'].map((pro, index) => (
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
              <div
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group"
              >
                Read Review
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid of Smaller Cards */}
        <div className="grid gap-6">
          <Link
            href={'https://bestgadgetpro.com/best-gaming-headsets-wireless-wired/'}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border flex flex-wrap"
          >
            <div className="w-40 h-full relative flex-shrink-0">
              <Image
                src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/florian-olivo-Mf23RF8xArY-unsplash-scaled.jpg"
                alt="Product Review"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <div className="text-sm text-blue-600 mb-2">Video Games</div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                9 Best Gaming Headsets in 2025 - Pro-Tested Wireless &amp; Wired Models
              </h4>
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
          </Link>

          <Link
            href={"https://bestgadgetpro.com/best-wireless-gaming-headsets-pro-review/"}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border flex flex-wrap"
          >
            <div className="w-40 h-full relative flex-shrink-0">
              <Image
                src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/fredrick-tendong-6ou8gWpS9ns-unsplash-scaled.jpg"
                alt="Product Review"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <div className="text-sm text-blue-600 mb-2">Video Games</div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                10 Best Wireless Gaming Headsets - Pro-Tested for Immersive Audio 2025
              </h4>
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
          </Link>
        </div>
      </div>

      {/* Latest Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href={"https://bestgadgetpro.com/best-translation-earbuds-reviews/"}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-blue-600 mb-2">Electronic Dictionaries</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  9 Best Translation Earbuds - Expert-Tested Real-Time Language Devices
                </h4>
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
              <div>9.9/10</div>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/1-Best_Wireless_Translation_Earbuds-900Xx540.webp"
                alt="Product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">34+ models tested</div>
              <div
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group/link text-sm md:text-base"
              >
                View Details
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"https://bestgadgetpro.com/best-travel-routers-portable-wifi/"}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-blue-600 mb-2">Computers & Accessories</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  8 Best Travel Routers for Secure Wi-Fi on the Go - Expert Tested 2025
                </h4>
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
              <div>9.6/10</div>
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/nature-2564502_1280.jpg"
                alt="Product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">48+ models tested</div>
              <div
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group/link text-sm md:text-base"
              >
                View Details
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={"https://bestgadgetpro.com/best-home-projectors-movie-theater/"}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border"
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-blue-600 mb-2">Video Projectors</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  9 Best Home Projectors for Movie Nights - Expert Tested &amp; Compared
                </h4>
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
                src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/technology-7007329_1280.jpg"
                alt="Product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">52+ models tested</div>
              <div
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 group/link text-sm md:text-base"
              >
                View Details
                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}