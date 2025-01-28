"use client";
import { motion } from "framer-motion";

export default function DiscordButton() {
  return (
    <motion.a
      className=" flex items-center text-[#5865F2] font-semibold bg-cream rounded-full px-2 py-1 overflow-hidden shadow-xl absolute right-0"
      aria-label="Join Discord Server"
      whileHover={{ width: "225px" }} // Expands to 200px on hover
      initial={{ width: "50px" }} // Starts with only the icon
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      href="https://discord.com"
    >
      {/* Discord Icon */}
      <img
        className="w-10 h-10"
        src="/Images/discord-icon.svg"
        alt="Discord Logo"
      />

      {/* Text that appears on hover */}
      <motion.span
        className="ml-2"
        style={{ whiteSpace: "nowrap" }}
        initial={{ opacity: 0, x: 0 }} // Hidden and shifted left initially
        animate={{ opacity: 1, x: 0 }} // Visible and centered on hover
        transition={{ delay: 0.2, duration: 0.3 }} // Smooth fade and slide
      >
        Join Discord Server
      </motion.span>
    </motion.a>
  );
}
