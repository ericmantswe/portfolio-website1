import { PROFILE_DATA } from '@/lib/data';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      <div className="container min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
        <div className="w-full">
          <h1 className="text-[10vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-foreground/80">
            Front-End
          </h1>
          <div className="flex items-center justify-between">
             <h1 className="text-[10vw] md:text-[12vw] lg:text-[10rem] font-black leading-none tracking-tighter uppercase text-foreground/80">
              Developer
            </h1>
            <p className="max-w-xs text-foreground/80 hidden md:block">
              {PROFILE_DATA.about}
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" aria-label="Scroll to about section" className="uppercase text-sm tracking-widest text-foreground/60">
            Scroll down
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
