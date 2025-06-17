 
import { Sparkles, Zap, Stars } from "lucide-react";

const PoweredByAtlantiz = () => {
  return (
    <section id="powered-by-atlantiz" className="w-full bg-gradient-to-br from-yellow-50 via-orange-50/50 to-amber-50/30 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/8 to-orange-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-400/8 to-yellow-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-amber-300/8 to-orange-300/8 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="w-full rounded-3xl sm:rounded-[2rem] overflow-hidden relative group hover:scale-[1.02] transition-all duration-700 shadow-2xl">
          <div 
            className="bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-600 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[500px] flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            {/* Enhanced animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/30 to-amber-500/20 animate-gradient-x opacity-80"></div>
            
            {/* Floating sparkle effects */}
            <div className="absolute top-12 left-12 opacity-40 animate-float">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-20 right-16 opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-24 left-20 opacity-35 animate-float" style={{ animationDelay: "3s" }}>
              <Stars className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-32 right-32 opacity-25 animate-float" style={{ animationDelay: "2.5s" }}>
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            
            {/* Main heading - properly positioned and sized */}
            <div className="relative z-20 w-full max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-white italic font-light leading-tight relative">
                <span className="block bg-gradient-to-r from-yellow-100 via-white to-yellow-200 bg-clip-text text-transparent bg-size-200 animate-text-shimmer drop-shadow-2xl">
                  Powered by
                </span>
                <span className="block bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent bg-size-200 animate-text-shimmer drop-shadow-2xl mt-2" style={{ animationDelay: "0.5s" }}>
                  Atlantiz AI
                </span>
              </h2>
              
              {/* Decorative underline */}
              <div className="flex justify-center mt-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-yellow-400/10 via-orange-400/5 to-transparent rounded-3xl sm:rounded-[2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredByAtlantiz;
