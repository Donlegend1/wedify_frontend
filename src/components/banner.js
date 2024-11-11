"use client";

import React, { useState, useEffect } from "react";

const couples = [
  { image: "/images/slidders/wedding2.jpg", couple: "John & Jane" },
  { image: "/images/slidders/weding1.jpg", couple: "Alice & Bob" },
  { image: "/images/slidders/details.jpg", couple: "Tom & Emily" },
];

const SliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === couples.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? couples.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden py-6">
      {couples.map((couple, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${couple.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center">
              <h2 className="text-white text-4xl font-extrabold">
                {couple.couple}
              </h2>
              <p className="py-16 my-10">
                <button className="bg-gradient-to-r from-yellow-300 to-green-400 text-white rounded-lg px-6 py-3 font-bold">
                  Join a wedding
                </button>
                <button className="bg-gradient-to-r from-green-400 to-yellow-300 text-white rounded-lg px-6 py-3 ml-4 font-bold">
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="absolute left-0 p-2 text-white bg-black bg-opacity-50 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}>
        ‹
      </button>
      <button
        className="absolute right-0 p-2 text-white bg-black bg-opacity-50 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default SliderBanner;
