import { motion } from "framer-motion";
import { Heart, BookOpen, Leaf, Briefcase, Users, Building } from "lucide-react";

export default function ProjectsOverview() {
  const csrProjects = [
    {
      title: "Blood Donation Camps",
      desc: "Give the gift of life—join our blood donation camps today!",
      icon: <Heart className="w-8 h-8 text-white" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Free Medicine Distribution",
      desc: "Healing hearts, saving lives—bringing hope and health to all.",
      icon: <Users className="w-8 h-8 text-white" />,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Empowering Minds",
      desc: "Unlocking potential through tuition for underprivileged children.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Go Green, Grow Green",
      desc: "Plant a tree, grow a future—join our green initiative.",
      icon: <Leaf className="w-8 h-8 text-white" />,
      gradient: "from-lime-500 to-green-600",
    },
  ];

  const governmentProjects = [
    "Schemes for Minorities in India",
    "Educational Empowerment Scheme",
    "Economic Empowerment Scheme",
    "Infrastructure Development Scheme",
    "Ministry of Social Justice",
    "Ministry Of Culture",
    "Schemes for Cultural Development of India",
    "Ministry of Rural Development",
    "Schemes of the Rural Ministry",
  ];

  const starsProjects = [
    "Community Rehabilitation",
    "Jobs Placement",
    "Vocational Training",
    "Cutting, Tailoring & Dress Making",
    "Empowering Communities through Swayam Sahayata Samuh Initiative",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-20 py-20">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl -z-10" />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 text-[#0757a0]"
      >
        Our <span className="text-[#9ac531]">Projects</span>
      </motion.h2>

      {/* CSR PROJECTS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#0757a0] mb-10 text-center">
          CSR Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {csrProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-2xl text-white shadow-lg bg-gradient-to-br ${project.gradient} flex flex-col items-center text-center hover:shadow-2xl`}
            >
              <div className="mb-4 bg-white/20 p-3 rounded-full">
                {project.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm opacity-90">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GOVERNMENT PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-[#0757a0] mb-8 text-center">
          Government Projects
        </h3>
        <div className="bg-[#f7fbf4] p-10 rounded-3xl shadow-md border-l-8 border-[#9ac531]">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#0757a0] font-semibold text-lg">
            {governmentProjects.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#9ac531] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* STARS FOUNDATION PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-[#0757a0] mb-8 text-center">
          Stars Foundation Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {starsProjects.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-[#e0e0e0] rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl"
            >
              <Building className="w-8 h-8 mx-auto text-[#9ac531] mb-4" />
              <p className="font-semibold text-[#0757a0] text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
