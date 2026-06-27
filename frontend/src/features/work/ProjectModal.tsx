import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import type { Project } from './projects';

interface Props {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Lock body scroll while open; Escape closes lightbox first, then the modal.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setLightbox((current) => {
        if (current) return null;
        onClose();
        return null;
      });
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0C0C0C] border border-[#1A1A1A] my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Затвори"
          className="absolute top-4 right-4 z-10 text-foreground/60 hover:text-primary transition-colors"
        >
          <FiX size={26} />
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 bg-[rgba(90,158,114,0.10)] text-primary shrink-0">
              <project.icon size={18} />
            </span>
            <p className="uppercase text-primary text-[12px] tracking-[0.25em]">{project.category}</p>
          </div>

          <h3 className="mt-5 font-bold text-foreground leading-[1.15] text-[clamp(24px,4vw,34px)]">
            {project.title}
          </h3>

          <div className="mt-6 flex flex-col gap-5">
            <div>
              <p className="uppercase text-foreground/40 text-[11px] tracking-[0.25em] mb-1.5">Проблем</p>
              <p className="text-[15px] leading-[1.75] text-[#9A9A9A]">{project.problem}</p>
            </div>
            <div>
              <p className="uppercase text-foreground/40 text-[11px] tracking-[0.25em] mb-1.5">Решение</p>
              <p className="text-[15px] leading-[1.75] text-[#9A9A9A]">{project.solution}</p>
            </div>
            <div>
              <p className="uppercase text-foreground/40 text-[11px] tracking-[0.25em] mb-1.5">Резултат</p>
              <p className="text-[15px] leading-[1.75] text-[#9A9A9A]">{project.result}</p>
            </div>
          </div>

          {project.images.length > 0 && (
            <div className="mt-8">
              <p className="uppercase text-foreground/40 text-[11px] tracking-[0.25em] mb-3">Екрани</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightbox(src)}
                    className="group block overflow-hidden border border-[#1A1A1A] cursor-pointer"
                    aria-label={`Отвори екран ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} - екран ${i + 1}`}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation();
            setLightbox(null);
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Затвори"
            className="absolute top-5 right-5 text-foreground/70 hover:text-primary transition-colors"
          >
            <FiX size={30} />
          </button>
          <img
            src={lightbox}
            alt="Уголемен екран"
            className="max-w-full max-h-[90vh] object-contain border border-[#222222]"
          />
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
