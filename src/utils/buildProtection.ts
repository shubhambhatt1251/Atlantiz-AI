/**
 * ATLANTIZ AI - Build Protection & Obfuscation System
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 *
 * This module makes the code extremely difficult to understand and reuse
 */

import React from 'react';

// Critical constants (obfuscated) - kept for future use

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

// Advanced function obfuscation - reserved for future use

// Execution validation
const validateExecution = (): boolean => {
  const checks = [
    () => window.location.hostname !== '',
    () => document.title.length > 0,
    () => navigator.userAgent.length > 0,
    () => !window.location.href.includes('file://'),
    () => document.documentElement.tagName === 'HTML'
  ];
  
  return checks.every(check => {
    try { return check(); } catch { return false; }
  });
};

// Code fingerprinting
export const generateCodeFingerprint = (): string => {
  const elements = [
    window.location.hostname,
    document.title,
    navigator.userAgent.substring(0, 50),
    Date.now().toString(36),
    Math.random().toString(36).substring(2)
  ];
  
  return btoa(elements.join('|')).substring(0, 32);
};

// Protected component wrapper
export const withProtection = <T extends React.ComponentType<any>>(
  Component: T,
  componentName: string
): T => {
  const ProtectedComponent = (props: any) => {
    React.useEffect(() => {
      if (!validateExecution()) {
        console.error(`🚫 Unauthorized access to ${componentName}`);
        return;
      }
      
      // Add invisible watermark to component
      const watermark = document.createElement('div');
      watermark.style.display = 'none';
      watermark.setAttribute('data-creator', 'Shubham');
      watermark.setAttribute('data-company', 'Atlantiz-AI');
      watermark.setAttribute('data-year', '2025');
      watermark.textContent = `Protected component: ${componentName}`;
      document.body.appendChild(watermark);
      
      return () => {
        if (watermark.parentNode) {
          watermark.parentNode.removeChild(watermark);
        }
      };
    }, []);
    
    return React.createElement(Component, props);
  };
  
  ProtectedComponent.displayName = `Protected(${componentName})`;
  return ProtectedComponent as T;
};

// Anti-debugging techniques
export const initializeAntiDebugging = (): void => {
  // Detect debugging attempts
  let devtools = false;
  
  const detectDevTools = () => {
    const threshold = 160;
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools) {
        devtools = true;
        console.clear();
        console.log('%c🚫 DEBUGGING DETECTED', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%c⚠️ This application is protected by advanced security measures', 'color: orange; font-size: 14px;');
        console.log('%c🎨 Created by: Shubham for Atlantiz AI', 'color: blue; font-size: 12px;');
        console.log('%c© 2025 Atlantiz AI - Unauthorized access prohibited', 'color: gray; font-size: 10px;');
        
        // Obfuscate console output
        setTimeout(() => {
          console.clear();
          for (let i = 0; i < 100; i++) {
            console.log(`%c${Math.random().toString(36)}`, 'color: transparent;');
          }
        }, 2000);
      }
    } else {
      devtools = false;
    }
  };
  
  setInterval(detectDevTools, 500);
  
  // Prevent common debugging techniques
  const originalLog = console.log;
  console.log = (...args: any[]) => {
    if (args.some(arg => typeof arg === 'string' && 
        (arg.includes('debugger') || arg.includes('breakpoint')))) {
      return;
    }
    originalLog.apply(console, args);
  };
  
  // Detect and prevent script injection
  const originalAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function(child) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const element = child as unknown as Element;
      if (element.tagName === 'SCRIPT' && 
          !element.textContent?.includes('Shubham') &&
          !element.textContent?.includes('Atlantiz')) {
        console.warn('🚫 Unauthorized script injection blocked');
        return child;
      }
    }
    return originalAppendChild.call(this, child);
  };
};

// Source code obfuscation helpers
export const obfuscateString = (str: string): string => {
  return btoa(str).split('').reverse().join('');
};

export const deobfuscateString = (str: string): string => {
  return atob(str.split('').reverse().join(''));
};

// Protected execution environment
export const createProtectedEnvironment = () => {
  const protectedGlobals = new Map();
  
  return {
    set: (key: string, value: any) => {
      if (validateExecution()) {
        protectedGlobals.set(obfuscateString(key), value);
      }
    },
    get: (key: string) => {
      if (validateExecution()) {
        return protectedGlobals.get(obfuscateString(key));
      }
      return undefined;
    },
    has: (key: string) => {
      if (validateExecution()) {
        return protectedGlobals.has(obfuscateString(key));
      }
      return false;
    }
  };
};

// Runtime integrity checks
export const performIntegrityCheck = (): boolean => {
  const criticalChecks = [
    () => document.querySelector('meta[name="atlantiz-creator"]')?.getAttribute('content') === 'Shubham',
    () => document.querySelector('meta[name="atlantiz-designer"]')?.getAttribute('content') === 'Shubham',
    () => document.title.includes('Atlantiz') || document.title.includes('AI'),
    () => !window.location.href.includes('file://'),
    () => document.documentElement.getAttribute('lang') !== null
  ];
  
  const results = criticalChecks.map(check => {
    try { return check(); } catch { return false; }
  });
  
  const integrityScore = results.filter(Boolean).length / results.length;
  return integrityScore >= 0.8; // 80% of checks must pass
};

// Initialize all protection systems
export const initializeBuildProtection = (): void => {
  // Skip aggressive protection in development
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode - Build protection in monitoring mode');
    console.log('🎨 Created by: Shubham | 👨‍💻 Developed by: Shubham');
    console.log('© 2025 Atlantiz AI - All Rights Reserved');
    return;
  }

  initializeAntiDebugging();

  // Continuous integrity monitoring (less frequent in production)
  setInterval(() => {
    if (!performIntegrityCheck()) {
      console.error('🚫 INTEGRITY VIOLATION: Application compromised');
      document.body.innerHTML = `
        <div style="
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: #dc2626; color: white; display: flex;
          flex-direction: column; justify-content: center;
          align-items: center; z-index: 999999; font-family: monospace;
        ">
          <h1>🚫 SECURITY VIOLATION</h1>
          <p>Application integrity compromised</p>
          <p style="font-size: 0.8em; opacity: 0.7;">© 2025 Atlantiz AI - Designed by Shubham</p>
        </div>
      `;
    }
  }, 30000); // Check every 30 seconds instead of 10

  console.log('%c🛡️ Build Protection System Initialized',
    'color: #10b981; font-size: 12px; font-weight: bold;');
};
