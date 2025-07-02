'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase } from 'lucide-react'


type ExperienceItem = {
  company: string
  role: string
  location: string
  remote: boolean
  time: string
  highlights: string[]
  skills?: string[]
}

export default function ExperienceCard({
  experience,
  
}: {
  experience: ExperienceItem

}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative grid grid-cols-12 gap-5 md:gap-10"
    >
      {/* Left Meta Column */}
      <div className="col-span-12 md:col-span-4 flex flex-col  sm:px-6  md:px-0 space-y-2 text-white/80">
        <p className="text-sm uppercase tracking-wider text-cyan-400">
          {experience.time}
        </p>

        <h3 className=" text-xl md:text-2xl font-semibold text-white">{experience.company}</h3>

        <div className="flex items-center gap-2 text-sm text-white/60">
          <MapPin className="h-4 w-4" />
          {experience.location}
        </div>

        {experience.remote && (
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Briefcase className="h-4 w-4" />
            Remote-friendly
          </div>
        )}
      </div>

      {/* Timeline */}
     

      {/* Right Content Card */}
      <div
        className="col-span-11 md:col-span-7 rounded-xl ps-6 pe-o 
                   md:px-6 py-5  transition duration-300
                   hover:scale-[1.01]"
      >
        <h4 className=" text-lg md:text-xl font-bold text-white mb-3">{experience.role}</h4>

        <ul className="list-disc list-inside space-y-2 text-white/70 text-xs md:text-sm">
          {experience.highlights.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>

        {/* Skills */}
        {experience.skills && (
          <div className="mt-5 flex flex-wrap gap-3">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-full border border-white/20 bg-white/10 px-1.5 md:px-3 py-1  text-xs md:text-xs
                           text-white hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
