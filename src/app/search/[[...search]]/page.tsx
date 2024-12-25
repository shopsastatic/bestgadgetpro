import { notFound } from "next/navigation";
import PageContainer from "@/components/Layouts/PageContainer";
import Link from "next/link";

// Generate dynamic metadata
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
        // Fetch search results
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1/search?term=${encodeURIComponent(keyword)}`,
            {
                headers: {
                    'Accept': 'application/json'
                },
                next: { revalidate: 60 } // Cache results for 60 seconds
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
                    <h1 className="text-3xl font-bold mb-8">
                        Search Results for "{keyword}"
                    </h1>

                    {/* Categories Section */}
                    {categories.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6 mt-14">Categories</h2>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {categories.map((category: any) => (
                                    <Link
                                        href={'/' + lastPath(category?.url)}
                                        key={`category-${category.id}`}
                                        className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 block"
                                    >
                                        <div className="text-base font-medium">{category.title}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Posts Section */}
                    {posts.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6 mt-14">Posts</h2>
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post: any) => (
                                    <Link
                                        href={'/' + lastPath(post?.url)}
                                        key={`post-${post.id}`}
                                        className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                                    >
                                        {post.thumbnail && (
                                            <div className="relative h-48">
                                                <img
                                                    src={post?.thumbnail}
                                                    alt={post.title}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4">
                                            <h3 className="font-medium text-lg line-clamp-2">
                                                {post.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results Message */}
                    {searchResults.length === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-semibold mb-4">No results found</h2>
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