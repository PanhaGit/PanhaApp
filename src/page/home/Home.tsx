import TypeAnimationHome from "../../components/TypeAnimationHome";
import cv from "../../assets/CV/CV.pdf";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
// import { FaFacebook, FaGithub, FaReact, FaTiktok } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";
import "../../App.css";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.3 },
  },
};

const Home = () => {
  return (
    <motion.div
      className="md:w-10/12 m-auto w-11/12 mt-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="grid md:grid-cols-12 gap-6">
        {/* Left section */}
        <motion.div className="md:col-span-6">
          <h1 className="text-customGray font-Poppins md:text-lg md:mt-5 font-light text-xl">
            Hello, I am Panha
          </h1>
          <div className="md:flex md:items-center mt-4">
            <span className="md:text-4xl text-customBlack mr-1.5 font-Poppins text-xl lg:block md:hidden hidden">
              I am
            </span>
            <TypeAnimationHome />
          </div>
          <div>
            <p className="my-8 text-lg">
              As a Junior Web Developer, I bring a passion for learning and
              coding skills in various languages. I am committed to
              strengthening my skills and keeping up to date with the latest
              trends in website development. With great attention to detail and
              a commitment to providing high-quality code, I am eager to
              contribute to innovative projects and collaborate with dynamic
              teams.
            </p>
            <div className="space-x-5">
              <Link to={cv} target="_blank">
                <motion.button
                  className="bg-bgCustomBlue md:py-2 md:px-5 py-3 px-6 text-customWhite shadow-btn_shadow"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Download CV
                </motion.button>
              </Link>
              <Link to={"/contact"}>
                <motion.button
                  className="bg-bgCustomWhite md:py-2 md:px-7 py-3 px-6 text-customBlack shadow-btn_shadow"
                  aria-label="Contact"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* right section */}
        {/* <motion.div
          className="fixed md:left-0 md:top-1/3 md:block hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="bg-blue-500 text-white  w-9 h-9 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook />
          </motion.span>
          <motion.span
            className="bg-black text-white w-9 h-9 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <FaTiktok />
          </motion.span>
          <motion.span
            className="bg-orange-500 text-white  w-9 h-9 flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.span>
        </motion.div> */}
        <div className="py-20 md:col-span-6 p-4 flex items-center justify-center relative">
          {/* Outer Circle */}
          <motion.div
            className="border shadow-shadow md:w-[370px] md:h-[370px] w-[300px] h-[300px] border-1 flex items-center justify-center rounded-full skil animate-border relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Icons */}
            <motion.span
              className="skils absolute top-[30%] left-[50%] transform -translate-x-2/4 -translate-y-2/4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaReact className="text-4xl " />
            </motion.span>
            <motion.span
              className="skils absolute top-[20%] right-[50%] transform translate-x-2/4 -translate-y-2/4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <SiTypescript className="text-4xl" />
            </motion.span>
            <motion.span
              className="skils absolute bottom-[30%] left-[50%] transform -translate-x-2/4 translate-y-2/4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <IoLogoJavascript className="text-4xl" />
            </motion.span>
            <motion.span
              className="skils absolute bottom-[30%] right-[50%] transform translate-x-2/4 translate-y-2/4"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <SiMysql className="text-4xl" />
            </motion.span>

            {/* Inner Circle with Image */}
          </motion.div>
          <div className="absolute md:w-[288px] md:h-[288px] w-[200px] h-[200px] rounded-full overflow-hidden">
            <motion.img
              src={hero}
              alt=""
              className="w-full h-full object-cover rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
