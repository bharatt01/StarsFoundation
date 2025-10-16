import { motion } from "framer-motion";

const photos = [
  "/images/image1.jpg",
  "/images/iamge2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];
export default function WorkGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 bg-white rounded-3xl shadow-xl">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-14 text-[#0757a0] text-center"
      >
        Photo Gallery
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Gallery image ${i + 1}`}
            loading="lazy"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-lg shadow-md object-cover w-full h-48 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
