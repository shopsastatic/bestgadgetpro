import React, { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';

interface MenuItem {
  uri: string;
  target: string | null;
  label: string;
  parentId: string | null;
}

interface MobileNavigationProps {
  onClose: () => void;
  isOpen: boolean;
  menuSidebarItems: {
    nodes: MenuItem[];
  };
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onClose, isOpen, menuSidebarItems }) => {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [history, setHistory] = useState(['main']);
  const [slideDirection, setSlideDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  // Transform flat array into hierarchical structure
  const transformMenuItems = (items: MenuItem[]) => {
    // Get main menu items (items with parentId: null)
    const mainMenuItems = items.filter(item => item.parentId === null);
    
    // Create screens object starting with main screen
    const screens: any = {
      main: {
        title: 'Main Menu',
        items: mainMenuItems.map(mainItem => {
          // Find children - items that share the same parentId and appear after this main item
          const startIndex = items.indexOf(mainItem);
          const nextMainItemIndex = items.findIndex((item, index) => 
            index > startIndex && item.parentId === null
          );
          
          // Get all items between this main item and the next main item
          const childrenSlice = nextMainItemIndex === -1 
            ? items.slice(startIndex + 1)  // If this is the last main item, take all remaining items
            : items.slice(startIndex + 1, nextMainItemIndex);
            
          const hasChildren = childrenSlice.length > 0;
          
          return {
            name: mainItem.label,
            screen: mainItem?.uri?.replace(/\//g, ''),
            uri: mainItem.uri,
            hasChildren
          };
        })
      }
    };

    // Create child screens for each main menu item
    mainMenuItems.forEach((mainItem, index) => {
      const screenKey = mainItem?.uri?.replace(/\//g, '');
      
      // Find the next main menu item
      const nextMainItemIndex = items.findIndex((item, idx) => 
        idx > items.indexOf(mainItem) && item.parentId === null
      );
      
      // Get all items between this main item and the next main item
      const children = nextMainItemIndex === -1
        ? items.slice(items.indexOf(mainItem) + 1)  // If this is the last main item
        : items.slice(items.indexOf(mainItem) + 1, nextMainItemIndex);
      
      if (children.length > 0) {
        screens[screenKey] = {
          title: mainItem.label,
          items: children.map(child => ({
            name: child.label,
            screen: child?.uri?.replace(/\//g, ''),
            uri: child.uri,
            hasChildren: false
          }))
        };
      }
    });

    return screens;
  };

  const screens = transformMenuItems(menuSidebarItems.nodes);

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

  const currentScreenData = screens[currentScreen] || screens.main;

  const getSlideClass = () => {
    if (!isAnimating) return 'translate-x-0';
    return slideDirection === 'left' ? '-translate-x-full' : 'translate-x-full';
  };

  const getEnterClass = () => {
    if (!isAnimating) return 'translate-x-0';
    return slideDirection === 'left' ? 'translate-x-full' : '-translate-x-full';
  };

  const handleItemClick = (item: any) => {
    if (item.hasChildren) {
      navigateTo(item.screen);
    } else {
      window.location.href = item.uri;
    }
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
                  onClick={() => handleItemClick(item)}
                  className="flex items-center justify-between w-full p-4 hover:bg-gray-50 active:bg-gray-100 border-b"
                >
                  <span className="text-gray-900">{item.name}</span>
                  {item.hasChildren && <ChevronRight size={20} className="text-gray-400" />}
                </button>
              ))}
            </div>

            {isAnimating && (
              <div 
                className={`absolute inset-0 transition-transform duration-300 ease-out ${getEnterClass()}`}
              >
                {screens[currentScreen]?.items.map((item: any) => (
                  <button
                    key={item.name}
                    onClick={() => handleItemClick(item)}
                    className="flex items-center justify-between w-full p-4 hover:bg-gray-50 active:bg-gray-100 border-b"
                  >
                    <span className="text-gray-900">{item.name}</span>
                    {item.hasChildren && <ChevronRight size={20} className="text-gray-400" />}
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