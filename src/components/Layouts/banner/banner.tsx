import Link from 'next/link';
import { ArrowRight, Award} from 'lucide-react';
import { TrustBadges } from './trust-badges';
import { CategoryGrid } from './category-grid';

export function Banner() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-blue-900"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      
      <div className="relative">
        <div className="container mx-auto px-4 !pt-16 !pb-14">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-semibold text-white">2024 EDITOR'S CHOICE AWARDS</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Tech Today
              </h1>
              
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Expert reviews, in-depth analysis, and the latest news from the world of consumer electronics.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/categories"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  See the winners
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/categories"
                  className="inline-flex items-center gap-2 bg-blue-700/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700/40 transition-colors"
                >
                  Latest Reviews
                </Link>
              </div>
            </div>
            
            <div className="relative w-full md:w-1/3">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-300 to-yellow-500 text-blue-900 rounded-full p-4 shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Editor's Choice</h3>
                <p className="text-gray-200 mb-6">
                  Our experts have tested and selected the best tech products of 2024
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <Award className="h-4 w-4" />
                  <span>Rigorous testing process</span>
                </div>
              </div>
            </div>
          </div>
          
          <TrustBadges />
        </div>
        
        <div className="border-t border-white/10">
          <CategoryGrid />
        </div>
      </div>
    </div>
  );
}