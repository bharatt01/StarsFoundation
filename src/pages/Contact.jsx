import { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import HeaderNavbar from "../components/HeaderNavbar";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
    <HeaderNavbar />
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-[#0757a0] mb-12">
        Contact <span className="text-[#9ac531]">Us</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f9fefb] rounded-3xl shadow-lg p-8 flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-[#0757a0]">Our Contact Info</h2>
          <p className="text-gray-700">We’d love to hear from you! Reach out via phone, email, or our social channels.</p>

          <div className="flex items-center gap-3">
            <span className="text-[#9ac531] font-bold text-lg">📞</span>
            <a href="tel:+917678414989" className="text-[#0757a0] font-medium hover:underline">
              +91 7678414989
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#9ac531] font-bold text-lg">✉️</span>
            <a href="mailto:info@starfoundation.org" className="text-[#0757a0] font-medium hover:underline">
              info@starfoundation.org
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#9ac531] font-bold text-lg">📍</span>
            <p className="text-[#0757a0] font-medium">
Address: 192 B Laxmi Nagar Delhi-110092            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <SocialIcon url="https://www.instagram.com/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://www.facebook.com/profile.php?id=61582811300667" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://www.youtube.com/@STARSFOUNDATION-2018" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
            <SocialIcon network="linkedin" url="https://www.linkedin.com/company/starsfoundation2018/" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
            <SocialIcon network="x" url="https://twitter.com/starsfoundation" bgColor="transparent" fgColor="#0757a0" style={{ height: 32, width: 32 }} />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-[#9ac531]/20"
        >
          <h2 className="text-2xl font-bold text-[#0757a0] mb-4">Send Us a Message</h2>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 rounded-lg bg-[#9ac531]/20 text-[#0757a0] text-center font-semibold"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9ac531]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9ac531]"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9ac531]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9ac531]"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-[#9ac531] text-[#0757a0] font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-[#86b22b] transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Optional Map Placeholder */}
      <div className="mt-12 rounded-3xl overflow-hidden shadow-lg">
        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8177145367413!2d77.2756905745574!3d28.635224883960134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd24f56dd06d%3A0x98b4335cf789e94b!2s192%2C%20L104%20b%2C%20near%20Vishal%20Bakery%2C%20Block%20M%2C%20Vishwakarma%20Park%2C%20Laxmi%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1761284269248!5m2!1sen!2sin"
width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <Footer />
    </>
  );
}
