import { motion } from "framer-motion";

export default function GetInvolved() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-24 py-20 mb-20 grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#f9fefb] rounded-3xl shadow-2xl items-center">
      {/* LEFT: Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <img
          src="/images/volunteers.jpg"
          alt="Get involved: Volunteer and Internship"
          className="w-full max-w-md md:max-w-lg h-96 object-cover rounded-2xl shadow-xl border-4 border-[#9ac531]"
          loading="lazy"
        />
      </motion.div>

      {/* RIGHT: Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex flex-col gap-10"
      >
        <h2 className="text-5xl font-extrabold mb-2 text-center md:text-left text-[#0757a0]">
          Get Involved
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-4 text-center md:text-left">
          Volunteer or intern at Stars Foundation and make a real difference in society.
        </p>

        {/* Volunteer Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-8 border-[#9ac531]">
          <h3 className="text-2xl font-bold mb-2 text-[#9ac531] flex items-center gap-2">
            <svg className="w-7 h-7 inline-block text-[#9ac531]" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4 9a4 4 0 1 1 8 0v6a4 4 0 1 1-8 0V9Z"></path></svg>
            Volunteer Program
          </h3>
          <p className="mb-4 text-gray-700">
            Support minorities, help those facing poverty and raise awareness. Get hands-on with social change!
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700 font-medium">
            <li>18+ years of age</li>
            <li>No criminal record</li>
            <li>Keen interest in social work</li>
            <li>Applications subject to Foundation approval</li>
            <li>Responsible use of Foundation’s name</li>
          </ul>
        </div>

        {/* Internship Card */}
        <div className="bg-[#e6f3dc] rounded-xl shadow-lg p-8 border-l-8 border-[#0757a0]">
          <h3 className="text-2xl font-bold mb-2 text-[#0757a0] flex items-center gap-2">
            <svg className="w-7 h-7 inline-block text-[#0757a0]" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12V7a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0ZM5.293 10.708a1 1 0 0 1 1.414 0l2 2.001a1 1 0 0 1-1.414 1.415L6.414 12.122a1 1 0 0 1-1.414-1.414ZM17 10a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h11a1 1 0 0 1 1 1Z"></path></svg>
            Internship Program
          </h3>
          <p className="mb-4 text-gray-700">
            Contribute to hands-on projects—online or on-site—in Delhi. Build experience and nurture your growth through impactful service.
          </p>
          <p className="text-gray-700 font-medium">
            Positions for changemakers open year-round.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
