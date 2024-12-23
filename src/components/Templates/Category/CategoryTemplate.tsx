import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, Star, TrendingUp } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";
import { getLastPath } from "@/app/categories/page";


export const metadata: Metadata = {
    title: "Computers & Accessories - BestGadgetPro",
    description: "Explore our comprehensive collection of computer products, accessories and expert reviews.",
};

export default async function CategoryTemplate({ node }: any) {
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
                                    {node?.name}
                                </h1>
                                <p className="text-gray-300 max-w-2xl">
                                    {node?.description ?? "Explore our comprehensive collection of products and accessories, featuring in-depth reviews and expert recommendations."}
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
                            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-0">
                                <h2 className="font-semibold text-gray-900 mb-4">Browse By Category</h2>
                                <div className="space-y-2">
                                    {node?.children?.nodes.map((subcat: any, index: any) => (
                                        <Link
                                            key={index}
                                            href={getLastPath(subcat.uri) ?? "/"}
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
                                    {node?.children?.nodes?.[0]?.posts?.nodes?.slice(0, 2)?.map((article: any, index: any) => (
                                        <Link
                                            key={index}
                                            href={article.uri ?? "/"}
                                            className="group relative"
                                        >
                                            <div className="aspect-[16/9] rounded-lg bg-gray-100 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Image
                                                        src={article.featuredImage.node.sourceUrl ?? "/"}
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
                                                        <span className="text-white text-sm">{index == 1 ? 4.7 : 4.9}</span>
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
                            {node?.children?.nodes?.[1]?.posts?.nodes?.slice(0, 4)?.length > 0 && (
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-semibold text-gray-900">Latest Reviews</h2>
                                        <Link
                                            href={getLastPath(node.children.nodes?.[1]?.uri) ?? "/"}
                                            className="text-blue-600 hover:text-blue-700 inline-flex items-center text-sm font-medium group"
                                        >
                                            View All
                                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {node?.children?.nodes?.[1]?.posts?.nodes?.slice(0, 4)?.map((article: any, index: any) => (
                                            <Link
                                                key={index}
                                                href={article.uri ?? "/"}
                                                className="flex gap-4 items-start group"
                                            >
                                                <div className="w-20 h-20 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={article.featuredImage.node.sourceUrl ?? "/"}
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}
