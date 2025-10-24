import { useState } from "react";
import { motion } from "framer-motion";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";
export default function VolunteerFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const roles = [
    "Community Outreach",
    "Health Program",
    "Education Advocate",
    "Vocational Trainer",
    "CSR Coordinator",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", role: "", message: "" });
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
          Join Our <span className="text-[#9ac531]">Volunteers</span>
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Become part of our mission to create positive change. Fill out the form below and we will reach out to you.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 rounded-lg bg-[#9ac531]/20 text-[#0757a0] text-center font-semibold"
          >
            Thank you for signing up as a volunteer! We'll contact you soon.
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

          {/* Role Selection */}
          <div className="flex flex-col">
            <label htmlFor="role" className="mb-2 font-semibold text-[#0757a0]">
              Volunteer Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Message - Full Width */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 font-semibold text-[#0757a0]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#9ac531] transition"
              placeholder="Tell us why you want to volunteer..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-2">
            <button
              type="submit"
              className="bg-[#9ac531] text-[#0757a0] font-bold px-10 py-3 rounded-xl shadow-lg hover:bg-[#86b22b] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
    <Footer /></>
  );
}
