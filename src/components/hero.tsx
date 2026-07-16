'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';
import { KineticText } from '@/components/ui/kinetic-text';
import { MorphingText } from '@/components/ui/morphing-text';

const Hero = () => {
  const morphingTexts = [
    "Developer",
    "Engineer",
    "Innovator",
    "Automation",
    "Problem Solver"
  ];

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden hero-gradient text-white pt-16 pb-8">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[9px] md:text-xs uppercase tracking-[0.4em] font-bold text-primary/80">
            {PROFILE_DATA.title}
          </span>
        </motion.div>

        <div className="flex flex-col items-center select-none text-center w-full">
          <KineticText
            text="FRONT-END"
            className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-[900] leading-none tracking-[-0.05em] uppercase text-white"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-center justify-center w-full -mt-[2vw]"
          >
            <motion.span 
              className="absolute text-[6vw] md:text-[5vw] lg:text-[4rem] font-black text-primary/20 italic z-0 select-none -top-2 md:-top-6"
              animate={{ rotate: [0, 3, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              &
            </motion.span>
            
            <div className="w-full">
              <MorphingText
                texts={morphingTexts}
                className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-[900] leading-none tracking-[-0.05em] uppercase text-white z-10"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 md:mt-8 max-w-2xl text-center"
        >
          <p className="text-[10px] md:text-sm lg:text-base text-white/60 leading-relaxed font-medium px-4 max-w-lg mx-auto">
            {PROFILE_DATA.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 md:mt-12 flex flex-col items-center gap-4"
        >
          <a 
            href="#capabilities" 
            className="group flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all duration-300"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-10 md:h-12 bg-gradient-to-b from-primary to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
