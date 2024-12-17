"use client"

import React, { useState } from 'react';
import { Search, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from '../MobileNav';

export const Header = ({ menuItems, menuSidebarItems }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log(menuSidebarItems)

  return (
    <>
      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Header */}
      <header className="bg-gray-900 text-gray-100">
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href={"/"} className="flex items-center">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">T</span>
                </div>
                <span className="text-xl font-bold ml-2">TechReviews</span>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="flex items-center">
              <Link href={"/"} className='block mr-4'>
                <Image
                  src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/us-logo.webp"
                  width={24}
                  height={24}
                  alt='US Logo BestGadgetPro'
                />
              </Link>
              <button
                className="hover:bg-gray-800 rounded-lg p-0 md:p-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="hidden md:block bg-gray-800">
          <nav className="container mx-auto !py-0">
            <ul className="flex items-center justify-between h-12 overflow-x-auto">
              {menuItems?.nodes?.map((menu: any, index: any) => (
                <Link href={menu?.uri ?? "/"} key={index}>
                  <li>
                    <button className="w-full text-left text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      {menu.label}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;