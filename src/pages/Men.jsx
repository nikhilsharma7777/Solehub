import { useState, useEffect } from "react";
import axios from "axios";

const Men = () => {
  const [MenShoes, setMenShoes] = useState([]);

  const getDataMen = async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/mens-shoes?limit=20"
    );

    setMenShoes(data.products);
  };

  useEffect(() => {
    getDataMen();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

        {MenShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-gray-900 rounded-xl p-4"
          >
            <div className="h-64 flex items-center justify-center">
              <img
                src={shoe.thumbnail}
                alt={shoe.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h2 className="font-semibold mt-4">
              {shoe.title}
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              {shoe.description}
            </p>

            <p className="text-yellow-400 mt-2 font-bold">
              ${shoe.price}
            </p>

            <p className="mt-2">
              ⭐ {shoe.rating}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Men;