import React from "react";
import { motion } from "framer-motion";

const csrProjects = [
  {
    title: "Blood Donation Camps",
    desc: "Give the gift of life—join our blood donation camps today!",
    img: "/images/csr1.jpg",
  },
  {
    title: "Free Medicine Distribution",
    desc: "Healing hearts, saving lives—STARS Foundation’s free medicine distribution brings hope and health to all!",
    img: "/images/csr2.jpg",
  },
  {
    title: "Tuition for Underprivileged",
    desc: "Unlocking potential, one lesson at a time—Empowering Minds through tuition for the underprivileged!",
    img: "/images/csr3.jpg",
  },
  {
    title: "Go Green Initiative",
    desc: "Plant a tree, grow a future—join STARS Foundation’s Go Green, Grow Green initiative!",
    img: "/images/csr4.jpg",
  },
];

const governmentProjects = [
  "Schemes for minorities in India",
  "Educational Empowerment Scheme",
  "Economic Empowerment Scheme",
  "Infrastructure Development Scheme",
  "Ministry of Social Justice",
  "Ministry Of Culture",
  "Schemes for Cultural Development of India",
  "Ministry of Rural Development",
  "Schemes of the Rural Ministry",
];

const starsFoundationProjects = [
  "Community Rehabilitation",
  "Jobs Placement",
  "Vocational Training",
  "Cutting, Tailoring & DressMaking",
  "Empowering Communities through Swayam Sahayata Samuh Initiative",
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#f9fafb] py-24 px-4 sm:px-6 lg:px-24">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#0757a0] mb-16">
        Our <span className="text-[#9ac531]">Projects & Initiatives</span>
      </h2>

      {/* CSR Projects Carousel */}
      <div className="overflow-x-auto flex space-x-6 pb-6 mb-16">
        {csrProjects.map((project, idx) => (
          <motion.div
            key={idx}
            className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl shadow-xl flex-shrink-0 cursor-pointer overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-48 md:h-56">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0757a0]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Government Projects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-[#0757a0] mb-6 text-center">
          Government Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {governmentProjects.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default text-gray-700 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stars Foundation Projects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-[#9ac531] mb-6 text-center">
          Stars Foundation Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {starsFoundationProjects.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default text-gray-700 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
