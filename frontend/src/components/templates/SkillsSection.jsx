import { useState } from "react";

import CategorySkills from "./CategorySkills";
import CategorySelect from "./CategorySelect";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
          <CategorySelect
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
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
