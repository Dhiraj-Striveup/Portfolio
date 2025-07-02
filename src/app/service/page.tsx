'use client';

import { motion } from 'framer-motion';
import { FaReact, FaWordpress, FaLaravel, FaDotCircle } from 'react-icons/fa';


const services = [
  {
    title: 'Frontend Engineering',
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    description:
      'Building pixel-perfect, responsive, and blazing-fast interfaces using React, Next.js, and Tailwind CSS.',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'CMS Development',
    icon: <FaWordpress className="text-purple-400 text-3xl" />,
    description:
      'Custom WordPress themes and headless CMS integrations like Sanity and Contentful to empower content teams.',
    tools: ['WordPress', 'Sanity', 'Contentful'],
  },
  {
    title: 'Backend with Laravel & .NET',
    icon: <FaLaravel className="text-red-400 text-3xl" />,
    description:
      'Building scalable backend solutions and APIs with Laravel and .NET Core for enterprise-level performance.',
    tools: ['Laravel', '.NET Core', 'SQL Server'],
  },
  {
    title: 'UI/UX & Accessibility',
    icon: <FaDotCircle className="text-yellow-400 text-3xl" />,
    description:
      'Translating design to code with high accessibility standards (WCAG 2.1) and Core Web Vitals in mind.',
    tools: ['Figma', 'WCAG', 'Lighthouse'],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-black text-white py-24 mt-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" text-2xl md:text-4xl font-bold mb-6">
          My Expertise, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Refined Over a Decade</span>
        </h2>
        <p className="text-gray-400 mb-16">
          With 10+ years of experience, I deliver full-stack, scalable, and accessible digital solutions.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-left backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className=" text-lg md:text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
