import { Card } from "@/components/Card";


export default function ProjectsSection() {
    return (
        <>
       
        <div className="container mt-36 text-white ">
        <div className="text-center">
          <p className="text-cyan-400 tracking-widest font-semibold uppercase">
            My Work
          </p>
          <h2 className=" text-2xl md:text-4xl font-sans mt-4">Featured Project</h2>
          <p className="text-gray-400 mt-2">
            See how I transformed concepts into engaging digital experiences.
          </p>
        </div>
        <Card />
      </div>
     
        </>
      
    );
  }
  