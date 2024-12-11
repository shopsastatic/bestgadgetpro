// components/BackButton.tsx
'use client';

import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-colors group"
    >
      <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
      Go Back
    </button>
  );
}