"use client";
import { motion } from "framer-motion";
import Member from "../components/Member";

const departments = [
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
];

export default function TeamPage() {
  return (
    <div className="pt-20 min-h-screen bg-purple text-cream">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="clash-display text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h1>

        {departments.map((dept, index) => (
          <motion.section
            key={dept.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-16"
          >
            <h2 className="clash-display text-3xl font-semibold mb-8 text-center">
              {dept.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      </div>
    </div>
  );
}
