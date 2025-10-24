import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function DonationSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-10 bg-[#f7faf3]">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0757a0] leading-tight mb-6">
            Support Our Mission
          </h2>

          <p className="text-gray-600 text-lg md:text-[19px] leading-relaxed mb-8">
            Every contribution, no matter the size, fuels our programs and brings hope to communities in need. 
            Join us in making a lasting impact.
          </p>

          <button
            onClick={() => navigate("/donate")}
            className="inline-block bg-[#0757a0] text-white font-semibold rounded-full px-12 py-4 shadow-md hover:bg-[#054b8b] transition-transform hover:scale-105"
          >
            Donate Now
          </button>
        </motion.div>

        {/* Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-lg max-h-[420px]"
        >
          <img
            src="/images/volunteer.jpg"
            alt="Support and Donate to Stars Foundation"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9ac531]/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
