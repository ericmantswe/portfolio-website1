'use client';

import { PROJECTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import SpotlightCard from '@/components/ui/spotlight-card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  const { id, icon, title } = SECTION_MAP.projects;
  
  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...PROJECTS, ...PROJECTS];

  return (
    <SectionWrapper id={id} className="relative overflow-hidden flex flex-col items-center bg-background">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      
      <div className="mt-12 w-full relative">
        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <SpotlightCard 
                key={`${project.id}-${index}`} 
                className="w-[350px] md:w-[450px] flex-shrink-0 !p-0 border-white/5 bg-card/40 backdrop-blur-sm"
                spotlightColor="rgba(132, 0, 255, 0.1)"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    data-ai-hint={project.imageHint}
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-2">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Live Demo
                      </a>
                    )}
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                      <Github className="w-3 h-3" /> Source Code
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="mt-12 text-center relative z-20">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50">
          Innovative Engineering • Precision Development
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Projects;