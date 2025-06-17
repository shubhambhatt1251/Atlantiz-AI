/**
 * ATLANTIZ AI - Mobile Hero Section Enhancer
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Mobile-specific hero section enhancements that work alongside existing hero
 */

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useMobileOptimizations } from '@/hooks/useMobileOptimizations';

const MobileHeroEnhancer: React.FC = () => {
  const { isMobile, isTablet } = useMobileOptimizations();

  useEffect(() => {
    if (isMobile || isTablet) {
      // Enhance existing hero section for mobile
      const enhanceHeroForMobile = () => {
        const heroSection = document.querySelector('#hero, section[style*="min-height: 100vh"]');
        if (heroSection) {
          const heroElement = heroSection as HTMLElement;
          
          // Apply mobile hero styles
          heroElement.style.minHeight = '100vh';
          heroElement.style.padding = isMobile ? '120px 1rem 60px' : '140px 2rem 80px';
          heroElement.style.display = 'flex';
          heroElement.style.flexDirection = 'column';
          heroElement.style.justifyContent = 'center';
          heroElement.style.alignItems = 'center';
          heroElement.style.textAlign = 'center';
          
          // Enhance container
          const container = heroSection.querySelector('.container');
          if (container) {
            const containerElement = container as HTMLElement;
            containerElement.style.maxWidth = '100%';
            containerElement.style.padding = '0 1rem';
            containerElement.style.textAlign = 'center';
          }
          
          // Enhance flex layout
          const flexContainer = heroSection.querySelector('.flex');
          if (flexContainer) {
            const flexElement = flexContainer as HTMLElement;
            flexElement.style.flexDirection = 'column';
            flexElement.style.alignItems = 'center';
            flexElement.style.textAlign = 'center';
            flexElement.style.gap = '2rem';
          }
          
          // Enhance title
          const title = heroSection.querySelector('h1, .section-title');
          if (title) {
            const titleElement = title as HTMLElement;
            titleElement.style.fontSize = isMobile ? '2rem' : '2.5rem';
            titleElement.style.lineHeight = '1.2';
            titleElement.style.textAlign = 'center';
            titleElement.style.marginBottom = '1rem';
          }
          
          // Enhance subtitle
          const subtitle = heroSection.querySelector('p');
          if (subtitle && !subtitle.closest('a')) { // Avoid button text
            const subtitleElement = subtitle as HTMLElement;
            subtitleElement.style.fontSize = isMobile ? '1.125rem' : '1.25rem';
            subtitleElement.style.lineHeight = '1.5';
            subtitleElement.style.textAlign = 'center';
            subtitleElement.style.marginBottom = '2rem';
            subtitleElement.style.padding = '0 1rem';
          }
          
          // Enhance Discover chip
          const chip = heroSection.querySelector('.pulse-chip, [class*="chip"]');
          if (chip) {
            const chipElement = chip as HTMLElement;
            chipElement.style.margin = '0 auto 1rem auto';
            chipElement.style.display = 'flex';
            chipElement.style.justifyContent = 'center';
          }
        }
        
        // Enhance "Start Your Journey" buttons specifically
        const journeyButtons = document.querySelectorAll('a[href="#newsletter"]');
        journeyButtons.forEach(button => {
          const btnElement = button as HTMLElement;
          btnElement.style.display = 'flex';
          btnElement.style.visibility = 'visible';
          btnElement.style.opacity = '1';
          btnElement.style.position = 'relative';
          btnElement.style.zIndex = '10';
          btnElement.style.width = 'auto';
          btnElement.style.minWidth = isMobile ? '250px' : '280px';
          btnElement.style.maxWidth = '90%';
          btnElement.style.padding = isMobile ? '1.25rem 2rem' : '1.5rem 2.5rem';
          btnElement.style.fontSize = isMobile ? '1.125rem' : '1.25rem';
          btnElement.style.fontWeight = '600';
          btnElement.style.textAlign = 'center';
          btnElement.style.justifyContent = 'center';
          btnElement.style.alignItems = 'center';
          btnElement.style.margin = '1.5rem auto';
          btnElement.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
          btnElement.style.border = '2px solid rgba(255, 255, 255, 0.9)';
          btnElement.style.borderRadius = '9999px';
          btnElement.style.color = 'white';
          btnElement.style.boxShadow = '0 12px 30px rgba(249, 115, 22, 0.4)';
          btnElement.style.transform = 'translateZ(0)';
          btnElement.style.backfaceVisibility = 'hidden';
          btnElement.style.textDecoration = 'none';
          btnElement.style.transition = 'all 0.3s ease';
          
          // Add hover effect
          btnElement.addEventListener('mouseenter', () => {
            btnElement.style.transform = 'scale(1.05) translateZ(0)';
            btnElement.style.boxShadow = '0 16px 40px rgba(249, 115, 22, 0.6)';
          });
          
          btnElement.addEventListener('mouseleave', () => {
            btnElement.style.transform = 'translateZ(0)';
            btnElement.style.boxShadow = '0 12px 30px rgba(249, 115, 22, 0.4)';
          });
          
          // Add touch feedback
          btnElement.addEventListener('touchstart', () => {
            btnElement.style.transform = 'scale(0.98) translateZ(0)';
          });
          
          btnElement.addEventListener('touchend', () => {
            btnElement.style.transform = 'scale(1.05) translateZ(0)';
            setTimeout(() => {
              btnElement.style.transform = 'translateZ(0)';
            }, 150);
          });
        });
      };
      
      // Apply enhancements immediately
      enhanceHeroForMobile();
      
      // Apply enhancements after DOM changes
      const observer = new MutationObserver(() => {
        setTimeout(enhanceHeroForMobile, 100);
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, [isMobile, isTablet]);

  // Render mobile-specific hero overlay if needed
  if (!isMobile && !isTablet) {
    return null;
  }

  return (
    <div className="mobile-only fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      {/* Mobile floating CTA - only shows if main button is not visible */}
      <div className="pointer-events-auto">
        <a
          href="#newsletter"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            const newsletterSection = document.getElementById('newsletter');
            if (newsletterSection) {
              newsletterSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
        >
          <span>Start Your Journey</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default MobileHeroEnhancer;
