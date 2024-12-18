import { AuthorInfo } from './AuthorInfo';
import { Breadcrumb } from './Breadcrumb';

interface PostHeaderProps {
    post: any,
}

export function PostHeader({
    post
}: PostHeaderProps) {
    return (
        <div className="container mt-14 mb-12">
            <Breadcrumb items={post?.categories?.nodes} />

            <div className="flex items-start justify-between gap-4 mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {post?.title}
                </h1>
            </div>
            
            <AuthorInfo
                post={post}
                publishedAt={post?.date}
            />
        </div>
    );
}