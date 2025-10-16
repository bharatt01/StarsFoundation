import { motion } from "framer-motion";

const events = [
  {
    title: "Annual Fundraiser Gala",
    date: "November 25, 2025",
    location: "New Delhi",
    imageSrc: "/images/events/fundraiser.jpg",
  },
  {
    title: "Community Health Camp",
    date: "December 10, 2025",
    location: "Rural Uttar Pradesh",
    imageSrc: "/images/events/health-camp.jpg",
  },
  {
    title: "Skill Development Workshop",
    date: "January 15, 2026",
    location: "Online",
    imageSrc: "/images/events/workshop.jpg",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="max-w-7xl mx-auto px-6 md:px-24 py-24 bg-white rounded-3xl shadow-xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-[#0757a0] mb-16 text-center"
      >
        Upcoming Events
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {events.map(({ title, date, location, imageSrc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#f9fefb] rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-48 object-cover rounded-t-3xl"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="font-semibold text-2xl text-[#9ac531] mb-3">{title}</h3>
              <p className="text-gray-700 mb-1 font-medium">{date}</p>
              <p className="text-gray-600 font-normal">{location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
