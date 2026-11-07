'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/content';

const categories = ['All', ...new Set(projects.map((project) => project.category))];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio of engineering problems, automation workflows, and product work."
      />

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative min-w-0 md:max-w-md md:flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects"
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-foreground outline-none transition focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                selectedCategory === category ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No projects match the current filters.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
