import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gyros-olive">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-4xl font-semibold text-gyros-blue sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gyros-blue/80">
          {description}
        </p>
      )}
    </header>
  );
}
