"use client";


import Image from "next/image";
import Travo from "@/assets/Travo.png";
import Luxe from "@/assets/Luxe.png"
import Dashboard from "@/assets/dashboard.png";
import Crypto from "@/assets/Crypto.png";
import Nex from "@/assets/Nex.png";
import CheckBox from "@/assets/checkbox-cyan.png";
import Dash from "@/assets/Dash.png"

const portfolioProjects = [
  {
    year: "2024",
    title: "Travo.go",
    results: [
      { title: "Onboarding increased to 12%." },
      { title: "New user signups increased by 32%." },
      { title: "Engagement increased by 20%." },
    ],
    link: "#",
    image: Travo,
  },
  {
    year: "2024",
    title: "Crypto",
    results: [
      { title: "Transaction speed improved by 50%." },
      { title: "Security breaches reduced to 0%." },
      { title: "User retention increased by 25%." },
    ],
    link: "https://crypto-kappa-blush.vercel.app/",
    image: Crypto,
  },
  {
    year: "2024",
    title: "Innovative Web Solutions",
    results: [
      { title: "Page load speed reduced by 40%." },
      { title: "SEO rankings improved significantly." },
      { title: "Conversion rate increased by 30%." },
    ],
    link: "https://nex-page.vercel.app/",
    image: Nex,
  },
  {
    year: "2024",
    title: "SmartSell",
    results: [
      { title: "Onboarding increased to 12%." },
      { title: "New user signups increased by 32%." },
      { title: "Engagement increased by 20%." },
    ],
    link: "https://dashboard-xi-flame.vercel.app/",
    image: Dashboard,
  },
  {
    year: "2024",
    title: "Luxe",
    results: [
      { title: "Transaction speed improved by 50%." },
      { title: "Security breaches reduced to 0%." },
      { title: "User retention increased by 25%." },
    ],
    link: "#",
    image: Luxe,
  },
  {
    year: "2025",
    title: "DASH",
    results: [
      { title: "Page load speed reduced by 40%." },
      { title: "SEO rankings improved significantly." },
      { title: "Conversion rate increased by 30%." },
    ],
    link: "#",
    image: Dash,
  },
];

export const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  px-4 py-5  md:p-10 bg-black text-white">
      {portfolioProjects.map((project, index) => (
        <div
          key={index}
          className="[perspective:1000px] group h-96 w-full cursor-pointer"
        >
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 z-10 bg-[#111] border border-gray-700 rounded-2xl shadow-lg p-4 flex items-center justify-center">
            <div className="flex flex-col gap-10 h-full">
              <div >
                <h1 className="text-white">{project.title}</h1>
              </div>
              <div className="h-full" >
               <Image
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover w-full h-full"
              />
              </div>
            </div>
              
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 z-20 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-cyan-600 to-gray-900 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <p className="text-xs text-cyan-200 uppercase tracking-widest mb-2">
                  {project.year}
                </p>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {project.results.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Image src={CheckBox} alt="check" width={16} height={16} />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
              >
                <button className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-cyan-400 hover:text-white transition duration-300">
                  Visit ↗
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
