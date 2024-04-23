import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

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
    program: "Bootstrap",
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
  {
    id: 9,
    logo: <FaJava />,
    program: "Java",
  },
  {
    id: 10,
    logo: <FaPhp />,
    program: "PHP",
  },
  {
    id: 11,
    logo: <FaVuejs />,
    program: "Vue JS",
  },
];

const Skills = () => {
  return (
    <>
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
    </>
  );
};

export default Skills;
