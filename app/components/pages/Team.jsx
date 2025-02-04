"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import Member from "../Member";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../../lib/contentful";

export default function Team() {
  const [teamLeads, setTeamLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await client.getEntries({
          content_type: "teamMember",
          order: "sys.createdAt",
        });

        const formattedMembers = response.items.map((member) => ({
          id: member.sys.id,
          name: member.fields.name,
          role: member.fields.role,
          image: member.fields.image?.fields?.file?.url
            ? `https:${member.fields.image.fields.file.url}`
            : null,
          github: member.fields.github,
          linkedin: member.fields.linkedin,
          twitterinstagram: member.fields.twitterinstagram,
        }));

        setTeamLeads(formattedMembers);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return (
    <div
      id="team"
      className="scroll-mt-[80px] min-h-[calc(100vh - 104px)] w-full bg-purple text-cream resp-px p-14"
    >
      <div className="flex items-center justify-between mb-10">
        <h1 className="clash-display font-semibold text-4xl">Team</h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 place-items-center">
          {teamLeads.map((member) => {
            if (member.role.includes("Lead") || member.role.includes("Head")) {
              return <Member key={member.id} member={member} />;
            }
          })}
        </div>
      )}
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
  );
}
