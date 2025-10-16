import { motion } from "framer-motion";

const focusAreas = [
  {
    name: "Education Programs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.5a12.083 12.083 0 01-6.16-9.922L12 14z" />
      </svg>
    ),
  },
  {
    name: "Health & Nutrition",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    name: "Women Empowerment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    ),
  },
  {
    name: "Environmental Sustainability",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M16 7l-4 4-4-4" />
      </svg>
    ),
  },
  {
    name: "Child & Elderly Care",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 20a7 7 0 014-12h-4a3 3 0 01-3-3" />
      </svg>
    ),
  },
  {
    name: "Skill Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
      </svg>
    ),
  },
  {
    name: "Community Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#9ac531]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function OurWorkOverview() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-28 bg-white rounded-3xl shadow-lg">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-[#0757a0] mb-14 text-center"
      >
        Our Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed mb-20 text-center"
      >
        At Stars Foundation, we focus on multiple impactful areas to foster sustainable change and empower communities.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {focusAreas.map(({ name, icon }) => (
          <li
            key={name}
            className="flex flex-col items-center bg-gradient-to-tr from-[#d9ecc7] to-[#daf5c3] rounded-3xl p-8 font-semibold shadow-lg text-[#0757a0] cursor-default transform hover:scale-[1.07] transition-transform duration-300"
          >
            <div className="mb-4">{icon}</div>
            <span className="text-xl text-center">{name}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
