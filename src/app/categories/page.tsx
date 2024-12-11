import type { Metadata } from "next";
import {
    Smartphone, Monitor, Cpu, Home, Wrench, Heart, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Product Categories - BestGadgetPro",
    description: "Explore our comprehensive collection of product categories featuring expert reviews and detailed comparisons.",
};

// Mock data structure from WordPress menu
const categoryItems = {
    nodes: [
        {
            id: "electronics",
            label: "Electronics",
            path: "/categories/electronics",
            parentId: null,
            cssClasses: ["electronics", "trending"]
        },
        {
            id: "electronics-accessories",
            label: "Accessories",
            path: "/categories/electronics/accessories",
            parentId: "electronics",
            cssClasses: ["sub-category"]
        },
        {
            id: "camera-photo",
            label: "Camera & Photo",
            path: "/categories/electronics/camera-photo",
            parentId: "electronics",
            cssClasses: ["sub-category"]
        },
        {
            id: "phones-accessories",
            label: "Cell Phones & Accessories",
            path: "/categories/electronics/phones",
            parentId: "electronics",
            cssClasses: ["sub-category"]
        },
        {
            id: "computers",
            label: "Computers",
            path: "/categories/computers",
            parentId: null,
            cssClasses: ["computers", "trending"]
        },
        {
            id: "components",
            label: "Computer Components",
            path: "/categories/computers/components",
            parentId: "computers",
            cssClasses: ["sub-category"]
        },
        {
            id: "monitors",
            label: "Monitors",
            path: "/categories/computers/monitors",
            parentId: "computers",
            cssClasses: ["sub-category"]
        },
        {
            id: "home-kitchen",
            label: "Home & Kitchen",
            path: "/categories/home-kitchen",
            parentId: null,
            cssClasses: ["home"]
        },
        {
            id: "kitchen-dining",
            label: "Kitchen & Dining",
            path: "/categories/home-kitchen/dining",
            parentId: "home-kitchen",
            cssClasses: ["sub-category"]
        },
        {
            id: "smart-home",
            label: "Smart Home",
            path: "/categories/home-kitchen/smart-home",
            parentId: "home-kitchen",
            cssClasses: ["sub-category"]
        }
    ]
};

// Map icons to categories based on cssClasses
const getCategoryIcon = (cssClasses: string[] = []) => {
    const iconMap: { [key: string]: JSX.Element } = {
        'electronics': <Smartphone className="w-6 h-6" />,
        'computers': <Cpu className="w-6 h-6" />,
        'home': <Home className="w-6 h-6" />,
        'tools': <Wrench className="w-6 h-6" />,
        'health': <Heart className="w-6 h-6" />,
        'beauty': <Sparkles className="w-6 h-6" />
    };

    const iconClass = cssClasses.find(cls => iconMap[cls.toLowerCase()]);
    return iconMap[iconClass?.toLowerCase() || 'default'] || <Monitor className="w-6 h-6" />;
};

// Helper to organize categories into parent-child structure
const organizeCategories = (items: any[]) => {
    const parentCategories = items.filter(item => !item.parentId);

    return parentCategories.map(parent => ({
        ...parent,
        subcategories: items.filter(item => item.parentId === parent.id)
    }));
};

export default function CategoriesPage() {
    const organizedCategories = organizeCategories(categoryItems.nodes);

    return (
        <div className="container min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Product Categories
                        </h1>
                        <p className="text-lg text-gray-300">
                            Explore our comprehensive collection of product categories, featuring expert reviews and detailed comparisons.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {organizedCategories.map((category) => (
                            <div key={category.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                <div className="p-6 flex flex-col min-h-[280px]">  {/* Thêm flex và min-height */}
                                    {/* Category Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                                {getCategoryIcon(category.cssClasses)}
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-900">
                                                    {category.label}
                                                </h2>
                                                {category.cssClasses?.includes('trending') && (
                                                    <span className="inline-flex items-center text-xs text-blue-600 mt-1">
                                                        <span className="relative flex h-2 w-2 mr-1">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                                        </span>
                                                        Trending
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subcategories */}
                                    <div className="flex-1"> {/* Thêm flex-1 để đẩy link xuống dưới */}
                                        {category.subcategories?.length > 0 && (
                                            <ul className="space-y-3">
                                                {category.subcategories.map((sub: any) => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            href={sub.path}
                                                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                                                        >
                                                            <span className="h-1 w-1 bg-gray-300 rounded-full mr-3"></span>
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* View All Link */}
                                    <div className="pt-4 border-t mt-auto"> {/* Thêm mt-auto */}
                                        <Link
                                            href={category.path}
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            View All {category.label}
                                            <span className="ml-1">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}