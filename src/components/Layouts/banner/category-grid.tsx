import { Smartphone, Laptop, Tv, Headphones, Watch, Speaker, Home } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { icon: Smartphone, label: 'Electronics', href: '/electronics' },
  { icon: Home, label: 'Home & Kitchen', href: '/home-kitchen' },
  { icon: Laptop, label: 'Computers', href: '/computers-accessories-34081' },
  { icon: Headphones, label: 'Audio', href: '/home-audio-63157' },
  { icon: Speaker, label: 'Speakers', href: '/speakers-18917' },
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