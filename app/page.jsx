import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Home from "./components/pages/Home";
import DiscordButton from "./components/DiscordButton";
import WhatsappButton from "./components/WhatsappButton";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Events />
      <div className="clash-display fixed right-4 bottom-4 md:right-10 md:bottom-10 flex flex-col gap-3 justify-end">
        <DiscordButton />
        <WhatsappButton />
      </div>
    </>
  );
}
