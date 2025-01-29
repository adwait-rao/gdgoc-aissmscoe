import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Member() {
  return (
    <div className="w-full max-w-[200px]">
      {" "}
      {/* Ensures responsiveness */}
      <div className="relative border border-cream h-56 bg-black group overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent to-purple py-3">
          <Link href={"/"}>
            <FaGithub className="text-cream w-7 h-7 hover:text-lightPurple transition-colors" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin className="text-cream w-7 h-7 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href={"/"}>
            <FaTwitter className="text-cream w-7 h-7 hover:text-blue-300 transition-colors" />
          </Link>
        </div>
      </div>
      <div className="text-center">
        <h2 className="clash-display font-semibold text-lg mt-3">Adwait Rao</h2>
        <p className="clash-display font-normal text-xs text-[#C6BEFF] mt-1">
          Web Development Lead
        </p>
      </div>
    </div>
  );
}
