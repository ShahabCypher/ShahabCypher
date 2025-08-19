import { useState } from "react";
import { Database, Server, Bot, Layers, Monitor } from "lucide-react";
import CategorySkills from "./CategorySkills";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: <Layers /> },
    { name: "Frontend", icon: <Monitor /> },
    { name: "Backend", icon: <Server /> },
    { name: "Bot", icon: <Bot /> },
    { name: "Database", icon: <Database /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-25 w-full">
      <h1 className="text-4xl font-bold">
        My{" "}
        <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h1>
      <p className="text-medium-gray dark:text-muted-gray text-center text-sm px-5 mt-5">
        Expert in modern web development, API design, and automation systems -
        delivering solutions that scale from MVP to enterprise.
      </p>

      <div className="flex flex-col w-full">
        {/* Select Category */}
        <div className="flex items-center justify-center gap-5 mt-10 flex-wrap px-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-xl font-medium transition-bg duration-300 flex items-center gap-2 ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green text-dark-gray shadow-lg shadow-professional-blue/25 dark:shadow-cyber-blue/25"
                  : "bg-card-dark backdrop-blur-md border border-bdark text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5">
          <CategorySkills selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
