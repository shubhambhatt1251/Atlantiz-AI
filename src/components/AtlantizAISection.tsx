import React, { useEffect, useRef, useState, useCallback } from "react";

const AtlantizAISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const rafId = useRef<number>(0);
  const lastScrollY = useRef(0);

  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '24px',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    contain: 'layout style paint'
  };

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Only proceed if scroll has changed significantly
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
      
      lastScrollY.current = currentScrollY;
      
      if (!sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollDistance = viewportHeight * 1.8; // Reduced for smoother transitions
      
      let progress = 0;
      if (sectionRect.top <= 0) {
        progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
      }
      
      const newActiveIndex = progress >= 0.7 ? 2 : progress >= 0.35 ? 1 : 0;
      
      // Only update if the index actually changed
      setActiveCardIndex(prevIndex => {
        if (prevIndex !== newActiveIndex) {
          return newActiveIndex;
        }
        return prevIndex;
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px' // Start loading slightly before visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleScroll]);

  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  // Memoized card components for better performance
  const Card1 = React.memo(() => (
    <div 
      className={`absolute inset-0 overflow-hidden shadow-2xl hover:shadow-pulse-500/30 ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
      style={{
        ...cardStyle,
        zIndex: 10,
        transform: `translate3d(0, ${isFirstCardVisible ? '90px' : '200px'}, 0) scale(0.9)`,
        opacity: isFirstCardVisible ? 0.9 : 0,
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(255, 138, 0, 0.1))'
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section1.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-pulse-400/20 via-transparent to-orange-400/20 animate-gradient-x"></div>
      
      <div className="absolute top-6 right-6 z-20">
        <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105">
          <span className="text-sm font-semibold tracking-wide">Evolution</span>
        </div>
      </div>
      
      <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
        <div className="max-w-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 animate-text-shimmer drop-shadow-lg">
            It's the next evolution in personal and professional efficiency.
          </h3>
        </div>
      </div>
    </div>
  ));

  const Card2 = React.memo(() => (
    <div 
      className={`absolute inset-0 overflow-hidden shadow-2xl hover:shadow-pulse-500/30 ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
      style={{
        ...cardStyle,
        zIndex: 20,
        transform: `translate3d(0, ${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}, 0) scale(0.95)`,
        opacity: isSecondCardVisible ? 1 : 0,
        pointerEvents: isSecondCardVisible ? 'auto' : 'none',
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(255, 138, 0, 0.15))'
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-pulse-400/20 animate-gradient-x" style={{ animationDelay: "1s" }}></div>
      
      <div className="absolute top-6 right-6 z-20">
        <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105">
          <span className="text-sm font-semibold tracking-wide">Intelligence</span>
        </div>
      </div>
      
      <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
        <div className="max-w-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 animate-text-shimmer drop-shadow-lg">
            For intelligence that doesn't just assist, it acts.
          </h3>
        </div>
      </div>
    </div>
  ));

  const Card3 = React.memo(() => (
    <div 
      className={`absolute inset-0 overflow-hidden shadow-2xl hover:shadow-pulse-500/30 ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
      style={{
        ...cardStyle,
        zIndex: 30,
        transform: `translate3d(0, ${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}, 0) scale(1)`,
        opacity: isThirdCardVisible ? 1 : 0,
        pointerEvents: isThirdCardVisible ? 'auto' : 'none',
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(255, 138, 0, 0.2))'
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(249, 115, 22, 0.85), rgba(194, 65, 12, 0.9)), url('/background-section3.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-pulse-400/30 via-transparent to-orange-400/30 animate-gradient-x" style={{ animationDelay: "2s" }}></div>
      
      <div className="absolute top-6 right-6 z-20">
        <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105">
          <span className="text-sm font-semibold tracking-wide">Control</span>
        </div>
      </div>
      
      <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex items-center">
        <div className="max-w-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 animate-text-shimmer drop-shadow-lg">
            Gaining crystal-clear control over your <span className="text-orange-300 animate-pulse-glow font-extrabold">complex tasks</span>
          </h3>
        </div>
      </div>
    </div>
  ));

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-gradient-to-br from-white via-pulse-50/40 to-orange-50/30 relative">
        {/* Enhanced background elements with better performance */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pulse-200/50 via-orange-200/30 to-transparent animate-float" style={{ willChange: 'transform' }}></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-pulse-300/30 rounded-full blur-3xl animate-pulse-glow" style={{ willChange: 'opacity' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s", willChange: 'transform' }}></div>
        
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col relative z-10">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip bg-gradient-to-r from-pulse-100 to-orange-100 border-pulse-300 opacity-0 animate-slide-up-fade hover:scale-110 transition-all duration-300" style={{
                animationDelay: "0.1s"
              }}>
                <span className="font-medium">Why AI</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2 bg-gradient-to-r from-gray-900 via-pulse-600 to-orange-600 bg-clip-text text-transparent animate-text-shimmer">
              Why Atlantiz AI
            </h2>
          </div>
          
          <div className="relative flex-1 perspective-1000">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtlantizAISection;
