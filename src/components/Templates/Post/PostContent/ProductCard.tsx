import React from 'react';
import { Star, Check, Shield, Heart, Lightbulb, Users } from 'lucide-react';

const ProfessionalCard = () => (
  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg max-w-[1000px] mx-auto border border-gray-100">
    <div className="flex flex-col md:flex-row gap-6 mb-6 items-center">
      <div className="w-full md:w-48 h-48 bg-white rounded-xl flex items-center justify-center shrink-0">
        <img src="/api/placeholder/128/128" alt="Product" className="w-32 h-32 object-contain" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Greentest Portable Digital Nitrate Tester Greentest Portable Digital Nitrate Tester Greentest Portable Digital Nitrate Tester</h2>
          </div>
          <div className="polygon-tag flex flex-col items-center gap-2 mb-4 -mt-6 bg-blue-50 pt-3 pb-8 px-2">
            <div className="text-3xl font-bold text-purple-600">9.9</div>
            <div>Exceptional</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 gap-0 fill-current text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { score: '9.9', label: 'High Accuracy Detection' },
            { score: '9.9', label: 'Fast 3-Second Results' },
            { score: '9.7', label: 'Multi-Purpose' }
          ].map((item, index) => (
            <div key={index} className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-orange-600" />
                <div className="text-lg font-bold text-gray-900">{item.score}</div>
              </div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {[
              'Detects multiple radiation types with upgraded Geiger-Müller tube',
              'Quick 3-second results with color touchscreen display',
              'Tests water quality and environmental radiation',
              'Professional Grade Results'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Highlights</h3>
          <div className="space-y-4">
            {[
              {
                icon: <Shield className="w-4 h-4 text-white" />,
                title: 'Key Features',
                description: 'Advanced radiation detection, water quality testing, and quick results display make this device a comprehensive safety tool.'
              },
              {
                icon: <Lightbulb className="w-4 h-4 text-white" />,
                title: 'Ideal for Environmental Safety Monitoring',
                description: 'Perfect for homeowners, travelers, and safety professionals who need reliable radiation and water quality monitoring.'
              },
              {
                icon: <Users className="w-4 h-4 text-white" />,
                title: 'Praised for Versatile Testing Capabilities',
                description: 'Users appreciate the device\'s ability to test multiple elements, from radiation to water quality, with quick and accurate results.'
              }
            ].map((highlight, index) => (
              <div key={index} className="flex gap-3 bg-purple-50 p-4 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-3 justify-center">
      <button className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
        Amazon
      </button>
    </div>
  </div>
);

const ProductReviewCards = () => (
  <div className='container'>
    <ProfessionalCard />
  </div>
);

export default ProductReviewCards;