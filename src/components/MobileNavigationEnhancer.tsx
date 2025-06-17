/**
 * ATLANTIZ AI - Mobile Navigation Enhancer
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Enhanced mobile navigation that works alongside existing navbar
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Zap, Star, Mail, ArrowRight } from 'lucide-react';
import { useMobileOptimizations } from '@/hooks/useMobileOptimizations';

const MobileNavigationEnhancer: React.FC = () => {
  const { isMobile, isTablet } = useMobileOptimizations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Only render on mobile/tablet
  if (!isMobile && !isTablet) {
    return null;
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, action: scrollToTop },
    { id: 'features', label: 'Features', icon: Star, action: () => scrollToSection('features') },
    { id: 'comparison', label: 'AI Comparison', icon: Zap, action: () => scrollToSection('comparison') },
    { id: 'newsletter', label: 'Get Started', icon: Mail, action: () => scrollToSection('newsletter'), isCTA: true }
  ];

  return (
    <>
      {/* Enhanced Mobile Navigation Bar */}
      <div className={`mobile-only fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-orange-100 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Atlantiz AI</span>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-orange-600 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 hover:scale-110"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-only fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute inset-x-0 top-0 bg-white/98 backdrop-blur-xl transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'translate-y-0' 
            : '-translate-y-full'
        }`}>
          <div className="pt-20 pb-8 px-6">
            {/* Menu Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Navigation</h2>
              <p className="text-gray-600">Explore Atlantiz AI</p>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    item.isCTA
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-orange-50 to-orange-100 text-gray-700 hover:from-orange-100 hover:to-orange-200'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.isCTA
                      ? 'bg-white/20'
                      : 'bg-orange-200'
                  }`}>
                    <item.icon size={20} className={item.isCTA ? 'text-white' : 'text-orange-600'} />
                  </div>
                  <span className="font-semibold text-lg flex-1 text-left">{item.label}</span>
                  {item.isCTA && <ArrowRight size={20} className="text-white" />}
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                >
                  <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-blue-700">Features</span>
                </button>
                
                <button
                  onClick={() => scrollToSection('comparison')}
                  className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
                >
                  <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-purple-700">Compare</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                © 2025 Atlantiz AI - Designed by Shubham
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation (Alternative) */}
      <div className="mobile-only fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          {navigationItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                item.isCTA
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavigationEnhancer;
