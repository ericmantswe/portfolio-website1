import type { ComponentProps, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends ComponentProps<'section'> {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
