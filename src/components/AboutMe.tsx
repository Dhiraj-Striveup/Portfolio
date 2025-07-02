
"use client";
import React from 'react'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const AboutMe = () => {
     const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
      <section ref={ref} className="relative text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 lg:px-16 text-center max-w-3xl m-10"
        >
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm md:text-lg mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About Me
          </motion.p>

          <motion.h2
  className="  text-2xl md:text-4xl font-bold mt-4"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  Greetings, I&apos;m{" "}
  <span className="text-cyan-500">
    Dhiraj{" "}
    <motion.span
      animate={{ rotate: [0, 10, 0, -10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="inline-block"
    >
      👋
    </motion.span>
  </span>
</motion.h2>


          <motion.p
            className="text-gray-300 mt-6 text-sm md:text-lg leading-[2rem] max-w-[34rem] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Aa ffhfhfhfh passionate <strong>Developer</strong>  with over <strong>10+ years of experience</strong> building high-performance web applications using <strong>PHP</strong>, <strong>WordPress</strong>, <strong>Laravel</strong>, and <strong>.NET</strong>. I specialize in creating scalable, secure, and user-centric solutions—from dynamic CMS platforms and API integrations to enterprise-grade systems.
          </motion.p>

          <motion.p
            className="text-gray-400 mt-4 text-sm md:text-lg max-w-[34rem] mx-auto leading-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I’m dedicated to writing clean, maintainable code and staying current with emerging technologies. Outside of work, I contribute to open-source projects, explore new development tools, and keep pace with evolving tech trends.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#155e75" }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className=" px-3 py-1.5 md:px-6 md:py-3  bg-cyan-600 transition-all rounded-lg shadow-lg"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#0891b2", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className=" px-3 py-1.5 md:px-6 md:py-3 border border-cyan-500 text-cyan-400 transition-all rounded-lg shadow-lg"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
  )
}

export default AboutMe
