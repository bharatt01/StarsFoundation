import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const sectionImg = "/images/starfoundationhero.jpg";

export default function StarFoundationHero() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="relative overflow-hidden font-['Poppins'] bg-gradient-to-br from-[#f8fff2] via-white to-[#eaf4ff] py-20 md:py-28">
      {/* Floating Animated Icons */}
      <motion.div
        className="absolute top-10 left-10 text-[#9ac531]/30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-[10%] text-[#0757a0]/25"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={52} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-[12%] text-[#9ac531]/30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <HandHeart size={50} />
      </motion.div>

      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#9ac531]/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0757a0]/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-6/12"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-[#0757a0] mb-5">
            Best NGO for CSR in India:{" "}
            <span className="text-[#9ac531]">Stars Foundation</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            We are the best NGO in Delhi NCR and best ngo website India. We
            endeavor for holistic growth of the Nation and its people. We are
            the best Social Organization in Delhi NCR, India. Support by Donate
            to NGO or Donate to Poor. We Mainly focused on poverty in India,
            Child Development, Women Empowerment, Skill Development, Education
            for poor & Street Children, Health programs, Environment protection,
            Consumer awareness, Elderly care, Rural development programs, Slum
            development, Donate for Livelihood, etc. Donate to India’s best NGO
            and support development. At Stars Foundation, we believe that each and every
            person is entitled to a worthy, meaningful, and dignified life just
            as mentioned under Article 21 (Right to life and personal liberty)
            of the Indian constitution.
          </p>

          {/* ✅ Navigate instead of href */}
          <button
            onClick={() => navigate("/donate")}
            className="inline-block bg-[#0757a0] text-white font-semibold text-base md:text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#064a8a] transition duration-200"
          >
            Support Our Mission
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-6/12 flex justify-center relative"
        >
          <div className="relative w-[90%] max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={sectionImg}
              alt="Nitya Foundation helping people"
              className="object-cover w-full h-[340px] md:h-[420px] rounded-3xl transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0757a0]/20 opacity-0 hover:opacity-100 transition rounded-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
