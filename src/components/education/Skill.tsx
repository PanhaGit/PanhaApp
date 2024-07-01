import React from "react";
import { Skill as ResumeSkill } from "../../page/resume/dataResume";
import "../../App.css";
interface SkillProps {
  data: ResumeSkill[];
  title: string;
}

const Skill: React.FC<SkillProps> = ({ data, title }) => {
  return (
    <div className="p-4">
      <h2 className="underline_doubles md:text-3xl font-bold text-2xl mb-5">
        {title}
      </h2>
      {data.map((skill) => (
        <div key={skill.id} className="mb-4">
          <div className="flex justify-between items-center">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div
              className="bg-[#3572EF] h-2.5 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
