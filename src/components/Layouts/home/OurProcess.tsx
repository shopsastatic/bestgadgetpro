'use client';

import React, { useState } from 'react';
import { Database, BarChart2, Users, TrendingUp, Search, Target } from 'lucide-react';

export default function OurProcess() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Research & Analysis",
      description: "Comprehensive data collection and market research",
      features: [
        {
          icon: <Database className="w-5 h-5" />,
          title: "100,000+ Products",
          description: "Extensive database covering all major categories and brands"
        },
        {
          icon: <BarChart2 className="w-5 h-5" />,
          title: "50+ Parameters",
          description: "In-depth analysis of specifications and features"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "User Feedback",
          description: "Real customer reviews and ratings analysis"
        }
      ]
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Expert Evaluation",
      description: "Professional testing and quality assessment",
      features: [
        {
          icon: <Database className="w-5 h-5" />,
          title: "Lab Testing",
          description: "Rigorous testing in controlled environments"
        },
        {
          icon: <BarChart2 className="w-5 h-5" />,
          title: "Benchmarking",
          description: "Comparative analysis against industry standards"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Expert Review",
          description: "Assessment by industry specialists"
        }
      ]
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Selection Process",
      description: "Data-driven recommendations and insights",
      features: [
        {
          icon: <Database className="w-5 h-5" />,
          title: "Smart Algorithms",
          description: "Advanced matching based on user preferences"
        },
        {
          icon: <BarChart2 className="w-5 h-5" />,
          title: "Value Analysis",
          description: "Price-performance optimization"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Final Curation",
          description: "Handpicked recommendations by experts"
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Data-Driven Decisions Made Simple
          </h2>
          <p className="text-gray-600">
            Our systematic approach ensures you get the most accurate and reliable product recommendations
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex overflow-x-auto no-scrollbar">
            <div className="flex gap-2 mx-auto">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all min-w-[200px] justify-center
                    ${activeTab === index 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {step.icon}
                  {step.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg px-4 md:px-8 py-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${activeTab === index ? 'block' : 'hidden'}`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {step.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow group"
                    >
                      <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}