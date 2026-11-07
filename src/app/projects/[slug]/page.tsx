import Link from 'next/link';
import { ArrowLeft, GitBranch, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { projects } from '@/content';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-shell section-shell">
      <div className="mb-8">
        <Button asChild variant="outline">
          <Link href="/projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to projects</Link>
        </Button>
      </div>

      <article className="card-surface overflow-hidden">
        <div className="border-b border-border bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-transparent p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{project.summary}</p>
        </div>

        <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Project overview</h2>
            <p className="mt-4 text-base text-muted-foreground">{project.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">Key technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">Links</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <GitBranch className="h-4 w-4" /> GitHub
                  </a>
                ) : null}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                    <Globe className="h-4 w-4" /> Live demo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">Project highlights</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Product-focused engineering work</li>
                <li>Cloud and DevOps workflow support</li>
                <li>Modern frontend and backend integration</li>
                <li>Operational improvement and deployment readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
