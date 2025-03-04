export interface Education {
  id: number;
  years: string;
  school: string;
  province: string;
  type?: string;
  description?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export const education: Education[] = [
  {
    id: 1,
    years: "2010 - 2016",
    school: "Chheuteal Primary School , Kampong Thom",
    province: "Kampong Thom Province",
  },
  {
    id: 2,
    years: "2016 - 2019",
    school: "Kampong Chen Secondary School , Kampong Thom",
    province: "Kampong Thom Province",
  },
  {
    id: 3,
    years: "2019 - 2023",
    school: "Northline Hight Schoo , Phnom Penh ",
    province: "Phnom Penh ",
  },
  {
    id: 4,
    years: "2023 - Present",
    school: "Graduation Associates Degree (CS) at Western University",
    province: "Phnom Penh ",
    type: "WU",
  },
  {
    id: 5,
    years: "2023 - Present",
    school:
      "Training course at ETEC Center Web Design Basic/ Advance HTML, CSS, JavaScript, Bootstrap, jQuery and responsive design",
    province: "Training Course",
    type: "ETEC Center",
  },
];

export const skills: Skill[] = [
  { id: 1, name: "Web Design", level: 85 },
  { id: 2, name: "Database Design", level: 25 },
  { id: 3, name: "Bootstrap", level: 70 },
  { id: 4, name: "Tailwind CSS", level: 75 },
  { id: 5, name: "Figma UI/UX", level: 60 },
];

export const codingSkills: Skill[] = [
  { id: 5, name: "JavaScript", level: 80 },
  { id: 6, name: "PHP", level: 30 },
  { id: 7, name: "HTML/CSS", level: 100 },
  { id: 8, name: "TypeScript", level: 70 },
  { id: 9, name: "React JS", level: 65 },
  { id: 10, name: "React TypeScript", level: 50 },
  { id: 10, name: "NodeJS/ExpressJS", level: 50 },
  { id: 11, name: "SQL: MS Access/MySQL", level: 40 },
  { id: 12, name: "Laravel", level: 80 },
];
