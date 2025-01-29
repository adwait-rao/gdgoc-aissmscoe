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
      href="https://discord.com"
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
        initial={{ opacity: 0, x: 0 }} // Hidden and shifted left initially
        animate={{ opacity: 1, x: 0 }} // Visible and centered on hover
        transition={{ delay: 0.2, duration: 0.3 }} // Smooth fade and slide
      >
        Join Whatsapp Community
      </motion.span>
    </motion.a>
  );
}
