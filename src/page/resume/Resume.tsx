import Education from "../../components/education/Education";
import Skill from "../../components/education/Skill";
import { education, skills, codingSkills, databaseSkills } from "./dataResume";
import "../../App.css";

const Resume = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto mt-10">
      <h1 className="text-center text-4xl font-bold underline_doubles md:left-[45%] left-[33%] mb-10">
        Resume
      </h1>

      <div className="grid md:grid-cols-12 gap-8">
        {/* EDUCATION */}
        <div className="col-span-12 md:col-span-6 bg-white shadow-btn_shadow p-6 rounded-lg">
          <h1 className="underline_doubles md:text-3xl font-bold text-2xl mb-5">
            Education
          </h1>
          <Education data={education} />
        </div>

        {/* SKILLS */}
        <div className="col-span-12 md:col-span-6 bg-white shadow-btn_shadow p-6 rounded-lg space-y-10">
          <Skill data={skills} title="🎨 Design Skills" />
          <Skill data={codingSkills} title="💻 Coding Skills" />
          <Skill data={databaseSkills} title="🗄️ Database Skills" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
