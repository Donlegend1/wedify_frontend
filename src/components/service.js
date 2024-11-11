"use client";
import React from "react";
import {
  FaRegStar,
  FaClipboardCheck,
  FaHandsHelping,
  FaRegLightbulb,
  FaLaptop,
  FaMapMarkedAlt,
  FaImages,
  FaGift,
} from "react-icons/fa";

const services = [
  {
    title: "Customizable Wedding Websites",
    icon: <FaLaptop className="text-4xl text-purple-500" />,
    description:
      "Design your wedding website with ease, customizing every detail to match your vision.",
  },
  {
    title: "Automatic Wedding Card Generation",
    icon: <FaGift className="text-4xl text-red-500" />,
    description:
      "Generate stunning wedding cards automatically, saving you time while ensuring a professional look.",
  },
  {
    title: "Event of the Day Generation",
    icon: <FaRegStar className="text-4xl text-teal-500" />,
    description:
      "Highlight key moments with our Event of the Day feature, keeping your guests informed and engaged.",
  },
  {
    title: "Wedding Gallery",
    icon: <FaImages className="text-4xl text-pink-500" />,
    description:
      "Share your wedding journey with a beautiful gallery, capturing every precious moment.",
  },
  {
    title: "Venue Directions",
    icon: <FaMapMarkedAlt className="text-4xl text-indigo-500" />,
    description:
      "Ensure your guests arrive on time with integrated maps, providing clear directions to the wedding venue.",
  },
  {
    title: "Event Planning",
    icon: <FaRegStar className="text-4xl text-yellow-500" />,
    description:
      "We offer expert event planning services to make every celebration a success, tailored to your needs.",
  },
  {
    title: "Wedding Coordination",
    icon: <FaClipboardCheck className="text-4xl text-blue-500" />,
    description:
      "From start to finish, we coordinate all aspects of your wedding, ensuring a seamless experience.",
  },
  {
    title: "Venue Styling",
    icon: <FaHandsHelping className="text-4xl text-green-500" />,
    description:
      "Transform any venue into your dream setting with our expert styling and decoration services.",
  },
  {
    title: "Consulting Services",
    icon: <FaRegLightbulb className="text-4xl text-orange-500" />,
    description:
      "We provide professional consulting to help bring your ideas to life, with creative solutions and guidance.",
  },
];

const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
