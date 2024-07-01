import { Outlet } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Contant from "./components/Contant";
// import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navber";
import { motion } from "framer-motion";
interface MenuPageProps {
  id: number;
  page: string;
  href: string;
}
const menuPages: MenuPageProps[] = [
  { id: 1, page: "Home", href: "/" },
  { id: 2, page: "Resume", href: "/resume" },
  { id: 4, page: "Contact", href: "/contact" },
];
function App() {
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
      <Navbar menuPages={menuPages} />
      <Outlet />
      <Footer />
    </motion.div>
  );
}

export default App;
