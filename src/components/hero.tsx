import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-card">
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary tracking-tight">
          {PROFILE_DATA.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-2xl">
          {PROFILE_DATA.title}
        </p>
        <div className="mt-8 flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <Icon className="h-7 w-7" />
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href={PROFILE_DATA.cvUrl} download>
              <Download className="mr-2 h-5 w-5" /> Download CV
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href="#contact">
              Contact Me <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
