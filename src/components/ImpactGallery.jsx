// src/components/ImpactGallery.jsx
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Clean Water Project",
    image: "/images/image1.jpg",
    description: "Transforming 12 communities by providing clean water access.",
  },
  {
    title: "Child Education",
    image: "/images/iamge2.jpg",
    description: "Helping over 300 children with books and classes.",
  },
  {
    title: "Medical Camps",
    image: "/images/image3.jpg",
    description: "Organizing free health checkup camps for rural areas.",
  },
  {
    title: "Volunteers at Work",
    image: "/images/image4.jpg",
    description: "Passionate volunteers making a lasting difference.",
  },
  {
    title: "Sustainable Farming",
    image: "/images/image5.jpg",
    description: "Supporting farmers with eco-friendly practices.",
  },
  {
    title: "Community Events",
    image: "/images/image6.jpg",
    description: "Bringing people together through social events.",
  },
];

export default function ImpactGallery() {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0757a0] mb-2">
          Our <span className="text-[#9ac531]">Impact in Pictures</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A glimpse into our projects and the lives touched.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map(({ title, image, description }, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-center items-center p-6 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
