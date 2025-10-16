// src/components/HowWeWork.jsx
import { motion } from "framer-motion";

const steps = [
  {
    title: "Identify Needs",
    desc: "Community engagement to understand urgent problems.",
    icon: "/images/find.jpg ",
  },
  {
    title: "Mobilize Support",
    desc: "Connect volunteers, donors, and partners for each mission.",
    icon: "/images/gather.jpg",
  },
  {
    title: "Execute Project",
    desc: "Transparent, on-ground implementation and regular reporting.",
    icon: "/images/finish.jpg",
  },
  {
    title: "Measure Impact",
    desc: "Share results, gather feedback, and plan for scaling.",
    icon: "/images/share.jpg",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-16 px-6 md:px-24 bg-[#f6fefe]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-black text-[#0757a0] mb-14">
          How <span className="text-[#9ac531]">We Work</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-[#9ac531]/40 -translate-x-1/2 z-0 hidden md:block"/>
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-16 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex items-start md:items-center gap-5 md:gap-8 ${i % 2 ? "md:col-start-2" : ""}`}
              >
                <div className="shrink-0 w-14 h-14 bg-[#9ac531] text-[#0757a0] rounded-full flex items-center justify-center shadow-lg text-3xl font-bold">
                  <img src={step.icon} alt="" className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0757a0]">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
