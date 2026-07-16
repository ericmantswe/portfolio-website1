'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';
import { KineticText } from '@/components/ui/kinetic-text';
import { MorphingText } from '@/components/ui/morphing-text';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const Hero = () => {
  const morphingTexts = [
    "Developer",
    "Engineer",
    "Innovator",
    "Automation",
    "Problem Solver"
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient text-white pt-20 pb-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-primary/80">
            {PROFILE_DATA.title}
          </span>
        </motion.div>

        <div className="flex flex-col items-center select-none text-center w-full max-w-5xl mx-auto">
          <KineticText
            text="FRONT-END"
            className="text-[12vw] md:text-[10vw] lg:text-[7.5rem] font-[900] leading-[0.8] tracking-[-0.05em] uppercase text-white mb-4"
          />
          
          <div className="relative w-full flex flex-col items-center justify-center min-h-[1.5em] md:min-h-[1.2em]">
            <motion.span 
              className="absolute text-[20vw] md:text-[15vw] lg:text-[12rem] font-black text-primary/5 italic z-0 select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              &
            </motion.span>
            
            <MorphingText
              texts={morphingTexts}
              className="text-[12vw] md:text-[10vw] lg:text-[7.5rem] font-[900] leading-[1] tracking-[-0.05em] uppercase text-white z-10"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 max-w-2xl text-center"
        >
          <p className="text-xs md:text-sm lg:text-base text-white/60 leading-relaxed font-medium px-4 max-w-lg mx-auto">
            {PROFILE_DATA.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 md:mt-24 flex flex-col items-center gap-4"
        >
          <a 
            href="#capabilities" 
            className="group flex flex-col items-center gap-2 text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all duration-300"
          >
            Explore Portfolio
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 md:h-16 bg-gradient-to-b from-primary to-transparent"
            />
          </a>
        </motion.div>
      </div>

      <ProgressiveBlur position="bottom" height="15%" intensity={10} className="bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
