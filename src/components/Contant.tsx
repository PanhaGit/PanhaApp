import Hero from "../assets/hero.jpg";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";
const Contant = () => {
  return (
    <div className="flex justify-center items-center h-screen container ">
      <div className=" hover:bg-black group transition ease-linear cursor-pointer duration-75 delay-75 hover:shadow-emerald-700 md:h-[500px] md:w-[500px] w-[300px] h-[360px] shadow-md rounded-full rounded-b-3xl bg-gray-50">
        <div className="md:h-[300px] md:w-[300px] w-[160px] h-[160px] rounded-full cursor-default md:relative md:-top-10 md:left-24 relative -top-10 left-16">
          <img
            src={Hero}
            alt=""
            className="md:h-full md:w-full h-full w-full rounded-full"
          />
        </div>
        <div className="px-6 md:w-[500px] md:h-[300px]">
          <h1 className="text-center md:text-3xl font-semibold text-xl transition-all ease-in delay-75 duration-75 group-hover:text-white">
            Hello I am Panha.
          </h1>
          <h1 className="text-center md:text-3xl font-semibold text-xl transition-all ease-in delay-75 duration-75 group-hover:text-white">
            I am{" "}
            <TypeAnimation
              className="md:text-2xl text-xl font-normal text-orange-500"
              sequence={["Web Desiger.", 1500, "Front-End Developer.", 1500]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="group-hover:text-white transition-all cursor-default ease-in delay-75 duration-7 md:text-lg">
            I'm a Junior Developer, Adobe Photoshop, React JS, React
            TypeScript,Vue JS,PHP.😁
          </p>
          <div className="group-hover:text-white transition-all ease-in delay-75 duration-75">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contant;
