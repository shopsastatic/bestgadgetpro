import { BackButton } from '@/components/BackButton';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-6">
      <div className="text-center">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-700 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white space-y-4">
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm rounded-full"></div>
                <HomeIcon className="w-24 h-24 text-white/50 relative animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mt-8 space-y-6 relative">
          <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Oops! The page you're looking for seems to have wandered off. Don't worry, even the best explorers sometimes lose their way.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors group"
            >
              <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
            <BackButton />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping delay-700"></div>
        </div>
      </div>
    </div>
  );
}