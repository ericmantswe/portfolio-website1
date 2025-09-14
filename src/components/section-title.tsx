import type { ComponentProps, ElementType, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends ComponentProps<'h2'> {
  children: ReactNode;
  icon?: ElementType;
}

const SectionTitle: FC<SectionTitleProps> = ({ children, icon: Icon, className, ...props }) => {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h2
        className={cn(
          'font-headline text-4xl md:text-5xl font-bold text-primary flex items-center gap-4',
          className
        )}
        {...props}
      >
        {Icon && <Icon className="w-10 h-10" />}
        {children}
      </h2>
      <div className="mt-4 w-24 h-1 bg-primary/20 rounded-full" />
    </div>
  );
};

export default SectionTitle;
