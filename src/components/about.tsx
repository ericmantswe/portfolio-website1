import { PROFILE_DATA, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';

const About = () => {
  const { id, icon, title } = SECTION_MAP.about;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <p className="max-w-3xl mx-auto text-center text-lg text-foreground/80 leading-relaxed">
        {PROFILE_DATA.about}
      </p>
    </SectionWrapper>
  );
};

export default About;
