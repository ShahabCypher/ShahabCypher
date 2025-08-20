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
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 lg:w-full ${
            selectedCategory === category.name
              ? "bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green text-soft-white dark:text-dark-gray shadow-glow-blue dark:shadow-glow-cyan backdrop-blur-sm border border-professional-blue/30 dark:border-cyber-blue/30"
              : "bg-light-gray/80 dark:bg-card-dark/80 backdrop-blur-sm border border-blight/30 dark:border-bdark/30 text-dark-gray dark:text-gray-300 hover:bg-black/20 hover:text-black dark:hover:bg-white/20 dark:hover:text-white shadow-enhanced"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <div className="drop-shadow-sm">{category.icon}</div>
          {category.name}
        </button>
      ))}
    </>
  );
};

export default CategorySelect;
