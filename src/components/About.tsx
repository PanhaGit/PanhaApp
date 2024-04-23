import { FaCode, FaDownload } from "react-icons/fa";
import CodeSKills from "../assets/code.png";
import Skills from "./Skills";
const About = () => {
  return (
    <>
      <div className="container md:w-11/12 w-11/12 m-auto">
        <h1 className="md:text-4xl uppercase text-center text-3xl">About Me</h1>
        <div className="flex justify-center items-center flex-col space-y-1">
          <div className="bg-black md:w-44 w-36 h-1 text-center"></div>
          <div className="bg-black md:w-36 w-28 h-1 text-center"></div>
          <div className="bg-black md:w-28 w-20 h-1 text-center"></div>
        </div>
        <div className="md:w-11/12 md:grid md:grid-cols-2 grid grid-cols-1 gap-3">
          <div className="md:py-10 py-8">
            <h1 className="md:text-2xl text-lg md:text-start py-2 font-normal">
              I love programming, researching and creating new web.👍😁
            </h1>
            <button className="flex items-center md:mx-0 mx-auto justify-between bg-gradient-to-br from-purple-900 via-blue-600 to-purple-800 md:py-3.5 py-2 md:px-10 px-8 md:text-xl text-white rounded-full md:mt-6 mt-3">
              <FaDownload className="mr-2" />
              Download CV
            </button>
          </div>
          <div className="md:py-10 ">
            <p className="md:text-2xl text-lg">
              As a Junior Front-End Developer, I have brought with me a passion
              for learning and coding skills of each language. I am committed to
              strengthening my skills and keeping up to date with the latest
              trends in website development. With a great deal of attention to
              detail and a commitment to providing high quality code, I am
              willing to contribute to innovative projects and collaborate with
              energetic teams.
            </p>
          </div>
        </div>
        {/* skills */}
        <div className="md:w-11/12 md:grid md:grid-cols-2 md:gap-3 grid grid-cols-1 gap-3 md:mt-0 mt-4  ">
          <div className="flex justify-center items-center md:w-full w-full">
            <img src={CodeSKills} alt="coding" />
          </div>
          {/* code Skill */}
          <div className="">
            <div className="mb-3">
              <h1 className="flex items-center justify-center md:text-4xl  text-center text-3xl ">
                Skils <FaCode className="mx-2" />
              </h1>
              <div className="flex justify-center items-center flex-col space-y-1">
                <div className="bg-black md:w-28 w-36 h-1 text-center"></div>
                <div className="bg-black md:w-20 w-28 h-1 text-center"></div>
                <div className="bg-black md:w-16 w-20 h-1 text-center"></div>
              </div>
            </div>
            <Skills />
          </div>
          {/* code Skill */}
        </div>
        {/* end skills */}
      </div>
    </>
  );
};

export default About;
