/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                            ATLANTIZ AI                                      ║
 * ║                     Premium AI Assistant Platform                           ║
 * ║                                                                              ║
 * ║  🎨 DESIGNED BY: SHUBHAM                                                     ║
 * ║  👨‍💻 DEVELOPED BY: SHUBHAM                                                    ║
 * ║  🏢 COMPANY: ATLANTIZ AI                                                     ║
 * ║  📅 YEAR: 2025                                                               ║
 * ║                                                                              ║
 * ║  © 2025 Atlantiz AI - All Rights Reserved                                   ║
 * ║  Proprietary and Confidential                                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeWatermarking } from './utils/codeWatermark'
import { initializeMediaProtection } from './utils/mediaProtection'
import { initializeCodeProtection } from './utils/codeProtection'
import { initializeBuildProtection } from './utils/buildProtection'
import { initializeAntiCopyProtection } from './utils/antiCopy'
import { initializeDevelopmentEnvironment, isDevelopment } from './utils/devConfig'

// Initialize development environment first
initializeDevelopmentEnvironment();

// Initialize protection systems (smart mode based on environment)
if (isDevelopment()) {
  console.log('🔧 Development mode - Protection systems in monitoring mode');
  // Only initialize basic watermarking in development
  initializeWatermarking();
} else {
  console.log('🚀 Production mode - Full protection systems active');
  // Full protection in production
  initializeCodeProtection();
  initializeBuildProtection();
  initializeAntiCopyProtection();
  initializeWatermarking();
  initializeMediaProtection();
}

createRoot(document.getElementById("root")!).render(<App />);
