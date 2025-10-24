import { useState } from "react";
import { motion } from "framer-motion";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";

export default function InternshipFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    duration: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const interests = [
    "Community Outreach",
    "Health Program",
    "Education & Literacy",
    "Digital Marketing",
    "CSR Projects",
    "Fundraising",
  ];

  const durations = ["1 Month", "3 Months", "6 Months", "12 Months"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Internship Form Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      duration: "",
      message: "",
    });
  };

  return (
    <>
    <HeaderNavbar />
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-[#9ac531]/20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0757a0] mb-6">
          Apply for <span className="text-[#9ac531]">Internship</span>
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Join us as an intern and gain valuable experience while contributing to social change. Fill in the form below.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 rounded-lg bg-[#9ac531]/20 text-[#0757a0] text-center font-semibold"
          >
            Thank you for applying! We will contact you soon regarding your internship.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-[#0757a0]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-[#0757a0]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold text-[#0757a0]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Area of Interest */}
          <div className="flex flex-col">
            <label htmlFor="interest" className="mb-2 font-semibold text-[#0757a0]">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
            >
              <option value="" disabled>
                Select an area
              </option>
              {interests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label htmlFor="duration" className="mb-2 font-semibold text-[#0757a0]">
              Internship Duration
            </label>
            <select
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
            >
              <option value="" disabled>
                Select duration
              </option>
              {durations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Message - Full Width */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold text-[#0757a0]">
              Why do you want to intern with us?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
              placeholder="Share your motivation, skills, or expectations..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="bg-[#9ac531] text-[#0757a0] font-bold px-10 py-3 rounded-xl shadow-lg hover:bg-[#86b22b] transition"
            >
              Apply Now
            </button>
          </div>
        </form>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
