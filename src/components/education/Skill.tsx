import React from "react";
import { Skill as ResumeSkill } from "../../page/resume/dataResume";

interface SkillProps {
  data: ResumeSkill[];
  title: string;
}

const Skill: React.FC<SkillProps> = ({ data, title }) => {
  return (
    <div className="p-4">
      <h2 className="md:text-3xl font-bold text-2xl mb-5 text-gray-900 flex items-center gap-2">
        {title}
      </h2>

      {data.map((skill) => (
        <div key={skill.id} className="mb-5">
          <div className="flex justify-between items-center text-gray-700">
            <span className="font-medium">{skill.name}</span>
            <span className="font-semibold">{skill.level}%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-700"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
