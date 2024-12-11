import React from 'react';
import { Star, Check, Package, Shield, Activity, ExternalLink, Heart, Award, Zap, Lightbulb, Users } from 'lucide-react';

// Shared data component
const MainHighlights = ({ bgColor = "bg-gray-50", iconColor = "text-blue-500", iconBgColor = "bg-blue-500" }) => (
  <div className="space-y-6 mb-8">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Highlights</h3>
      <div className="space-y-4">
        {[
          {
            title: "Key Features",
            description: "Advanced radiation detection, water quality testing, and quick results display make this device a comprehensive safety tool.",
            icon: Shield
          },
          {
            title: "Ideal for Environmental Safety Monitoring",
            description: "Perfect for homeowners, travelers, and safety professionals who need reliable radiation and water quality monitoring.",
            icon: Lightbulb
          },
          {
            title: "Praised for Versatile Testing Capabilities",
            description: "Users appreciate the device's ability to test multiple elements, from radiation to water quality, with quick and accurate results.",
            icon: Users
          }
        ].map((item, i) => (
          <div key={i} className={`flex gap-3 ${bgColor} p-4 rounded-xl`}>
            <div className={`w-8 h-8 rounded-full ${iconBgColor} flex items-center justify-center shrink-0 mt-1`}>
              <item.icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Shared button group component
const ButtonGroup = ({ mainColor = "bg-blue-600", mainColorHover = "hover:bg-blue-700" }) => (
  <div className="flex flex-wrap gap-3">
    <button className={`px-4 py-2 ${mainColor} ${mainColorHover} text-white rounded-lg text-sm font-medium transition-colors`}>
      View Details
    </button>
    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
      Amazon
    </button>
    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors">
      eBay
    </button>
    <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:border-blue-500 transition-colors ml-auto">
      <Heart className="w-4 h-4 text-gray-400 hover:text-blue-500" />
    </button>
  </div>
);

// Design 1: Modern Clean with Product Image
const ModernCard = () => (
  <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg max-w-[1000px] mx-auto">
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
      <div className="w-full md:w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
        <img 
          src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160,dpr_1.25/f_auto,q_auto/Greentest-Portable-Digital-Nitrate-Tester-Food-Radiation-Detector-Geigor-Counter.jpg"
          alt="Product" 
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              Editor's Choice
            </span>
            <h2 className="mt-3 text-xl font-bold">Greentest Portable Digital Nitrate Tester</h2>
          </div>
          <div className="sm:text-right">
            <div className="text-3xl font-bold text-blue-600">9.9</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { score: 9.9, label: "Accurate Detection" },
            { score: 9.9, label: "User-Friendly Interface" },
            { score: 9.7, label: "Multi-Purpose Testing" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-blue-600">{item.score}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <MainHighlights bgColor="bg-orange-50" iconBgColor="bg-orange-500" />

    <div className="space-y-3 mb-6">
      {[
        "Detects multiple radiation types with upgraded Geiger-Müller tube",
        "Quick 3-second results with color touchscreen display",
        "Tests water quality and environmental radiation"
      ].map((text, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-1">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-gray-700">{text}</span>
        </div>
      ))}
    </div>

    <ButtonGroup mainColor="bg-orange-500" mainColorHover="hover:bg-orange-600" />
  </div>
);

// Design 2: Premium Light with Product Image
const PremiumCard = () => (
  <div className="bg-white rounded-xl p-4 md:p-8 shadow-xl max-w-[1000px] mx-auto border border-gray-100">
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
      <div className="w-full md:w-56 h-48 md:h-56 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
        <img 
          src="/api/placeholder/224/224"
          alt="Product" 
          className="w-32 md:w-40 h-32 md:h-40 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">Editor's Choice</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Greentest Portable Digital Nitrate Tester</h2>
          </div>
          <div className="sm:text-right">
            <div className="text-4xl font-bold text-blue-600">9.9</div>
            <div className="text-sm text-gray-500">Exceptional</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: "Accurate Detection", score: 9.9 },
            { icon: Activity, label: "User-Friendly", score: 9.9 },
            { icon: Package, label: "Multi-Purpose", score: 9.7 }
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg">
              <item.icon className="w-5 h-5 text-blue-600 mb-2" />
              <div className="text-lg font-bold text-gray-900">{item.score}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <MainHighlights bgColor="bg-blue-50" iconBgColor="bg-blue-600" />

    <div className="border-t border-gray-100 pt-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          "Advanced radiation detection system",
          "Real-time water quality monitoring",
          "Portable and user-friendly design",
          "High-precision measurements"
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    <ButtonGroup />
  </div>
);

// Design 3: Modern E-commerce
const EcommerceCard = () => (
  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg max-w-[1000px] mx-auto border border-gray-100">
    <div className="flex flex-col md:flex-row gap-6 mb-6">
      <div className="w-full md:w-48 h-48 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
        <img 
          src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160,dpr_1.25/f_auto,q_auto/Greentest-Portable-Digital-Nitrate-Tester-Food-Radiation-Detector-Geigor-Counter.jpg"
          alt="Product" 
          className="w-32 h-32 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Best Seller
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Greentest Portable Digital Nitrate Tester</h2>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
            <Heart className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl font-bold text-purple-600">9.9</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Shield, text: "High Accuracy Detection" },
            { icon: Zap, text: "Fast 3-Second Results" },
            { icon: Activity, text: "Multi-Purpose Testing" },
            { icon: Package, text: "Portable Design" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
              <item.icon className="w-4 h-4 text-purple-500 shrink-0" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <MainHighlights bgColor="bg-purple-50" iconBgColor="bg-purple-500" />

    <div className="border-t border-gray-100 pt-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Accuracy", value: "99%" },
          { label: "Response Time", value: "3s" },
          { label: "User Rating", value: "4.9" }
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-lg font-bold text-gray-900">{item.value}</div>
            <div className="text-sm text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>

    <ButtonGroup mainColor="bg-purple-600" mainColorHover="hover:bg-purple-700" />
  </div>
);

// Design 4: Tech Product Card
const TechCard = () => (
  <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg max-w-[1000px] mx-auto border border-gray-100">
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
      <div className="w-full md:w-52 h-48 md:h-52 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 p-4">
        <img 
          src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160,dpr_1.25/f_auto,q_auto/Greentest-Portable-Digital-Nitrate-Tester-Food-Radiation-Detector-Geigor-Counter.jpg"
          alt="Product" 
          className="w-32 md:w-36 h-32 md:h-36 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500 rounded-full">
              <Award className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Top Rated</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              Greentest Portable Digital Nitrate Tester
            </h2>
          </div>
          <div className="sm:text-right">
            <div className="text-4xl font-bold text-emerald-600">9.9</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Accuracy", score: "9.9", icon: Shield },
            { label: "Speed", score: "9.9", icon: Zap },
            { label: "Features", score: "9.7", icon: Package }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <item.icon className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
              <div className="text-lg font-bold text-gray-900">{item.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <MainHighlights bgColor="bg-emerald-50" iconBgColor="bg-emerald-500" />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {[
        "Advanced Detection Technology",
        "Real-time Monitoring",
        "Intuitive Interface",
        "Professional Grade Results"
      ].map((text, i) => (
        <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="text-gray-700 text-sm">{text}</span>
        </div>
      ))}
    </div>

    <ButtonGroup mainColor="bg-emerald-600" mainColorHover="hover:bg-emerald-700" />
  </div>
);

// Design 5: Professional Card
const ProfessionalCard = () => (
  <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg max-w-[1000px] mx-auto border border-gray-100">
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="w-full md:w-48 h-48 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
        <img 
          src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160,dpr_1.25/f_auto,q_auto/Greentest-Portable-Digital-Nitrate-Tester-Food-Radiation-Detector-Geigor-Counter.jpg"
          alt="Product" 
          className="w-32 md:w-36 h-32 md:h-36 object-contain"
        />
      </div>
      
      <div className="flex-1">
        <div className="mb-6">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
            Professional Choice
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Greentest Portable Digital Nitrate Tester</h2>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-3xl font-bold text-indigo-600">9.9</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Shield, text: "99% Accuracy Rate" },
            { icon: Zap, text: "3s Response Time" },
            { icon: Activity, text: "Multi-Function Testing" },
            { icon: Package, text: "Compact Design" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-indigo-50 p-3 rounded-xl">
              <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-3 h-3 text-indigo-600" />
              </div>
              <span className="text-gray-700 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <MainHighlights bgColor="bg-indigo-50" iconBgColor="bg-indigo-600" />

    <ButtonGroup mainColor="bg-indigo-600" mainColorHover="hover:bg-indigo-700" />
  </div>
);

// Main component that renders all designs
const ProductReviewCards = () => (
  <div className='container'>
    <ModernCard />
    <PremiumCard />
    <EcommerceCard />
    <TechCard />
    <ProfessionalCard />
  </div>
);

export default ProductReviewCards;