import React from "react";

export default function About() {
  return (
    <div className="h-[calc(100vh - 104px)] w-full bg-darkPurple text-cream resp-px p-14">
      <h1 className="clash-display font-semibold text-4xl mb-10">About</h1>
      <h2 className="font-semibold text-4xl md:text-6xl mb-6 clash-display">
        <span>We Build.</span> <span>We Learn.</span> <span>We Grow.</span>{" "}
      </h2>
      <p className="darker-grotesque text-3xl">
        A community of creators, innovators, and tech enthusiasts at
        <br /> AISSMS COE, redefining possibilities with technology.
      </p>

      <div className="clash-display flex flex-wrap gap-10 mt-24 mb-16">
        <div className="flex-1 min-w-[200px] md:min-w-[300px] p-4">
          <h2 className="font-semibold text-3xl">Innovation</h2>
          <p className="darker-grotesque text-3xl">
            "Exploring ideas that push boundaries."
          </p>
        </div>
        <div className="flex-1 min-w-[200px] md:min-w-[300px] p-4">
          <h2 className="font-semibold text-3xl">Collaboration</h2>
          <p className="darker-grotesque text-3xl">
            "Together, we make things happen."
          </p>
        </div>
        <div className="flex-1 min-w-[200px] md:min-w-[300px] p-4">
          <h2 className="font-semibold text-3xl">Impact</h2>
          <p className="darker-grotesque text-3xl">
            "Building solutions that matter."
          </p>
        </div>
      </div>
      <p className="clash-display block text-center text-4xl font-semibold">
        Be part of something extraordinary.
      </p>
    </div>
  );
}
