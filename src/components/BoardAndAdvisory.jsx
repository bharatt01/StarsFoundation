import { motion } from "framer-motion";

export default function BoardAndAdvisory() {
  const boardMembers = [
    { name: "Mr. Gufran", role: "Chairman / Author / Settler" },
    { name: "Mr. Rafat Khan", role: "General Secretary" },
    { name: "Mrs. Hira Khan", role: "Treasurer" },
  ];

  const advisoryCommittee = [
    "Mr. Sudhir Kumar Gupta (Trustee)",
    "Mrs. Anita Gupta (Trustee)",
    "Mrs. Rekha Sharma (Trustee)",
    "Mr. Nikhil Gandhi (Trustee)",
    "Mr. Arvind Sinha (Trustee)",
    "Mr. Himanshu Bhatia (Trustee)",
    "Mrs. Charu (Trustee)",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-24 py-24">
      {/* Background gradient decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#9ac531]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-56 h-56 bg-[#0757a0]/20 rounded-full blur-3xl -z-10" />

      {/* Board Members Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-5xl font-extrabold text-center mb-10 text-[#9ac531]">
          Board Members
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {boardMembers.map(({ name, role }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 group hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 text-center border-t-8 border-[#9ac531]"
            >
              <img
                src={`/images/board-${idx + 1}.jpg`}
                alt={name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-white group-hover:scale-105 transition-transform"
              />
              <h3 className="text-xl font-bold text-[#0757a0]">{name}</h3>
              <p className="text-[#666] font-medium">{role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Advisory Committee Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold text-center mb-10 text-[#0757a0]">
          Advisory Committee
        </h2>
        <div className="bg-[#f7fbf4] rounded-3xl shadow-xl p-10 md:p-16 border-l-8 border-[#9ac531]">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6 text-lg font-semibold text-[#0757a0]">
            {advisoryCommittee.map((member, i) => (
              <motion.li
                key={member}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:rounded-full before:bg-[#9ac531]"
              >
                {member}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
