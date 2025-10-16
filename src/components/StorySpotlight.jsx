// src/components/StorySpotlight.jsx
import { motion } from "framer-motion";

export default function StorySpotlight() {
  return (
    <section className="relative w-full h-[480px] md:h-[600px] my-20 rounded-lg overflow-hidden shadow-lg">
      <img
        src="/images/trial.jpg"
        alt="Volunteer Helping Community"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        loading="lazy"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24 text-white max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          "Volunteering here gave me purpose and the chance to change lives."
        </h2>
        <p className="text-xl font-semibold drop-shadow-md">
          — Priya, Community Volunteer
        </p>
      </motion.div>
    </section>
  );
}
