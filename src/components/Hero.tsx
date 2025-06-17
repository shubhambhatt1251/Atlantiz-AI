
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import "../styles/atlantiz-animations.css";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Ultra-fast loading sequence with rapid connected animations
    const loadingSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
      setIsLoaded(true);

      // Rapid staggered animation phases - faster and more connected
      const phases = [0, 1, 2, 3, 4];
      for (const phase of phases) {
        await new Promise(resolve => setTimeout(resolve, 60));
        setAnimationPhase(phase);
      }
    };

    loadingSequence();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;

      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section
      className="min-h-screen overflow-hidden relative bg-cover animate-gradient-x flex items-center"
      id="hero"
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%',
        padding: isMobile ? '120px 12px 60px' : '140px 20px 80px'
      }}
    >
      {/* Enhanced animated background elements */}
      <div className={cn(
        "absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-30 blur-3xl rounded-full transition-all duration-1000",
        isLoaded ? "animate-morphing-glow animate-floating" : "scale-0 opacity-0"
      )}></div>
      <div className={cn(
        "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-pulse-50/10 to-pulse-100/20 transition-all duration-1000",
        isLoaded ? "animate-gradient-shift opacity-100" : "opacity-0"
      )}></div>

      {/* Floating particles */}
      <div className={cn(
        "absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full transition-all duration-1000",
        isLoaded ? "animate-floating opacity-60" : "opacity-0"
      )}></div>
      <div className={cn(
        "absolute top-3/4 right-1/3 w-1 h-1 bg-pulse-500 rounded-full transition-all duration-1000",
        isLoaded ? "animate-floating opacity-40" : "opacity-0"
      )} style={{ animationDelay: '2s' }}></div>
      <div className={cn(
        "absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-red-400 rounded-full transition-all duration-1000",
        isLoaded ? "animate-floating opacity-50" : "opacity-0"
      )} style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 h-full flex items-center" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center w-full">
          <div className="w-full lg:w-1/2">
            <div
              className={cn(
                "group relative inline-flex items-center px-3 py-1.5 mb-3 sm:mb-6 rounded-full font-bold text-xs transition-all duration-600 ease-out transform cursor-pointer overflow-hidden will-change-transform animate-text-shimmer",
                "bg-gradient-to-r from-white/95 via-pulse-50/90 to-orange-50/90 backdrop-blur-xl",
                "border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-pulse-500/40",
                "hover:scale-110 hover:bg-gradient-to-r hover:from-white hover:via-pulse-100 hover:to-orange-100",
                animationPhase >= 0
                  ? "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
                  : "opacity-0 translate-y-16 -translate-x-8 scale-75 rotate-12"
              )}
              style={{
                animation: animationPhase >= 0
                  ? 'attractiveLanding 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  : 'none',
                animationDelay: "0.05s"
              }}
            >
              {/* Enhanced animated background shimmer - like Atlantiz AI */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>

              {/* Multiple gradient layers for depth - like Atlantiz AI */}
              <div className="absolute inset-0 bg-gradient-to-r from-pulse-400/10 via-orange-400/20 to-pulse-400/10 animate-gradient-shift"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pulse-500/20 via-orange-500/30 to-pulse-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm animate-morphing-glow"></div>

              {/* Enhanced floating sparkle particles */}
              <div className="absolute -top-0.5 left-1 w-1 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-80 animate-floating animate-pulse"></div>
              <div className="absolute -bottom-0.5 right-2 w-0.5 h-0.5 bg-gradient-to-r from-pulse-500 to-orange-500 rounded-full opacity-70 animate-floating animate-pulse" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-floating animate-pulse" style={{ animationDelay: "0.8s" }}></div>

              {/* Enhanced icon with multiple effects - like Atlantiz AI */}
              <div className="relative z-10 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-pulse-500 via-orange-400 to-pulse-600 rounded-full animate-pulse animate-morphing-glow"></div>
                <span className="bg-gradient-to-r from-pulse-600 via-orange-500 to-pulse-700 bg-clip-text text-transparent font-bold animate-text-shimmer tracking-wide drop-shadow-sm">
                  Discover
                </span>
              </div>

              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pulse-400/10 to-orange-400/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
            </div>

            <h1
              className={cn(
                "section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-900 bg-clip-text text-transparent transition-all duration-600 ease-out transform",
                animationPhase >= 1
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              )}
            >
              Atlantiz AI:<br className="hidden sm:inline" />
              <span className={cn(
                "inline-block animate-text-shimmer bg-gradient-to-r from-pulse-500 via-orange-400 to-pulse-600 bg-clip-text text-transparent transition-all duration-500 ease-out transform",
                animationPhase >= 2
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              )}>
                Where Intelligence Flows
              </span>
            </h1>

            <p
              className={cn(
                "section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed text-gray-950 font-normal text-base sm:text-lg text-left transition-all duration-500 ease-out transform",
                animationPhase >= 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
            >
              Your co-pilot, learning and adapting to your productivity
            </p>
            
            <div
              className={cn(
                "flex justify-start mt-8 sm:mt-10 transition-all duration-600 ease-out transform",
                animationPhase >= 4
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              )}
            >
              <a
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault();
                  // Add click animation feedback
                  e.currentTarget.style.transform = 'scale(0.95)';
                  setTimeout(() => {
                    e.currentTarget.style.transform = '';
                  }, 150);

                  // Smooth scroll to newsletter section
                  const newsletterSection = document.getElementById('newsletter');
                  if (newsletterSection) {
                    newsletterSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className={cn(
                  "group relative overflow-hidden inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 will-change-transform",
                  "bg-transparent text-white font-medium text-base px-8 py-4 rounded-full",
                  "border-2 border-white/80 hover:border-white backdrop-blur-sm hover:bg-white/10",
                  animationPhase >= 4 ? "animate-pulse-glow" : ""
                )}
              >
                <span className="relative z-10 flex items-center whitespace-nowrap">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className={cn(
              "relative transition-all duration-700 ease-out z-10 transform",
              animationPhase >= 4
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-12"
            )}>
              <div className="w-full h-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className={cn(
                  "w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden transition-all duration-400 transform",
                  isLoaded ? "animate-float" : ""
                )}>
                  <img
                    ref={imageRef}
                    src="/assets/images/futuristic-idea-of-digital-software-soul-of-machine-spirit-of-technocratic-time-evolution_PhotoGrid (1).png"
                    alt="Atlantiz AI - Futuristic Digital Intelligence"
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-102 scale-[2.8]"
                    style={{
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                      objectPosition: 'center center',
                      clipPath: 'circle(18% at 50% 50%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
