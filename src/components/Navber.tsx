import React, { useState } from "react";
import Logo from "../assets/logo-removebg-preview (1).png";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
interface Menu {
  id: number;
  page: string;
  href: string;
}

interface NavbarProps {
  menuPages: Menu[];
}

const Navbar: React.FC<NavbarProps> = ({ menuPages }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full shadow">
        {/* Desktop Navbar */}
        <div className="hidden lg:block bg-white w-11/12 m-auto">
          <div className="container mx-auto py-1 flex justify-between items-center">
            <div className="w-20">
              <a href="/">
                <img src={Logo} alt="Logo Panha" className="md:w-full w-full" />
              </a>
            </div>
            <ul className="flex space-x-24">
              {menuPages.map((menuPage) => (
                <li
                  key={menuPage.id}
                  className="text-lg font-semibold hover:underline hover:text-gray-800 cursor-pointer transition ease-in-out duration-300"
                >
                  <a href={menuPage.href}>{menuPage.page}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Navbar */}
      <div className="w-full shadow-sm">
        <div className="lg:hidden w-full ">
          <div className=" bg-white w-11/12 m-auto">
            <div className="container mx-auto flex justify-between items-center py-4">
              <div className="md:w-20 w-14">
                <a href="/">
                  <img
                    src={Logo}
                    alt="Logo Panha"
                    className="md:w-full w-full"
                  />
                </a>
              </div>
              <motion.button
                layout
                className="text-3xl transition-opacity duration-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <IoCloseSharp className="text-4xl" />
                ) : (
                  <FaBars />
                )}
              </motion.button>
            </div>
          </div>
          {/* Menu */}
          {isMenuOpen && (
            <div className="bg-gray-50 text-black w-full overflow-hidden ">
              <motion.ul
                className="container mx-auto flex flex-col text-center space-y-24 py-4 w-11/12 m-auto"
                layout
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 0.3 },
                }}
              >
                {menuPages.map((menuPage) => (
                  <li
                    key={menuPage.id}
                    className="text-lg font-semibold hover:text-gray-500 cursor-pointer transition ease-in-out duration-300"
                    onClick={toggleMenu}
                  >
                    <a href={menuPage.href}>{menuPage.page}</a>
                    {/* Use href from props */}
                  </li>
                ))}
              </motion.ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
