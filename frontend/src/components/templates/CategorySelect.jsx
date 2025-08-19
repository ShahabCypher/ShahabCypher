import { Database, Server, Bot, Layers, Monitor } from "lucide-react";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: "All", icon: <Layers /> },
    { name: "Frontend", icon: <Monitor /> },
    { name: "Backend", icon: <Server /> },
    { name: "Bot", icon: <Bot /> },
    { name: "Database", icon: <Database /> },
  ];

  return (
    <>
      {categories.map((category) => (
        <button
          key={category.name}
          className={`px-4 py-2 rounded-xl font-medium transition-bg duration-300 flex items-center gap-2 ${
            selectedCategory === category.name
              ? "bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green text-soft-white dark:text-dark-gray shadow-lg shadow-professional-blue/25 dark:shadow-cyber-blue/25"
              : "bg-light-gray dark:bg-card-dark backdrop-blur-md border border-blight dark:border-bdark text-dark-gray dark:text-gray-300 hover:bg-black/20 hover:text-black dark:hover:bg-white/20 dark:hover:text-white"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </>
  );
};

export default CategorySelect;
