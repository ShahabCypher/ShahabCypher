import { FaGithub, FaTelegram, FaInstagram, FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const SocialIcons = ({ mobile = false }) => {
  return (
    <div className={`w-full ${mobile ? "block lg:hidden" : "hidden lg:block"}`}>
      <div className="w-full flex justify-center items-center mt-5">
        <div
          className={`border-t border-blight dark:border-bdark ${
            mobile ? "w-2/5 mr-3" : "w-1/2"
          }`}
        ></div>
        <span
          className={`text-medium-gray dark:text-muted-gray text-sm font-medium ${
            mobile ? "block" : "hidden"
          }`}
        >
          or
        </span>
        <div
          className={`border-t border-blight dark:border-bdark ${
            mobile ? "w-2/5 ml-3" : "w-1/2"
          }`}
        ></div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-6">
        <p className="text-medium-gray dark:text-muted-gray font-medium">
          You can {!mobile && "also "} reach me on:
        </p>
        <div className="flex items-center gap-6 text-muted-gray dark:text-medium-gray mt-5 text-2xl *:hover:text-professional-blue *:dark:hover:text-cyber-blue *:transition-all *:duration-300">
          <a href="https://github.com/ShahabCypher" target="_blank">
            <FaGithub />
          </a>
          <a href="https://t.me/ShahabCypher" target="_blank">
            <FaTelegram />
          </a>
          <a href="https://instagram.com/shahabcypher" target="_blank">
            <FaInstagram />
          </a>
          <a
            href="https://discordapp.com/users/654402138700644372"
            target="_blank"
          >
            <FaDiscord />
          </a>
          <a href="https://x.com/ShahabCypher" target="_blank">
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
