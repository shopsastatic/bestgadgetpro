'use client';

import { useState } from 'react';
import { Share2, Link2, Facebook, Twitter, MessageCircle, Check } from 'lucide-react';

interface ShareButtonProps {
    url: string;
    title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const shareOptions = [
        {
            name: 'Copy link',
            Icon: Link2,
            onClick: async () => {
                await navigator.clipboard.writeText(url);
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
            }
        },
        {
            name: 'Facebook',
            Icon: Facebook,
            onClick: () => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            }
        },
        {
            name: 'X',
            Icon: Twitter,
            onClick: () => {
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
            }
        },
        {
            name: 'WhatsApp',
            Icon: MessageCircle,
            onClick: () => {
                window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
            }
        }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
            </button>

            {showToast && (
                <div className="fixed bottom-4 right-4 z-10 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5">
                    <Check className="h-4 w-4" />
                    <span>Link copied successfully!</span>
                </div>
            )}

            {isOpen && (
                <div
                    className={`absolute right-auto md:right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 origin-top-right ${
                        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                    {shareOptions.map((option) => (
                        <button
                            key={option.name}
                            onClick={() => {
                                option.onClick();
                                setIsOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <option.Icon className="h-4 w-4" />
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}