import { WORK_EXPERIENCE, SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { id, icon, title } = SECTION_MAP.experience;
  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
        {WORK_EXPERIENCE.map((job, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:gap-8 mb-12 relative">
            <div className={`text-left md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="text-xl font-bold text-primary">{job.role}</h3>
              <p className="font-semibold">{job.company}</p>
              <p className="text-sm text-muted-foreground">{job.period}</p>
            </div>
            <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="hidden md:block absolute top-1.5 -left-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2" />
               <div className="mt-2 md:mt-0 p-4 bg-card rounded-lg shadow-sm border">
                <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
