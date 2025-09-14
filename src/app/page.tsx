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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
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
