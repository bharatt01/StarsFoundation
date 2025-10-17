import { motion } from "framer-motion";

export default function StoriesHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#a3db47] via-[#f6fefe] to-[#75a732] min-h-[300px] flex flex-col justify-center items-center px-6 py-20 mb-10 rounded-3xl shadow-xl overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-[#0757a0] mb-6 text-center"
      >
        Inspiring Stories
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg md:text-2xl text-[#0757a0]/80 text-center max-w-2xl mx-auto"
      >
        Real voices from our community, sharing journeys of hope, change, and empowerment with Stars Foundation.
      </motion.p>
    </section>
  );
}
