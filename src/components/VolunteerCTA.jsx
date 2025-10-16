import { motion } from "framer-motion";

export default function VolunteerCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#9ac531] to-[#6ea816] rounded-3xl max-w-7xl mx-auto my-24 overflow-hidden px-6 md:px-20 py-20 shadow-2xl text-white">
      {/* Overlay gradient layer for subtle depth */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-3xl pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto"
      >
        {/* Left: Text content */}
        <div className="md:w-2/3 text-center md:text-left z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-xl mb-6">
            Become a{" "}
            <span className="underline decoration-white/70 decoration-8 underline-offset-4">
              Volunteer
            </span>{" "}
            and <br /> Change Lives
          </h2>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed drop-shadow-md mb-10">
            Join our community of heroes dedicated to empowering underserved neighborhoods with compassion and real impact.
          </p>
          <a
            href="#join"
            className="inline-block bg-white text-[#6ea816] font-bold px-14 py-4 rounded-full uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Join Now
          </a>
        </div>

        {/* Right: Emotional image */}
        <div className="md:w-1/3 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white ring-opacity-60">
          <img
            src="/images/volunteer.jpg"
            alt="Volunteers helping community"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
