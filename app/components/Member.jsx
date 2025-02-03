import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Member({ member }) {
  console.log(member);
  return (
    <div className="w-full max-w-[200px]">
      {" "}
      {/* Ensures responsiveness */}
      <div className="relative border border-cream h-56 bg-black group overflow-hidden">
        <img
          src={`https://${member.fields.image?.fields.file.url}`}
          alt="Member"
          className="relative top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4 items-center transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-purple/50 to-purple pb-3 pt-10">
          {member.fields.github && (
            <Link href={member.fields.github}>
              <FaGithub className="text-cream w-7 h-7 hover:text-lightPurple transition-colors" />
            </Link>
          )}
          {member.fields.linkedin && (
            <Link href={member.fields.linkedin}>
              <FaLinkedin className="text-cream w-7 h-7 hover:text-blue-500 transition-colors" />
            </Link>
          )}
          {member.fields.twitterinstagram && (
            <Link href={member.fields.twitterinstagram}>
              {member.fields.twitterinstagram.includes("instagram") ? (
                <FaInstagram className="text-cream w-7 h-7 hover:text-fuchsia-400 transition-colors" />
              ) : (
                <FaTwitter className="text-cream w-7 h-7 hover:text-blue-300 transition-colors" />
              )}
            </Link>
          )}
        </div>
      </div>
      <div className="text-center">
        <h2 className="clash-display font-semibold text-lg mt-3">
          {member.fields.name}
        </h2>
        <p className="clash-display font-normal text-xs text-[#C6BEFF] mt-1">
          {member.fields.role}
        </p>
      </div>
    </div>
  );
}
