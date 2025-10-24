import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const volunteers = [
  {
    name: "Priya Sharma",
    role: "Community Outreach",
    quote:
      "Volunteering with StarFoundation changed my life — I love making a real difference every day!",
  },
  {
    name: "Anil Kumar",
    role: "Health Program",
    quote:
      "Helping organize medical camps has shown me the power of teamwork and compassion.",
  },
  {
    name: "Rita Patel",
    role: "Education Advocate",
    quote:
      "Seeing kids learn and grow because of our work motivates me to keep going.",
  },
  {
    name: "Vivek Gupta",
    role: "Vocational Trainer",
    quote:
      "Empowering youth with skills that change their lives forever is a blessing.",
  },
  {
    name: "Neha Verma",
    role: "CSR Coordinator",
    quote:
      "Every smile we bring makes all the effort worthwhile.",
  },
];

export default function VolunteerSpotlight() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-16 bg-[#f9fefb] rounded-lg shadow-lg">
      <h2 className="text-[#0757a0] text-4xl font-extrabold mb-12 text-center">
        Our <span className="text-[#9ac531]">Volunteers</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {volunteers.map(({ name, role, quote }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center border border-[#9ac531]/30"
          >
            <FaUserCircle className="text-[#0757a0] text-6xl mb-4" />
            <h3 className="text-xl font-bold text-[#0757a0]">{name}</h3>
            <p className="text-sm text-[#9ac531] font-semibold mb-4">{role}</p>
            <p className="text-gray-700 italic font-medium">&ldquo;{quote}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
