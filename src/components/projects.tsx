import Image from 'next/image';
import { PROJECTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import SpotlightCard from '@/components/ui/spotlight-card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const { id, icon, title } = SECTION_MAP.projects;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <SpotlightCard 
            key={project.id} 
            spotlightColor="rgba(132, 0, 255, 0.15)"
            className="flex flex-col h-full"
          >
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="font-headline text-2xl mb-2 text-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground/80">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-background/40 backdrop-blur-sm border-white/5">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 p-6 pt-0">
              {project.versions ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                        <Github className="mr-2 h-4 w-4" /> Code <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {project.versions.map((version) => (
                        <DropdownMenuItem key={version.name} asChild>
                          <a href={version.repoUrl} target="_blank" rel="noopener noreferrer">{version.name}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {project.versions.map((version) => (
                        <DropdownMenuItem key={version.name} asChild>
                           <a href={version.liveUrl} target="_blank" rel="noopener noreferrer">{version.name}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                </>
              )}
            </CardFooter>
          </SpotlightCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
