'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="container min-h-screen flex flex-col items-center justify-center text-center md:text-left pt-24 pb-12">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[20vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-foreground/80"
          >
            Front-End
          </motion.h1>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
             <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-[20vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-foreground from-70% to-primary"
             >
              Developer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="max-w-xs text-foreground/80 mt-4 md:mt-0 hidden md:block"
            >
              {PROFILE_DATA.about}
            </motion.p>
          </div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-xl text-foreground/80 mt-8 md:hidden text-center"
        >
          {PROFILE_DATA.about}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll to about section" className="uppercase text-sm tracking-widest text-foreground/60">
            Scroll down
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
