import { SKILLS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const { id, icon, title } = SECTION_MAP.skills;
  return (
    <SectionWrapper id={id} className="bg-card">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="bg-background/50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold font-headline text-primary mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
