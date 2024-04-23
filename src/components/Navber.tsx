import React, { useState } from "react";
import Logo from "../assets/logo-removebg-preview (1).png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

interface Menu {
  id: number;
  page: string;
}

const menuPages: Menu[] = [
  {
    id: 1,
    page: "Home",
  },
  {
    id: 2,
    page: "About",
  },
  {
    id: 3,
    page: "Contact",
  },
];

const Navbar: React.FC = () => {
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
              <img src={Logo} alt="Logo Panha" className="w-full" />
            </div>
            <ul className="flex space-x-24">
              {menuPages.map((menuPage) => (
                <li
                  key={menuPage.id}
                  className="text-lg font-semibold hover:underline hover:text-gray-800 cursor-pointer transition ease-in-out duration-300"
                >
                  {menuPage.page}
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
              <div className="w-20">
                <img src={Logo} alt="Logo Panha" className="w-full" />
              </div>
              <button
                className="text-3xl transition-opacity duration-300"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <IoCloseSharp /> : <RiMenu3Fill />}
              </button>
            </div>
          </div>
          {/* Menu */}
          {isMenuOpen && (
            <div className="bg-gray-50 text-black w-full overflow-hidden ">
              <ul className="container mx-auto flex flex-col text-center space-y-24 py-4 w-11/12 m-auto">
                {menuPages.map((menuPage) => (
                  <li
                    key={menuPage.id}
                    className="text-lg font-semibold hover:text-gray-500 cursor-pointer transition ease-in-out duration-300"
                    onClick={toggleMenu}
                  >
                    {menuPage.page}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
