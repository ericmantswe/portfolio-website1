import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="container min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12 pt-24 pb-12">
        <div className="text-center lg:text-left">
          <p className="text-2xl text-foreground/80 mb-2">Hello.</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            I'm <span className="text-primary">{PROFILE_DATA.name}</span>
          </h1>
          <p className="mt-4 text-4xl md:text-5xl font-bold font-headline text-foreground max-w-lg">
            {PROFILE_DATA.title}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-semibold">
              <a href="#projects">Get a project</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold border-2">
              <a href={PROFILE_DATA.cvUrl} download>
                My resume
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
          <div className="absolute inset-0 rounded-full border-4 border-primary/50" />
          <div className="absolute inset-2 rounded-full border-4 border-primary/30 animate-pulse" />
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          <Image
            src="https://picsum.photos/seed/profile/400/400"
            alt={PROFILE_DATA.name}
            width={400}
            height={400}
            className="rounded-full object-cover w-full h-full p-2"
            data-ai-hint="man developer"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
