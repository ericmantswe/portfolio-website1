import Image from 'next/image';
import { PROFILE_DATA, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';

const About = () => {
  const { id, icon, title } = SECTION_MAP.about;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <Image
            src="https://picsum.photos/seed/profile/400/400"
            alt={PROFILE_DATA.name}
            fill
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            data-ai-hint="profile picture"
          />
        </div>
        <p className="max-w-xl text-center md:text-left text-lg text-foreground/80 leading-relaxed">
          {PROFILE_DATA.about}
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
