/**
 * ATLANTIZ AI - Anti-Copy Protection System
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * Advanced protection against code copying and unauthorized usage
 */

// Obfuscated creator verification
const CREATOR_HASH = btoa('Shubham_Atlantiz_2025').split('').reverse().join('');
const AUTHORIZED_DOMAINS = [
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

// Advanced source code protection
export const protectSourceCode = (): void => {
  // Skip protection in development mode
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode - Source code protection disabled');
    return;
  }

  // Prevent view source in production
  document.addEventListener('keydown', (e) => {
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      showViolationWarning('Source code access blocked');
      return false;
    }
    
    // Block Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      showViolationWarning('Developer tools access blocked');
      return false;
    }
    
    // Block F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
      showViolationWarning('Developer tools access blocked');
      return false;
    }
    
    // Block Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      showViolationWarning('Inspect element blocked');
      return false;
    }
    
    // Block Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      showViolationWarning('Console access blocked');
      return false;
    }
  });
  
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showViolationWarning('Right-click disabled');
    return false;
  });
  
  // Prevent text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });
  
  // Prevent drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Show violation warning
const showViolationWarning = (message: string): void => {
  const warning = document.createElement('div');
  warning.innerHTML = `
    <div style="
      position: fixed; top: 20px; right: 20px; 
      background: linear-gradient(135deg, #dc2626, #991b1b);
      color: white; padding: 15px 20px; border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      z-index: 999999; font-family: Arial, sans-serif;
      font-size: 14px; max-width: 300px;
    ">
      <div style="font-weight: bold; margin-bottom: 5px;">🚫 ${message}</div>
      <div style="font-size: 12px; opacity: 0.9;">
        This content is protected by Atlantiz AI Security
      </div>
      <div style="font-size: 10px; opacity: 0.7; margin-top: 5px;">
        © 2025 Atlantiz AI - Designed by Shubham
      </div>
    </div>
  `;
  
  document.body.appendChild(warning);
  
  setTimeout(() => {
    if (warning.parentNode) {
      warning.parentNode.removeChild(warning);
    }
  }, 3000);
  
  // Log violation attempt
  console.warn(`🚫 Security violation: ${message} at ${new Date().toISOString()}`);
};

// Advanced domain validation
export const validateAuthorizedDomain = (): boolean => {
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;

  // Always allow in development mode
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode - Domain validation passed');
    return true;
  }

  // Check if domain is authorized
  const isAuthorized = AUTHORIZED_DOMAINS.some(domain =>
    hostname === domain || hostname.endsWith(domain)
  );

  // Require HTTPS in production
  const isSecure = protocol === 'https:' || hostname === 'localhost' || hostname === '127.0.0.1';

  if (!isAuthorized || !isSecure) {
    document.body.innerHTML = `
      <div style="
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: linear-gradient(135deg, #dc2626, #991b1b);
        color: white; display: flex; flex-direction: column;
        justify-content: center; align-items: center; z-index: 999999;
        font-family: Arial, sans-serif; text-align: center;
      ">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">🚫 UNAUTHORIZED DOMAIN</h1>
        <p style="font-size: 1.2rem; margin-bottom: 1rem;">
          This application is not authorized to run on this domain
        </p>
        <p style="font-size: 1rem; opacity: 0.8; margin-bottom: 2rem;">
          Domain: ${hostname} | Protocol: ${protocol}
        </p>
        <div style="font-size: 0.9rem; opacity: 0.7;">
          <p>🎨 Designed by: Shubham</p>
          <p>👨‍💻 Developed by: Shubham</p>
          <p>© 2025 Atlantiz AI - All Rights Reserved</p>
        </div>
      </div>
    `;
    return false;
  }
  
  return true;
};

