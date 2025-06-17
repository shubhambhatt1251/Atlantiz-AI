/**
 * ATLANTIZ AI - Development Configuration
 * 🎨 Designed by: Shubham | 👨‍💻 Developed by: Shubham
 * © 2025 Atlantiz AI - All Rights Reserved
 * 
 * This file helps manage development vs production behavior
 */

// Development environment detection
export const isDevelopment = (): boolean => {
  return (
    process.env.NODE_ENV === 'development' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.') ||
    window.location.hostname.startsWith('10.') ||
    window.location.protocol === 'file:'
  );
};

// Production environment detection
export const isProduction = (): boolean => {
  return !isDevelopment();
};

// Get current environment
export const getEnvironment = (): 'development' | 'production' => {
  return isDevelopment() ? 'development' : 'production';
};

// Development logging
export const devLog = (message: string, ...args: any[]): void => {
  if (isDevelopment()) {
    console.log(`🔧 [DEV] ${message}`, ...args);
  }
};

// Production logging
export const prodLog = (message: string, ...args: any[]): void => {
  if (isProduction()) {
    console.log(`🚀 [PROD] ${message}`, ...args);
  }
};

// Environment-specific configuration
export const config = {
  development: {
    enableProtection: false,
    enableLogging: true,
    enableDevTools: true,
    enableSourceMap: true,
    strictMode: false
  },
  production: {
    enableProtection: true,
    enableLogging: false,
    enableDevTools: false,
    enableSourceMap: false,
    strictMode: true
  }
};

// Get current config
export const getCurrentConfig = () => {
  return config[getEnvironment()];
};

// Initialize development environment
export const initializeDevelopmentEnvironment = (): void => {
  if (isDevelopment()) {
    console.log('%c🔧 DEVELOPMENT MODE ACTIVE', 'color: #10b981; font-size: 16px; font-weight: bold;');
    console.log('%c🎨 Created by: Shubham | 👨‍💻 Developed by: Shubham', 'color: #3b82f6; font-size: 12px;');
    console.log('%c© 2025 Atlantiz AI - All Rights Reserved', 'color: #6b7280; font-size: 10px;');
    console.log('%c⚡ Protection systems are in monitoring mode only', 'color: #f59e0b; font-size: 11px;');
    console.log('%c🛡️ Full protection will be active in production', 'color: #ef4444; font-size: 11px;');
  }
};
