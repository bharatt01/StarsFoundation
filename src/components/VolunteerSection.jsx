import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const requirements = [
  "Must be 18 years or older",
  "No criminal record",
  "Strong interest in social work and community service",
  "Subject to application approval",
  "Commitment to follow our code of conduct",
];

export default function VolunteerSection() {
  return (
    <section
      id="volunteer"
      className="max-w-7xl mx-auto px-6 md:px-24 py-20 bg-white rounded-3xl shadow-2xl mb-24 relative overflow-hidden"
    >
      {/* Decorative gradient backgrounds */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-tr from-[#9ac531] to-[#75a732] opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-24 w-56 h-56 bg-gradient-to-br from-[#a2d031] to-[#74a13c] opacity-25 rounded-full blur-2xl -z-10" />

      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#9ac531] mb-10"
      >
        Volunteer Program
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-700 text-lg max-w-4xl mb-12 leading-relaxed"
      >
        Become a volunteer to support marginalized communities, raise awareness, and provide essential assistance throughout our programs across India.
      </motion.p>
      
      <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {requirements.map((item) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-gray-700 font-semibold text-lg"
          >
            <CheckCircleIcon className="w-7 h-7 text-[#9ac531] flex-shrink-0" />
            {item}
          </motion.li>
        ))}
      </ul>
      
      <motion.a
        href="/volunteer-application"
        className="block max-w-max mx-auto bg-gradient-to-r from-[#9ac531] to-[#75a732] text-white font-bold rounded-full px-16 py-5 shadow-lg hover:from-[#86b22b] hover:to-[#64932f] transition-all transform hover:scale-105"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply to Volunteer
      </motion.a>
    </section>
  );
}
