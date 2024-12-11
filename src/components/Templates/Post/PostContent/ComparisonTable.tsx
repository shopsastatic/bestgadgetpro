import { ProductRating } from './ProductRating';

export function ComparisonTable({ products }: any) {
    const getCustomRating = (index: number): number => {
        const predefinedRatings = [9.9, 9.7, 9.4, 9.2, 9.0, 8.9, 8.7, 8.5, 8.4, 8.2];
        return index < predefinedRatings.length ? predefinedRatings[index] : 8.0;
    };

    return (
        <div className="container mt-12">
            <h1>Comparison Table</h1>
            {/* Header - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-3 bg-gray-100 rounded-t-lg">
                <div className="p-4 font-semibold text-gray-900">Product</div>
                <div className="p-4 font-semibold text-gray-900">Rating</div>
                <div className="p-4 font-semibold text-gray-900 text-center">Actions</div>
            </div>

            {/* Product Grid */}
            <div className="bg-white shadow-sm rounded-lg md:rounded-none md:rounded-b-lg divide-y divide-gray-200">
                {products.map((product: any, index: any) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 hover:bg-gray-50"
                    >
                        <div className="text-gray-900 font-medium">
                            <div className="line-clamp-2">{product?.title}</div>
                        </div>

                        <div className="flex items-center">
                            <ProductRating rating={getCustomRating(index)} showScore={false} />
                        </div>

                        <div className="flex justify-center md:justify-center items-center">
                            <a
                                href={product.retailerUrl}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Check Price
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}