import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="relative bg-gradient-to-br from-[#fafff8] to-[#f1f9ef] py-24 px-6 md:px-24 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#9ac531]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-56 h-56 bg-[#0757a0]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-2xl shadow-2xl p-10 md:p-14 hover:shadow-3xl transition-shadow"
        >
          <img
            src="/images/vision.jpg"
            alt="Our Vision"
            className="w-full h-56 md:h-64 object-cover rounded-xl mb-8"
          />
          <h2 className="text-4xl font-black text-[#9ac531] mb-4 tracking-tight">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Stars Foundation envisions an empowered India where every citizen thrives
            in a society free from poverty and inequality. Through access to
            education, healthcare, nutrition, and shelter, we uplift communities and
            promote self-reliance, fostering a compassionate, inclusive, and equitable
            nation for all.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#0757a0] rounded-2xl shadow-2xl p-10 md:p-14 text-white hover:shadow-3xl transition-shadow"
        >
          <img
            src="/images/mission.jpg"
            alt="Our Mission"
            className="w-full h-56 md:h-64 object-cover rounded-xl mb-8 opacity-90"
          />
          <h2 className="text-4xl font-black mb-4 text-[#9ac531] tracking-tight">
            Our Mission
          </h2>
          <p className="text-white/90 text-lg leading-relaxed font-medium">
            Stars Foundation is committed to transforming India by breaking the cycle of
            poverty and inequality. We lead targeted programs in education, healthcare,
            nutrition, housing, and women’s empowerment that equip individuals and
            communities with resources for sustainable development and self-reliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
