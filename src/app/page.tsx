
import { HeroSection } from "@/sections/HeroSection";
import ProjectsSection from "./projects/page";
import AboutMe from "./about/page";
import ConnectBanner from "./connectBanner/page";
import Skills from "./skills/page";
import ExperienceSection from "./experienceSection/page";
import Testimonial from "./testimonail/page";
import ServicesPage from "./service/page";




export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      
       <AboutMe/>
      <Skills/>
      <ExperienceSection/>
      <ServicesPage/>
      <Testimonial/>
      <ProjectsSection/>
      <ConnectBanner/>
      
    </div>
  );
}
