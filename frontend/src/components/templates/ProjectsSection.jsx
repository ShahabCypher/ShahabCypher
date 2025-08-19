import { useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Real State Market",
      description:
        "Real State Market is a full-stack web application that allows users to buy and sell properties.",
      category: "Full-Stack",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "projects/real-state.png",
      features: [
        "Admin Panel",
        "User Panel",
        "Map Feature",
        "Responsive Design",
      ],
      github: "#",
      url: "#",
      upcoming: true,
    },
    {
      id: 2,
      title: "Crypto Portfolio Tracker",
      description:
        "Real-time cryptocurrency portfolio tracking using CoinGecko API with a modern and responsive design.",
      category: "Full-Stack",
      technologies: ["React", "Node.js", "MongoDB", "CoinGecko API"],
      image: "projects/crypto-portfolio.png",
      features: [
        "Real-time Prices",
        "Portfolio Analytics",
        "Buy / Sell",
        "Interactive Charts",
      ],
      github: "#",
      url: "#",
      upcoming: true,
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather app with with openweathermap api and account system.",
      category: "Full-Stack",
      technologies: ["React", "Node.js", "MongoDB", "OpenWeatherMap API"],
      image: "projects/weather-app.png",
      features: [
        "Real-time Weather",
        "Account System",
        "Search by city",
        "Save favorite cities",
      ],
      github: "#",
      url: "#",
      upcoming: true,
    },
    {
      id: 4,
      title: "Javan Photogallery Bot",
      description:
        "A reservation and order management system for javan photogallery using pyrogram.",
      category: "Bot Development",
      technologies: ["Python", "Pyrogram", "Flask", "MySQL"],
      image: "projects/javan-bot.png",
      features: ["Reservation", "Order Management", "Payment", "View Invoices"],
      url: "https://t.me/javan_photogallery_bot",
      upcoming: false,
    },
    {
      id: 5,
      title: "Moniex Bot",
      description:
        "An Exchange platform for Euro and Toman, built with pyrogram.",
      category: "Bot Development",
      technologies: ["Python", "Pyrogram", "MySQL"],
      image: "projects/moniex.png",
      features: [
        "Exchange",
        "Post a request",
        "View offers",
        "Chat with client",
      ],
      url: "https://t.me/MoniexBot",
      upcoming: false,
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -340,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 340,
        behavior: "smooth",
      });
    }
  };

  const scrollWidth = window.innerWidth > 1024 ? 160 : 40;

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pt-25 w-full overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-5">
          My{" "}
          <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-medium-gray dark:text-muted-gray text-center text-sm lg:text-base px-5 max-w-2xl mx-auto">
          A showcase of my development work - from full-stack web applications
          to bot development projects.
        </p>
      </div>

      <div className="relative w-full">
        {/* Desktop Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white dark:bg-card-dark rounded-full shadow-base shadow-gray-400 dark:shadow-white hover:bg-professional-blue dark:hover:bg-cyber-blue hover:text-white dark:hover:text-dark-gray transition-all duration-300 text-professional-blue dark:text-cyber-blue"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 bg-white dark:bg-card-dark rounded-full shadow-base shadow-gray-400 dark:shadow-white hover:bg-professional-blue dark:hover:bg-cyber-blue hover:text-white dark:hover:text-dark-gray transition-all duration-300 text-professional-blue dark:text-cyber-blue"
        >
          <ChevronRight size={24} />
        </button>

        {/* Projects Container */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-hide lg:scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            className="flex items-stretch gap-6 px-5 py-2 lg:px-20 pb-5"
            style={{
              width: `${
                projects.length * 320 + (projects.length - 1) * 24 + scrollWidth
              }px`,
            }}
          >
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex flex-col flex-shrink-0 w-80 h-[570px] bg-white dark:bg-card-dark rounded-xl shadow-base hover:shadow-professional-blue dark:hover:shadow-cyber-blue transition-all duration-300 group overflow-hidden"
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
                      <p className="text-white text-xl font-semibold text-shadow-[1px_1px_1px_#000,_-1px_-1px_1px_#000,_-1px_1px_1px_#000,_1px_-1px_1px_#000]">
                        Upcoming
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-6">
                    {/* Title and Category */}
                    <div className="mb-4">
                      <h3 className="font-bold text-lg text-dark-gray dark:text-soft-white group-hover:text-professional-blue dark:group-hover:text-cyber-blue transition-colors mb-1">
                        {project.title}
                      </h3>
                      <span className="text-xs text-medium-gray dark:text-muted-gray uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-medium-gray dark:text-muted-gray leading-relaxed mb-4">
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
                          <Github size={16} />
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
