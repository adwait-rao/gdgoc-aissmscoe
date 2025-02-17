import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Home from "./components/pages/Home";
import DiscordButton from "./components/DiscordButton";
import WhatsappButton from "./components/WhatsappButton";
import Team from "./components/pages/Team";
import Blogs from "./components/pages/Blogs";
import Gallery from "./components/pages/Gallery";
import Footer from "./components/Footer";
import LinkedinButton from "./components/LinkedinButton";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Events />
      <Team />
      <Blogs />
      <Gallery />
      <div className="z-20 clash-display fixed right-4 bottom-4 md:right-10 md:bottom-10 flex flex-col gap-3 justify-end">
        <DiscordButton />
        <WhatsappButton />
        <LinkedinButton />
      </div>
    </div>
  );
}
