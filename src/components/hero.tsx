'use client';

import { motion } from 'framer-motion';
import { PROFILE_DATA } from '@/lib/data';
import { KineticText } from '@/components/ui/kinetic-text';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient text-white pt-24 pb-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-primary/80">
            {PROFILE_DATA.title}
          </span>
        </motion.div>

        <div className="flex flex-col items-center select-none text-center">
          <KineticText
            text="Front-End"
            className="text-[12vw] md:text-[10vw] lg:text-[9rem] font-[900] leading-[0.85] tracking-[-0.05em] uppercase text-white"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center -mt-[1vw]"
          >
            <motion.span 
              className="absolute text-[6vw] md:text-[5vw] lg:text-[4rem] font-black text-primary/30 italic z-0 select-none"
              animate={{ rotate: [0, 3, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              &
            </motion.span>
            <KineticText
              text="Developer"
              delay={0.4}
              className="text-[12vw] md:text-[10vw] lg:text-[9rem] font-[900] leading-[0.85] tracking-[-0.05em] uppercase text-white z-10"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-2xl text-center"
        >
          <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed font-medium px-4">
            {PROFILE_DATA.about}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <a 
            href="#about" 
            className="group flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all duration-300"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
