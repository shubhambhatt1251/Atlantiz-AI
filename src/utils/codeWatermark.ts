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
 * ║  ⚠️  PROPRIETARY & CONFIDENTIAL                                              ║
 * ║  🔒 ALL RIGHTS RESERVED                                                      ║
 * ║  🚫 UNAUTHORIZED COPYING, DISTRIBUTION, OR USE IS STRICTLY PROHIBITED       ║
 * ║                                                                              ║
 * ║  This software contains proprietary code and trade secrets of Atlantiz AI.  ║
 * ║  Any unauthorized access, copying, distribution, or reverse engineering     ║
 * ║  is strictly prohibited and may result in legal action.                     ║
 * ║                                                                              ║
 * ║  For licensing inquiries, contact: contact@atlantizai.com                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// Encrypted watermark data
const WATERMARK_DATA = {
  creator: 'U2h1YmhhbQ==', // Base64 encoded "Shubham"
  designer: 'U2h1YmhhbQ==', // Base64 encoded "Shubham"
  company: 'QXRsYW50aXogQUk=', // Base64 encoded "Atlantiz AI"
  year: '2025',
  version: '1.0.0',
  build: Date.now().toString(36),
  signature: 'ATLZ_AI_PROTECTED_' + Math.random().toString(36).substr(2, 9)
};

// Console watermark with styling
export const displayConsoleWatermark = () => {
  const styles = {
    title: 'color: #f97316; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);',
    subtitle: 'color: #ea580c; font-size: 16px; font-weight: bold;',
    creator: 'color: #3b82f6; font-size: 14px; font-weight: bold;',
    warning: 'color: #dc2626; font-size: 12px; font-weight: bold; background: #fef2f2; padding: 4px;',
    info: 'color: #6b7280; font-size: 11px;',
    border: 'color: #f97316; font-size: 12px;'
  };

  console.clear();
  console.log('%c╔══════════════════════════════════════════════════════════════════════════════╗', styles.border);
  console.log('%c║                            🚀 ATLANTIZ AI 🚀                                ║', styles.title);
  console.log('%c║                     Premium AI Assistant Platform                           ║', styles.subtitle);
  console.log('%c║                                                                              ║', styles.border);
  console.log('%c║  🎨 DESIGNED BY: SHUBHAM                                                     ║', styles.creator);
  console.log('%c║  👨‍💻 DEVELOPED BY: SHUBHAM                                                    ║', styles.creator);
  console.log('%c║  🏢 COMPANY: ATLANTIZ AI                                                     ║', styles.creator);
  console.log('%c║  📅 YEAR: 2025                                                               ║', styles.info);
  console.log('%c║                                                                              ║', styles.border);
  console.log('%c║  ⚠️  PROPRIETARY & CONFIDENTIAL                                              ║', styles.warning);
  console.log('%c║  🔒 ALL RIGHTS RESERVED                                                      ║', styles.warning);
  console.log('%c║  🚫 UNAUTHORIZED ACCESS PROHIBITED                                           ║', styles.warning);
  console.log('%c║                                                                              ║', styles.border);
  console.log('%c║  This software contains proprietary code and trade secrets.                 ║', styles.info);
  console.log('%c║  Unauthorized access may result in legal action.                            ║', styles.info);
  console.log('%c║                                                                              ║', styles.border);
  console.log('%c║  For licensing: contact@atlantizai.com                                       ║', styles.info);
  console.log('%c╚══════════════════════════════════════════════════════════════════════════════╝', styles.border);
  console.log('');
  console.log('%c🔐 Build Signature: ' + WATERMARK_DATA.signature, styles.info);
  console.log('%c⏰ Build Time: ' + new Date().toISOString(), styles.info);
};

// Hidden watermark in DOM
export const embedDOMWatermark = () => {
  // Create hidden watermark elements
  const watermarkScript = document.createElement('script');
  watermarkScript.type = 'application/json';
  watermarkScript.id = 'atlantiz-watermark';
  watermarkScript.textContent = JSON.stringify({
    ...WATERMARK_DATA,
    timestamp: new Date().toISOString(),
    fingerprint: btoa(navigator.userAgent + window.location.href)
  });
  document.head.appendChild(watermarkScript);

  // Add meta tags with watermark info
  const metaTags = [
    { name: 'creator', content: atob(WATERMARK_DATA.creator) },
    { name: 'designer', content: atob(WATERMARK_DATA.designer) },
    { name: 'company', content: atob(WATERMARK_DATA.company) },
    { name: 'copyright', content: `© 2025 Atlantiz AI - All Rights Reserved` },
    { name: 'build-signature', content: WATERMARK_DATA.signature }
  ];

  metaTags.forEach(tag => {
    const meta = document.createElement('meta');
    meta.name = `atlantiz-${tag.name}`;
    meta.content = tag.content;
    document.head.appendChild(meta);
  });
};

// Watermark in CSS (invisible)
export const embedCSSWatermark = () => {
  const style = document.createElement('style');
  style.textContent = `
    /*
    * ╔══════════════════════════════════════════════════════════════════════════════╗
    * ║                            ATLANTIZ AI STYLES                               ║
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
    
    body::before {
      content: "© 2025 Atlantiz AI - Designed by Shubham";
      position: fixed;
      top: -1000px;
      left: -1000px;
      opacity: 0;
      pointer-events: none;
      z-index: -9999;
    }
    
    /* Build signature: ${WATERMARK_DATA.signature} */
    /* Creator: ${atob(WATERMARK_DATA.creator)} */
    /* Designer: ${atob(WATERMARK_DATA.designer)} */
  `;
  document.head.appendChild(style);
};

// Initialize all watermarking
export const initializeWatermarking = () => {
  // Display console watermark immediately
  displayConsoleWatermark();
  
  // Embed watermarks when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      embedDOMWatermark();
      embedCSSWatermark();
    });
  } else {
    embedDOMWatermark();
    embedCSSWatermark();
  }
  
  // Re-display console watermark periodically
  setInterval(displayConsoleWatermark, 30000); // Every 30 seconds
  
  // Display watermark when console is opened
  let devtools = false;
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || 
        window.outerWidth - window.innerWidth > 200) {
      if (!devtools) {
        devtools = true;
        displayConsoleWatermark();
      }
    } else {
      devtools = false;
    }
  }, 1000);
};
