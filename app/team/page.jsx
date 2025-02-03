"use client";
import { motion } from "framer-motion";
import Member from "../components/Member";
import { useEffect, useState } from "react";
import client from "../lib/contentful";

export default function TeamPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchTeam() {
      const response = await client.getEntries({
        content_type: "teamYear",
        include: 10,
      });

      console.log(response);

      // Extract the main entry
      const teamYearEntry = response.items[0];

      // Extract the includes (linked entries)
      const includes = response.includes.Entry;

      // Map departments and resolve members
      const departments = teamYearEntry.fields.departments.map((department) => {
        const resolvedMembers = department.fields.members.map((memberLink) => {
          // Find the linked member entry in the includes array
          return includes.find((entry) => entry.sys.id === memberLink.sys.id);
        });

        return {
          ...department.fields,
          members: resolvedMembers,
        };
      });

      // Final data structure
      const teamData = {
        year: teamYearEntry.fields.year,
        departments,
      };

      console.log(teamData);
      setTeam(team);
    }
    fetchTeam();
  }, []);
  return (
    <div className="pt-20 min-h-screen bg-purple text-cream resp-px">
      <div className="container mx-auto px-4 py-16"></div>
    </div>
  );
}
