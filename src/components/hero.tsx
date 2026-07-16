'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient text-white pt-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-primary/60">
            {PROFILE_DATA.title}
          </span>
        </motion.div>

        <div className="flex flex-col items-center select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[18vw] md:text-[14vw] lg:text-[12rem] font-[900] leading-[0.8] tracking-[-0.05em] uppercase text-white"
          >
            Front-End
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center -mt-[2vw]"
          >
            <motion.span 
              className="absolute text-[8vw] md:text-[6vw] lg:text-[5rem] font-black text-primary/20 italic z-0 select-none"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              &
            </motion.span>
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[12rem] font-[900] leading-[0.8] tracking-[-0.05em] uppercase text-white z-10">
              Developer
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl text-center"
        >
          <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">
            {PROFILE_DATA.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <a 
            href="#about" 
            className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
