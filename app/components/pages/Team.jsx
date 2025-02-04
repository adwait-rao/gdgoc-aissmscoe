"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Member from "../Member";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../../lib/contentful";

export default function Team() {
  const [teamLeads, setTeamLeads] = useState([]);

  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
  useEffect(() => {
    client
      .getEntries({ content_type: "teamMember", order: "sys.createdAt" })
      .then((response) => {
        const members = response.items;
        console.log(members);
        const teamLeads = members.filter(
          (member) =>
            member.fields.role.includes("Lead") ||
            member.fields.role.includes("Head")
        );
        setTeamLeads(teamLeads);
        console.log(teamLeads);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="team" className="scroll-mt-[80px]">
      <div className=" h-[calc(100vh - 104px)] w-full bg-purple text-cream resp-px p-14">
        <h1 className="clash-display font-semibold text-4xl mb-10">Team</h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 place-items-center">
          {teamLeads.map((member) => (
            <Member key={member.sys.id} member={member} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/team"
            className="group clash-display bg-cream font-medium text-purple text-lg px-4 py-2 backdrop-blur-lg"
          >
            See All Team Members{" "}
            <FaArrowRightLong className="inline-block ml-2 group-hover:translate-x-2 transition-all ease-in-out" />
          </Link>
        </div>
      </div>
    </div>
  );
}
