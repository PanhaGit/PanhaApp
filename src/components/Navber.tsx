import React, { useState } from "react";
import Logo from "../assets/logo-removebg-preview (1).png";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        <div className="hidden lg:block bg-white md:w-10/12 m-auto w-11/12">
          <div className="container mx-auto py-1 flex justify-between items-center">
            <div className="w-20">
              <Link to="/">
                <img src={Logo} alt="Logo Panha" className="md:w-full w-full" />
              </Link>
            </div>
            <ul className="flex space-x-20">
              {menuPages.map((menuPage) => (
                <li
                  key={menuPage.id}
                  className="text-lg font-semibold underline-effect hover:text-gray-800 cursor-pointer transition ease-in-out duration-300"
                >
                  <Link to={menuPage.href}>{menuPage.page}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Navbar */}
      <div className="w-full shadow-sm sticky bg-bgCustomWhite  top-0 z-50 ">
        <div className="lg:hidden w-full">
          <div className=" w-11/12 m-auto relative z-30">
            <div className="container mx-auto flex justify-between bg-bgCustomWhite items-center py-4">
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
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <IoCloseSharp className="text-4xl lg:mr-0 mr-[73px] md:mr-44" />
                ) : (
                  <FaBars />
                )}
              </motion.button>
            </div>
          </div>

          {/* Slide-in Menu */}

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isMenuOpen ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0  h-full w-9/12 bg-bgCustomWhite text-black z-20 shadow-lg overflow-hidden"
          >
            <motion.ul
              className="container mx-auto mt-24 flex flex-col w-11/12 space-y-9 py-8"
              layout
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
              }}
            >
              {menuPages.map((menuPage) => (
                <li
                  key={menuPage.id}
                  className="text-lg underline-effect font-semibold hover:text-gray-500 cursor-pointer transition ease-in-out duration-300"
                  onClick={toggleMenu}
                >
                  <Link to={menuPage.href}>{menuPage.page}</Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
