import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface UserInteraction {
  type: 'click' | 'scroll' | 'form_submit' | 'page_view';
  element?: string;
  timestamp: number;
  url: string;
}

class AnalyticsManager {
  private interactions: UserInteraction[] = [];
  private sessionId: string;
  private startTime: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.setupEventListeners();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupEventListeners() {
    // Track clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      this.trackInteraction({
        type: 'click',
        element: this.getElementSelector(target),
        timestamp: Date.now(),
        url: window.location.href
      });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
        maxScrollDepth = scrollDepth;
        this.trackInteraction({
          type: 'scroll',
          element: `${scrollDepth}%`,
          timestamp: Date.now(),
          url: window.location.href
        });
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      this.trackInteraction({
        type: 'form_submit',
        element: form.id || form.className || 'unknown_form',
        timestamp: Date.now(),
        url: window.location.href
      });
    });
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`;
    if (element.className) return `.${element.className.split(' ')[0]}`;
    return element.tagName.toLowerCase();
  }

  trackEvent(event: AnalyticsEvent) {
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }

    // Local analytics only - no external services for privacy
  }

  trackInteraction(interaction: UserInteraction) {
    this.interactions.push(interaction);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('👆 User Interaction:', interaction);
    }

    // Batch send interactions every 10 events or 30 seconds
    if (this.interactions.length >= 10) {
      this.sendInteractions();
    }
  }

  trackPageView(path: string) {
    this.trackEvent({
      action: 'page_view',
      category: 'navigation',
      label: path
    });

    this.trackInteraction({
      type: 'page_view',
      timestamp: Date.now(),
      url: window.location.href
    });
  }

  private sendInteractions() {
    if (this.interactions.length === 0) return;

    const payload = {
      sessionId: this.sessionId,
      interactions: this.interactions,
      sessionDuration: Date.now() - this.startTime,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('📤 Sending analytics batch:', payload);
    }

    // Local analytics only - no external endpoints for privacy and security

    this.interactions = [];
  }

  // Send remaining interactions before page unload
  flush() {
    this.sendInteractions();
  }
}

// Singleton instance
const analyticsManager = new AnalyticsManager();

// React hook for analytics
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    analyticsManager.trackPageView(location.pathname);
  }, [location]);

  useEffect(() => {
    // Flush analytics on page unload
    const handleBeforeUnload = () => {
      analyticsManager.flush();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return {
    trackEvent: (event: AnalyticsEvent) => analyticsManager.trackEvent(event),
    trackInteraction: (interaction: Omit<UserInteraction, 'timestamp' | 'url'>) =>
      analyticsManager.trackInteraction({
        ...interaction,
        timestamp: Date.now(),
        url: window.location.href
      })
  };
};

// Hook for tracking specific component interactions
export const useComponentAnalytics = (componentName: string) => {
  const { trackEvent } = useAnalytics();

  return {
    trackClick: (elementName: string) => {
      trackEvent({
        action: 'click',
        category: componentName,
        label: elementName
      });
    },
    trackView: () => {
      trackEvent({
        action: 'view',
        category: componentName
      });
    },
    trackInteraction: (action: string, label?: string) => {
      trackEvent({
        action,
        category: componentName,
        label
      });
    }
  };
};
