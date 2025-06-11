import React from 'react';

interface TechIllustrationProps {
  className?: string;
}

const TechIllustration: React.FC<TechIllustrationProps> = ({ className = "hero-svg" }) => {
  // Generate unique IDs for gradients to avoid conflicts when multiple instances exist
  const uniqueId = React.useMemo(() => Math.random().toString(36).substr(2, 9), []);
  const gradient1Id = `heroGradient1-${uniqueId}`;
  const gradient2Id = `heroGradient2-${uniqueId}`;
  const glowId = `glow-${uniqueId}`;

  return (
    <svg viewBox="0 0 400 300" className={className}>
      {/* Background gradient */}
      <defs>
        <linearGradient id={gradient1Id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#764ba2" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={gradient2Id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4361ee" stopOpacity="0.5" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Floating code blocks */}
      <g className="floating-elements">
        <rect x="50" y="40" width="80" height="50" rx="8" fill={`url(#${gradient1Id})`} className="float-element-1" />
        <rect x="55" y="45" width="70" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="55" y="55" width="50" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="55" y="62" width="60" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="55" y="69" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

        <rect x="270" y="60" width="90" height="60" rx="10" fill={`url(#${gradient2Id})`} className="float-element-2" />
        <circle cx="285" cy="80" r="8" fill="rgba(255,255,255,0.4)" />
        <rect x="300" y="76" width="40" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
        <rect x="300" y="88" width="30" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="300" y="98" width="35" height="6" rx="3" fill="rgba(255,255,255,0.2)" />

        <rect x="100" y="180" width="70" height="45" rx="8" fill={`url(#${gradient1Id})`} className="float-element-3" />
        <rect x="105" y="185" width="60" height="5" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="105" y="194" width="45" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="105" y="202" width="55" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        <rect x="105" y="210" width="35" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
      </g>

      {/* Central tech hub */}
      <g className="tech-hub">
        <circle cx="200" cy="150" r="60" fill={`url(#${gradient2Id})`} filter={`url(#${glowId})`} className="hub-circle" />
        <circle cx="200" cy="150" r="40" fill="rgba(255,255,255,0.1)" className="hub-inner" />
        <circle cx="200" cy="150" r="20" fill="rgba(255,255,255,0.2)" className="hub-core" />
        
        {/* Tech icons */}
        <g transform="translate(190, 140)">
          <rect x="0" y="0" width="20" height="20" rx="3" fill="rgba(255,255,255,0.4)" />
          <rect x="2" y="2" width="16" height="3" rx="1" fill="rgba(67,97,238,0.8)" />
          <rect x="2" y="7" width="12" height="2" rx="1" fill="rgba(67,97,238,0.6)" />
          <rect x="2" y="11" width="14" height="2" rx="1" fill="rgba(67,97,238,0.6)" />
          <rect x="2" y="15" width="10" height="2" rx="1" fill="rgba(67,97,238,0.6)" />
        </g>
      </g>

      {/* Connection lines */}
      <g className="connections" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none">
        <path d="M 130 65 Q 165 100 170 130" className="connection-1" />
        <path d="M 270 90 Q 235 115 230 130" className="connection-2" />
        <path d="M 170 205 Q 185 180 185 170" className="connection-3" />
      </g>

      {/* Floating particles */}
      <g className="particles">
        <circle cx="320" cy="40" r="2" fill="rgba(255,255,255,0.6)" className="particle-1" />
        <circle cx="80" cy="120" r="1.5" fill="rgba(255,255,255,0.5)" className="particle-2" />
        <circle cx="340" cy="180" r="2.5" fill="rgba(255,255,255,0.4)" className="particle-3" />
        <circle cx="60" cy="240" r="1.8" fill="rgba(255,255,255,0.5)" className="particle-4" />
        <circle cx="350" cy="250" r="1.2" fill="rgba(255,255,255,0.6)" className="particle-5" />
      </g>
    </svg>
  );
};

export default TechIllustration; 