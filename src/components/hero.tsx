'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="container min-h-screen flex flex-col items-center justify-center pt-12 pb-12">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[10vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-foreground/80"
          >
            Front-End
          </motion.h1>
          <div className="flex items-center justify-between">
             <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                className="text-[10vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-foreground from-70% to-primary"
             >
              Developer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="max-w-xs text-foreground/80 hidden md:block"
            >
              {PROFILE_DATA.about}
            </motion.p>
          </div>
        </div>
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
