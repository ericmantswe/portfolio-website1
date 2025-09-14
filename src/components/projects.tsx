import Image from 'next/image';
import { PROJECTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { id, icon, title } = SECTION_MAP.projects;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-secondary border-border">
            <CardHeader>
              <div className="aspect-video relative overflow-hidden rounded-md">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-background/50">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button asChild variant="ghost" size="sm">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-foreground/50 hover:bg-foreground hover:text-background">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
