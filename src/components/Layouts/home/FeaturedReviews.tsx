'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, BookOpen, History } from 'lucide-react';

const reviews = [
    {
        category: "Monitors",
        image: "/api/placeholder/400/300",
        badges: ["Editor's Choice", "Best Value"],
        title: "Top 12 High-Refresh Gaming Monitors Worth Every Dollar",
        description: "Comprehensive comparison of top gaming laptops with the latest GPUs and processors",
        rating: 4.8,
        daysAgo: 2,
        readTime: 15,
    },
    {
        category: "Tools & Home Improvement",
        image: "/api/placeholder/400/300",
        badges: ["Best Seller", "Most Reviewed"],
        title: "Best Air Purifiers 2024 - Top 10 Expert Tested Models",
        description: "In-depth analysis of the most effective air purifiers for different room sizes",
        rating: 4.9,
        daysAgo: 7,
        readTime: 12,
    },
    {
        category: "Video Games",
        image: "/api/placeholder/400/300",
        badges: ["Premium Pick"],
        title: "Best Noise-Cancelling Gaming Headsets 2024",
        description: "Detailed comparison of high-end noise-cancelling headphones with sound quality tests",
        rating: 4.7,
        daysAgo: 3,
        readTime: 18,
    }
];

const tabs = [
    {
        id: 'popular',
        label: 'Popular Reviews',
        icon: <TrendingUp className="w-4 h-4" />
    },
    {
        id: 'buying',
        label: 'Buying Guides',
        icon: <BookOpen className="w-4 h-4" />
    },
    {
        id: 'latest',
        label: 'Latest Updates',
        icon: <History className="w-4 h-4" />
    }
];

export default function FeaturedReviews() {
    const [activeTab, setActiveTab] = useState('popular');

    const getReviewsByTab = (tabId: string) => {
        switch (tabId) {
            case 'buying':
                return reviews.filter(review => review.category === "Tools & Home Improvement");
            case 'latest':
                return reviews.sort((a, b) => a.daysAgo - b.daysAgo);
            default:
                return reviews;
        }
    };


    const currentReviews = getReviewsByTab(activeTab);

    return (
        <div className="max-w-[1000px] mx-auto px-4 py-12 mb-20">
            {/* Header with nav tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Featured Reviews & Guides</h2>
                    <p className="text-gray-600 text-sm mt-1">Discover our most popular product reviews and buying guides</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-colors ${activeTab === tab.id
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6">
                {currentReviews.map((review, index) => (
                    <Link
                        key={index}
                        href="#"
                        className="group bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-all"
                    >
                        <div className="flex flex-col sm:flex-row">
                            {/* Image Section */}
                            <div className="relative w-full sm:w-[280px] h-[200px] sm:h-full flex-shrink-0">
                                <Image
                                    src={review.image}
                                    alt={review.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-sm px-3 py-1 rounded-full">
                                        {review.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-6">
                                <div className="flex gap-2 mb-3 flex-wrap">
                                    {review.badges.map((badge, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-xs px-2 py-1 rounded-full ${badge === "Editor's Choice" || badge === "Premium Pick"
                                                ? 'bg-purple-100 text-purple-700'
                                                : badge === "Best Value" || badge === "Best Seller"
                                                    ? 'bg-blue-100 text-blue-700'
                                                    : 'bg-pink-100 text-pink-700'
                                                }`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {review.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {review.description}
                                </p>

                                <div className="flex items-center flex-wrap gap-y-2 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span>{review.rating}/5.0</span>
                                    </div>
                                    <span className="mx-3">•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{review.daysAgo === 7 ? '1 week ago' : `${review.daysAgo} days ago`}</span>
                                    </div>
                                    <span className="mx-3">•</span>
                                    <span>{review.readTime} min read</span>
                                    <ArrowRight className="w-4 h-4 ml-auto text-blue-500 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    View More
                </button>
            </div>
        </div>
    );
}