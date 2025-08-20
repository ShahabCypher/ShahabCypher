import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="flex flex-col flex-shrink-0 w-80 h-[570px] bg-white/80 dark:bg-card-dark/80 backdrop-blur-md rounded-xl shadow-enhanced hover:shadow-glow-blue dark:hover:shadow-glow-cyan transition-all duration-300 group overflow-hidden border border-blight/30 dark:border-bdark/30"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className={`${
            project.upcoming ? "absolute" : "hidden"
          } top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-[2px]`}
        >
          <p className="text-white text-xl font-semibold text-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] drop-shadow-2xl">
            Upcoming
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Title and Category */}
        <div className="mb-4">
          <h3 className="font-bold text-lg text-dark-gray dark:text-soft-white group-hover:text-professional-blue dark:group-hover:text-cyber-blue transition-colors mb-1 text-shadow-enhanced">
            {project.title}
          </h3>
          <span className="text-xs text-medium-gray dark:text-muted-gray uppercase tracking-wide text-shadow-enhanced">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-medium-gray dark:text-muted-gray leading-relaxed mb-4 text-shadow-enhanced">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-light-gray dark:bg-void-black text-xs font-medium text-professional-blue dark:text-cyber-blue rounded transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 flex-grow">
          <h4 className="text-xs font-semibold text-medium-gray dark:text-muted-gray mb-2 uppercase tracking-wide">
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-1">
            {project.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="w-1 h-1 bg-professional-blue dark:bg-cyber-blue rounded-full"></div>
                <span className="text-xs text-medium-gray dark:text-muted-gray">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project?.github && (
            <a
              href={project.github}
              className="flex items-center justify-center gap-2 flex-1 bg-light-gray dark:bg-void-black text-professional-blue dark:text-cyber-blue py-2 px-3 rounded-lg hover:bg-professional-blue dark:hover:bg-cyber-blue hover:text-white dark:hover:text-dark-gray transition-all duration-300 text-sm font-medium"
            >
              <FaGithub size={16} />
              Code
            </a>
          )}
          <a
            href={project.url}
            className="flex items-center justify-center gap-2 flex-1 bg-professional-blue dark:bg-cyber-blue text-white dark:text-dark-gray py-2 px-3 rounded-lg hover:bg-success-green dark:hover:bg-matrix-green transition-all duration-300 text-sm font-medium"
          >
            <ExternalLink size={16} />
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
