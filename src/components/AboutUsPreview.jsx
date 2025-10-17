import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function AboutUsPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Left: image */}
      <motion.div
        className="w-full rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/about.jpg"
          alt="About StarFoundation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Right: text content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#0757a0]"
      >
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          About <span className="text-[#9ac531]">StarFoundation</span>
        </h2>
        <p className="text-gray-700 text-lg mb-8 max-w-xl leading-relaxed font-medium">
          We are dedicated to transforming lives by empowering underserved communities. Through education, healthcare, and sustainable development, we build hope and opportunity every day.
        </p>
        <Link to="/about-us"
          className="inline-block bg-[#9ac531] text-[#0757a0] px-12 py-4 rounded-full font-bold shadow-lg hover:bg-[#86b22b] transition-colors"
       >
          View More
        </Link>
        
      </motion.div>
    </section>
  );
}
