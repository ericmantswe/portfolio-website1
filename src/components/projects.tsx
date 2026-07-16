
'use client';

import { PROJECTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import CarouselPortfolio, { type CarouselPortfolioItem } from '@/components/ui/carousel-portfolio';
import { Circle, Code, FileText, Layers, Layout } from 'lucide-react';

const iconMap = [FileText, Layers, Layout, Circle, Code];

const Projects = () => {
  const { id, icon, title } = SECTION_MAP.projects;
  
  const carouselItems: CarouselPortfolioItem[] = PROJECTS.map((project, index) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    imageUrl: project.imageUrl,
    imageHint: project.imageHint,
    icon: iconMap[index % iconMap.length],
  }));

  return (
    <SectionWrapper id={id} className="relative overflow-hidden flex flex-col items-center">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      
      <div className="mt-12 mb-12 flex justify-center items-center w-full min-h-[500px] relative px-4">
        {/* Abstract background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <CarouselPortfolio 
          items={carouselItems} 
          baseWidth={400} 
          autoplay={true} 
          autoplayDelay={5000}
          loop={true}
        />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Drag or swipe to explore • Swipe for details
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
