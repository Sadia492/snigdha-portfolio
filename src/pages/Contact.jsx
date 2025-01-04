import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_Service_Id,
        import.meta.env.VITE_Template_Id,
        e.target,
        import.meta.env.VITE_User_Id
      )
      .then(
        (result) => {
          setIsSent(true);
          setError(false);
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          setError(true);
          toast.error("Failed to send the message. Please try again.");
        }
      );
    e.target.reset();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl my-8 text-center font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        {/* Contact Form Section */}
        <form
          className="flex-1 bg-white shadow-lg w-full rounded-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information Section */}
        <div className="flex-1 bg-gray-100 w-full shadow-lg rounded-lg p-8 space-y-6 text-gray-800">
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <p className="flex items-center gap-3">
            <FaLocationDot className="text-secondary" />
            <span>Dhaka, Bangladesh</span>
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-secondary" />
            <span>sadiaafrin2792@gmail.com</span>
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-secondary" />
            <span>01707604378</span>
          </p>
          <p className="flex items-center gap-3">
            <FaWhatsapp className="text-secondary" />
            <span>01707604378</span>
          </p>
          <div className="bg-gradient-to-r from-secondary to-accent h-1 w-20 rounded-lg mt-4"></div>
        </div>
      </div>
    </div>
  );
}
