import { Smartphone, Laptop, Tv, Headphones, Watch, Speaker } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { icon: Smartphone, label: 'Smartphones', href: '/category/smartphones' },
  { icon: Laptop, label: 'Laptops', href: '/category/laptops' },
  { icon: Tv, label: 'TVs', href: '/category/tvs' },
  { icon: Headphones, label: 'Audio', href: '/category/audio' },
  { icon: Watch, label: 'Wearables', href: '/category/wearables' },
  { icon: Speaker, label: 'Smart Home', href: '/category/smart-home' },
];

export function CategoryGrid() {
  return (
    <div className="container mx-auto px-4 py-6 overflow-x-auto">
      <div className="flex justify-center min-w-max">
        <div className="grid grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="flex flex-col items-center gap-2 px-8 py-4 text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <category.icon className="h-6 w-6" />
              <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}