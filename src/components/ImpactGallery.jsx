// src/components/ImpactGallery.jsx
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "DONATE AT SLUM & STREET CHILDREN EDUCATION",
    image: "/images/image1.jpg",
    // description: "Transforming 12 communities by providing clean water access.",
  },
  {
    title: "DONATION AT RIVERS CLEAN MISSION",
    image: "/images/cleaning-water.jpg",
    // description: "Helping over 300 children with books and classes.",
  },
  {
    title: "DONATE AT WOMEN EMPOWERMENT",
    image: "/images/image3.jpg",
    // description: "Organizing free health checkup camps for rural areas.",
  },
  {
    title: "DONATE AT ENVIRONMENT & TREE PLANTATIONS",
    image: "/images/image4.jpg",
    // description: "Passionate volunteers making a lasting difference.",
  },
  {
    title: "DONATE AT SKILL & VOCATIONAL TRAINING",
    image: "/images/image5.jpg",
    // description: "Supporting farmers with eco-friendly practices.",
  },
  {
    title: "DONATION AT RURAL DEVELOPMENT",
    image: "/images/image6.jpg",
    // description: "Bringing people together through social events.",
  },
  {
    title: "DONATION AT OLD AGE HOME",
    image: "/images/old-age-home.jpg",
    // description: "Providing care and companionship to elders.",
  },
  {
    title: "DONATION AT HEALTH & SANITATIONS",
    image: "/images/health-camps.jpg",
    // description: "Ensuring access to health and clean water.",
  },
  {
    title: "DONATION AT CAREER COUNSELLING & JOBS",
    image: "/images/career-counselling.jpeg",
    // description: "Empowering youth with guidance and opportunities.",
  },
  {
    title: "DONATION AT SOCIAL JUSTICE",
    image: "/images/social-justice.jpg",
    // description: "Advocating equality and rights for all.",
  },
];

export default function ImpactGallery() {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0757a0] mb-4">
          {/* " "} */}
          <span className="text-[#9ac531] uppercase">
            We Can All Together Make India Happier
          </span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A glimpse into our projects and the lives we touch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {galleryItems.map(({ title, image, description }, idx) => {
          const style = {};

          // Center only the last image in the last row (desktop view)
          if (idx === galleryItems.length - 1) {
            style.gridColumn = "2"; // center it in the middle column
          }

          return (
            <motion.div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group border-2 border-transparent transition-all duration-300 w-full max-w-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={style}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#9ac531cc] via-[#0757a0cc] to-[#2d6a4fcc] rounded-lg transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                  {title}
                </h3>
                <p className="text-base max-w-xs drop-shadow-sm">
                  {description}
                </p>
                <div className="mt-4 w-24 h-1 bg-white rounded-full opacity-70" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}