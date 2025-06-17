import { useEffect } from 'react';

export const useAccessibility = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const addSkipLink = () => {
      const existingSkipLink = document.getElementById('skip-link');
      if (existingSkipLink) return;

      const skipLink = document.createElement('a');
      skipLink.id = 'skip-link';
      skipLink.href = '#main-content';
      skipLink.textContent = 'Skip to main content';
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pulse-500 focus:text-white focus:rounded';
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Improve focus management
    const improveFocusManagement = () => {
      // Add focus indicators for keyboard navigation
      const style = document.createElement('style');
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #FE5C02 !important;
          outline-offset: 2px !important;
        }
        
        /* Hide focus for mouse users */
        .js-focus-visible :focus:not(.focus-visible) {
          outline: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA labels to interactive elements without them
    const improveAriaLabels = () => {
      // Find buttons without aria-label or accessible text
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        const buttonElement = button as HTMLButtonElement;
        if (!buttonElement.textContent?.trim()) {
          // If button has no text, try to infer from context
          const icon = buttonElement.querySelector('svg');
          if (icon) {
            buttonElement.setAttribute('aria-label', 'Interactive button');
          }
        }
      });

      // Add alt text to images without it
      const images = document.querySelectorAll('img:not([alt])');
      images.forEach((img) => {
        (img as HTMLImageElement).alt = 'Decorative image';
      });
    };

    // Announce page changes for screen readers
    const announcePageChanges = () => {
      const announcer = document.createElement('div');
      announcer.id = 'page-announcer';
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      document.body.appendChild(announcer);

      // Announce when new content loads
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            const hasNewContent = Array.from(mutation.addedNodes).some(
              (node) => node.nodeType === Node.ELEMENT_NODE
            );
            if (hasNewContent) {
              announcer.textContent = 'New content loaded';
              setTimeout(() => {
                announcer.textContent = '';
              }, 1000);
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    };

    // Check for reduced motion preference
    const respectReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      const handleReducedMotion = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches) {
          document.documentElement.style.setProperty('--animation-duration', '0.01ms');
          document.documentElement.style.setProperty('--transition-duration', '0.01ms');
          
          // Disable parallax and complex animations
          const animatedElements = document.querySelectorAll('.parallax, [class*="animate-"]');
          animatedElements.forEach((el) => {
            (el as HTMLElement).style.animation = 'none';
            (el as HTMLElement).style.transition = 'none';
          });
        }
      };

      handleReducedMotion(prefersReducedMotion);
      prefersReducedMotion.addEventListener('change', handleReducedMotion);

      return () => prefersReducedMotion.removeEventListener('change', handleReducedMotion);
    };

    // Initialize all accessibility improvements
    addSkipLink();
    improveFocusManagement();
    
    // Delay these to avoid blocking initial render
    setTimeout(() => {
      improveAriaLabels();
    }, 100);

    const cleanupAnnouncer = announcePageChanges();
    const cleanupReducedMotion = respectReducedMotion();

    return () => {
      cleanupAnnouncer?.();
      cleanupReducedMotion?.();
    };
  }, []);
};

// Hook for managing focus trap in modals
export const useFocusTrap = (isActive: boolean, containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  }, [isActive, containerRef]);
};
