
/**
 * Atlantiz AI - Main Index Page
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AtlantizAISection from "@/components/AtlantizAISection";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import AICapabilitiesSection from "@/components/AICapabilitiesSection";
import ComparisonSection from "@/components/ComparisonSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import PoweredByAtlantiz from "@/components/PoweredByAtlantiz";
import Footer from "@/components/Footer";
import { usePerformanceMonitor, useRenderPerformance } from "@/hooks/usePerformanceMonitor";
import { useAccessibility } from "@/hooks/useAccessibility";

const Index = () => {
  // Performance monitoring
  usePerformanceMonitor();
  useRenderPerformance('Index');

  // Accessibility improvements
  useAccessibility();

  // Removed external analytics for privacy and security

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" className="space-y-4 sm:space-y-8">
        <Hero />
        <AtlantizAISection />
        <AIFeaturesSection />
        <AICapabilitiesSection />
        <ComparisonSection />
        <Features />
        <Testimonials />
        <Newsletter />
        <PoweredByAtlantiz />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
