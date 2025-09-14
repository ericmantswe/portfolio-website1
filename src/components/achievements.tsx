import { ACHIEVEMENTS, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Achievements = () => {
  const { id, icon, title } = SECTION_MAP.achievements;
  return (
    <SectionWrapper id={id} className="bg-card">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <Card key={index} className="flex items-start p-4 gap-4">
            <div className="p-2 bg-primary/10 text-primary rounded-full">
              <achievement.icon className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold">{achievement.title}</CardTitle>
              <CardDescription className="mt-1">{achievement.description}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
