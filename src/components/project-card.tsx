import Link from 'next/link';
import { ArrowUpRight, GitBranch, Globe } from 'lucide-react';

import { Project } from '@/content/projects';
import { Button } from '@/components/ui/button';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-primary/40">
      <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>{project.category}</span>
        {project.featured ? <span className="text-primary">Featured</span> : null}
      </div>

      <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-4 text-base text-muted-foreground">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.title}`} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground">
              <GitBranch className="h-4 w-4" />
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground">
              <Globe className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <Button asChild variant="outline" size="sm">
          <Link href={`/projects/${project.slug}`}>
            View details <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
