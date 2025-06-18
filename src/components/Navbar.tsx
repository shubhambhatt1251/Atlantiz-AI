
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, ArrowRight, Zap } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Enhanced initial load animation with staggered timing
    const timer = setTimeout(() => setIsLoaded(true), 50);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-1 left-0 right-0 z-50 py-1.5 sm:py-2 transition-all duration-700 ease-out bg-transparent",
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
      )}
    >
      <div className="container flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Enhanced glassmorphism pill container */}
        <div className={cn(
          "flex items-center justify-between rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-500 ease-out border shadow-lg w-full max-w-6xl transform bg-white/90 backdrop-blur-sm",
          isScrolled
            ? "border-white/40 shadow-xl scale-100"
            : "border-white/30 shadow-lg",
          isLoaded
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 -translate-y-2"
        )}>
          <a
            href="#"
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Atlantiz AI"
          >
            {/* Enhanced logo text styling with advanced animations */}
            <span className={cn(
              "font-display font-bold text-base lg:text-lg bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-700 group-hover:to-orange-800 transition-all duration-500 drop-shadow-sm tracking-wide animate-text-shimmer transform",
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            )}>
              Atlantiz AI
            </span>
          </a>

          {/* Enhanced Desktop Navigation with staggered animations */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="#"
              className={cn(
                "relative px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isLoaded ? '100ms' : '0ms' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a
              href="#features"
              className={cn(
                "relative px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isLoaded ? '150ms' : '0ms' }}
            >
              Features
            </a>
            <a
              href="#details"
              className={cn(
                "relative px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isLoaded ? '200ms' : '0ms' }}
            >
              About
            </a>
            
            {/* New Comparison CTA - Hidden on smaller screens */}
            <a 
              href="#comparison"
              className={cn(
                "relative px-3 py-1.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center space-x-1",
                "text-orange-600 hover:text-orange-700 hover:bg-orange-50/70 border border-orange-200/50"
              )}
            >
              <Zap className="w-3 h-3" />
              <span>vs Traditional AI</span>
            </a>
          </nav>

          {/* Enhanced CTA Buttons Container */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Comparison CTA - Visible on medium screens */}
            <a 
              href="#comparison"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 text-orange-700 hover:text-orange-800 font-semibold text-xs lg:text-sm py-2 px-3 lg:px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-orange-200/50 lg:hidden"
            >
              <span className="relative z-10 flex items-center font-medium">
                <Zap className="w-3 h-3 mr-1" />
                <span className="hidden sm:inline">Compare AI</span>
              </span>
            </a>

            {/* Main CTA */}
            <a 
              href="#newsletter"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-xs lg:text-sm py-2 px-3 lg:px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 border border-white/30 shadow-md"
            >
              <span className="relative z-10 flex items-center font-medium">
                <Sparkles className="w-3 h-3 mr-1 lg:mr-1.5" />
                <span>Get Started</span>
                <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

          {/* Mobile menu button with enhanced animation + mobile optimizations */}
          <button
            type="button"
            className={cn(
              "md:hidden text-gray-700 p-1.5 rounded-full hover:bg-white/40 transition-all duration-500 transform hover:scale-110",
              "mobile-menu-btn", // Mobile-only optimization class
              isLoaded
                ? "translate-x-0 opacity-100 rotate-0"
                : "translate-x-4 opacity-0 rotate-90"
            )}
            style={{ transitionDelay: isLoaded ? '250ms' : '0ms' }}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={cn(
              "transition-transform duration-300",
              isMenuOpen ? "rotate-180" : "rotate-0"
            )}>
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation + Mobile Optimizations */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col pt-20 px-6 md:hidden transition-all duration-500 ease-in-out",
        "mobile-nav-overlay", // Mobile-only optimization class
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 items-center mt-8">
          <a 
            href="#" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Features
          </a>
          <a 
            href="#details" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>

          {/* Mobile Comparison CTA */}
          <a 
            href="#comparison"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 w-full text-center border border-orange-200/50"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10 flex items-center justify-center font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Traditional AI vs Atlantiz AI
            </span>
          </a>
          
          {/* Mobile Main CTA */}
          <a 
            href="#newsletter"
            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 mt-4 shadow-xl w-full text-center"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="relative z-10 flex items-center justify-center font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
