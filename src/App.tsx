import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Contant from "./components/Contant";
import Footer from "./components/Footer";
import Navbar from "./components/Navber";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
interface MenuPageProps {
  id: number;
  page: string;
  href: string;
}
const menuPages: MenuPageProps[] = [
  { id: 1, page: "Home", href: "/" },
  { id: 2, page: "About", href: "#about" },
  { id: 3, page: "Skills", href: "#skills" },
  { id: 4, page: "Contact", href: "#contact" },
];
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 0.4 },
      }}
    >
      {/* href props to <Navber  />  */}
      <Navbar menuPages={menuPages} />
      <Contant />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </motion.div>
  );
}

export default App;
