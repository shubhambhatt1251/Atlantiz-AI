/**
 * ATLANTIZ AI - Mobile Visibility Enhancer
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Component that enhances mobile visibility without changing existing code
 * Specifically targets hero section and button visibility issues
 */

import React, { useEffect } from 'react';
import { useMobileOptimizations } from '@/hooks/useMobileOptimizations';

const MobileVisibilityEnhancer: React.FC = () => {
  const { isMobile, isTablet } = useMobileOptimizations();

  useEffect(() => {
    if (isMobile || isTablet) {
      // Fix hero section visibility
      const fixHeroSection = () => {
        const heroSection = document.querySelector('section[class*="hero"]') || 
                           document.querySelector('.hero-section') ||
                           document.querySelector('main > section:first-child');
        
        if (heroSection) {
          heroSection.classList.add('hero-section');
          
          // Ensure proper styling
          const heroElement = heroSection as HTMLElement;
          heroElement.style.minHeight = '100vh';
          heroElement.style.position = 'relative';
          heroElement.style.zIndex = '1';
          heroElement.style.display = 'flex';
          heroElement.style.flexDirection = 'column';
          heroElement.style.justifyContent = 'center';
          heroElement.style.alignItems = 'center';
        }
      };

      // Fix Start Your Journey button visibility
      const fixStartJourneyButton = () => {
        const buttons = document.querySelectorAll('a[href="#newsletter"]');
        buttons.forEach(button => {
          const btnElement = button as HTMLElement;
          btnElement.style.display = 'flex';
          btnElement.style.visibility = 'visible';
          btnElement.style.opacity = '1';
          btnElement.style.position = 'relative';
          btnElement.style.zIndex = '10';
          btnElement.style.minWidth = '200px';
          btnElement.style.padding = '1rem 2rem';
          btnElement.style.fontSize = '1rem';
          btnElement.style.fontWeight = '600';
          btnElement.style.textAlign = 'center';
          btnElement.style.justifyContent = 'center';
          btnElement.style.alignItems = 'center';
          btnElement.style.margin = '1rem auto';
          btnElement.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
          btnElement.style.border = '2px solid rgba(255, 255, 255, 0.9)';
          btnElement.style.borderRadius = '9999px';
          btnElement.style.color = 'white';
          btnElement.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)';
          btnElement.style.transform = 'translateZ(0)';
          btnElement.style.backfaceVisibility = 'hidden';
        });
      };

      // Fix 3-dot section (AtlantizAI section) visibility
      const fixAtlantizAISection = () => {
        const atlantizSection = document.querySelector('[class*="atlantiz"]') ||
                               document.querySelector('section[style*="300vh"]') ||
                               document.querySelector('.sticky');
        
        if (atlantizSection) {
          atlantizSection.classList.add('atlantiz-ai-section');
          
          const sectionElement = atlantizSection as HTMLElement;
          sectionElement.style.display = 'block';
          sectionElement.style.visibility = 'visible';
          sectionElement.style.opacity = '1';
          sectionElement.style.position = 'relative';
          sectionElement.style.zIndex = '1';
          sectionElement.style.height = 'auto';
          sectionElement.style.minHeight = 'auto';
          sectionElement.style.overflow = 'visible';

          // Fix cards within the section
          const cards = atlantizSection.querySelectorAll('.absolute');
          cards.forEach((card, index) => {
            const cardElement = card as HTMLElement;
            cardElement.style.position = 'relative';
            cardElement.style.transform = 'none';
            cardElement.style.opacity = '1';
            cardElement.style.marginBottom = '1.5rem';
            cardElement.style.zIndex = 'auto';
            cardElement.style.height = 'auto';
            cardElement.style.minHeight = '300px';
            
            // Fix card content
            const cardContent = card.querySelector('div');
            if (cardContent) {
              const contentElement = cardContent as HTMLElement;
              contentElement.style.position = 'relative';
              contentElement.style.zIndex = '1';
              contentElement.style.padding = '2rem 1.5rem';
              contentElement.style.background = 'rgba(255, 255, 255, 0.95)';
              contentElement.style.borderRadius = '1.5rem';
              contentElement.style.border = '1px solid rgba(249, 115, 22, 0.2)';
              contentElement.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }
          });

          // Fix sticky container
          const stickyContainer = atlantizSection.querySelector('.sticky');
          if (stickyContainer) {
            const stickyElement = stickyContainer as HTMLElement;
            stickyElement.style.position = 'relative';
            stickyElement.style.top = 'auto';
            stickyElement.style.height = 'auto';
          }
        }
      };

      // Fix dots/indicators visibility
      const fixDotsIndicators = () => {
        const dots = document.querySelectorAll('.w-1\\.5, .h-1\\.5, [class*="dot"], [class*="indicator"]');
        dots.forEach(dot => {
          const dotElement = dot as HTMLElement;
          dotElement.style.display = 'block';
          dotElement.style.visibility = 'visible';
          dotElement.style.opacity = '1';
          dotElement.style.width = '8px';
          dotElement.style.height = '8px';
          dotElement.style.background = '#f97316';
          dotElement.style.borderRadius = '50%';
        });
      };

      // Fix mobile navigation
      const fixMobileNavigation = () => {
        const mobileMenus = document.querySelectorAll('.mobile-menu, [class*="mobile"] nav');
        mobileMenus.forEach(menu => {
          const menuElement = menu as HTMLElement;
          menuElement.style.display = 'flex';
          menuElement.style.visibility = 'visible';
          menuElement.style.opacity = '1';
          menuElement.style.zIndex = '50';
        });

        // Fix mobile menu buttons
        const mobileButtons = document.querySelectorAll('.mobile-menu a, .mobile-menu button');
        mobileButtons.forEach(button => {
          const btnElement = button as HTMLElement;
          btnElement.style.display = 'flex';
          btnElement.style.visibility = 'visible';
          btnElement.style.opacity = '1';
          btnElement.style.padding = '1rem 1.5rem';
          btnElement.style.margin = '0.5rem 0';
          btnElement.style.width = '100%';
          btnElement.style.textAlign = 'center';
          btnElement.style.justifyContent = 'center';
          btnElement.style.alignItems = 'center';
          btnElement.style.minHeight = '48px';
          btnElement.style.fontSize = '1rem';
          btnElement.style.fontWeight = '500';
        });
      };

      // Fix general button visibility
      const fixButtonVisibility = () => {
        const buttons = document.querySelectorAll('button, a[role="button"], .button-primary, .button-secondary');
        buttons.forEach(button => {
          const btnElement = button as HTMLElement;
          btnElement.style.display = 'flex';
          btnElement.style.visibility = 'visible';
          btnElement.style.opacity = '1';
          btnElement.style.minHeight = '48px';
          btnElement.style.minWidth = '120px';
          btnElement.style.padding = '0.875rem 1.5rem';
          btnElement.style.fontSize = '1rem';
          btnElement.style.fontWeight = '600';
          btnElement.style.textAlign = 'center';
          btnElement.style.justifyContent = 'center';
          btnElement.style.alignItems = 'center';
          btnElement.style.borderRadius = '0.75rem';
          btnElement.style.position = 'relative';
          btnElement.style.zIndex = '5';
          btnElement.style.margin = '0.5rem auto';
          btnElement.style.transform = 'translateZ(0)';
          btnElement.style.backfaceVisibility = 'hidden';
        });
      };

      // Apply all fixes
      const applyFixes = () => {
        fixHeroSection();
        fixStartJourneyButton();
        fixAtlantizAISection();
        fixDotsIndicators();
        fixMobileNavigation();
        fixButtonVisibility();
      };

      // Apply fixes immediately
      applyFixes();

      // Apply fixes after DOM changes
      const observer = new MutationObserver(() => {
        setTimeout(applyFixes, 100);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });

      // Apply fixes on scroll (for dynamic content)
      const handleScroll = () => {
        requestAnimationFrame(applyFixes);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Apply fixes on resize
      window.addEventListener('resize', applyFixes, { passive: true });

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', applyFixes);
      };
    }
  }, [isMobile, isTablet]);

  // This component doesn't render anything visible
  return null;
};

export default MobileVisibilityEnhancer;
