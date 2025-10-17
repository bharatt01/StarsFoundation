import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Progressive Image component (kept same)
function ProgressiveImage({ src, lowResSrc, alt }) {
  const [imageSrc, setImageSrc] = useState(lowResSrc);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fullImage = new Image();
    fullImage.src = src;
    fullImage.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
        loaded ? "blur-0 scale-100" : "blur-lg scale-105"
      }`}
    />
  );
}

const slides = [
  {
    id: 1,
    image: "/images/hero-section1.webp",
    lowRes: "/images/hero-section1-small.webp",
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
    image: "/images/hero-section2.webp",
    lowRes: "/images/hero-section2-small.webp",
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
    image: "/images/hero-section3.webp",
    lowRes: "/images/hero-section3-small.webp",
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
  const [preloaded, setPreloaded] = useState(false);

  // ✅ Preload all images once on mount
  useEffect(() => {
    const preload = async () => {
      const promises = slides.map(
        (s) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = s.image;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );
      await Promise.all(promises);
      setPreloaded(true);
    };
    preload();
  }, []);

  // ✅ Only start slider after preloading
  useEffect(() => {
    if (!preloaded) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [preloaded]);

  if (!preloaded) {
    // Show loading state quickly (optional)
    return (
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center bg-black text-white">
        <p className="animate-pulse text-lg">Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <ProgressiveImage
              src={slides[current].image}
              lowResSrc={slides[current].lowRes}
              alt="Hero Background"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
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

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#9ac531]" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
}
