import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogTitles() {
  return (
    <div className="group flex gap-7 justify-between items-center w-full bg-darkPurple hover:bg-purple text-lightPink p-6 clash-display transition-colors">
      <div>
        <h2 className="text-2xl font-medium">
          Learn how garbage collector works under the hood
        </h2>
        <p className="text-xl font-medium darker-grotesque mt-1">Adwait Rao</p>
      </div>
      <div>
        <FaArrowRightLong className="text-4xl group-hover:translate-x-2 transition-transform" />
      </div>
    </div>
  );
}
