import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

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
        transition={{ type: "spring", stiffness: 1000, damping: 25, mass: 0.5 }}
        style={{ 
          pointerEvents: 'none',
          zIndex: 2147483647,
          position: 'fixed',
          backgroundColor: 'hsl(var(--primary))',
          mixBlendMode: 'difference',
          opacity: 1,
          willChange: 'transform',
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
        transition={{ type: "spring", stiffness: 400, damping: 12, mass: 0.3 }}
        style={{ 
          pointerEvents: 'none',
          zIndex: 2147483647,
          position: 'fixed',
          border: '2px solid hsl(var(--primary))',
          mixBlendMode: 'difference',
          opacity: 1,
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default Cursor;

