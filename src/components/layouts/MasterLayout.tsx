import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { MENU_PAGES } from "../../interface/interface_app";
import Navbar from "../Navber";

const MasterLayout: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 1.3,
        x: { duration: 1.3 },
      }}
    >
      <Navbar menuPages={MENU_PAGES} />
      <Outlet />
      <Footer />
    </motion.div>
  );
};

export default MasterLayout;
