import { FaReact, FaNodeJs } from "react-icons/fa6";
import { FaJs, FaDiscord, FaTelegram } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiMui,
} from "react-icons/si";

const CategorySkills = ({ selectedCategory }) => {
  const iconsSize = 30;

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: <FaReact size={iconsSize} color="#61DAFB" />,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJs size={iconsSize} color="#F0DB4F" />,
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss size={iconsSize} color="#38BDF8" />,
    },
    {
      name: "Material UI",
      category: "Frontend",
      icon: <SiMui size={iconsSize} color="#0081CB" />,
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <FaNodeJs size={iconsSize} color="#3C873A" />,
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress size={iconsSize} color="#666" />,
    },
    {
      name: "Python",
      category: "Bot",
      icon: <img src="/icons/python.svg" className="w-8 h-8" />,
    },
    {
      name: "Django",
      category: "Backend",
      icon: <SiDjango size={iconsSize} color="#2e7b5e" />,
    },
    {
      name: "Discord.py",
      category: "Bot",
      icon: <FaDiscord size={iconsSize} color="#5865f2" />,
    },
    {
      name: "Pyrogram",
      category: "Bot",
      icon: <FaTelegram size={iconsSize} color="#29a9eb" />,
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <SiMongodb size={iconsSize} color="#4DB33D" />,
    },
    {
      name: "MySQL",
      category: "Database",
      icon: <SiMysql size={iconsSize} color="#015681" />,
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory || selectedCategory === "All"
  );

  return (
    <>
      {filteredSkills.map((skill) => (
        <div className="flex items-center gap-2 bg-light-gray dark:bg-card-dark p-2 rounded-lg shadow-base hover:shadow-professional-blue dark:hover:shadow-cyber-blue transition-shadow duration-300 select-none">
          {skill.icon}
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </>
  );
};

export default CategorySkills;
