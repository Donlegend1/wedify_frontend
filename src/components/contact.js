'use client';
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus("Sending...");
    setTimeout(() => {
      setFormStatus("Message sent successfully!");
    }, 2000);
  };

  return (
    <section
      className="py-20 bg-gray-50"
      id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          We'd love to hear from you. Please reach out with any inquiries or
          questions!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {formStatus || "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-lg text-gray-600">📍</span>
                <p className="ml-3 text-gray-800">
                  Abuja, Nigeria
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-lg text-gray-600">📧</span>
                <p className="ml-3 text-gray-800">legendosaconsultants@gmail.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg text-gray-600">📞</span>
                <p className="ml-3 text-gray-800">+2348072597652</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg text-gray-600">🌐</span>
                <p className="ml-3 text-gray-800">www.wedify.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
