import { notFound } from "next/navigation";
import PageContainer from "@/components/Layouts/PageContainer";
import Link from "next/link";

export async function generateMetadata({ params }: any) {
    const resolvedParams = await params;
    const decodedKeyword = decodeURIComponent(resolvedParams.search);

    return {
        title: `Search results for "${decodedKeyword}" - BestGadgetPro`,
        description: `Search results for ${decodedKeyword} on BestGadgetPro. Find reviews, guides, and articles about ${decodedKeyword}.`,
    };
}

function lastPath(url: string | null | undefined) {
    if (url) {
        const cleanUrl = url?.replace(/\/$/, '');
        return cleanUrl.split('/').pop() + '/';
    }
    return null;
}

export default async function Search({ params }: any) {
    const resolvedParams = await params;
    const keyword = decodeURIComponent(resolvedParams.search);
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1/search?term=${encodeURIComponent(keyword)}`,
            {
                headers: {
                    'Accept': 'application/json'
                },
                next: { revalidate: 60 }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const searchResults: any = await response.json();

        const categories = searchResults.filter((result: any) => result.type === 'category');
        const posts = searchResults.filter((result: any) => result.type === 'post');

        return (
            <PageContainer>
                <div className="container mx-auto px-4 py-8 mt-10">
                    {/* Search Results Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Results for: "{keyword}"</h1>
                        <p className="text-gray-600">
                            {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
                        </p>
                        <hr />
                    </div>

                    {/* Categories Section */}
                    {categories.length > 0 && (
                        <div className="mb-12 mt-10">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Categories</h2>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {categories.map((category: any) => (
                                    <Link
                                        href={'/' + lastPath(category?.url)}
                                        key={`category-${category.id}`}
                                        className="flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100"
                                    >
                                        <div className="text-sm">
                                            {category.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Posts Section */}
                    {posts.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Posts</h2>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post: any) => (
                                    <Link
                                        href={'/' + lastPath(post?.url)}
                                        key={`post-${post.id}`}
                                        className="group flex items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden p-4 gap-4"
                                    >
                                        {post.thumbnail && (
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <img
                                                    src={post?.thumbnail}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full rounded-md"
                                                />
                                            </div>
                                        )}
                                        <h3 className="text-sm line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results Message */}
                    {searchResults.length === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-semibold mb-4">No results found</h2>
                            <p className="text-gray-600">
                                We couldn't find any matches for "{keyword}". Try different keywords or check your spelling.
                            </p>
                        </div>
                    )}
                </div>
            </PageContainer>
        );
    } catch (error) {
        console.error('Error fetching search results:', error);
        return notFound();
    }
}