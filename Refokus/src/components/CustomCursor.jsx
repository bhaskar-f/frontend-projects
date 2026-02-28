import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Hide default cursor on desktop only */}
      <style>{`@media (hover: hover) { body { cursor: none; } }`}</style>

      <motion.div
        className="fixed top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-2 border-white rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
        animate={{ x: pos.x - 12, y: pos.y - 12 }}
        transition={{ type: "tween", duration: 0 }}
      />
    </>
  );
}
