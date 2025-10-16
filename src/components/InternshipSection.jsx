import { motion } from "framer-motion";

const benefits = [
  "Hands-on project experience",
  "Mentorship from experts",
  "Skill-building opportunities",
  "Flexible options: Delhi or Online",
  "Certificate on successful completion",
];

export default function InternshipSection() {
  return (
    <section
      id="internship"
      className="relative max-w-7xl mx-auto px-6 md:px-24 py-24 bg-gradient-to-tr from-[#d3f0b8] to-[#a5d63a] rounded-3xl shadow-2xl text-[#0757a0] mb-20 overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute top-[-4rem] left-[-4rem] w-72 h-72 bg-[#9ac531] rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-[-3rem] right-[-2rem] w-56 h-56 bg-[#afd74e] rounded-full blur-2xl opacity-40 -z-10" />

      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-8 drop-shadow-md"
      >
        Internship Program
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg max-w-4xl mb-8 leading-relaxed drop-shadow-sm"
      >
        Participate in unpaid internships at Stars Foundation, Delhi or online. Gain valuable experience working with our community development projects and advocacy campaigns.
      </motion.p>

      <p className="text-lg max-w-4xl mb-12 leading-relaxed drop-shadow-sm">
        Our internship program provides mentorship, skill-building opportunities, and hands-on project experience in a supportive environment.
      </p>

      <ul className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {benefits.map((item) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[#0757a0] font-semibold text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#9ac531] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="/internship-application"
        className="inline-block bg-[#0757a0] text-white font-bold rounded-full px-16 py-5 shadow-lg hover:bg-[#05467f] transition transform hover:scale-105"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply for Internship
      </motion.a>
    </section>
  );
}
