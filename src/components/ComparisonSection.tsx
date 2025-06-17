
import React from "react";
import { X, Check, Phone, Mail, MessageSquare, Users, Zap, TrendingUp, Sparkles } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-gray-50 via-white to-orange-50/30 animate-fade-in" id="comparison">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.1s" }}>
          <h2 className="section-title bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 bg-clip-text text-transparent animate-text-shimmer">
            Traditional AI vs Atlantiz AI
          </h2>
          <p className="section-subtitle text-gray-600 mt-4">
            See why businesses choose Atlantiz AI for superior results
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Traditional AI Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-3xl p-8 shadow-lg relative overflow-hidden opacity-0 animate-slide-up-fade hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <div className="absolute top-4 right-4">
              <div className="bg-red-100 text-red-600 p-2 rounded-full animate-pulse">
                <X className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Traditional AI Solutions</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.5s" }}>
                <div className="bg-red-100 text-red-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">15% conversion rates</h4>
                  <p className="text-gray-600 text-sm">Generic responses that feel impersonal</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.7s" }}>
                <div className="bg-red-100 text-red-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Limited personalization</h4>
                  <p className="text-gray-600 text-sm">One-size-fits-all approach to customer engagement</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.9s" }}>
                <div className="bg-red-100 text-red-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <X className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">No relationship building</h4>
                  <p className="text-gray-600 text-sm">Cold interactions without meaningful connections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Atlantiz AI Card */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-3xl p-8 shadow-xl relative overflow-hidden opacity-0 animate-slide-up-fade hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: "0.4s" }}>
            <div className="absolute top-4 right-4">
              <div className="bg-orange-100 text-orange-600 p-2 rounded-full animate-pulse-glow">
                <Check className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-text-shimmer">
                Atlantiz AI
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.6s" }}>
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">85% higher conversion rates</h4>
                  <p className="text-gray-600 text-sm">Build trust through intelligent, personalized interactions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.8s" }}>
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Advanced relationship mapping</h4>
                  <p className="text-gray-600 text-sm">Tracks the entire customer journey with precision</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 opacity-0 animate-slide-up-fade" style={{ animationDelay: "1.0s" }}>
                <div className="bg-orange-100 text-orange-600 p-1 rounded-full mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fully automated intelligence</h4>
                  <p className="text-gray-600 text-sm">Enterprise-grade AI that scales with your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Icons Section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          {/* Traditional Methods */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-6">
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-red-100 text-red-500 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-red-200 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-red-600">Cold Calls</p>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-red-100 text-red-500 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-red-200 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-red-600">Mass Emails</p>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-red-100 text-red-500 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-red-200 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-red-600">Generic Messages</p>
            </div>
          </div>

          {/* Atlantiz AI Methods */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-6">
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-orange-200 transition-colors animate-pulse-glow">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-orange-600">Smart Engagement</p>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-orange-200 transition-colors animate-pulse-glow" style={{ animationDelay: "0.5s" }}>
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-orange-600">Trust Building</p>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl mb-3 mx-auto w-fit hover:bg-orange-200 transition-colors animate-pulse-glow" style={{ animationDelay: "1s" }}>
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-orange-600">Win More Deals</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 opacity-0 animate-slide-up-fade" style={{ animationDelay: "1.4s" }}>
          <a 
            href="#newsletter"
            className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 shadow-lg relative overflow-hidden"
          >
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            Experience Atlantiz AI Today
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
