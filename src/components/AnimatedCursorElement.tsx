// components/AnimatedCursorElement.tsx
"use client";

import { motion, useMotionValue, useSpring} from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCursorElement() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-12 h-12 bg-cyan-400 rounded-t-2xl mix-blend-difference pointer-events-none"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
