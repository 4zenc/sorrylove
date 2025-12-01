import React, { useEffect, useState } from 'react';

interface HeartStyle {
  id: number;
  left: string;
  animationDuration: string;
  opacity: number;
  scale: number;
}

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    // Generate static random positions for hearts on mount to avoid hydration mismatch/re-render jitter
    const newHearts: HeartStyle[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      opacity: 0.1 + Math.random() * 0.3,
      scale: 0.5 + Math.random() * 1,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-rose-300 animate-float"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            opacity: heart.opacity,
            transform: `scale(${heart.scale})`,
            fontSize: '2rem',
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};