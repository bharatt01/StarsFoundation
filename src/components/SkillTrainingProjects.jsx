import React from "react";
import { motion } from "framer-motion";

const skillImage =
  "/images/skill-training.jpeg"; 

export default function SkillTrainingProjects() {
  return (
    <section className="relative bg-gradient-to-br from-[#f3faea] via-white to-[#e8f4ff] py-20 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden rounded-3xl">
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#9ac531]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-[#0757a0]/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 relative z-10"
      >
        {/* Image */}
        <div className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
          <img
            src={skillImage}
            alt="Training Session"
            className="object-cover w-full h-64 md:h-[360px]"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0757a0] mb-6 leading-tight">
            Projects For Skill Training
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-5">
            In India, skill development has been regarded as one of the most important factors in job generation. India enjoys a special demographic advantage because more than 60% of the population is under 25 years old. However, employability needs to be raised in order to benefit from such a sizable workforce.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-7">
            According to recent data, just 10% of recent graduates are employable, and the other 90% do not possess the necessary abilities to qualify for employment by a firm. The GDP of India is increasing at a healthy rate of about 6-8%, but employment growth is not keeping up.
          </p>
          <a
            href="donate"
            className="inline-block bg-[#9ac531] text-[#0757a0] font-bold text-lg px-8 py-3 rounded-full shadow-md hover:bg-[#86b22b] transition duration-200"
          >
            Support Skill Training
          </a>
        </div>
      </motion.div>
    </section>
  );
}
