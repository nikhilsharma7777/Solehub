import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="min-h-[85vh] px-5 sm:px-8 md:px-12 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-yellow-400 uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm font-medium">
              Step Into Your Style
            </p>

            <p className="mt-8 max-w-md text-gray-400 text-lg sm:text-base md:text-lg leading-relaxed">
              Discover stylish, comfortable and premium shoes designed to make
              every step count.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-1 gap-5">
            {/* Image 1 */}
            <div className="w-full overflow-hidden">
              <img
                src="https://i.ebayimg.com/images/g/QMoAAOSwkwJjaKvU/s-l1600.jpg"
                alt="Red Shoe"
                className="
  w-full
  h-55
  sm:h-70
  md:h-75
  lg:h-90
  object-cover
  transition-transform
  duration-500
  hover:scale-105
"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Shoes"
                className="
  w-full
  h-55
  sm:h-70
  md:h-75
  lg:h-90
  object-cover
  transition-transform
  duration-500
  hover:scale-105
"
              />
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="hidden lg:block fixed right-5 bottom-10">
          <p className="text-gray-500 text-sm tracking-[4px] rotate-90 origin-right">
            SOLEHUB / 2026
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
