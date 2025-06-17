/**
 * AI Capabilities Section - Atlantiz AI
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 */



const AICapabilitiesSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-gradient-to-br from-white via-pulse-50/20 to-white relative overflow-hidden" id="showcase">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pulse-100/30 to-transparent animate-float"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll pt-12 sm:pt-16 md:pt-20">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-900 bg-clip-text text-transparent animate-text-shimmer">
            Experience the Future of Productivity
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed animate-slide-up-fade" style={{ animationDelay: "0.2s" }}>
            Atlantiz AI redefines how you interact with technology, creating seamless workflows 
            that adapt to your unique style and transform productivity into an art form.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl hover:shadow-pulse-500/20 mx-auto max-w-4xl animate-on-scroll transition-all duration-700 hover:scale-[1.02] group" data-secure>
          <div className="w-full relative overflow-hidden aspect-video">
            <video
              src="/assets/images/original-5169df287e917924464190d5bbd7d139.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: 'none', pointerEvents: 'auto' }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-pulse-500/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
          <div className="bg-white p-4 sm:p-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pulse-500 via-orange-400 to-pulse-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 to-pulse-600 bg-clip-text text-transparent">
              Next Generation AI Assistant
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Crafted with precision engineering and sophisticated AI algorithms, Atlantiz seamlessly 
              integrates into any work environment—from intimate home offices to bustling corporate spaces. 
              Experience intelligent assistance that evolves with you, providing contextual insights and 
              enriching every aspect of your productivity journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;
