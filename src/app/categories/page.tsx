import type { Metadata } from "next";
import {
    Smartphone, Monitor, Cpu, Home, Wrench, Heart, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import PageContainer from "@/components/Layouts/PageContainer";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { CategoriesQuery } from "./CategoriesQuery";
import { print } from "graphql/language/printer";

export const metadata: Metadata = {
    title: "Product Categories - BestGadgetPro",
    description: "Explore our comprehensive collection of product categories featuring expert reviews and detailed comparisons.",
};

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
export function getLastPath(url: any) {
    if (url) {
        const cleanUrl = url?.replace(/\/$/, '');
        return cleanUrl.split('/').pop() + '/';
    }
    return null;
}

function transformMenuItems(menuItems: any) {
    const result: any = [];
    let currentParent: any | null = null;
  
    menuItems.nodes.forEach((item: any) => {
      if (item.parentId === null) {
        const parentItem = {
          ...item,
          childs: []
        };
        result.push(parentItem);
        currentParent = parentItem;
      } else if (currentParent) {
        currentParent.childs?.push(item);
      }
    });
  
    return result;
  }

export default async function CategoriesPage() {
    try {
        const {menuItems} = await fetchGraphQL<any>(print(CategoriesQuery));
        const transformedMenu = transformMenuItems(menuItems);
        
        return (
            <PageContainer>
                <div className="container min-h-screen bg-gray-50 mt-10 mb-20">
                    {/* Header */}
                    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 rounded-lg">
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
                        <div className="mx-auto px-0 md:px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {transformedMenu?.filter((category: any) =>
                                    category.slug !== 'uncategorized'
                                )?.map((category: any) => (
                                    <div key={category.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                                        <div className="p-6 flex flex-col min-h-[350px]">
                                            {/* Category Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                                        {getCategoryIcon(category.cssClasses)}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-lg font-semibold text-gray-900">
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
                                                {category.childs?.length > 0 && (
                                                    <ul className="space-y-3">
                                                        {category.childs?.slice(0, 5).map((sub: any) => (
                                                            <li key={sub.id}>
                                                                <Link
                                                                    href={getLastPath(sub.uri) ?? "/"}
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
                                                    href={getLastPath(category.uri) ?? "/"}
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
            </PageContainer>
        );
    } catch (error) {
        console.log(error);
        return notFound()
    }
}