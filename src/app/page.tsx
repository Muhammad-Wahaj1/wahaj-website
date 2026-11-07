import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { HomeHero } from '@/components/home-hero';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { TerminalDemo } from '@/components/terminal-demo';
import { Button } from '@/components/ui/button';
import { certifications } from '@/content/certifications';
import { experience } from '@/content/experience';
import { featuredProjects } from '@/content/projects';
import { skillCategories } from '@/content/skills';
import { socials } from '@/content/socials';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section id="about" className="section-shell">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Quick introduction"
            title="Cloud infrastructure, automation, and modern engineering foundations."
            description="I focus on reliable systems, automation-first delivery, and cloud operations that support real business needs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              'Cloud infrastructure and operational support',
              'Infrastructure as Code and repeatable deployments',
              'Full-stack development with DevOps delivery workflows'
            ].map((point) => (
              <div key={point} className="card-surface p-6 text-base text-muted-foreground">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell border-t border-border/60">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Technology highlights"
            title="Tools and systems I use to ship dependable engineering work."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.title} className="card-surface p-6">
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{category.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell border-t border-border/60">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured projects"
              title="Selected work across security, automation, and product engineering."
            />
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell border-t border-border/60">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Professional experience"
            title="Experience built around cloud operations, platform support, and delivery."
          />

          <div className="mt-10 space-y-6">
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
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/experience">
                View experience timeline <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="certifications" className="section-shell border-t border-border/60">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Certifications"
            title="Relevant Microsoft credentials and technical learning milestones."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-surface p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">{cert.issuer}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{cert.name}</h3>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                    {cert.badge}
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">Issued: {cert.date}</p>
                {cert.credentialUrl ? (
                  <Button asChild variant="secondary" className="mt-6">
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer">Verify credential</a>
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell border-t border-border/60">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Have a project, opportunity, or just want to connect?"
                description="I’m open to cloud, DevOps, and engineering conversations across infrastructure, automation, and sustainable software delivery."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={socials.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/60 p-4 shadow-soft">
              <TerminalDemo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
