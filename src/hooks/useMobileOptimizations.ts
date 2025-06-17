/**
 * ATLANTIZ AI - Mobile & Tablet Optimization Hook
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Enhanced mobile optimizations hook that works alongside existing code
 * WITHOUT changing any existing functionality or UI
 */

import { useEffect, useState, useCallback } from 'react';

interface MobileOptimizations {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  orientation: 'portrait' | 'landscape';
  touchDevice: boolean;
  devicePixelRatio: number;
}

export const useMobileOptimizations = (): MobileOptimizations => {
  const [optimizations, setOptimizations] = useState<MobileOptimizations>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenSize: 'lg',
    orientation: 'landscape',
    touchDevice: false,
    devicePixelRatio: 1,
  });

  const updateOptimizations = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Determine device type
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    // Determine screen size
    let screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'lg';
    if (width < 375) screenSize = 'xs';
    else if (width < 640) screenSize = 'sm';
    else if (width < 768) screenSize = 'md';
    else if (width < 1024) screenSize = 'lg';
    else if (width < 1280) screenSize = 'xl';
    else screenSize = '2xl';

    // Determine orientation
    const orientation = height > width ? 'portrait' : 'landscape';

    setOptimizations({
      isMobile,
      isTablet,
      isDesktop,
      screenSize,
      orientation,
      touchDevice,
      devicePixelRatio,
    });
  }, []);

  useEffect(() => {
    // Initial setup
    updateOptimizations();

    // Add resize listener
    const handleResize = () => {
      updateOptimizations();
    };

    // Add orientation change listener
    const handleOrientationChange = () => {
      // Delay to ensure dimensions are updated
      setTimeout(updateOptimizations, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [updateOptimizations]);

  // Apply mobile-specific optimizations
  useEffect(() => {
    const { isMobile, isTablet, touchDevice, screenSize } = optimizations;

    // Add device classes to body for CSS targeting
    document.body.classList.remove('mobile', 'tablet', 'desktop', 'touch', 'no-touch');
    document.body.classList.remove('xs', 'sm', 'md', 'lg', 'xl', '2xl');

    if (isMobile) document.body.classList.add('mobile');
    if (isTablet) document.body.classList.add('tablet');
    if (!isMobile && !isTablet) document.body.classList.add('desktop');
    if (touchDevice) document.body.classList.add('touch');
    if (!touchDevice) document.body.classList.add('no-touch');
    document.body.classList.add(screenSize);

    // Mobile-specific optimizations
    if (isMobile) {
      // Disable hover effects on mobile
      document.documentElement.style.setProperty('--hover-enabled', '0');
      
      // Optimize scroll behavior
      document.documentElement.style.setProperty('scroll-behavior', 'smooth');
      
      // Prevent zoom on input focus (iOS)
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        );
      }
    } else {
      // Re-enable hover effects on desktop
      document.documentElement.style.setProperty('--hover-enabled', '1');
      
      // Reset viewport for desktop
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
      }
    }

    // Touch-specific optimizations
    if (touchDevice) {
      // Add touch-friendly classes
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        el.classList.add('touch-target');
      });
      
      // Disable text selection on interactive elements
      document.querySelectorAll('button, .button-primary, .button-secondary').forEach(el => {
        (el as HTMLElement).style.userSelect = 'none';
        (el as HTMLElement).style.webkitUserSelect = 'none';
      });
    }

    // Screen size specific optimizations
    if (screenSize === 'xs' || screenSize === 'sm') {
      // Extra small screen optimizations
      document.documentElement.style.setProperty('--container-padding', '0.75rem');
      document.documentElement.style.setProperty('--section-padding', '1.5rem');
    } else if (screenSize === 'md') {
      // Medium screen optimizations
      document.documentElement.style.setProperty('--container-padding', '1rem');
      document.documentElement.style.setProperty('--section-padding', '2rem');
    } else {
      // Large screen defaults
      document.documentElement.style.setProperty('--container-padding', '2rem');
      document.documentElement.style.setProperty('--section-padding', '3rem');
    }

  }, [optimizations]);

  return optimizations;
};

// Additional utility functions for mobile optimizations
export const useMobileUtils = () => {
  const optimizations = useMobileOptimizations();

  const preventZoom = useCallback(() => {
    if (optimizations.isMobile) {
      document.addEventListener('gesturestart', (e) => e.preventDefault());
      document.addEventListener('gesturechange', (e) => e.preventDefault());
      document.addEventListener('gestureend', (e) => e.preventDefault());
    }
  }, [optimizations.isMobile]);

  const optimizeForTouch = useCallback(() => {
    if (optimizations.touchDevice) {
      // Add touch-friendly styles
      const style = document.createElement('style');
      style.textContent = `
        .touch .hover\\:scale-105:hover,
        .touch .hover\\:scale-110:hover {
          transform: scale(1.02) !important;
        }
        
        .touch button,
        .touch a,
        .touch [role="button"] {
          -webkit-tap-highlight-color: rgba(249, 115, 22, 0.1);
        }
        
        .touch input,
        .touch textarea,
        .touch select {
          font-size: 16px !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, [optimizations.touchDevice]);

  const handleOrientationChange = useCallback(() => {
    // Handle orientation changes smoothly
    const handleChange = () => {
      // Force a reflow to ensure proper layout
      document.body.style.height = '100vh';
      setTimeout(() => {
        document.body.style.height = '';
      }, 100);
    };

    window.addEventListener('orientationchange', handleChange);
    return () => window.removeEventListener('orientationchange', handleChange);
  }, []);

  useEffect(() => {
    preventZoom();
    optimizeForTouch();
    const cleanup = handleOrientationChange();
    return cleanup;
  }, [preventZoom, optimizeForTouch, handleOrientationChange]);

  return {
    ...optimizations,
    preventZoom,
    optimizeForTouch,
  };
};

// Hook for responsive breakpoints
export const useResponsiveBreakpoints = () => {
  const { screenSize, isMobile, isTablet, isDesktop } = useMobileOptimizations();

  return {
    xs: screenSize === 'xs',
    sm: screenSize === 'sm',
    md: screenSize === 'md',
    lg: screenSize === 'lg',
    xl: screenSize === 'xl',
    '2xl': screenSize === '2xl',
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
    screenSize,
  };
};

export default useMobileOptimizations;
