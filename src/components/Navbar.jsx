import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between tracking-wider">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Aria Studios
        </Link>

        {/* Navigation */}
        <div className="flex gap-10 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          <Link to="/" className="relative hover:text-blue-500 transition duration-300
             after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-blue-500
             after:transition-all after:duration-300
             hover:after:w-full">
            Home
          </Link>

          <Link to="/portfolio" className="relative hover:text-blue-500 transition duration-300
             after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-blue-500
             after:transition-all after:duration-300
             hover:after:w-full">
            Portfolio
          </Link>

          <Link to="/about" className="relative hover:text-blue-500 transition duration-300
             after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-blue-500
             after:transition-all after:duration-300
             hover:after:w-full">
            About
          </Link>

          <Link to="/contact" className="relative hover:text-blue-500 transition duration-300
             after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-[2px] after:bg-blue-500
             after:transition-all after:duration-300
             hover:after:w-full">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
