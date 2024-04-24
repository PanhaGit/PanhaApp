import { FaDownload } from "react-icons/fa";
interface AboutProps {
  id: string;
}
const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <>
      <div className="container md:w-11/12 w-11/12 m-auto">
        <h1
          className="md:text-4xl uppercase text-center text-3xl scroll-smooth mt-5"
          id={id}
        >
          About Me
        </h1>
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
            <button className="flex animate-bounce items-center md:mx-0 mx-auto justify-between bg-gradient-to-br from-purple-900 via-blue-600 to-purple-800 md:py-3.5 py-2 md:px-10 px-8 md:text-xl text-white rounded-full md:mt-6 mt-3">
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
      </div>
    </>
  );
};

export default About;
