import { SectionHeading } from '@/components/section-heading';
import { experience } from '@/content';

export default function ExperiencePage() {
  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional background in cloud operations, platform support, and engineering delivery."
      />

      <div className="mt-10 space-y-8">
        {experience.map((item) => (
          <div key={item.company} className="card-surface p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">{item.company}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{item.role}</h3>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>{item.period}</p>
                <p className="mt-1">{item.domain}</p>
              </div>
            </div>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-muted-foreground">
              {item.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
