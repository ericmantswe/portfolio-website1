import { EDUCATION, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Education = () => {
  const { id, icon, title } = SECTION_MAP.education;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="font-headline text-2xl">{edu.degree}</CardTitle>
              <CardDescription className="text-lg">{edu.institution}</CardDescription>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
