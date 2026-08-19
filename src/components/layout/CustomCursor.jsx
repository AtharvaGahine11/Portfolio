import React, { useState, useEffect } from 'react';

export const CustomCursor = ({ cursorText }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth lerp ring animation
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animateRing = () => {
      setRingPosition((prev) => ({
        x: lerp(prev.x, position.x, 0.22),
        y: lerp(prev.y, position.y, 0.22),
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animationFrameId = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  useEffect(() => {
    setIsHovered(!!cursorText);
  }, [cursorText]);

  return (
    <>
      {/* Inner Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Outer Ring with text */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>
  );
};
