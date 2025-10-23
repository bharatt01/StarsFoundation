import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandHoldingHeart, FaUserFriends, FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Stats with icons
const stats = [
  { label: "Volunteers", value: 1250, icon: FaUsers },
  { label: "Donors", value: 540, icon: FaHandHoldingHeart },
  { label: "Members", value: 320, icon: FaUserFriends },
  { label: "Visitors", value: 10500, icon: FaEye },
];

// Animated count component
function CountUp({ end, duration = 2, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = end / (duration * 60); // 60 FPS
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return <>{count.toLocaleString()}</>;
}

export default function ImpactCounters() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0757a0] mb-12">
          Our Impact In Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#9ac531] text-white text-2xl mb-4">
                  <Icon />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-[#0757a0]">
                  <CountUp end={stat.value} trigger={inView} />
                </span>
                <span className="mt-2 text-lg font-medium text-gray-700">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
