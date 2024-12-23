"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { Search, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from '../MobileNav';

// Cache structure to store search results
const searchCache = new Map();

// Interface for search results
interface SearchResult {
  id: number;
  title: string;
  type: 'post' | 'category';
  url: string;
}

export function lastPath(url: any) {
  if (url) {
    const cleanUrl = url?.replace(/\/$/, '');
    return cleanUrl.split('/').pop() + '/';
  }
  return null;
}

export const Header = ({ menuItems, menuSidebarItems }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to fetch search results
  const fetchSearchResults = async (term: string) => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1/search?term=${encodeURIComponent(term)}`;
      console.log('Fetching from:', apiUrl);

      const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      searchCache.set(term, data);
      setSearchResults(data);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const useDebounce = (callback: Function, delay: number) => {
    const timeoutRef = React.useRef<NodeJS.Timeout>();
  
    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);
  
    return React.useCallback((...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
  
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }, [callback, delay]);
  };

  // Debounced search function
  const debouncedSearch = useDebounce((term: string) => {
    if (term.length > 2) {
      setIsSearching(true);
      fetchSearchResults(term);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, 500);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(true);
    debouncedSearch(value);
  };

  // Clear cache entries older than 1 hour
  useEffect(() => {
    const clearOldCache = () => {
      const now = Date.now();
      searchCache.forEach((value, key) => {
        if (now - value.timestamp > 3600000) { // 1 hour
          searchCache.delete(key);
        }
      });
    };

    const interval = setInterval(clearOldCache, 3600000); // Run every hour
    return () => clearInterval(interval);
  }, []);

  const SearchDropdown = () => (
    <div className="absolute top-full left-0 right-0 bg-gray-800 rounded-b-lg shadow-lg mt-1 max-h-96 overflow-y-auto z-50">
      {isSearching ? (
        <div className="p-4 text-center text-gray-400">Searching...</div>
      ) : searchResults.length > 0 ? (
        <div className="py-2">
          {searchResults.map((result) => (
            <Link
              href={lastPath(result?.url ?? "/") ?? "/"}
              key={`${result.type}-${result.id}`}
              onClick={() => setShowDropdown(false)}
            >
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <div className="text-sm text-gray-200">{result.title}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {result.type === 'post' ? 'Article' : 'Category'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : searchTerm.length > 2 ? (
        <div className="p-4 text-center text-gray-400">No results found</div>
      ) : null}
    </div>
  );

  return (
    <>
      <MobileNavigation
        menuSidebarItems={menuSidebarItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <header className="bg-gray-900 text-gray-100">
        <div className="container mx-auto py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
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
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowDropdown(true)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                {showDropdown && <SearchDropdown />}
              </div>
            </div>

            <div className="flex items-center">
              <Link href="/" className="block mr-4">
                <Image
                  src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/us-logo.webp"
                  width={24}
                  height={24}
                  alt="US Logo BestGadgetPro"
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
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowDropdown(true)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            {showDropdown && <SearchDropdown />}
          </div>
        </div>

        <div className="hidden md:block bg-gray-800">
          <nav className="container mx-auto !py-0">
            <ul className="flex items-center justify-center gap-7 h-12 overflow-x-auto min-w-max">
              {menuItems?.nodes?.map((menu: any, index: number) => (
                <Link href={lastPath(menu?.uri) ?? "/"} key={index}>
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