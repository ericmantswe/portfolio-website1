import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import MotionWrapper from '@/components/motion-wrapper';
import MagicBento from '@/components/magic-bento';
import SectionWrapper from '@/components/section-wrapper';
import SectionTitle from '@/components/section-title';
import { Sparkles } from 'lucide-react';
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-velocity';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={1.5} direction={1} className="text-primary/20">
            Mechatronics • Web Development • Innovation •
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={1.5} direction={-1} className="text-primary">
            Engineering • Robotics • Automation • Strategy •
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        <MotionWrapper>
          <SectionWrapper id="capabilities" className="bg-background">
            <SectionTitle icon={Sparkles}>Core Capabilities</SectionTitle>
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </SectionWrapper>
        </MotionWrapper>

        <MotionWrapper>
          <About />
        </MotionWrapper>
        
        <MotionWrapper>
          <Experience />
        </MotionWrapper>
        
        <MotionWrapper>
          <Projects />
        </MotionWrapper>
        
        <MotionWrapper>
          <Skills />
        </MotionWrapper>
        
        <MotionWrapper>
          <Education />
        </MotionWrapper>
        
        <MotionWrapper>
          <Contact />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
