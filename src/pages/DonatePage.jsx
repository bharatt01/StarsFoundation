import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DonatePage() {
  const accountName = "Stars Foundation";
  const accountNumber = "1234567890";
  const bankName = "National Bank of India";
  const qrCodeImage = "/images/donate-qr.png"; // Replace this with your actual QR code image path

  return (
    <>
    <Navbar />
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 bg-white rounded-3xl shadow-xl text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#9ac531] mb-12"
      >
        Donate to Stars Foundation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        Scan the QR code below to make an instant and secure donation to support our mission. 
        Thank you for making a difference!
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="inline-block rounded-3xl overflow-hidden shadow-lg mb-16 border-8 border-[#9ac531]"
      >
        <img
          src={qrCodeImage}
          alt="Donation QR Code"
          className="w-64 h-64 object-contain bg-white"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-md mx-auto border border-gray-300 rounded-xl p-8 bg-[#f0f9e8]"
      >
        <h2 className="text-2xl font-semibold text-[#0757a0] mb-4">Account Details Visible After Scanning</h2>
        <dl className="text-left text-gray-800">
          <dt className="font-medium mb-1">Account Name</dt>
          <dd className="mb-4">{accountName}</dd>

          <dt className="font-medium mb-1">Account Number</dt>
          <dd className="mb-4">{accountNumber}</dd>

          <dt className="font-medium mb-1">Bank Name</dt>
          <dd>{bankName}</dd>
        </dl>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
