import React from 'react';

export const FuturisticHero = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-neon-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow-pulse"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-neon-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Scan line effect */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30 animate-scan-line"></div>
      
      {/* Tech border corners */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-brand-primary opacity-30"></div>
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-brand-secondary opacity-30"></div>
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-brand-accent opacity-30"></div>
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-brand-coral opacity-30"></div>
      
      {/* Floating tech elements */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="teal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Hexagons */}
        <g className="animate-float" style={{ animationDelay: '0s' }}>
          <polygon points="150,100 180,115 180,145 150,160 120,145 120,115" stroke="url(#teal-gradient)" strokeWidth="2" fill="none" />
        </g>
        <g className="animate-float" style={{ animationDelay: '1.5s' }}>
          <polygon points="950,200 980,215 980,245 950,260 920,245 920,215" stroke="url(#purple-gradient)" strokeWidth="2" fill="none" />
        </g>
        <g className="animate-float" style={{ animationDelay: '0.7s' }}>
          <polygon points="1050,500 1080,515 1080,545 1050,560 1020,545 1020,515" stroke="url(#orange-gradient)" strokeWidth="2" fill="none" />
        </g>
        
        {/* Circuit-like lines */}
        <g className="animate-float" style={{ animationDelay: '1s' }}>
          <path d="M 200 300 L 250 300 L 250 350 L 300 350" stroke="url(#teal-gradient)" strokeWidth="1.5" fill="none" />
          <circle cx="200" cy="300" r="3" fill="#14b8a6" opacity="0.6" />
          <circle cx="300" cy="350" r="3" fill="#14b8a6" opacity="0.6" />
        </g>
        <g className="animate-float" style={{ animationDelay: '2s' }}>
          <path d="M 900 450 L 950 450 L 950 500 L 1000 500" stroke="url(#purple-gradient)" strokeWidth="1.5" fill="none" />
          <circle cx="900" cy="450" r="3" fill="#8b5cf6" opacity="0.6" />
          <circle cx="1000" cy="500" r="3" fill="#8b5cf6" opacity="0.6" />
        </g>
        
        {/* Diamond shapes */}
        <g className="animate-float" style={{ animationDelay: '0.3s' }}>
          <rect x="250" y="550" width="40" height="40" transform="rotate(45 270 570)" stroke="url(#orange-gradient)" strokeWidth="2" fill="none" />
        </g>
        <g className="animate-float" style={{ animationDelay: '1.8s' }}>
          <rect x="800" y="150" width="35" height="35" transform="rotate(45 817.5 167.5)" stroke="url(#teal-gradient)" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </div>
  );
};