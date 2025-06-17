/**
 * Atlantiz AI Media Protection System
 * Created by: Shubham
 * Designed by: Shubham
 * Copyright © 2024 Atlantiz AI - All Rights Reserved
 * 
 * This code is proprietary and confidential.
 * Unauthorized copying, distribution, or use is strictly prohibited.
 */

// Disable right-click context menu
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable text selection
export const disableTextSelection = () => {
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });
  
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });
};

// Disable keyboard shortcuts for developer tools and copying
export const disableKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+A (Select All)
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x') {
      e.preventDefault();
      return false;
    }
  });
};

// Protect images from being saved
export const protectImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('dragstart', (e) => {
      e.preventDefault();
      return false;
    });
    
    img.style.userSelect = 'none';
    img.style.webkitUserSelect = 'none';
    img.style.mozUserSelect = 'none';
    img.style.msUserSelect = 'none';
    img.style.pointerEvents = 'none';
  });
};

// Protect videos from being downloaded
export const protectVideos = () => {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
    video.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
    
    video.controlsList.add('nodownload');
    video.style.userSelect = 'none';
    video.style.webkitUserSelect = 'none';
  });
};

// Detect developer tools
export const detectDevTools = () => {
  const devtools = { open: false, orientation: null };
  
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || 
        window.outerWidth - window.innerWidth > 200) {
      if (!devtools.open) {
        devtools.open = true;
        console.clear();
        console.log('%c🚫 UNAUTHORIZED ACCESS DETECTED', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%c⚠️  This website is protected by Atlantiz AI Security', 'color: orange; font-size: 14px;');
        console.log('%c👨‍💻 Created by: Shubham', 'color: blue; font-size: 12px;');
        console.log('%c🎨 Designed by: Shubham', 'color: green; font-size: 12px;');
        console.log('%c© 2025 Atlantiz AI - All Rights Reserved', 'color: gray; font-size: 10px;');
      }
    } else {
      devtools.open = false;
    }
  }, 500);
};

// Initialize all protection measures
export const initializeMediaProtection = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      disableRightClick();
      disableTextSelection();
      disableKeyboardShortcuts();
      protectImages();
      protectVideos();
      detectDevTools();
    });
  } else {
    disableRightClick();
    disableTextSelection();
    disableKeyboardShortcuts();
    protectImages();
    protectVideos();
    detectDevTools();
  }
  
  // Re-apply protection when new content is added
  const observer = new MutationObserver(() => {
    protectImages();
    protectVideos();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};
