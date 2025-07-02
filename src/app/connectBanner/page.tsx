'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from '@/components/ContactModel'

const ConnectBanner = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
    <section
      className="relative flex flex-col items-center justify-center text-center
                 min-h-[80vh] px-6 py-24 bg-black"   
    >
     
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl font-bold text-4xl md:text-7xl text-white tracking-tight"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
           Design. Build. Deliver.  
        </span>
      </motion.h1>
       <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="mt-10 flex items-center gap-4 rounded-full border border-white/20
                   bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 
                   md:px-12 py-3 text-white text-base font-semibold transition"
      >
        Let’s Talk
        <span className="grid place-items-center h-6
         md:h-9 w-9 rounded-full bg-white text-black">
          →
        </span>
      </motion.button>

      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-2xl text-base md:text-lg text-white/70"
      >
        From planning to deployment, I specialize in building complete digital products that users love and teams can grow on.
      </motion.p>

     
     
    </section>
     {open && <ContactModal onClose={() => setOpen(false)} />}
      </>
  )
}

export default ConnectBanner
