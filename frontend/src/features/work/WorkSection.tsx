import { useState } from 'react';

import Reveal from '@/components/Reveal';
import { PROJECTS, type Project } from './projects';
import ProjectModal from './ProjectModal';

function WorkSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 uppercase text-primary text-[13px] tracking-[0.3em]">
            <span className="inline-block w-0.5 h-3.5 bg-current" />
            Нашата работа
          </p>
          <h2 className="mt-5 font-bold text-foreground leading-[1.1] text-[clamp(32px,5vw,52px)]">
            Избрани проекти.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#777777]">
            Реални решения, изградени за конкретни бизнес проблеми. Натиснете върху проект за детайли.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 120}>
              <button
                onClick={() => setActive(project)}
                className="group w-full h-full text-left border border-[#1A1A1A] bg-[#0F0F0F] transition-colors duration-300 hover:border-secondary cursor-pointer overflow-hidden"
              >
                {/* Visual */}
                {project.images.length > 0 ? (
                  <div className="overflow-hidden border-b border-[#1A1A1A]">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] border-b border-[#1A1A1A] bg-[#0C0C0C] flex items-center justify-center">
                    <project.icon size={48} className="text-primary/30" />
                    {project.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] uppercase tracking-[0.15em] text-foreground/50 border border-[#222222] bg-[#0F0F0F]">
                        {project.badge}
                      </span>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className="p-7">
                  <p className="uppercase text-primary text-[12px] tracking-[0.25em]">{project.category}</p>
                  <h3 className="mt-3 text-foreground font-semibold text-[20px] leading-[1.25]">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.65] text-[#777777]">{project.tagline}</p>
                  <span className="mt-4 inline-block text-[13px] text-foreground/60 group-hover:text-primary transition-colors">
                    Виж проекта →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export default WorkSection;
