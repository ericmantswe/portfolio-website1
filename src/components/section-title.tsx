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
          'text-5xl md:text-6xl font-black text-foreground uppercase tracking-tighter',
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
