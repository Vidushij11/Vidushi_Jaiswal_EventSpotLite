import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import logo from "../assets/logo.png";

const navItems = ["Home", "Games", "News", "Community", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg px-6 fixed z-50 w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} className="h-12 w-12" alt="EventSpot Lite" />
          <h1 className="text-2xl font-bold text-[#14b1c1] cursor-pointer">
            EventSpot Lite
          </h1>
        </div>

        {/* Desktop Nav and Search Bar */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-[#fe3a7c]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          {/* Search Bar */}
          <div className="flex items-center border rounded-full bg-white overflow-hidden ml-4">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 p-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-2 py-1 rounded-full focus:outline-none text-black placeholder-gray-400"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-[#fe3a7c]" />
            ) : (
              <FaBars className="w-6 h-6 text-[#fe3a7c]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 p-4">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-gray-300 hover:text-[#fe3a7c]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
