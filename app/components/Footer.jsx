import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-darkPurple text-cream">
      <div className="resp-px flex flex-col lg:flex-row justify-between items-center py-8">
        {/* Logo and Description */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 clash-display font-semibold text-cream text-center lg:text-left mb-8 lg:mb-0">
          <img
            src="/Images/gdg-logo.svg"
            className="h-40 w-40"
            alt="GDG Logo"
          />
          <p className="w-52">
            Google Developer Group on campus AISSMS College of Engineering
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-0">
          <div>
            <ul className="flex flex-col gap-5 darker-grotesque font-medium text-lg text-center lg:text-left">
              <li className="underline-effect">Team</li>
              <li className="underline-effect">Blogs</li>
              <li className="underline-effect">Events</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <ul className="flex flex-col gap-5 darker-grotesque font-medium text-lg text-center lg:text-left">
              <li className="flex gap-2 items-center justify-center lg:justify-start underline-effect">
                <FaInstagram /> Instagram
              </li>
              <li className="flex gap-2 items-center justify-center lg:justify-start underline-effect">
                <FaLinkedin /> Linkedin
              </li>
              <li className="flex gap-2 items-center justify-center lg:justify-start underline-effect">
                <FaGithub /> Github
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Email and Credits */}
      <div className="grid place-content-center py-9 clash-display text-center">
        <a
          href="mailto:gdgocaissmscoe@gmail.com"
          className="flex gap-2 text-lg justify-center mb-4 hover:text-lightPurple transition-all"
        >
          <BiLogoGmail className="w-6 h-6" /> gdgocaissmscoe@gmail.com
        </a>
        <p className="text-center">
          Made with 💗 By Adwait Rao and Team @ GDG AISSMSCOE
        </p>
      </div>
    </div>
  );
}
