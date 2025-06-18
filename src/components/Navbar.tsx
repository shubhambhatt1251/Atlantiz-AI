
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fast initial load animation - optimized for mobile
    const timer = setTimeout(() => setIsLoaded(true), 10);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header
      className={cn(
        "fixed top-1 left-0 right-0 z-50 py-1 sm:py-1.5 transition-all duration-300 ease-out bg-transparent",
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
      )}
    >
      <div className="container flex items-center justify-center px-2 sm:px-4 lg:px-8">
        {/* Mobile-optimized pill container */}
        <div className={cn(
          "flex items-center justify-between rounded-full px-2 py-1 sm:px-4 sm:py-2 transition-all duration-300 ease-out border shadow-lg w-full max-w-6xl transform bg-white/90 backdrop-blur-sm",
          isScrolled
            ? "border-white/40 shadow-xl scale-100"
            : "border-white/30 shadow-lg",
          isLoaded
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 -translate-y-2"
        )}>
          <a
            href="#"
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Atlantiz AI"
          >
            {/* Mobile-optimized logo */}
            <span className={cn(
              "font-display font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-700 group-hover:to-orange-800 transition-all duration-300 drop-shadow-sm tracking-wide animate-text-shimmer transform",
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            )}>
              Atlantiz AI
            </span>
          </a>

          {/* Enhanced Navigation - Mobile Optimized */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <a
              href="#"
              className={cn(
                "relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
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
                "relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
            >
              Features
            </a>
            <a
              href="#details"
              className={cn(
                "relative px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 transform",
                "text-gray-700 hover:text-orange-600 hover:bg-white/70 hover:shadow-md",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              )}
            >
              About
            </a>
          </nav>

          {/* Single CTA Button - Works on all devices */}
          <div className="flex items-center">
            <a
              href="#newsletter"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 border border-white/30 shadow-md"
            >
              <span className="relative z-10 flex items-center font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline sm:inline">Get Started</span>
                <span className="xs:hidden sm:hidden">Start</span>
                <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>


    </header>
  );
};

export default Navbar;
