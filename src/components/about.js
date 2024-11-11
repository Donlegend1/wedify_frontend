import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          At our core, we are dedicated to crafting personalized and memorable
          wedding experiences. Our platform allows you to create a beautiful,
          customizable wedding website tailored to your unique style and needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 flex justify-center items-center text-white text-2xl font-semibold">
              <span>C</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Customizable Websites
            </h3>
            <p className="text-center text-gray-600">
              Design your wedding website with ease, customizing every detail to
              match your vision. From themes to fonts, make it uniquely yours.
            </p>
          </div>

          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 flex justify-center items-center text-white text-2xl font-semibold">
              <span>A</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Automatic Card Generation
            </h3>
            <p className="text-center text-gray-600">
              Generate stunning wedding cards automatically, saving you time
              while ensuring a professional look for your special day.
            </p>
          </div>

          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-red-400 to-orange-600 flex justify-center items-center text-white text-2xl font-semibold">
              <span>E</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Event of the Day
            </h3>
            <p className="text-center text-gray-600">
              Highlight key moments with our Event of the Day feature, keeping
              your guests informed and engaged throughout the celebration.
            </p>
          </div>

          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-green-400 to-teal-600 flex justify-center items-center text-white text-2xl font-semibold">
              <span>G</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Wedding Gallery
            </h3>
            <p className="text-center text-gray-600">
              Share your wedding journey with a beautiful gallery, capturing
              every precious moment and allowing guests to relive the
              celebration.
            </p>
          </div>

          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 flex justify-center items-center text-white text-2xl font-semibold">
              <span>M</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Venue Directions
            </h3>
            <p className="text-center text-gray-600">
              Ensure your guests arrive on time with integrated maps, providing
              clear directions to the wedding venue.
            </p>
          </div>
          <div className="flex flex-col items-center shadow-lg hover:shadow-2xl p-4 m-4 rounded-lg">
            <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-red-200 to-red-700 flex justify-center items-center text-white text-2xl font-semibold">
              <span>E</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Email Invitation
            </h3>
            <p className="text-center text-gray-600">
              Easily invite guests by sending them email notification and reminder
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600">
            Join us in creating an unforgettable wedding experience. We are here
            to make your special day as seamless and beautiful as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
