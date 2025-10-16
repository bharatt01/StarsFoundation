import { motion } from "framer-motion";

export default function DonationSection() {
  return (
    <section
      id="donate"
      className="max-w-7xl mx-auto px-6 md:px-24 py-24 rounded-3xl shadow-xl flex flex-col md:flex-row items-center bg-white"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 pr-0 md:pr-16 text-center md:text-left mb-12 md:mb-0"
      >
        <h2 className="text-5xl font-extrabold text-[#9ac531] mb-6">Support Our Mission</h2>
        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
          Your generous donations enable us to extend our reach and impact, funding ongoing programs and urgent initiatives that improve lives across India.
        </p>
        <a
          href="/donate"
          className="inline-block bg-[#9ac531] text-[#0757a0] font-bold rounded-full px-16 py-5 shadow-lg hover:bg-[#86b22b] transition transform hover:scale-105"
        >
          Donate Now
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 rounded-3xl overflow-hidden shadow-xl max-h-[400px]"
      >
        <img
          src="/images/volunteer.jpg" 
          alt="Support and Donate to Stars Foundation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9ac531]/60 via-transparent to-transparent rounded-3xl pointer-events-none"/>
      </motion.div>
    </section>
  );
}
