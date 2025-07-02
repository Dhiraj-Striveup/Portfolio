"use client"
import TestimonialCarousel from '@/components/TestimonialCrousel'
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const page = () => {
  return (
   <>
     <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-center max-w-[18rem] mx-auto md:max-w-full  text-2xl md:text-4xl font-bold text-white mb-10">
          <span className="block text-sm text-gray-400 uppercase mb-2">Testimonials</span> 
           <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent italic">
        <Typewriter
          words={["Trusted by teams, backed by experience"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={30}
          delaySpeed={3000}
        />
      </span>
        </h2>
        </div>
       
         <TestimonialCarousel/>
   
    </>
    
  
  )
}

export default page