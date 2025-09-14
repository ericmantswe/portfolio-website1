import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Projects from '@/components/projects';
import Achievements from '@/components/achievements';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
