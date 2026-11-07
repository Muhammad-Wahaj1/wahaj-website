import Link from 'next/link';
import { ArrowRight, Download, GitBranch, Link2, MapPin } from 'lucide-react';

import { profile, socials } from '@/content';
import { Button } from '@/components/ui/button';

export function HomeHero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Hi, I&apos;m <span className="text-primary">Muhammad Wahaj.</span>
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium text-muted-foreground md:text-2xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/#projects">
                Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={socials.resume} target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <a href={`mailto:${socials.email}`} className="hover:text-foreground">Contact Me</a>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2 hover:text-foreground">
              <GitBranch className="h-4 w-4" />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border p-2 hover:text-foreground">
              <Link2 className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="relative rounded-3xl border border-border bg-card/60 p-4 shadow-soft">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">terminal</span>
          </div>

          <div className="rounded-2xl border border-border bg-slate-950 p-5 font-mono text-sm text-slate-100">
            <p className="text-sky-300">$ whoami</p>
            <p className="mt-2 text-slate-200">Muhammad Wahaj</p>
            <p className="mt-4 text-emerald-300">$ cloud --stack</p>
            <p className="mt-2 text-slate-200">AWS, Azure, Terraform, Docker, CI/CD</p>
            <p className="mt-4 text-violet-300">$ deploy --status</p>
            <p className="mt-2 text-slate-200">Production-ready workflows + automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
