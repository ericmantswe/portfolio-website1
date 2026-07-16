'use client';

import Image from 'next/image';
import { PROJECTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import SpotlightCard from '@/components/ui/spotlight-card';
import CardSwap, { Card } from '@/components/ui/card-swap';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const { id, icon, title } = SECTION_MAP.projects;
  
  return (
    <SectionWrapper id={id} className="relative overflow-hidden min-h-[900px]">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      
      <div className="mt-24 flex justify-center items-center w-full min-h-[600px] relative">
        {/* Abstract background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="relative">
          <CardSwap 
            width={400} 
            height={550} 
            cardDistance={40} 
            verticalDistance={50} 
            delay={4500}
            pauseOnHover={true}
            easing="elastic"
          >
            {PROJECTS.map((project) => (
              <Card key={project.id} className="border-none bg-transparent">
                <SpotlightCard 
                  spotlightColor="rgba(132, 0, 255, 0.2)"
                  className="flex flex-col h-full bg-card/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden rounded-[20px]"
                >
                  <CardHeader className="p-0">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-2xl mb-2 text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground/80 line-clamp-3 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-background/40 backdrop-blur-sm border-white/5 text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-[10px] bg-transparent">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-6 pt-0">
                    {project.versions ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full border-primary/20">
                            View Options <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md">
                          {project.versions.map((version) => (
                            <DropdownMenuItem key={version.name} asChild>
                              <a href={version.liveUrl} target="_blank" rel="noopener noreferrer" className="flex justify-between w-full">
                                {version.name} <ExternalLink className="ml-2 h-3 w-3 opacity-50" />
                              </a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <div className="flex gap-2 w-full">
                        <Button asChild variant="ghost" size="sm" className="flex-1 hover:bg-primary/10">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live
                          </a>
                        </Button>
                      </div>
                    )}
                  </CardFooter>
                </SpotlightCard>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
          Hover to pause • Wait for the swap
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Projects;