import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

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
        <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-shadow-glow">
          My{" "}
          <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent text-shadow-none">
            Projects
          </span>
        </h1>
        <p className="text-medium-gray dark:text-muted-gray text-center text-sm lg:text-base px-5 max-w-2xl mx-auto text-shadow-enhanced">
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
