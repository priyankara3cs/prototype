import React, { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = ({ scaling }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: largeCircle.x - 32,
          y: largeCircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
        style={{ scale: scaling ? 0.1 : 1 }}
      />
      <motion.div
        animate={{
          x: smallCircle.x - 8,
          y: smallCircle.y - 8,
          transition: { type: "spring", mass: 2 },
        }}
        className="small_circle"
      />
    </div>
  );
};

export default Cursor;
