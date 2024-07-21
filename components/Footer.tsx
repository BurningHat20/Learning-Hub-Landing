import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaLocationArrow, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="heading text-center mb-10">
          Connect with <span className="text-purple">The Learning Hub</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-white-200 mb-6">
              Have questions about our courses or ready to start your learning
              journey? We're here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-purple mr-3" />
                <p>info@thelearninghub.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-purple mr-3" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaLocationArrow className="text-purple mr-3" />
                <p>123 Education Street, Learning City, 12345</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-black-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-black-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-black-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple h-32"
              required
            ></motion.textarea>
            <MagicButton
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => {}} // Add an empty function or the actual submit logic
            />
          </form>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © {new Date().getFullYear()} The Learning Hub
          </p>

          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
            {socialMedia.map((info) => (
              <motion.div
                key={info.id}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
