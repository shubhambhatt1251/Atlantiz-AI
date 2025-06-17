/**
 * ATLANTIZ AI - Main Application Component
 *
 * 🎨 Designed by: Shubham
 * 👨‍💻 Developed by: Shubham
 * 🏢 Company: Atlantiz AI
 * 📅 Year: 2025
 *
 * © 2025 Atlantiz AI - All Rights Reserved
 * Proprietary and Confidential
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import MobileOptimizer from "@/components/MobileOptimizer";
import MobileLayoutManager from "@/components/MobileLayoutManager";
import MobileAtlantizAISection from "@/components/MobileAtlantizAISection";
import MobileHeroEnhancer from "@/components/MobileHeroEnhancer";
import MobileNavigationEnhancer from "@/components/MobileNavigationEnhancer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MobileOptimizer>
          <MobileLayoutManager>
            <MobileNavigationEnhancer />
            <MobileHeroEnhancer />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <>
                    <Index />
                    <MobileAtlantizAISection />
                  </>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </MobileLayoutManager>
        </MobileOptimizer>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
