'use client';

import Image from 'next/image';
import { PROFILE_DATA, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import { motion } from 'framer-motion';

const About = () => {
  const { id } = SECTION_MAP.about;
  
  return (
    <SectionWrapper id={id} className="bg-background relative overflow-hidden">
      {/* Magazine Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[40rem] font-black absolute -top-40 -right-20 leading-none">
          ME
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-primary/10 pb-6 mb-12 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/60 mb-2">Issue No. 01 • Portfolio Edition</span>
            <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter leading-none">
              The <span className="text-primary/20">Biography</span>
            </h2>
          </motion.div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] uppercase tracking-widest font-black block">Est. 2023</span>
            <span className="text-[10px] uppercase tracking-widest font-black text-primary/40">Gaborone, Botswana</span>
          </div>
        </div>

        {/* Magazine Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image & Caption */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto lg:mx-0 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <Image
                src="https://i.postimg.cc/85K5y8BP/Eric-Profile.jpg"
                alt={PROFILE_DATA.name}
                fill
                className="object-cover"
                data-ai-hint="portrait photo"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mb-1">Subject 01</p>
                <h3 className="text-lg font-black uppercase tracking-tight">{PROFILE_DATA.name}</h3>
              </div>
            </div>
            <div className="border-l-2 border-primary/20 pl-6 italic text-xs text-muted-foreground leading-relaxed max-w-[420px]">
              "Technology is the ultimate lever for community-driven innovation and industrial excellence."
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The Main Copy */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                  {PROFILE_DATA.about}
                </p>
              </div>
            </motion.div>

            {/* Pull Quote Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-8 md:p-12 rounded-3xl relative overflow-hidden group"
            >
              <span className="absolute -top-6 -left-2 text-9xl text-primary/10 font-black pointer-events-none group-hover:scale-110 transition-transform duration-500">"</span>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight relative z-10">
                Highly adaptable with a strong <span className="text-primary underline decoration-2 underline-offset-8">problem-solving mindset</span> and a passion for technology-driven innovation.
              </p>
            </motion.div>

            {/* Sub-features grid */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-black text-primary">Focus Area</span>
                <p className="text-sm font-bold uppercase leading-tight">Industrial Automation & Instrumentation</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-black text-primary">Philosophy</span>
                <p className="text-sm font-bold uppercase leading-tight">Practical solutions for real-world business needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
