"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import image from "@/assets/Portfolio-img.jpg";
import { Typewriter } from "react-simple-typewriter";


export const HeroSection = () => {
  return (
    <div className="py-10 sm:mt-24  mt-10 md:py-12 lg:py-28 relative">
       <div className="container mx-auto">
      <motion.div
      />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
         <div className=" sm:w-[84px] sm:h-[84px]  md:w-[130px] md:h-[130px] rounded-full overflow-hidden">
  <Image 
    src={image}
    alt="Profile"
    width={100}
    height={100}
    className="object-cover w-full h-full"
  />
</div>


          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
           <motion.div
      className="w-2.5 h-2.5 rounded-full bg-cyan-500"
      animate={{
        boxShadow: [
          '0 0 5px #0891b2',  
          '0 0 12px #06b6d4',
          '0 0 3px#0891b2'
        ],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-md font-medium sm:text-xs"
            >
              Open to new opportunities
            </motion.div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" sm:max-w-[16rem] md:max-w-[34rem] mx-auto text-center"
        >
          <h1 className="font-sans text-2xl leading-[38px] md:leading-[50px] sm:mt-4 md:mt-8 tracking-wide  md:text-5xl">
             <Typewriter
                      words={[" Crafting Solutions That Speak for You"]}
                      loop={false}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={30}
                      delaySpeed={5000}
                    />
           
          </h1>
          

          
          <p className=" sm:mt-2 md:mt-4 text-white/60 md:text-xl sm:text-sm">
           I transform static designs into sleek, high-performing web experiences. Let&apos;s collaborate and bring your vision to life.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center sm:mt-4 sm:gap-4  mt-8 gap-4"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center border-white/15 px-6 h-12 rounded-xl"
            >
              <span className="font-semibold sm:text-sm text-md">Explore My Work</span>
            </motion.button>
          </Link>

           <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border  border-white bg-transparent shadow-md hover:border-cyan-500 hover:shadow-cyan-400 px-6 h-12 rounded-xl  "
            >
             
              <motion.span
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                👋
              </motion.span>
              <span className="font-semibold text-white cursor-pointer sm:text-sm text-md">Let&apos;s Collaborate</span>
            </motion.button>
          </Link> 

        </motion.div>
      </div>
    </div>
  );
};
