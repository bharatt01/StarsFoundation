import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const mediaItems = [
  { id: 1, image: "/images/image1.jpg"  },
  { id: 2, image: "/images/iamge2.jpg"  },
  { id: 3, image: "/images/image3.jpg" },
  { id: 4, image: "/images/image4.jpg"},
  { id: 5, image: "/images/image5.jpg" },
  { id: 6, image: "/images/image6.jpg" },
  { id: 7, image: "/images/media7.jpg" },
  { id: 8, image: "/images/media8.jpg" },
  { id: 9, image: "/images/media9.jpg" },
  { id: 10, image: "/images/media10.jpg" },
  { id: 11, image: "/images/media11.jpg" },
  { id: 12, image: "/images/media12.jpg" },
];

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-[#e8f5e9] via-white to-[#e3f2fd]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#0757a0] to-[#9ac531] bg-clip-text text-transparent">
          Media Gallery
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          A glimpse of our CSR and community initiatives.
        </p>
      </div>

      {/* Compact Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {mediaItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 md:h-48 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0757a0]/70 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center p-2">
              <p className="text-white text-xs md:text-sm font-semibold">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox (Image Preview) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#0757a0] rounded-full p-2 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={26} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="text-center mt-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#0757a0]">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
