import { ExternalLink, Globe, Bot, Coffee } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  const techIcons = [
    { icon: Globe, name: "Full-Stack" },
    { icon: Bot, name: "Bot Dev" },
  ];

  return (
    <section
      id="cypher"
      className="flex flex-col lg:flex-row items-center lg:justify-around lg:mt-6 w-full max-w-screen-2xl relative z-10"
    >
      <div className="flex flex-col justify-center items-center w-full lg:w-2/5">
        <h1 className="text-6xl lg:text-7xl font-bold my-15 lg:mt-0 select-none text-shadow-glow">
          I'm{" "}
          <span className="bg-gradient-to-r from-professional-blue to-success-green dark:from-cyber-blue dark:to-matrix-green bg-clip-text text-transparent font-[UnifrakturMaguntia] tracking-wider text-shadow-none">
            Cypher
          </span>
        </h1>

        {/* Skills Icons */}
        <div className="flex items-center gap-5">
          {techIcons.map(({ icon: Icon, name }) => (
            <div key={name} className="flex flex-col items-center">
              <span className="bg-light-gray/80 dark:bg-card-dark/80 backdrop-blur-sm p-5 rounded-xl text-professional-blue dark:text-cyber-blue shadow-enhanced hover:shadow-glow-blue dark:hover:shadow-glow-cyan transition-all duration-300 border border-blight/30 dark:border-bdark/30 hover:bg-professional-blue hover:text-white dark:hover:bg-cyber-blue dark:hover:text-dark-gray">
                <Icon size={30} />
              </span>
              <span className="text-medium-gray dark:text-muted-gray text-xs mt-3 select-none text-shadow-enhanced">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10 mb-15 lg:mb-0 w-full">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-success-green/90 dark:bg-matrix-green/90 backdrop-blur-sm text-white dark:text-dark-gray p-3 rounded-xl shadow-enhanced hover:shadow-glow-blue dark:hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 border border-success-green/30 dark:border-matrix-green/30"
          >
            <ExternalLink size={30} /> My Projects
          </a>
          <a
            href="https://github.com/ShahabCypher"
            target="_blank"
            className="flex items-center gap-2 bg-light-gray/80 dark:bg-dark-gray/80 backdrop-blur-sm p-3 rounded-xl shadow-enhanced hover:shadow-glow-blue dark:hover:shadow-glow-cyan transition-all duration-300 hover:scale-105 border border-blight/30 dark:border-bdark/30"
          >
            <FaGithub size={30} /> Github
          </a>
        </div>
      </div>

      <div className="w-full lg:w-3/5">
        <div className="flex justify-center items-center">
          <div className="h-fit w-[90%] bg-light-gray/70 dark:bg-white/5 backdrop-blur-md border border-blight/50 dark:border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 shadow-backdrop">
            {/* Experience Badge */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 select-none">
              <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-professional-blue/20 to-success-green/20 dark:from-cyber-blue/20 dark:to-matrix-green/20 backdrop-blur-md border border-success-green/30 dark:border-matrix-green/30 rounded-xl shadow-enhanced">
                <div className="flex items-center gap-3">
                  <div className="text-2xl md:text-3xl font-bold text-shadow-enhanced">
                    5+
                  </div>
                  <div className="text-left">
                    <div className="text-professional-blue dark:text-cyber-blue font-semibold text-sm md:text-base text-shadow-enhanced">
                      Years
                    </div>
                    <div className="text-xs md:text-sm text-medium-gray dark:text-white text-shadow-enhanced">
                      Experience
                    </div>
                  </div>
                </div>
              </div>
              <Coffee className="w-6 h-6 md:w-8 md:h-8 text-amber-400 animate-pulse drop-shadow-lg" />
            </div>

            {/* About Text */}
            <div className="space-y-4 text-dark-gray dark:text-gray-300 text-sm md:text-base leading-relaxed">
              <p className="text-shadow-enhanced">
                <span className="text-professional-blue dark:text-cyber-blue font-mono text-shadow-enhanced">
                  // Journey started 2019
                </span>
              </p>
              <p className="pl-0 lg:pl-3 text-shadow-enhanced">
                I discovered development through Discord's bot ecosystem in
                2019, where I built custom automation solutions for communities.
                What began as solving server management challenges evolved into
                a
                <span className="text-success-green dark:text-matrix-green font-semibold text-shadow-enhanced">
                  {" "}
                  comprehensive full-stack skillset
                </span>
                .
              </p>
              <p className="pl-0 lg:pl-3 text-shadow-enhanced">
                Today, I build{" "}
                <span className="text-professional-blue dark:text-cyber-blue font-semibold text-shadow-enhanced">
                  scalable MERN applications
                </span>{" "}
                and deliver end-to-end solutions for businesses. My approach
                combines technical precision with user-focused design, ensuring
                every project meets both functional requirements and user
                expectations.
              </p>
              <p className="pl-0 lg:pl-3 text-shadow-enhanced">
                I specialize in building{" "}
                <span className="text-success-green dark:text-matrix-green font-semibold text-shadow-enhanced">
                  modern web applications
                </span>
                ,{" "}
                <span className="text-professional-blue dark:text-cyber-blue font-semibold text-shadow-enhanced">
                  API integrations
                </span>
                , and custom automation tools. I build solutions ranging from
                startup MVPs to enterprise-level systems, always focusing on{" "}
                <span className="text-dark-gray dark:text-white font-semibold text-shadow-enhanced">
                  clean code and optimal performance
                </span>
                .
              </p>
              <p className="text-shadow-enhanced">
                <span className="text-professional-blue dark:text-cyber-blue font-mono text-shadow-enhanced">
                  // Always learning, always building
                </span>
              </p>
            </div>

            {/* Current Tech Stack */}
            <div className="mt-6 p-4 bg-gradient-to-r from-success-green/10 to-professional-blue/10 dark:from-cyber-blue/10 dark:to-matrix-green/10 border border-success-green/20 dark:border-matrix-green/20 rounded-xl shadow-enhanced backdrop-blur-sm">
              <p className="text-sm text-success-green dark:text-matrix-green flex items-center gap-2 text-shadow-enhanced">
                <span className="w-2 h-2 bg-success-green dark:bg-matrix-green rounded-full animate-pulse shadow-lg"></span>
                Currently working with: MERN Stack
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
