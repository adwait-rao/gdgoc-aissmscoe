import { FaArrowRightLong } from "react-icons/fa6";
import Member from "../Member";

export default function Team() {
  return (
    <div>
      <div className="h-[calc(100vh - 104px)] w-full bg-purple text-cream resp-px p-14">
        <h1 className="clash-display font-semibold text-4xl mb-10">Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 place-items-center">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>

        <button className="group clash-display bg-cream font-medium text-purple text-xl px-5 py-2 backdrop-blur-lg">
          See All Team members{" "}
          <FaArrowRightLong className="inline-block ml-2 group-hover:translate-x-2 transition-all ease-in-out" />
        </button>
      </div>
    </div>
  );
}
