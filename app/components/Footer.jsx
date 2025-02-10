import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const year = new Date(Date.now());
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
              <Link href="/#team" className="underline-effect">
                Team
              </Link>
              <Link href="/#blogs" className="underline-effect">
                Blogs
              </Link>
              <Link href="/#events" className="underline-effect">
                Events
              </Link>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="flex flex-col gap-5 darker-grotesque font-medium text-lg text-center lg:text-left">
              <Link
                href="https://www.instagram.com/gdg.aissmscoe/"
                className="flex gap-2 items-center justify-center lg:justify-start underline-effect"
              >
                <FaInstagram /> Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/gdg-on-campus-aissmscoe/"
                className="flex gap-2 items-center justify-center lg:justify-start underline-effect"
              >
                <FaLinkedin /> Linkedin
              </Link>
              <Link
                href="https://www.github.com/adwait-rao"
                className="flex gap-2 items-center justify-center lg:justify-start underline-effect"
              >
                <FaGithub /> Github
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Email and Credits */}
      <div className="grid place-content-center py-9 clash-display text-center">
        <a
          href="mailto:gdgocaissmscoe@gmail.com"
          className="flex gap-2 text-lg justify-center align-middle mb-4 hover:text-lightPurple transition-all"
        >
          <BiLogoGmail className="w-6 h-6" /> dsc@aissmscoe.com
        </a>
        <p className="text-center mb-7">
          Made with 💗 By Adwait Rao @ GDG AISSMSCOE
        </p>
        <p className="text-center font-light text-[#97a5ff]">
          &#169; Copyright {year.getFullYear()} GDG AISSMSCOE. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
