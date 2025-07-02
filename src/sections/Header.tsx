'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/D-logo.png';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Skills',   href: '/skills' },
  { name: 'Service',  href: '/service' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact',  href: '/contact' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close  = () => setOpen(false);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`px-4 py-2 text-sm rounded-full transition ${
            link.name === 'Contact'
              ? 'bg-white text-black'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      
      <header className="fixed top-3 w-full z-30 flex justify-center">
        <nav
          className="flex items-center gap-4 px-4  w-full mx-4
                      backdrop-blur-sm
                     rounded-full md:max-w-4xl"
        >
          
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="logo" width={40} height={40} priority />
          </Link>

          
          <div className="hidden md:flex gap-2 ml-auto">
            <NavLinks />
          </div>

          
          <button
            aria-label="Toggle menu"
            className="md:hidden ml-auto text-white p-2"
            onClick={toggle}
          >
            {open ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
          
        </nav>
      </header>

      
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.nav
              className="fixed top-0 right-0 z-20 w-64 h-full bg-[#111] p-6
                         flex flex-col gap-4 pt-24"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <NavLinks onClick={close} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
