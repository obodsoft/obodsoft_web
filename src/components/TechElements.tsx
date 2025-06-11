"use client";

import { useEffect, useState } from 'react';

interface TechElement {
  type: 'icon' | 'code';
  content: string;
  position: { x: number; y: number };
  delay: number;
  size: 'small' | 'medium' | 'large';
}

interface TechElementsProps {
  count?: number;
  className?: string;
  variant?: 'floating' | 'orbiting' | 'constellation';
}

// Utility function to get items without duplicates (unless necessary)
function getItemsWithMinimalDuplication<T>(
  sourceArray: T[], 
  requestedCount: number
): T[] {
  if (requestedCount === 0) return [];
  
  const result: T[] = [];
  const availableItems = [...sourceArray];
  
  // First, add all unique items
  while (result.length < requestedCount && availableItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableItems.length);
    result.push(availableItems.splice(randomIndex, 1)[0]);
  }
  
  // If we still need more items, allow duplicates
  while (result.length < requestedCount) {
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    result.push(sourceArray[randomIndex]);
  }
  
  // Shuffle the final result for better randomness
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
}

export default function TechElements({ 
  count = 30, 
  className = '',
  variant = 'floating'
}: TechElementsProps) {
  const [elements, setElements] = useState<TechElement[]>([]);

  // Unified tech elements array (emojis + essential tech terms + code snippets)
  const techElements = [
    // Core Tech Emojis
    '⚛️', '🚀', '⚡', '🔥', '💎', '🌟', '🧠', '💡', '🎯', '⚙️',
    
    // AI & ML Emojis
    '🤖', '🧪', '🔬', '📊', '📈', '🔍', '🔮',
    
    // Web & Mobile Emojis  
    '💻', '📱', '🌐', '🔗', '📡', '💾', '🛠️', '📚', '📦',
    
    // Cloud & DevOps Emojis
    '☁️', '🔐', '🔧', '🏗️', '🔄',
    
    // Essential Tech Terms (short)
    'JS', 'TS', 'CSS', 'API', 'UI', 'UX', 'AI', 'ML', 'GPT',
    'AWS', 'GIT', 'NPM', 'React', 'Next.js', 'iOS', 'SDK',
    'REST', 'JWT', 'Docker', 'K8S', 'GraphQL', 'CI',
    
    // Code Elements
    '{ }', '< >', '[ ]', '=> ', 'fn', 'async', 'const', 'await', "JSON", "API", "REST", "Claude", "ChatGPT", "OpenAI",
  ];

  // Function to calculate distance between two points
  const calculateDistance = (pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Function to generate position with minimum distance constraint
  const generatePositionWithMinDistance = (
    existingPositions: { x: number; y: number }[], 
    minDistance: number = 8, // 8% of container width/height ≈ 50px on average
    maxAttempts: number = 50
  ): { x: number; y: number } => {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const position = {
        x: Math.random() * 100,
        y: Math.random() * 100
      };

      // Check if this position is far enough from all existing positions
      const isFarEnough = existingPositions.every(existing => 
        calculateDistance(position, existing) >= minDistance
      );

      if (isFarEnough) {
        return position;
      }
    }

    // If we can't find a good position after max attempts, use fallback grid-based positioning
    const gridSize = Math.ceil(Math.sqrt(existingPositions.length + 1));
    const gridIndex = existingPositions.length;
    const row = Math.floor(gridIndex / gridSize);
    const col = gridIndex % gridSize;
    
    return {
      x: (col + 0.5) * (100 / gridSize) + (Math.random() - 0.5) * 5, // Add small random offset
      y: (row + 0.5) * (100 / gridSize) + (Math.random() - 0.5) * 5
    };
  };

  // Function to determine appropriate size based on content
  const getSizeForContent = (content: string): 'small' | 'medium' | 'large' => {
    // Emojis and very short text (simple emoji detection)
    if (content.length === 1 || content.length === 2 && content.charCodeAt(0) > 127) {
      return ['small', 'medium', 'large'][Math.floor(Math.random() * 3)] as 'small' | 'medium' | 'large';
    }
    // Size based on content length for text
    
    else if (content.length <= 4) {
      return 'medium'; // fn, CSS, API, REST, etc.
    } else {
      return 'large'; // const, async, React, Docker, etc.
    }
  };

  // Function to determine element type based on content
  const getElementType = (content: string): 'icon' | 'code' => {
    // Code-specific elements
    const codePatterns = ['{ }', '< >', '[ ]', '=> ', 'fn', 'async', 'const', 'await'];
    return codePatterns.includes(content) ? 'code' : 'icon';
  };

  useEffect(() => {
    // Get items with minimal duplication
    const selectedElements = getItemsWithMinimalDuplication(techElements, count);
    
    const newElements: TechElement[] = [];
    const usedPositions: { x: number; y: number }[] = [];

    // Generate elements with proper spacing
    selectedElements.forEach(content => {
      const position = generatePositionWithMinDistance(usedPositions);
      usedPositions.push(position);

      const elementType = getElementType(content);
      
      newElements.push({
        type: elementType,
        content,
        position,
        delay: Math.random() * 5,
        size: getSizeForContent(content)
      });
    });

    setElements(newElements);
  }, [count]);

  const getVariantClass = () => {
    switch (variant) {
      case 'orbiting': return 'tech-elements-orbiting';
      case 'constellation': return 'tech-elements-constellation'; 
      default: return 'tech-elements-floating';
    }
  };

  return (
    <div className={`tech-elements ${getVariantClass()} ${className}`}>
      {elements.map((element, index) => (
        <div
          key={index}
          className={`tech-element tech-element-${element.type} tech-element-${element.size}`}
          style={{
            '--x': `${element.position.x}%`,
            '--y': `${element.position.y}%`,
            '--delay': `${element.delay}s`,
          } as React.CSSProperties}
        >
          {element.content}
        </div>
      ))}
    </div>
  );
} 