import { motion } from "framer-motion";

export default function GetInvolvedHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#a3cb38] to-[#75a732] py-28 px-6 md:px-24 rounded-b-3xl shadow-2xl text-white text-center max-w-7xl mx-auto overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#d6f18a] opacity-40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-56 h-56 bg-[#a4d13b] opacity-50 rounded-full blur-2xl -z-10" />

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-lg"
      >
        Join <span className="text-white">Our Mission</span>
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-3xl mx-auto text-xl md:text-2xl font-semibold mb-12 leading-relaxed drop-shadow"
      >
        Volunteer, intern, donate, or attend our events—empower change with Stars Foundation and create a brighter future.
      </motion.p>

      <motion.a
        href="#volunteer"
        className="inline-block px-16 py-5 text-[#0757a0] font-bold bg-white rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Opportunities
      </motion.a>
    </section>
  );
}
