import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: (
      <>
        Uplift Communities — Empower <span className="text-[#9ac531]">Change</span>
      </>
    ),
    description:
      "StarFoundation is building hope for people in need. Discover our social projects, stories, and volunteer opportunities.",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: (
      <>
        Together We <span className="text-[#9ac531]">Make a Difference</span>
      </>
    ),
    description:
      "Join hands with us to create sustainable impact — from education to healthcare to empowerment.",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: (
      <>
        Be the <span className="text-[#9ac531]">Change</span> You Wish to See
      </>
    ),
    description:
      "Volunteer, contribute, or spread the word — your small steps can transform lives and communities.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000 // Change every 5 seconds
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].id}
            src={slides[current].image}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 text-white max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-snug sm:leading-tight md:leading-tight drop-shadow-md">
              {slides[current].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 md:mb-10 leading-relaxed drop-shadow">
              {slides[current].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#join"
                className="bg-[#9ac531] text-[#0757a0] px-6 sm:px-8 py-3 rounded font-bold shadow-lg hover:bg-[#86b22b] transition-colors text-center"
              >
                Join Us
              </a>
              <a
                href="#donate"
                className="bg-[#0757a0] text-white px-6 sm:px-8 py-3 rounded font-bold shadow-lg hover:bg-[#054b83] transition-colors text-center"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#9ac531]" : "bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Optional fade edges for modern look */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
