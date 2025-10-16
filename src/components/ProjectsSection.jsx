import { motion } from "framer-motion";

// Example project data
const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing access to safe drinking water to 12 rural villages.",
    icon: "/images/water.jpg",
  },
  {
    title: "Education for All",
    description: "Distributed learning materials to 250+ children in need.",
    icon: "/images/education.jpg",
  },
  {
    title: "Medical Camps",
    description: "Free health check-ups and medicine for over 600 residents.",
    icon: "/images/medical.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-[#fafdff] py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-black text-[#0757a0] mb-10"
        >
          Our <span className="text-[#9ac531]">Impact Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={proj.icon}
                alt={proj.title + " icon"}
                className="w-40 h-23 mb-6"
              />
              <h3 className="text-xl font-bold text-[#0757a0] mb-2">{proj.title}</h3>
              <p className="text-base text-gray-700 text-center">{proj.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
