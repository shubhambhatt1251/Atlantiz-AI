
import React from "react";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-white via-orange-50/40 to-red-50/30 py-12 border-t border-gradient-to-r from-orange-100/50 via-red-100/30 to-orange-100/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Enhanced Logo and Brand Section - removed logo image */}
          <div className="flex items-center space-x-4 group relative">
            {/* Magical glow background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
            
            <div className="flex flex-col relative">
              <span className="font-display font-bold text-2xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-700 group-hover:to-orange-800 transition-all duration-500 drop-shadow-sm tracking-wide animate-text-shimmer">
                Atlantiz AI
              </span>
              <span className="text-gray-600 text-sm font-medium italic group-hover:text-orange-600 transition-colors duration-300">
                Where Intelligence Flows
              </span>
            </div>
          </div>
          
          {/* Enhanced Tagline with decorative elements */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg blur-sm"></div>
            <p className="relative text-center text-gray-700 text-lg font-medium italic bg-gradient-to-r from-gray-700 via-orange-600 to-gray-700 bg-clip-text text-transparent px-6 py-2">
              "Transforming possibilities into reality"
            </p>
          </div>
          
          {/* Decorative bottom border */}
          <div className="w-full max-w-md mx-auto pt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
