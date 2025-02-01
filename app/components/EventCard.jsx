import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

export default function EventCard() {
  return (
    <div className="clash-display hover:scale-105 transition-transform text-xl bg-darkPurple border shadow-md overflow-hiddenborder border-purple p-5">
      <div className="w-full aspect-[16/9] bg-lightPurple mb-5">
        {/* image container */}
      </div>
      <p className="text-sm text-lightPurple flex gap-5 items-center align-middle mb-4">
        <span className="flex align-middle justify-between items-center gap-2">
          <FaLocationDot /> Online{" "}
        </span>
        •{" "}
        <span className="flex align-middle justify-between items-center gap-2">
          <FaRegClock /> 6:00PM Dec 23, 2024
        </span>
      </p>
      <p className="font-semibold mb-2 ">Event Name</p>
      <p className="darker-grotesque mb-5">
        A short description about the event, highlighting what participants will
        learn or experience.
      </p>
      <div>
        <button className="font-semibold text-darkPurple bg-lightPink px-4 py-2 btn-pink-slidein">
          RSVP Now
        </button>
      </div>
    </div>
  );
}
