/**
 * ATLANTIZ AI - Mobile AtlantizAI Section
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Mobile-optimized version of the AtlantizAI section (3-dot section)
 * that works alongside the existing desktop version
 */

import React from "react";
import { useMobileOptimizations } from '@/hooks/useMobileOptimizations';

const MobileAtlantizAISection: React.FC = () => {
  const { isMobile, isTablet } = useMobileOptimizations();

  // Only render on mobile/tablet
  if (!isMobile && !isTablet) {
    return null;
  }

  const cards = [
    {
      id: 1,
      title: "It's the next evolution in personal and professional efficiency.",
      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section1.png')",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "For intelligence that doesn't just assist, it acts.",
      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section2.png')",
      gradient: "from-orange-600 to-red-700"
    },
    {
      id: 3,
      title: "Gaining crystal-clear control over your complex tasks",
      background: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section3.png')",
      gradient: "from-orange-700 to-red-800",
      highlight: "complex tasks"
    }
  ];

  return (
    <section className="mobile-only w-full py-16 bg-gradient-to-br from-white via-orange-50/40 to-orange-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-200/50 via-orange-200/30 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-300/30 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-100 border border-orange-300 rounded-full">
            <span className="font-medium text-orange-700">Why AI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-orange-600 to-orange-600 bg-clip-text text-transparent">
            Why Atlantiz AI
          </h2>
        </div>
        
        {/* Mobile Card Stack */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
              style={{
                minHeight: '350px',
                background: card.background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              {/* Card overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-orange-300/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-6 right-12 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 h-full flex items-center justify-center text-center">
                <div className="max-w-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                    {card.highlight ? (
                      <>
                        {card.title.split(card.highlight)[0]}
                        <span className="text-orange-300 animate-pulse font-extrabold">
                          {card.highlight}
                        </span>
                        {card.title.split(card.highlight)[1]}
                      </>
                    ) : (
                      card.title
                    )}
                  </h3>
                </div>
              </div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Card number indicator */}
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{card.id}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>Experience the Future</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAtlantizAISection;
