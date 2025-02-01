"use client";
import { motion } from "framer-motion";
import Member from "../components/Member";

// Updated team data structure with yearly sections
const teamData = [
  {
    year: "2024-25",
    departments: [
      {
        name: "Core Team",
        members: [
          {
            name: "John Doe",
            role: "Lead",
            image: "/team/john.jpg",
            linkedin: "https://linkedin.com/in/johndoe",
          },
          // Add more members
        ],
      },
      {
        name: "Web Development",
        members: [
          {
            name: "Jane Smith",
            role: "Lead Developer",
            image: "/team/jane.jpg",
            linkedin: "https://linkedin.com/in/janesmith",
          },
          // Add more members
        ],
      },
      // Add more departments
    ],
  },
  {
    year: "2025-26",
    departments: [
      {
        name: "Core Team",
        members: [
          {
            name: "Alice Johnson",
            role: "Lead",
            image: "/team/alice.jpg",
            linkedin: "https://linkedin.com/in/alicejohnson",
          },
          // Add more members
        ],
      },
      {
        name: "Web Development",
        members: [
          {
            name: "Bob Brown",
            role: "Lead Developer",
            image: "/team/bob.jpg",
            linkedin: "https://linkedin.com/in/bobbrown",
          },
          // Add more members
        ],
      },
      // Add more departments
    ],
  },
  // Add more yearly sections
];

export default function TeamPage() {
  return (
    <div className="pt-20 min-h-screen bg-purple text-cream resp-px">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="clash-display text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h1>

        {/* Map through yearly sections */}
        {teamData.map((yearData, yearIndex) => (
          <motion.div
            key={yearData.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: yearIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="clash-display text-3xl font-semibold mb-8 text-center">
              {yearData.year}
            </h2>

            {/* Map through departments for each year */}
            {yearData.departments.map((dept, deptIndex) => (
              <motion.section
                key={dept.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: deptIndex * 0.2 }}
                className="mb-16"
              >
                <h3 className="clash-display text-2xl font-semibold mb-8 text-center">
                  {dept.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Map through members in each department */}
                  {dept.members.map((member) => (
                    <Member
                      key={member.name}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      linkedin={member.linkedin}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
