"use client";

import React from "react";
import { motion } from "framer-motion";

const skills: string[] = [
  "WordPress",
  "WooCommerce",
  "Elementor",
  "Divi",
  "WPBakery",
  "WordPress Development",
  "WordPress Theme",
  "WordPress Plugin",
  "PHP",
  "Laravel",
  "MySQL",
  "ASP.NET",
  "ASP.NET MVC",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "jQuery",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "Responsive Design",
  "Web Design",
  "REST APIs",
  "AJAX",
  "JSON"
];




const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <section className="py-12 mt-30 px-4 text-white text-center w-full md:w-[60%] mx-auto">
      <motion.h2
        className=" text-2xl md:text-4xl font-sans mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className=" bg-[#111] border border-gray-700 px-3 py-1.5 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
