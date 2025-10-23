import React from "react";
import { motion } from "framer-motion";

const causes = [
  { 
    title: "PLASTIC MUKT BHARAT", 
    image: "/images/plastic-cleaning.jpg"
  },
  { 
    title: "WOMEN EMPOWERMENT THROUGH SKILL DEVELOPMENT", 
    image: "/images/women-empowerment.jpg"
  },
  { 
    title: "HEALTH & SANITATIONS", 
    image: "/images/health-sanitation.jpg"
  },
  { 
    title: "CAREER COUNSELLING WORKSHOPS", 
    image: "/images/career-counselling.jpeg"
  },
  { 
    title: "CONSUMER AWARENESS WORKSHOPS", 
    image: "/images/awareness.jpg"
  },
  { 
    title: "EMPLOYMENT FAIR", 
    image: "/images/job-fair.jpg"
  },
];

export default function LatestCauses() {
  return (
    <section className="py-24 bg-[#f5f8fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-24 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0757a0]">
          Latest Causes
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Empowering communities with impactful initiatives.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {causes.map((cause, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-80 object-cover rounded-t-3xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Accent bar */}
            <div className="h-1 bg-[#9ac531] w-16 -mt-1 mx-auto rounded-full"></div>
            {/* Text content */}
            <div className="p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-[#0757a0] text-xl md:text-2xl font-bold text-center">
                {cause.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
