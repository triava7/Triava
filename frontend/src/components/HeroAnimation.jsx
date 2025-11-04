import React, { useEffect, useRef } from 'react';

export const HeroAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && svgRef.current) {
      svgRef.current.style.animation = 'none';
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated geometric shapes */}
        <g className="animate-float" style={{ animationDelay: '0s' }}>
          <circle cx="200" cy="150" r="80" fill="url(#gradient1)" opacity="0.4" />
        </g>
        <g className="animate-float" style={{ animationDelay: '1s' }}>
          <rect x="800" y="100" width="120" height="120" fill="url(#gradient2)" opacity="0.3" transform="rotate(45 860 160)" />
        </g>
        <g className="animate-float" style={{ animationDelay: '2s' }}>
          <polygon points="1000,300 1100,400 1000,500 900,400" fill="url(#gradient3)" opacity="0.4" />
        </g>
        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
          <circle cx="300" cy="600" r="60" fill="url(#gradient4)" opacity="0.3" />
        </g>
        <g className="animate-float" style={{ animationDelay: '1.5s' }}>
          <rect x="600" y="500" width="100" height="100" fill="url(#gradient1)" opacity="0.3" transform="rotate(30 650 550)" />
        </g>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};