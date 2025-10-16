// src/components/ImpactHighlights.jsx
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Villages Reached", value: 45, displayValue: "45+" },
  { label: "Children Educated", value: 3000, displayValue: "3000+" },
  { label: "Health Camps", value: 85, displayValue: "85+" },
  { label: "Volunteers", value: 200, displayValue: "200+" },
];

// ✅ Hook for animated count-up
function useCountUp(to, duration = 1500, startTrigger) {
  const [count, setCount] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (!startTrigger) {
      setCount(0);
      return;
    }

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const current = Math.min(Math.floor((progress / duration) * to), to);
      setCount(current);
      if (progress < duration) {
        raf.current = requestAnimationFrame(step);
      }
    };
    raf.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf.current);
  }, [to, duration, startTrigger]);

  return count;
}

// ✅ Separate sub-component for each circle
function ImpactCircle({ label, value, displayValue }) {
  const [animateCount, setAnimateCount] = useState(false);
  const count = useCountUp(value, 1500, animateCount);
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(value / 3000, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 30px rgba(154, 197, 49, 0.7)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-[#0757a0] rounded-full w-56 h-56 flex flex-col justify-center items-center shadow-2xl cursor-pointer p-8 flex-shrink-0"
      onViewportEnter={() => setAnimateCount(true)}
      onViewportLeave={() => setAnimateCount(false)}
      viewport={{ once: false, amount: 0.5 }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full transform -rotate-90"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#497d1a"
          strokeWidth="16"
          className="opacity-20"
        />
        <motion.circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#9ac531"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      <span className="relative text-white text-5xl font-extrabold z-10 leading-none">
        {value > 1000 ? displayValue : count}
      </span>
      <span className="relative text-[#9ac531] text-xl font-semibold mt-4 z-10 max-w-[140px]">
        {label}
      </span>
    </motion.div>
  );
}

export default function ImpactHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-24 text-center overflow-x-auto">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-16 text-[#9ac531]"
      >
        Our Impact in Numbers
      </motion.h3>

      <div className="flex gap-12 justify-center min-w-[900px]">
        {stats.map((stat) => (
          <ImpactCircle key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
