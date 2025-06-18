/**
 * ATLANTIZ AI - Mobile Layout Manager
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Advanced mobile layout manager that creates mobile-specific layouts
 * while preserving all existing desktop functionality
 */

import React, { useEffect, useRef } from 'react';
import { useMobileOptimizations } from '@/hooks/useMobileOptimizations';

interface MobileLayoutManagerProps {
  children: React.ReactNode;
}

const MobileLayoutManager: React.FC<MobileLayoutManagerProps> = ({ children }) => {
  const { isMobile, isTablet, screenSize } = useMobileOptimizations();
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || isTablet) {
      // Apply comprehensive mobile layout fixes
      const applyMobileLayoutFixes = () => {
        // Fix AtlantizAI Section (3-dot section)
        const atlantizSections = document.querySelectorAll('[style*="300vh"], .relative[style*="height: 300vh"]');
        atlantizSections.forEach(section => {
          const sectionElement = section as HTMLElement;
          sectionElement.classList.add('mobile-atlantiz-section');
          sectionElement.style.height = 'auto';
          sectionElement.style.minHeight = 'auto';
          sectionElement.style.position = 'relative';
          sectionElement.style.padding = '3rem 1rem';
          sectionElement.style.margin = '2rem 0';

          // Fix sticky container
          const stickyContainer = section.querySelector('.sticky');
          if (stickyContainer) {
            const stickyElement = stickyContainer as HTMLElement;
            stickyElement.classList.add('mobile-atlantiz-sticky');
            stickyElement.style.position = 'relative';
            stickyElement.style.top = 'auto';
            stickyElement.style.height = 'auto';
            stickyElement.style.minHeight = 'auto';
            stickyElement.style.padding = '2rem 1rem';
          }

          // Fix perspective container
          const perspectiveContainer = section.querySelector('.perspective-1000');
          if (perspectiveContainer) {
            const perspectiveElement = perspectiveContainer as HTMLElement;
            perspectiveElement.classList.add('mobile-atlantiz-cards');
            perspectiveElement.style.position = 'relative';
            perspectiveElement.style.height = 'auto';
            perspectiveElement.style.display = 'flex';
            perspectiveElement.style.flexDirection = 'column';
            perspectiveElement.style.gap = '2rem';
            perspectiveElement.style.perspective = 'none';
          }

          // Fix absolute positioned cards
          const cards = section.querySelectorAll('.absolute');
          cards.forEach((card, index) => {
            const cardElement = card as HTMLElement;
            cardElement.classList.add('mobile-atlantiz-card');
            cardElement.style.position = 'relative';
            cardElement.style.transform = 'none';
            cardElement.style.opacity = '1';
            cardElement.style.zIndex = 'auto';
            cardElement.style.width = '100%';
            cardElement.style.height = 'auto';
            cardElement.style.minHeight = '350px';
            cardElement.style.marginBottom = '1.5rem';
            cardElement.style.borderRadius = '1.5rem';
            cardElement.style.overflow = 'hidden';
            cardElement.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            cardElement.style.background = 'rgba(255, 255, 255, 0.95)';
            cardElement.style.backdropFilter = 'blur(10px)';
            cardElement.style.border = '1px solid rgba(249, 115, 22, 0.2)';

            // Fix card content
            const cardContent = card.querySelector('div');
            if (cardContent) {
              const contentElement = cardContent as HTMLElement;
              contentElement.classList.add('mobile-atlantiz-card-content');
              contentElement.style.padding = '2rem 1.5rem';
              contentElement.style.height = '100%';
              contentElement.style.display = 'flex';
              contentElement.style.alignItems = 'center';
              contentElement.style.justifyContent = 'center';
              contentElement.style.textAlign = 'center';
              contentElement.style.position = 'relative';
              contentElement.style.zIndex = '1';
            }

            // Fix card titles
            const cardTitle = card.querySelector('h3');
            if (cardTitle) {
              const titleElement = cardTitle as HTMLElement;
              titleElement.classList.add('mobile-atlantiz-card-title');
              titleElement.style.fontSize = '1.5rem';
              titleElement.style.lineHeight = '1.3';
              titleElement.style.color = 'white';
              titleElement.style.fontWeight = 'bold';
              titleElement.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
            }
          });
        });

        // Fix Hero Section
        const heroSections = document.querySelectorAll('section[id="hero"], .hero-section, section[style*="min-height: 100vh"]');
        heroSections.forEach(hero => {
          const heroElement = hero as HTMLElement;
          heroElement.classList.add('mobile-hero-section');
          heroElement.style.minHeight = '100vh';
          heroElement.style.padding = '120px 1rem 60px';
          heroElement.style.display = 'flex';
          heroElement.style.flexDirection = 'column';
          heroElement.style.justifyContent = 'center';
          heroElement.style.alignItems = 'center';
          heroElement.style.position = 'relative';
          heroElement.style.zIndex = '1';

          // Fix hero content
          const heroContent = hero.querySelector('.container, .flex');
          if (heroContent) {
            const contentElement = heroContent as HTMLElement;
            contentElement.classList.add('mobile-hero-content');
            contentElement.style.textAlign = 'center';
            contentElement.style.maxWidth = '100%';
            contentElement.style.padding = '0 1rem';
            contentElement.style.zIndex = '5';
            contentElement.style.position = 'relative';
          }

          // Fix hero title
          const heroTitle = hero.querySelector('h1, .section-title');
          if (heroTitle) {
            const titleElement = heroTitle as HTMLElement;
            titleElement.classList.add('mobile-hero-title');
            titleElement.style.fontSize = '2rem';
            titleElement.style.lineHeight = '1.2';
            titleElement.style.marginBottom = '1rem';
            titleElement.style.textAlign = 'center';
          }

          // Fix hero subtitle
          const heroSubtitle = hero.querySelector('p');
          if (heroSubtitle) {
            const subtitleElement = heroSubtitle as HTMLElement;
            subtitleElement.classList.add('mobile-hero-subtitle');
            subtitleElement.style.fontSize = '1.125rem';
            subtitleElement.style.lineHeight = '1.5';
            subtitleElement.style.marginBottom = '2rem';
            subtitleElement.style.textAlign = 'center';
            subtitleElement.style.padding = '0 1rem';
          }
        });

        // Fix "Start Your Journey" buttons
        const journeyButtons = document.querySelectorAll('a[href="#newsletter"]');
        journeyButtons.forEach(button => {
          const btnElement = button as HTMLElement;
          btnElement.classList.add('mobile-hero-button');
          btnElement.style.display = 'flex';
          btnElement.style.visibility = 'visible';
          btnElement.style.opacity = '1';
          btnElement.style.position = 'relative';
          btnElement.style.zIndex = '10';
          btnElement.style.width = 'auto';
          btnElement.style.minWidth = '250px';
          btnElement.style.maxWidth = '90%';
          btnElement.style.padding = '1.25rem 2rem';
          btnElement.style.fontSize = '1.125rem';
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
        });

        // Fix Features Grid
        const featureGrids = document.querySelectorAll('.grid, .feature-grid');
        featureGrids.forEach(grid => {
          const gridElement = grid as HTMLElement;
          if (gridElement.children.length > 2) { // Only apply to feature grids
            gridElement.classList.add('mobile-features-grid');
            gridElement.style.display = 'grid';
            gridElement.style.gridTemplateColumns = '1fr';
            gridElement.style.gap = '1.5rem';
            gridElement.style.padding = '1rem';
          }
        });

        // Fix Feature Cards
        const featureCards = document.querySelectorAll('.feature-card, [class*="card"]');
        featureCards.forEach(card => {
          const cardElement = card as HTMLElement;
          if (cardElement.querySelector('h3, h4')) { // Only apply to actual feature cards
            cardElement.classList.add('mobile-feature-card');
            cardElement.style.padding = '2rem 1.5rem';
            cardElement.style.background = 'rgba(255, 255, 255, 0.95)';
            cardElement.style.borderRadius = '1.5rem';
            cardElement.style.border = '1px solid rgba(249, 115, 22, 0.1)';
            cardElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            cardElement.style.transition = 'all 0.3s ease';
            cardElement.style.textAlign = 'center';
          }
        });

        // Fix Navigation
        const navbars = document.querySelectorAll('nav, header');
        navbars.forEach(nav => {
          const navElement = nav as HTMLElement;
          navElement.classList.add('mobile-nav-enhanced');
        });

        // Fix Forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
          const formElement = form as HTMLElement;
          formElement.classList.add('mobile-form-container');
          
          const formGrid = form.querySelector('.grid');
          if (formGrid) {
            const gridElement = formGrid as HTMLElement;
            gridElement.classList.add('mobile-form-grid');
            gridElement.style.display = 'grid';
            gridElement.style.gridTemplateColumns = '1fr';
            gridElement.style.gap = '1.5rem';
          }

          const inputs = form.querySelectorAll('input, textarea, select');
          inputs.forEach(input => {
            const inputElement = input as HTMLElement;
            inputElement.classList.add('mobile-form-input');
            inputElement.style.width = '100%';
            inputElement.style.padding = '1rem 1.25rem';
            inputElement.style.fontSize = '16px';
            inputElement.style.border = '2px solid #e5e7eb';
            inputElement.style.borderRadius = '0.75rem';
            inputElement.style.background = 'white';
            inputElement.style.transition = 'all 0.3s ease';
          });

          const buttons = form.querySelectorAll('button[type="submit"]');
          buttons.forEach(button => {
            const buttonElement = button as HTMLElement;
            buttonElement.classList.add('mobile-form-button');
            buttonElement.style.width = '100%';
            buttonElement.style.padding = '1.25rem 2rem';
            buttonElement.style.fontSize = '1.125rem';
            buttonElement.style.fontWeight = '600';
            buttonElement.style.background = 'linear-gradient(135deg, #f97316, #ea580c)';
            buttonElement.style.color = 'white';
            buttonElement.style.border = 'none';
            buttonElement.style.borderRadius = '0.75rem';
            buttonElement.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.4)';
            buttonElement.style.transition = 'all 0.3s ease';
            buttonElement.style.marginTop = '1rem';
          });
        });
      };

      // Apply fixes immediately
      applyMobileLayoutFixes();

      // Apply fixes after DOM changes
      const observer = new MutationObserver(() => {
        setTimeout(applyMobileLayoutFixes, 100);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });

      // Apply fixes on scroll for dynamic content
      const handleScroll = () => {
        requestAnimationFrame(applyMobileLayoutFixes);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Apply fixes on resize
      window.addEventListener('resize', applyMobileLayoutFixes, { passive: true });

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', applyMobileLayoutFixes);
      };
    }
  }, [isMobile, isTablet, screenSize]);

  return (
    <div 
      ref={layoutRef}
      className={`mobile-layout-manager ${isMobile ? 'mobile-optimized' : ''} ${isTablet ? 'tablet-optimized' : ''}`}
    >
      {children}
    </div>
  );
};

export default MobileLayoutManager;
