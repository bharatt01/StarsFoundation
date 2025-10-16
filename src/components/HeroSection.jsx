import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between pt-20 md:pt-28 pb-16 md:pb-28 px-6 md:px-24 bg-[#f6fefe] overflow-hidden">
      {/* Left: main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 md:w-1/2"
      >
        <h1 className="text-[#0757a0] text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-snug sm:leading-tight md:leading-tight">
          Uplift Communities — Empower <span className="text-[#9ac531]">Change</span>
        </h1>
        <p className="text-base sm:text-lg text-[#0757a0]/80 mb-8 md:mb-10 max-w-full md:max-w-lg leading-relaxed">
          StarFoundation is building hope for people in need. <br />
          Discover our social projects, stories, and volunteer opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#join"
            className="bg-[#9ac531] text-[#0757a0] px-6 sm:px-8 py-3 rounded font-bold shadow-md hover:bg-[#86b22b] transition-colors text-center"
          >
            Join Us
          </a>
          <a
            href="#donate"
            className="bg-[#0757a0] text-white px-6 sm:px-8 py-3 rounded font-bold shadow-md hover:bg-[#055088] transition-colors text-center"
          >
            Donate Now
          </a>
        </div>
      </motion.div>

      {/* Right: image or graphic accent */}
     <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end items-center pointer-events-none"
>
  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-64 sm:h-72 md:h-96 rounded-3xl bg-gradient-to-tr from-[#9ac531] to-[#c3ee85] shadow-lg flex items-center justify-center">
    <img
      src="/images/logo.png"
      alt="Community support"
      className="object-contain w-40 sm:w-48 md:w-80 drop-shadow-lg md:absolute"
      style={{ right: "20%", top: "10%" }}
    />
  </div>
</motion.div>

    </section>
  );
}
