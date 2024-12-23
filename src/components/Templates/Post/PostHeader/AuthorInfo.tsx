import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';
import { ShareButton } from './ShareButton';
import Link from 'next/link';

export function AuthorInfo({ post, publishedAt }: any) {
    const author = post?.author?.node
    const authorAvatar = author?.ncUserMeta?.featuredImage?.node?.sourceUrl || author?.ncUserMeta?.backgroundImage?.node?.sourceUrl || "/"
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-6 border-y border-gray-200">
            <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 flex-shrink-0">
                    <Link href={author?.uri ?? "/"}>
                        <Image
                            src={authorAvatar}
                            alt={author?.name ?? "BestGadgetPro Expert"}
                            fill
                            className="rounded-full object-cover"
                            sizes="48px"
                        />
                    </Link>
                </div>
                <div>
                    <Link href={author?.uri ?? "/"} className="font-medium text-gray-900">{author?.name}</Link>
                    <div className="text-sm text-gray-500">{author?.ncUserMeta?.ncBio}</div>
                </div>
            </div>
            <div className="flex sm:block items-center gap-6 sm:ml-auto text-sm text-gray-500">
                <div className="space-x-2">
                    <span>Last Updated:</span>
                    <time dateTime={publishedAt}>{formatDate(publishedAt, true)}</time>
                </div>
                <div className='mt-0 md:mt-3'>
                    <ShareButton url={post?.url} title={post?.title} />
                </div>
            </div>
        </div>
    );
}