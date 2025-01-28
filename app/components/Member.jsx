import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Member() {
  return (
    <div className="w-72">
      <div className="relative border border-cream h-72 bg-black group overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-6 items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent to-purple py-4">
          <Link href={"/"}>
            {" "}
            {/* Replace # with the link to your Github */}
            <FaGithub className="text-cream w-10 h-10" />
          </Link>
          <Link href={"/"}>
            <FaLinkedin className="text-cream w-10 h-10" />
          </Link>
          <Link href={"/"}>
            <FaTwitter className="text-cream w-10 h-10" />
          </Link>
        </div>
      </div>

      <div>
        <h2 className="clash-display font-semibold text-2xl mt-4">
          Adwait Rao
        </h2>
        <p className="clash-display font-normal text-lg text-[#C6BEFF] mt-2">
          Web Development Lead
        </p>
      </div>
    </div>
  );
}