// Code integrity monitoring
export const monitorCodeIntegrity = (): void => {
  const originalFetch = window.fetch;
  const originalXHR = window.XMLHttpRequest;
  
  // Monitor fetch requests
  window.fetch = async (...args) => {
    const url = args[0]?.toString() || '';
    if (url.includes('github.com') || url.includes('raw.githubusercontent.com')) {
      console.error('🚫 Unauthorized attempt to fetch source code');
      throw new Error('Source code access blocked');
    }
    return originalFetch.apply(window, args);
  };
  
  // Monitor XHR requests
  window.XMLHttpRequest = class extends originalXHR {
    open(method: string, url: string | URL, ...args: any[]) {
      const urlString = url.toString();
      if (urlString.includes('github.com') || urlString.includes('raw.githubusercontent.com')) {
        console.error('🚫 Unauthorized attempt to access source code via XHR');
        throw new Error('Source code access blocked');
      }
      return super.open(method, url, ...args);
    }
  };
  
  // Monitor script injections
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName: string, ...args: any[]) {
    const element = originalCreateElement.apply(document, [tagName, ...args]);
    
    if (tagName.toLowerCase() === 'script') {
      const script = element as HTMLScriptElement;
      const originalSrcSetter = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src')?.set;
      
      if (originalSrcSetter) {
        Object.defineProperty(script, 'src', {
          set: function(value: string) {
            if (value.includes('github.com') || value.includes('raw.githubusercontent.com')) {
              console.error('🚫 Blocked attempt to load unauthorized script');
              return;
            }
            originalSrcSetter.call(this, value);
          },
          get: function() {
            return this.getAttribute('src') || '';
          }
        });
      }
    }
    
    return element;
  };
};

// Prevent code extraction via DevTools
export const preventCodeExtraction = (): void => {
  // Detect DevTools opening
  let devtools = false;
  const threshold = 160;
  
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools) {
        devtools = true;
        
        // Clear console and show warning
        console.clear();
        console.log('%c🚫 DEVELOPER TOOLS DETECTED', 'color: red; font-size: 24px; font-weight: bold;');
        console.log('%c⚠️ This application is protected by advanced security measures', 'color: orange; font-size: 16px;');
        console.log('%c🎨 Created by: Shubham for Atlantiz AI', 'color: blue; font-size: 14px;');
        console.log('%c© 2025 Atlantiz AI - Unauthorized access prohibited', 'color: gray; font-size: 12px;');
        
        // Obfuscate the console with random data
        setTimeout(() => {
          console.clear();
          for (let i = 0; i < 1000; i++) {
            const randomData = Math.random().toString(36).substring(2, 15);
            console.log(`%c${randomData}`, 'color: transparent; font-size: 1px;');
          }
        }, 2000);
        
        // Show warning overlay
        showViolationWarning('Developer tools detected - Code extraction blocked');
      }
    } else {
      devtools = false;
    }
  }, 500);
};

// Initialize all anti-copy protections
export const initializeAntiCopyProtection = (): void => {
  // Validate domain first
  if (!validateAuthorizedDomain()) {
    return; // Stop execution if domain is not authorized
  }

  // Initialize protection systems (relaxed in development)
  if (isDevelopmentMode()) {
    console.log('🔧 Development mode - Anti-copy protection in monitoring mode');
  } else {
    protectSourceCode();
    monitorCodeIntegrity();
    preventCodeExtraction();
  }
  
  // Add invisible watermarks to DOM
  const watermark = document.createElement('div');
  watermark.style.display = 'none';
  watermark.setAttribute('data-creator', atob(CREATOR_HASH.split('').reverse().join('')));
  watermark.setAttribute('data-protection', 'atlantiz-ai-security');
  watermark.setAttribute('data-timestamp', Date.now().toString());
  document.body.appendChild(watermark);
  
  console.log('%c🛡️ Anti-Copy Protection System Active', 
    'color: #10b981; font-size: 14px; font-weight: bold;');
  console.log('%c🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham', 
    'color: #3b82f6; font-size: 12px;');
  console.log('%c© 2025 Atlantiz AI - All Rights Reserved', 
    'color: #6b7280; font-size: 10px;');
};
