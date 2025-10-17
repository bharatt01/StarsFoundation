import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Clean Water Access",
    description:
      "Providing clean, safe drinking water to remote villages, improving health and sanitation.",
    imageSrc: "/images/drink-water.jpg",
  },
  {
    title: "Girls Education",
    description:
      "Empowering girls with education through scholarships and school support programs.",
    imageSrc: "/images/girls-education.jpg",
  },
  {
    title: "Health Camps",
    description:
      "Organizing regular health checkups and awareness camps in underserved communities.",
    imageSrc: "/images/health-camps.jpg",
  },
];

export default function FeaturedInitiatives() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-24 bg-[#f9fefb] rounded-3xl shadow-xl">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-[#0757a0] mb-14 text-center tracking-tight"
      >
        Featured Initiatives
      </motion.h3>

      <div className="grid gap-12 md:grid-cols-3">
        {initiatives.map(({ title, description, imageSrc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.05] hover:shadow-2xl transition-transform duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-2xl font-bold mb-3 text-[#9ac531]">{title}</h4>
              <p className="text-gray-700 font-medium flex-grow">{description}</p>
              <button
                className="mt-6 bg-[#9ac531] text-[#0757a0] font-semibold py-3 rounded-lg shadow-md hover:bg-[#86b22b] transition-colors"
                aria-label={`Learn more about ${title}`}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
