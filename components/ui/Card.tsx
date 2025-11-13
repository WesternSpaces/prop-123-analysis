import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

export function Card({ title, children, className, highlight = false }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-6',
        highlight
          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200'
          : 'bg-white border border-slate-200 shadow-sm',
        className
      )}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-slate-900">{title}</h3>
      )}
      {children}
    </div>
  );
}
