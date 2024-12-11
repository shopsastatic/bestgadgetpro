import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, Star, TrendingUp } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
    title: "Computers & Accessories - BestGadgetPro",
    description: "Explore our comprehensive collection of computer products, accessories and expert reviews.",
};

const subcategories = [
    { name: "Computer Accessories & Peripherals", count: 45, path: "/categories/computers/accessories" },
    { name: "Computer Components", count: 32, path: "/categories/computers/components" },
    { name: "Computers & Tablets", count: 28, path: "/categories/computers/tablets" },
    { name: "Monitors", count: 25, path: "/categories/computers/monitors" },
    { name: "Networking Products", count: 20, path: "/categories/computers/networking" },
];

const featuredArticles = [
    {
        title: "Top 10 Premium Tablets for Creative Professionals – 2024 Review",
        image: "/api/placeholder/160/160",
        category: "Computer Accessories & Peripherals",
        rating: 4.8,
        path: "/reviews/premium-tablets-2024",
        trending: true
    },
    {
        title: "Competitive Gaming Headsets: Pro Player Rated 2024",
        image: "/api/placeholder/160/160",
        category: "Computer Accessories & Peripherals",
        rating: 4.7,
        path: "/reviews/gaming-headsets-2024",
        trending: true
    },
    {
        title: "Best Large-Screen Tablets for Entertainment",
        image: "/api/placeholder/160/160",
        category: "Computers & Tablets",
        rating: 4.6,
        path: "/reviews/large-screen-tablets-2024"
    },
    {
        title: "Most Powerful Gaming Tablets 2024",
        image: "/api/placeholder/160/160",
        category: "Computers & Tablets",
        rating: 4.9,
        path: "/reviews/gaming-tablets-2024"
    }
];

export default function CategoryDetail() {
    return (
        <PageContainer>
            <div className="container min-h-screen bg-gray-50 mt-10 mb-32">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-12 pb-24 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
                    <div className="container mx-auto px-4 relative">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="relative">
                                <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                                    <Cpu className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Computers & Accessories
                                </h1>
                                <p className="text-gray-300 max-w-2xl">
                                    Explore our comprehensive collection of computer products and accessories, featuring in-depth reviews and expert recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="mx-auto px-0 relative z-10 mt-10">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Subcategories Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="font-semibold text-gray-900 mb-4">Browse By Category</h2>
                                <div className="space-y-2">
                                    {subcategories.map((subcat, index) => (
                                        <Link
                                            key={index}
                                            href={subcat.path}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                        >
                                            <span className="text-gray-600 group-hover:text-gray-900">{subcat.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div className="lg:col-span-8">
                            {/* Trending Reviews */}
                            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                                <div className="flex items-center gap-2 text-blue-600 mb-6">
                                    <TrendingUp className="w-5 h-5" />
                                    <h2 className="text-xl font-semibold">Trending Reviews</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {featuredArticles.filter(a => a.trending).map((article, index) => (
                                        <Link
                                            key={index}
                                            href={article.path}
                                            className="group relative"
                                        >
                                            <div className="aspect-[16/9] rounded-lg bg-gray-100 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Image
                                                        src={article.image}
                                                        alt={article.title}
                                                        width={160}
                                                        height={160}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                                                <div className="absolute bottom-0 p-4">
                                                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                                                        <Star className="w-4 h-4 fill-current" />
                                                        <span className="text-white text-sm">{article.rating}</span>
                                                    </div>
                                                    <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                                                        {article.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Latest Reviews */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-semibold text-gray-900">Latest Reviews</h2>
                                    <Link
                                        href="/categories/computers/all"
                                        className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium group"
                                    >
                                        View All
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {featuredArticles.filter(a => !a.trending).map((article, index) => (
                                        <Link
                                            key={index}
                                            href={article.path}
                                            className="flex gap-4 items-start group"
                                        >
                                            <div className="w-20 h-20 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={80}
                                                    height={80}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-1 text-sm text-yellow-500 mb-1">
                                                    <Star className="w-3 h-3 fill-current" />
                                                    <span>{article.rating}</span>
                                                </div>
                                                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                    {article.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}