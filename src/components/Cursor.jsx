import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef();
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const hoverableElementsRef = useRef(new Set());

  const updateMousePosition = useCallback((e) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const newX = e.clientX;
      const newY = e.clientY;

      // Only update if position actually changed
      if (lastPositionRef.current.x !== newX || lastPositionRef.current.y !== newY) {
        lastPositionRef.current = { x: newX, y: newY };
        setMousePosition({ x: newX, y: newY });
      }
    });
  }, []);

  const checkHoverState = useCallback((e) => {
    const target = e.target;
    const isHoverable =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.closest("button") ||
      target.closest("a") ||
      target.closest('[role="button"]') ||
      target.classList.contains("hoverable");

    setIsHovering(isHoverable);
  }, []);

  useEffect(() => {
    // Pre-populate hoverable elements cache
    const updateHoverableCache = () => {
      hoverableElementsRef.current = new Set([
        ...document.querySelectorAll('button, a, [role="button"], .hoverable')
      ]);
    };

    updateHoverableCache();

    // Use passive event listeners for better performance
    const options = { passive: true };

    window.addEventListener("mousemove", updateMousePosition, options);
    window.addEventListener("mouseover", checkHoverState, options);

    // Update cache periodically for dynamic content
    const cacheInterval = setInterval(updateHoverableCache, 1000);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", checkHoverState);
      clearInterval(cacheInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateMousePosition, checkHoverState]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 30,
          mass: 0.3,
          restDelta: 0.001
        }}
        style={{
          pointerEvents: 'none',
          zIndex: 2147483647,
          position: 'fixed',
          backgroundColor: 'hsl(var(--primary))',
          mixBlendMode: 'difference',
          opacity: 1,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed w-10 h-10 rounded-full pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 20,
          mass: 0.4,
          restDelta: 0.001
        }}
        style={{
          pointerEvents: 'none',
          zIndex: 2147483647,
          position: 'fixed',
          border: '2px solid hsl(var(--primary))',
          mixBlendMode: 'difference',
          opacity: 1,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      />
    </>
  );
};

export default Cursor;

