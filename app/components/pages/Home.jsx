"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  // Hook into the scroll position
  const { scrollYProgress } = useScroll();

  // Define parallax movement for each logo
  const logo1Y = useTransform(scrollYProgress, [0, 1], [-80, 70]);
  const logo2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const logo3Y = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const logo4Y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  // Logos with predefined positions and parallax movement
  const logos = [
    {
      src: "/Images/android-studio-icon.svg",
      alt: "Android Studio",
      x: "10%",
      y: "20%",
      style: { y: logo1Y },
    },
    {
      src: "/Images/firebase.png",
      alt: "Firebase",
      x: "70%",
      y: "10%",
      style: { y: logo2Y },
    },
    {
      src: "/Images/github.svg",
      alt: "GitHub",
      x: "50%",
      y: "15%",
      style: { y: logo3Y },
    },
    {
      src: "/Images/google-gemini-icon.svg",
      alt: "Google Gemini",
      x: "30%",
      y: "30%",
      style: { y: logo4Y },
    },
    {
      src: "/Images/flutter.png",
      alt: "Flutter",
      x: "10%",
      y: "80%",
      style: { y: logo1Y },
    },
    {
      src: "/Images/golang.png",
      alt: "Golang",
      x: "40%",
      y: "70%",
      style: { y: logo2Y },
    },
    {
      src: "/Images/kubernetes-svgrepo-com.svg",
      alt: "Kubernetes",
      x: "80%",
      y: "70%",
      style: { y: logo3Y },
    },
    {
      src: "/Images/google-cloud-icon.svg",
      alt: "Google Cloud",
      x: "60%",
      y: "80%",
      style: { y: logo4Y },
    },
  ];

  return (
    <div className="h-screen text-cream overflow-hidden relative mesh-gradient-bg">
      {/* Background Parallax Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.alt}
            // style={logo.style}
            className="absolute w-20 h-20" // Uniform size for all logos
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.2,
            }}
            style={{
              ...logo.style,
              left: logo.x, // Use defined x-position
              top: logo.y, // Use defined y-position
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="clash-display grid place-content-center h-full text-cream">
        <div className="text-center z-30">
          <motion.span
            className="text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: logos.length * 0.2 }}
          >
            Welcome to
          </motion.span>
          <br />
          <motion.span
            className="text-4xl md:text-5xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: (logos.length + 2) * 0.2 }}
          >
            Google Developers Group on Campus AISSMS COE
          </motion.span>
          <motion.div
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: (logos.length + 4) * 0.2 }}
          >
            <button className="radial-bg border border-cream font-medium text-xl px-5 py-2 backdrop-blur-lg">
              Join our community
            </button>
            <button className="bg-cream text-purple font-medium text-xl px-5 py-2">
              Events
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
