import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 bg-cyan-800 px-4 py-3">
      <button
        onClick={() => navigate("/")}
        className="bg-black px-5 py-3 rounded-2xl"
      >
        Return to Home Page
      </button>

      <button
        onClick={() => navigate(-1)}
        className="bg-black px-8 py-3 rounded-2xl"
      >
        Back
      </button>
    </div>
  );
};

export default Navbar2;
