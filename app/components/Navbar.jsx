"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#blogs", label: "Blogs" },
  { href: "#gallery", label: "Gallery" },
];

const menuVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger animation for children
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="flex justify-between items-center h-20 resp-px">
        <Link href="/" className="clash-display font-semibold text-xl">
          GDSC AISSMS IOIT
        </Link>

        {/* Hamburger Icon */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="z-50 flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 8 : 0,
              width: menuOpen ? "2rem" : "2rem",
            }}
            className="w-8 h-0.5 bg-current block transition-transform"
          />
          <motion.span
            animate={{
              opacity: menuOpen ? 0 : 1,
              width: menuOpen ? "0" : "2rem",
            }}
            className="w-8 h-0.5 bg-current block transition-all"
          />
          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -8 : 0,
              width: menuOpen ? "2rem" : "2rem",
            }}
            className="w-8 h-0.5 bg-current block transition-transform"
          />
        </motion.button>

        {/* Menu Overlay */}
        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.div
              key="menu-overlay"
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed top-0 right-0 z-40 flex place-content-center h-screen pt-28 w-3/4 bg-transparent/95 backdrop-blur-xl"
              >
                <div className="flex flex-col items-center justify-center gap-12 clash-display text-3xl font-semibold">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Link
                        className="underline-effect hover:text-purple transition-colors"
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
