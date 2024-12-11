'use client'

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const SeoContent = () => {
  const [headings, setHeadings] = useState([]);
  
  const htmlContent = `
    <div>
      <h2 id="section-1">1. BACtrack Element: Best for Daily Use</h2>
      <p>Look no further than the BACtrack Element Breathalyzer for spot-on readings every time...</p>
      
      <h2 id="section-2">2. BACtrack C8: Professional Choice</h2>
      <p>When accuracy matters most, the BACtrack C8 delivers...</p>
      
      <h2 id="section-3">3. AlcoSense Pro: Premium Features</h2>
      <p>The AlcoSense Pro brings premium features to the table...</p>
    </div>
  `;

  const extractHeadings = (htmlString: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const h2Elements = doc.getElementsByTagName('h2');
    return Array.from(h2Elements).map(h2 => ({
      id: h2.id,
      text: h2.textContent
    }));
  };

  useEffect(() => {
    const extractedHeadings = extractHeadings(htmlContent) as any;
    setHeadings(extractedHeadings);
  }, [htmlContent]);

  return (
    <div className="container p-4">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Top-Rated Digital Breathalyzers for Every Need in 2024
        </h1>

        {/* Navigation Menu */}
        <nav className="bg-white rounded-xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 p-4 border-b">
            SeoContentGE
          </h2>
          <div className="p-2">
            {headings.map((heading: any, index) => (
              <a
                key={index}
                href={`#${heading.id}`}
                className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="text-gray-700 group-hover:text-blue-600">
                  {heading.text}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 ml-auto" />
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <article>
          <div 
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose max-w-none"
          />
        </article>
      </main>
    </div>
  );
};

export default SeoContent;