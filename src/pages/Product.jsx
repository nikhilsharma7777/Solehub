import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 py-10 px-5">
        {/* MEN */}
        <Link
          to="/Product/Men"
          className="relative group w-full max-w-70 sm:w-64 overflow-hidden rounded-3xl"
        >
          <img
            src="https://i.pinimg.com/originals/86/95/c1/8695c192c46b64242ddd8cd43a6f3b33.jpg"
            alt="Men Shoes"
            className="
              w-full
              h-80
              object-cover
              rounded-3xl
              transition-transform
              duration-300
              group-hover:scale-110
              mt-44
            "
          />

          <h2
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-3xl
              font-bold
              bg-black/30
              rounded-3xl
              mt-44
            "
          >
            MEN
          </h2>
        </Link>

        {/* WOMEN */}
        <Link
          to="/Product/Women"
          className="relative group w-full max-w-70 sm:w-64 overflow-hidden rounded-3xl"
        >
          <img
            src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/e0ae2237-0739-4794-b0ce-61ffadf09477/pdp.jpg"
            alt="Women Shoes"
            className="
              w-full
              h-80
              object-cover
              rounded-3xl
              transition-transform
              duration-300
              group-hover:scale-110
              mt-44
            "
          />

          <h2
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-3xl
              font-bold
              bg-black/30
              rounded-3xl
              mt-44
            "
          >
            WOMEN
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
