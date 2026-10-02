import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cyan-700 text-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          SOLEHUB
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/About" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/Product" className="hover:text-yellow-400 transition">
            Product
          </Link>

          <Link to="/Contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cyan-600 px-5 py-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              to="/About"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              to="/Product"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Product
            </Link>

            <Link
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
