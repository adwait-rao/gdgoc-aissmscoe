"use client";

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 104) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 flex clash-display text-cream font-semibold text-xl justify-between items-center align-middle resp-px w-screen py-5 z-40 transition-all duration-200 ease-in-out ${
        scrolled ? "backdrop-blur-xl backdrop-brightness-75" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex gap-4 items-center">
        <img className="w-10 h-10" src="/Images/gdg-logo.svg" alt="" />
        <p>GDGOC AISSMSCOE</p>
      </div>
      {/* Menu Button */}
      <div
        className="cursor-pointer text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <MdClose className="transition-all" />
        ) : (
          <GiHamburgerMenu className="transition-all" />
        )}
      </div>
    </div>
  );
}
