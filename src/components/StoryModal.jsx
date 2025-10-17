import { motion } from "framer-motion";

export default function StoryModal({ story, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-[#9ac531] hover:text-[#0757a0] font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={story.image}
          alt={story.title}
          className="w-32 h-32 rounded-xl object-cover mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#0757a0] mb-1 text-center">{story.title}</h2>
        <h3 className="text-[#9ac531] font-semibold text-center mb-4">{story.author}</h3>
        <p className="text-base text-gray-800 mb-3 text-center" style={{ whiteSpace: "pre-line" }}>
          {story.full}
        </p>
      </motion.div>
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} tabIndex={-1} />
    </div>
  );
}
