"use client";
import EventCard from "../EventCard";
import RadialButton from "../RadialButton";
import client from "../../lib/contentful";
import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await client.getEntries({
          content_type: "event",
          order: "-fields.dateAndTime",
        });

        const formattedEvents = response.items.map((event) => ({
          id: event.sys.id,
          title: event.fields.title,
          slug: event.fields.slug,
          description: event.fields.description,
          dateAndTime: event.fields.dateAndTime,
          image: event.fields.image?.fields?.file?.url
            ? `https:${event.fields.image.fields.file.url}`
            : null,
          url: event.fields.url || null,
          location: event.fields.location,
          rsvpLink: event.fields.rsvpLink,
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div
      id="events"
      className="scroll-mt-[80px] h-[calc(100vh - 104px)] w-full bg-gradient-to-b from-purple to-darkPurple text-cream resp-px p-14"
    >
      <h1 className="clash-display font-semibold text-4xl mb-10">Events</h1>
      {loading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="clash-display text-2xl text-cream/80 animate-pulse">
            Loading Events...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      <p className="clash-display font-semibold text-3xl mb-8">
        Have an idea for an event? Let’s make it happen.
      </p>

      <RadialButton href={""}>Propose an Event</RadialButton>
    </div>
  );
}
