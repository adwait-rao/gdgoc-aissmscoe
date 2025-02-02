import EventCard from "../EventCard";
import RadialButton from "../RadialButton";

export default function Events() {
  return (
    <div
      id="events"
      className="scroll-mt-[80px] h-[calc(100vh - 104px)] w-full bg-gradient-to-b from-purple to-darkPurple text-cream resp-px p-14"
    >
      <h1 className="clash-display font-semibold text-4xl mb-10">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <p className="clash-display font-semibold text-3xl mb-8">
        Have an idea for an event? Let’s make it happen.
      </p>

      <RadialButton href={""}>Propose an Event</RadialButton>
    </div>
  );
}
