import { Education as EducationType } from "../../page/resume/dataResume";

const Education: React.FC<{ data: EducationType[] }> = ({ data }) => {
  return (
    <div className="p-4">
      {data.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="text-gray-500 mr-3">{item.years}</div>
            <div className="text-gray-500">{item.province}</div>
          </div>
          <div className="ml-6 border-l-4 border-gray-300 pl-4">
            <div className="text-lg font-bold">{item.type}</div>
            <div>{item.description}</div>
            <div className="font-semibold">{item.school}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
