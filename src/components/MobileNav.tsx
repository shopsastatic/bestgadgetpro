import React, { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

interface MobileNavigationProps {
  onClose: () => void;
  isOpen: boolean;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onClose, isOpen }) => {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [history, setHistory] = useState(['main']);
  const [slideDirection, setSlideDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const categories = {
    main: [
      { name: 'Electronics', screen: 'electronics' },
      { name: 'Home & Kitchen', screen: 'home-kitchen' },
      { name: 'Smart Home', screen: 'smart-home' },
      { name: 'Computers & Accessories', screen: 'computers' },
      { name: 'Tools & Home Improvement', screen: 'tools' },
      { name: 'Health & Household', screen: 'health' },
      { name: 'Beauty & Personal Care', screen: 'beauty' },
      { name: 'Pet Supplies', screen: 'pets' },
      { name: 'Baby Products', screen: 'baby' },
    ],
    electronics: [
      { name: 'Camera & Photo', screen: 'camera' },
      { name: 'Computers & Accessories', screen: 'computers' },
      { name: 'GPS, Finders & Accessories', screen: 'gps' },
      { name: 'Headphones, Earbuds & Accessories', screen: 'headphones' },
      { name: 'Home Audio', screen: 'audio' },
      { name: 'Portable Audio & Video', screen: 'portable-audio' },
      { name: 'Security & Surveillance', screen: 'security' },
      { name: 'Television & Video', screen: 'tv' },
    ]
  };

  const screens = {
    main: {
      title: 'All Categories',
      items: categories.main
    },
    electronics: {
      title: 'Electronics',
      items: categories.electronics
    }
  } as any;

  const navigateTo = (screen: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrentScreen(screen);
    setHistory([...history, screen]);
  };

  const goBack = () => {
    if (isAnimating || history.length <= 1) return;
    setIsAnimating(true);
    setSlideDirection('right');
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    setCurrentScreen(newHistory[newHistory.length - 1]);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const currentScreenData = screens[currentScreen];

  const getSlideClass = () => {
    if (!isAnimating) return 'translate-x-0';
    return slideDirection === 'left' ? '-translate-x-full' : 'translate-x-full';
  };

  const getEnterClass = () => {
    if (!isAnimating) return 'translate-x-0';
    return slideDirection === 'left' ? 'translate-x-full' : '-translate-x-full';
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed inset-y-0 left-0 w-full max-w-sm bg-white transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center h-14 px-4 border-b">
          {history.length > 1 ? (
            <button onClick={goBack} className="mr-2 p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft size={24} />
            </button>
          ) : null}
          <h1 className="flex-1 font-medium">{currentScreenData.title}</h1>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative h-full">
            <div 
              className={`absolute inset-0 transition-transform duration-300 ease-out ${getSlideClass()}`}
              onTransitionEnd={handleAnimationEnd}
            >
              {currentScreenData.items.map((item: any) => (
                <button
                  key={item.name}
                  onClick={() => navigateTo(item.screen)}
                  className="flex items-center justify-between w-full p-4 hover:bg-gray-50 active:bg-gray-100 border-b"
                >
                  <span className="text-gray-900">{item.name}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>

            {isAnimating && (
              <div 
                className={`absolute inset-0 transition-transform duration-300 ease-out ${getEnterClass()}`}
              >
                {screens[currentScreen].items.map((item: any) => (
                  <button
                    key={item.name}
                    onClick={() => navigateTo(item.screen)}
                    className="flex items-center justify-between w-full p-4 hover:bg-gray-50 active:bg-gray-100 border-b"
                  >
                    <span className="text-gray-900">{item.name}</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;