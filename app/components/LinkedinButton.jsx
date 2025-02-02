"use client";
import { motion } from "framer-motion";

export default function LinkedinButton() {
  return (
    <motion.a
      className="flex items-center text-[#0e7ac7] font-semibold bg-cream rounded-full px-2 py-1 overflow-hidden shadow-2xl absolute right-0 bottom-32"
      aria-label="Join Whatsapp Group"
      whileHover={{ width: "210px" }} // Expands to 200px on hover
      initial={{ width: "50px" }} // Starts with only the icon
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      href="https://www.linkedin.com/company/gdg-on-campus-aissmscoe/"
    >
      {/* Discord Icon */}
      <img
        className="w-10 h-10"
        src="/Images/linkedin-svgrepo-com.svg"
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
        Follow on LinkedIn
      </motion.span>
    </motion.a>
  );
}
