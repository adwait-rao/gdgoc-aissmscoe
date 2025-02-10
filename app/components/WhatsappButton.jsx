"use client";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.a
      className="flex items-center text-[#1a9949] font-semibold bg-cream rounded-full px-2 py-1 overflow-hidden shadow-2xl absolute right-0 bottom-16"
      aria-label="Join Whatsapp Group"
      whileHover={{ width: "280px" }} // Expands to 200px on hover
      initial={{ width: "50px" }} // Starts with only the icon
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      href="https://chat.whatsapp.com/GhxluByMZ45BAoc6KB3rtV"
    >
      {/* Discord Icon */}
      <img
        className="w-10 h-10"
        src="/Images/whatsapp.svg"
        alt="Whatsapp Logo"
      />

      {/* Text that appears on hover */}
      <motion.span
        className="ml-2"
        style={{ whiteSpace: "nowrap" }}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        Join Whatsapp Community
      </motion.span>
    </motion.a>
  );
}
