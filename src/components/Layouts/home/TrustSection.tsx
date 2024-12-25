import React from 'react';
import { Users, Star, Clock, Award, Shield, BarChart2, ThumbsUp, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function TrustSection() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header section */}
                <div className="text-center relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
                        Trusted by Millions
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        Our commitment to data-driven analysis and unbiased reviews sets us apart
                    </p>

                    {/* Central Stats Circle */}
                    <div className="relative max-w-lg mx-auto mb-32">
                        {/* Center piece */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">2M+</div>
                                <div className="text-sm text-blue-200">Active Users</div>
                            </div>
                        </div>

                        {/* Circular stats */}
                        {[
                            {
                                position: "top-0 -translate-x-1/2 -translate-y-1/2",
                                value: "100K+",
                                label: "Reviews",
                                icon: <Star className="w-5 h-5" />
                            },
                            {
                                position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
                                value: "10+",
                                label: "Years",
                                icon: <Clock className="w-5 h-5" />
                            },
                            {
                                position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                                value: "50+",
                                label: "Experts",
                                icon: <Award className="w-5 h-5" />
                            },
                            {
                                position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
                                value: "1M+",
                                label: "Data Points",
                                icon: <BarChart2 className="w-5 h-5" />
                            }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`absolute ${stat.position} bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all group`}
                                style={{
                                    width: "120px",
                                    height: "120px"
                                }}
                            >
                                <div className="h-full flex flex-col items-center justify-center">
                                    <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-400">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-44 mb-10">
                    {[
                        {
                            icon: <Shield />,
                            title: "Independent",
                            description: "No paid reviews, ever",
                            highlight: "25,000+ Unbiased Reviews",
                            color: "text-blue-400"
                        },
                        {
                            icon: <LineChart />,
                            title: "Data-Driven",
                            description: "Rigorous testing process",
                            highlight: "50,000+ Testing Hours",
                            color: "text-blue-400"
                        },
                        {
                            icon: <ThumbsUp />,
                            title: "Community Verified",
                            description: "Real user feedback",
                            highlight: "150,000+ User Reviews",
                            color: "text-blue-400"
                        },
                        {
                            icon: <Clock />,
                            title: "Always Current",
                            description: "Regular updates",
                            highlight: "Daily Price Tracking",
                            color: "text-blue-400"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all h-full"> {/* Thêm h-full */}
                                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 min-h-[40px]"> {/* Thêm min-height */}
                                    {feature.description}
                                </p>
                                <div className="text-blue-300 text-sm font-medium">
                                    {feature.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href={"/categories"}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 inline-flex items-center gap-2">
                            Start Reading Reviews
                            <Star className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}