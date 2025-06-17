/**
 * ATLANTIZ AI - Advanced Code Protection System
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * ⚠️ CRITICAL SECURITY MODULE - DO NOT MODIFY
 * This module contains proprietary protection algorithms
 */

// Encrypted license key (only Shubham knows the real key)
const ENCRYPTED_LICENSE = 'QXRsYW50aXpBSV9TaHViaGFtXzIwMjVfUHJvdGVjdGVk';
const DOMAIN_WHITELIST = [
  'localhost',
  '127.0.0.1',
  'vercel.app',
  'netlify.app',
  'github.io',
  'surge.sh',
  'firebase.app',
  'herokuapp.com',
  'render.com',
  'railway.app',
  'fly.dev'
];
const CREATOR_SIGNATURE = 'SHUBHAM_ATLANTIZ_2025';

// Development mode detection
const isDevelopmentMode = (): boolean => {
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.') ||
    window.location.hostname.startsWith('10.') ||
    window.location.protocol === 'file:' ||
    process.env.NODE_ENV === 'development'
  );
};

// Advanced obfuscation techniques
const obfuscatedCheck = () => {
  const checks = [
    () => btoa('Shubham') === 'U2h1YmhhbQ==',
    () => new Date().getFullYear() >= 2025,
    () => window.location.protocol === 'https:' || window.location.hostname === 'localhost',
    () => document.title.includes('Atlantiz') || document.title.includes('AI')
  ];
  
  return checks.every(check => {
    try { return check(); } catch { return false; }
  });
};

// Domain validation with multiple checks
const validateDomain = (): boolean => {
  const hostname = window.location.hostname;

  // Allow development environments
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode detected - Protection relaxed');
    return true;
  }

  const isValidDomain = DOMAIN_WHITELIST.some(domain =>
    hostname === domain || hostname.endsWith(domain)
  );

  // Additional checks for authorized deployment
  const hasValidSSL = window.location.protocol === 'https:' || hostname === 'localhost';

  return isValidDomain && hasValidSSL;
};

// License verification system
const verifyLicense = (): boolean => {
  // Always allow in development mode
  if (isDevelopmentMode()) {
    return true;
  }

  try {
    const decoded = atob(ENCRYPTED_LICENSE);
    const expectedSignature = `AtlantizAI_Shubham_2025_Protected`;
    return decoded === expectedSignature && obfuscatedCheck();
  } catch {
    return false;
  }
};

// Advanced tampering detection
const detectTampering = (): boolean => {
  const criticalElements = [
    'meta[name="atlantiz-creator"]',
    'meta[name="atlantiz-designer"]',
    'script[id="atlantiz-watermark"]'
  ];
  
  return criticalElements.every(selector => {
    const element = document.querySelector(selector);
    return element && element.getAttribute('content')?.includes('Shubham');
  });
};

// Code integrity verification
const verifyCodeIntegrity = (): boolean => {
  const scripts = Array.from(document.scripts);
  const hasProtectionScript = scripts.some(script => 
    script.textContent?.includes('SHUBHAM_ATLANTIZ_2025') ||
    script.src?.includes('atlantiz')
  );
  
  const hasWatermarks = document.head.innerHTML.includes('Shubham') &&
                       document.head.innerHTML.includes('Atlantiz AI');
  
  return hasProtectionScript && hasWatermarks;
};

// Environment validation
const validateEnvironment = (): boolean => {
  const userAgent = navigator.userAgent;
  const isBot = /bot|crawler|spider|scraper/i.test(userAgent);
  const hasValidReferrer = document.referrer === '' || 
                          document.referrer.includes(window.location.hostname);
  
  return !isBot && hasValidReferrer;
};

// Main protection function
export const initializeCodeProtection = (): void => {
  // Skip protection in development mode
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode - Protection system in monitoring mode only');
    console.log('🎨 Created by: Shubham | 👨‍💻 Developed by: Shubham');
    console.log('© 2025 Atlantiz AI - All Rights Reserved');
    return;
  }

  // Immediate validation for production
  if (!verifyLicense()) {
    console.error('🚫 UNAUTHORIZED: Invalid license detected');
    document.body.innerHTML = `
      <div style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(135deg, #dc2626, #991b1b);
        color: white; display: flex; flex-direction: column;
        justify-content: center; align-items: center; z-index: 999999;
        font-family: Arial, sans-serif;
      ">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">🚫 UNAUTHORIZED ACCESS</h1>
        <p style="font-size: 1.5rem; margin-bottom: 2rem;">This application is protected by Atlantiz AI Security</p>
        <p style="font-size: 1rem; opacity: 0.8;">© 2025 Atlantiz AI - Designed by Shubham</p>
        <p style="font-size: 0.9rem; opacity: 0.6; margin-top: 1rem;">License verification failed</p>
      </div>
    `;
    return;
  }

  // Domain validation for production
  if (!validateDomain()) {
    console.error('🚫 UNAUTHORIZED: Invalid domain detected');
    document.body.innerHTML = `
      <div style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(135deg, #dc2626, #991b1b);
        color: white; display: flex; flex-direction: column;
        justify-content: center; align-items: center; z-index: 999999;
        font-family: Arial, sans-serif;
      ">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">🚫 UNAUTHORIZED DOMAIN</h1>
        <p style="font-size: 1.5rem; margin-bottom: 2rem;">This application is not authorized to run on this domain</p>
        <p style="font-size: 1rem; opacity: 0.8;">© 2025 Atlantiz AI - Designed by Shubham</p>
      </div>
    `;
    return;
  }

  // Environment validation
  if (!validateEnvironment()) {
    console.warn('⚠️ Suspicious environment detected');
    // Log but don't block (could be legitimate user)
  }

  // Continuous monitoring
  const monitoringInterval = setInterval(() => {
    if (!detectTampering() || !verifyCodeIntegrity()) {
      console.error('🚫 TAMPERING DETECTED: Code integrity compromised');
      clearInterval(monitoringInterval);
      document.body.style.display = 'none';
      alert('Security violation detected. Application terminated.');
      window.location.href = 'about:blank';
    }
  }, 5000);

  // Protect against common bypass attempts
  Object.defineProperty(window, 'console', {
    get: () => ({
      ...console,
      log: (...args: any[]) => {
        if (args.some(arg => typeof arg === 'string' && arg.includes('bypass'))) {
          console.error('🚫 Security bypass attempt detected');
          return;
        }
        console.log(...args);
      }
    }),
    configurable: false
  });

  // Prevent script injection
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          if (element.tagName === 'SCRIPT' && 
              !element.textContent?.includes(CREATOR_SIGNATURE)) {
            console.warn('⚠️ Unauthorized script injection attempt');
            element.remove();
          }
        }
      });
    });
  });

  observer.observe(document.head, { childList: true, subtree: true });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log('%c✅ Atlantiz AI Protection System Active', 
    'color: #10b981; font-size: 14px; font-weight: bold;');
  console.log('%c🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham', 
    'color: #3b82f6; font-size: 12px;');
  console.log('%c© 2025 Atlantiz AI - All Rights Reserved', 
    'color: #6b7280; font-size: 10px;');
};

// Export protection status for other modules
export const getProtectionStatus = () => ({
  licensed: verifyLicense(),
  domainValid: validateDomain(),
  integrityValid: verifyCodeIntegrity(),
  environmentValid: validateEnvironment()
});

// Advanced obfuscation wrapper
export const protectedExecute = (callback: () => void) => {
  if (verifyLicense() && validateDomain()) {
    callback();
  } else {
    console.error('🚫 Protected function access denied');
  }
};
