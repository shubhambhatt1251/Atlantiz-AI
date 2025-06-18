/**
 * ATLANTIZ AI - Mobile Optimizer Component
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Mobile optimization wrapper that enhances existing components
 * WITHOUT changing any existing code, UI, or functionality
 */

import React, { useEffect, ReactNode } from 'react';
import { useMobileUtils } from '@/hooks/useMobileOptimizations';

interface MobileOptimizerProps {
  children: ReactNode;
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({ children, className = '' }) => {
  const { isMobile, isTablet, touchDevice, screenSize } = useMobileUtils();

  useEffect(() => {
    // Apply mobile-specific optimizations
    if (isMobile || isTablet) {
      // Optimize scroll performance
      document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
      
      // Improve touch responsiveness
      document.documentElement.style.setProperty('touch-action', 'manipulation');
      
      // Optimize rendering
      document.documentElement.style.setProperty('-webkit-font-smoothing', 'antialiased');
      document.documentElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
    }

    // Touch-specific optimizations
    if (touchDevice) {
      // Disable double-tap zoom
      let lastTouchEnd = 0;
      const preventDoubleTapZoom = (event: TouchEvent) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      };

      document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });
      
      return () => {
        document.removeEventListener('touchend', preventDoubleTapZoom);
      };
    }
  }, [isMobile, isTablet, touchDevice]);

  // Generate responsive classes
  const responsiveClasses = [
    className,
    isMobile && 'mobile-optimized',
    isTablet && 'tablet-optimized',
    touchDevice && 'touch-optimized',
    `screen-${screenSize}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={responsiveClasses}>
      {children}
    </div>
  );
};

export default MobileOptimizer;
