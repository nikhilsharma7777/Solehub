import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-5 sm:px-8 md:px-16 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-yellow-400 tracking-[5px] uppercase text-sm">
          About Us
        </p>

        
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="SOLEHUB Shoes"
            className="w-full max-w-md rounded-3xl object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            We Believe Every Step Matters.
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
            SOLEHUB is a modern shoe platform created for people who want
            comfort, style and confidence in every step.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
            From everyday sneakers to stylish footwear, we bring together
            different designs so you can find the perfect pair for your
            personality and lifestyle.
          </p>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Our goal is simple — make finding your next favorite pair of shoes
            easy, enjoyable and accessible.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-400">Quality</h3>

          <p className="text-gray-400 mt-3">
            Comfortable and stylish footwear for everyday life.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-400">Style</h3>

          <p className="text-gray-400 mt-3">
            Discover designs that match your unique personality.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-400">Comfort</h3>

          <p className="text-gray-400 mt-3">
            Because every step should feel as good as it looks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
