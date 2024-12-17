import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getLastPath } from '@/app/categories/page';

export function Breadcrumb({ items }: any) {
  return (
    <nav className="flex flex-nowrap items-center gap-2 text-sm text-gray-600 mb-6 overflow-x-auto">
      {items.map((item: any, index: any) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mr-2 text-gray-400" />}
          <Link
            href={getLastPath(item?.uri) ?? "/"}
            className="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            {item?.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}