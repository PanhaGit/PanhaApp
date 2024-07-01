import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  // FaJava,
  // FaPhp,
  FaReact,
  // FaVuejs,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import CodeSKills from "../assets/code.png";

interface SkillsType {
  id: number;
  logo: JSX.Element;
  program: string;
}

const Skils: SkillsType[] = [
  {
    id: 1,
    logo: <FaReact />,
    program: "React JS",
  },
  {
    id: 2,
    logo: <FaReact />,
    program: "React TypeScript",
  },
  {
    id: 3,
    logo: <FaHtml5 />,
    program: "HTML",
  },
  {
    id: 4,
    logo: <FaCss3Alt />,
    program: "CSS",
  },
  {
    id: 5,
    logo: <FaBootstrap />,
    program: "Bootstrap",
  },
  {
    id: 6,
    logo: <SiTailwindcss />,
    program: "Tailwind CSS",
  },
  {
    id: 7,
    logo: <SiTypescript />,
    program: "TypeScript",
  },
  {
    id: 8,
    logo: <SiJavascript />,
    program: "JavaScript",
  },
  // {
  //   id: 9,
  //   logo: <FaJava />,
  //   program: "Java",
  // },
  // {
  //   id: 10,
  //   logo: <FaPhp />,
  //   program: "PHP",
  // },
  // {
  //   id: 11,
  //   logo: <FaVuejs />,
  //   program: "Vue JS",
  // },
];
interface SkillsProps {
  id: string;
}
const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <>
      <div className=" mt-6">
        <h1 className="flex items-center justify-center md:text-4xl  text-center text-3xl scroll-smooth ">
          Skils <FaCode className="mx-2" id={id} />
        </h1>
        <div className="flex justify-center items-center flex-col space-y-1">
          <div className="bg-black md:w-28 w-24 h-1 text-center"></div>
          <div className="bg-black md:w-20 w-20 h-1 text-center"></div>
          <div className="bg-black md:w-16 w-12 h-1 text-center"></div>
        </div>
      </div>
      <div className="my-7">
        <div className="md:grid md:grid-cols-2 md:gap-3 grid grid-cols-1 gap-3 md:mt-0 mt-4  ">
          <div className="flex justify-center items-center w-11/12  m-auto">
            <img src={CodeSKills} alt="coding" />
          </div>
          <div className="w-11/12 m-auto">
            <div className="grid md:grid-cols-4 grid-cols-3">
              {Skils.map((skills) => (
                <div
                  key={skills.id}
                  className="flex justify-center items-center flex-col hover:bg-black hover:text-white py-4 transition-all ease-linear duration-75 delay-75 cursor-pointer"
                >
                  <span className="md:text-8xl text-5xl">{skills.logo}</span>
                  <p className="mt-2 md:text-xl text-sm">{skills.program}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
