import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, title, subtitle, children, className, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'py-16 px-4 sm:px-6 lg:px-8',
        dark ? 'bg-slate-900 text-white' : 'bg-white',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className={clsx(
            'text-3xl md:text-4xl font-bold mb-4',
            dark ? 'text-white' : 'text-slate-900'
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={clsx(
              'text-lg md:text-xl max-w-3xl',
              dark ? 'text-slate-300' : 'text-slate-600'
            )}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
