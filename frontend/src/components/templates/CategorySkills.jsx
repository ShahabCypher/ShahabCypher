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
  const iconsLgSize = 60;

  const skills = [
    {
      name: "React",
      category: "Frontend",
      icon: (
        <>
          <FaReact size={iconsSize} color="#61DAFB" className="lg:hidden" />
          <FaReact
            size={iconsLgSize}
            color="#61DAFB"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: (
        <>
          <FaJs size={iconsSize} color="#F0DB4F" className="lg:hidden" />
          <FaJs
            size={iconsLgSize}
            color="#F0DB4F"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Tailwind",
      category: "Frontend",
      icon: (
        <>
          <SiTailwindcss
            size={iconsSize}
            color="#38BDF8"
            className="lg:hidden"
          />
          <SiTailwindcss
            size={iconsLgSize}
            color="#38BDF8"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Material UI",
      category: "Frontend",
      icon: (
        <>
          <SiMui size={iconsSize} color="#0081CB" className="lg:hidden" />
          <SiMui
            size={iconsLgSize}
            color="#0081CB"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: (
        <>
          <FaNodeJs size={iconsSize} color="#3C873A" className="lg:hidden" />
          <FaNodeJs
            size={iconsLgSize}
            color="#3C873A"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: (
        <>
          <SiExpress size={iconsSize} color="#666" className="lg:hidden" />
          <SiExpress
            size={iconsLgSize}
            color="#666"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Python",
      category: "Bot",
      icon: <img src="/icons/python.svg" className="w-8 h-8 lg:w-15 lg:h-15" />,
    },
    {
      name: "Django",
      category: "Backend",
      icon: (
        <>
          <SiDjango size={iconsSize} color="#2e7b5e" className="lg:hidden" />
          <SiDjango
            size={iconsLgSize}
            color="#2e7b5e"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Discord.py",
      category: "Bot",
      icon: (
        <>
          <FaDiscord size={iconsSize} color="#5865f2" className="lg:hidden" />
          <FaDiscord
            size={iconsLgSize}
            color="#5865f2"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "Pyrogram",
      category: "Bot",
      icon: (
        <>
          <FaTelegram size={iconsSize} color="#29a9eb" className="lg:hidden" />
          <FaTelegram
            size={iconsLgSize}
            color="#29a9eb"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: (
        <>
          <SiMongodb size={iconsSize} color="#4DB33D" className="lg:hidden" />
          <SiMongodb
            size={iconsLgSize}
            color="#4DB33D"
            className="hidden lg:block"
          />
        </>
      ),
    },
    {
      name: "MySQL",
      category: "Database",
      icon: (
        <>
          <SiMysql size={iconsSize} color="#015681" className="lg:hidden" />
          <SiMysql
            size={iconsLgSize}
            color="#015681"
            className="hidden lg:block"
          />
        </>
      ),
    },
  ];

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory || selectedCategory === "All"
  );

  return (
    <>
      {filteredSkills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center lg:justify-center lg:flex-col gap-2 bg-light-gray dark:bg-card-dark p-2 rounded-lg shadow-base hover:shadow-professional-blue dark:hover:shadow-cyber-blue transition-all duration-300 select-none h-fit lg:h-30"
        >
          {skill.icon}
          <span className="text-sm lg:text-base lg:font-medium lg:mt-2">
            {skill.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default CategorySkills;
