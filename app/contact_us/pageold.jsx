"use client";
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ContactForm from "@/Components/contact/ContactForm";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const ContactPage = () => {
  return (
    <div>
      {/* Contact Banner */}
      <motion.div
        className="bg-[#f8fbf3] flex items-center justify-between px-8 md:px-16 py-10 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Home <span className="mx-2">&gt;</span> Contact Us
          </p>
        </motion.div>
        <motion.div
          className="hidden md:block w-56 h-56 rounded bg-[url('https://content3.jdmagicbox.com/v2/comp/mumbai/r5/040pxx40.xx40.180630225100.v2r5/catalogue/my-tiffins-kanajiguda-hyderabad-breakfast-restaurants-ve06sxaer6.jpg')] bg-contain bg-no-repeat bg-right"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Contact Details + Form */}
      <div className="px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">
            Let us know how we can help
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 mb-8">
            Please contact us using the below options. For fastest reply, please
            include your name, organization, appropriate contact information and
            a brief summary of your inquiry.
          </motion.p>

          <motion.div className="space-y-6">
            {/* Office Location */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPinIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Office Location</h3>
                <p className="text-gray-600">
                  Riverside Building, County Hall, London SE1 7PB, United
                  Kingdom
                </p>
              </div>
            </motion.div>

            {/* Call us anytime */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <PhoneIcon className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-semibold">Call us anytime</h3>
                <p className="text-gray-600">
                  For immediate help please call <br />
                  1.800.440.0680, 1.612.696.3400
                </p>
              </div>
            </motion.div>

            {/* Send Mail */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <EnvelopeIcon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold">Send Mail</h3>
                <p className="text-gray-600">support1@demo.com</p>
                <p className="text-gray-600">support2@demo.com</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        className="mx-auto px-4 pb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
      >
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.45290223982!2d78.47406107493577!3d17.38504468350859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973f317b8f2d%3A0xbbb9f5c2a3d0b5d3!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1691674312345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
