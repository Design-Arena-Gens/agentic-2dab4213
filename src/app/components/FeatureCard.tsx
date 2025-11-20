import type { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function FeatureCard({ title, icon, children }: FeatureCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-gyros-blue/10 bg-white/90 p-6 shadow-xl shadow-gyros-blue/10 backdrop-blur">
      <div className="flex items-center gap-3 text-gyros-clay">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-semibold text-gyros-blue">{title}</h3>
      </div>
      <p className="text-base text-gyros-blue/80">{children}</p>
    </article>
  );
}
