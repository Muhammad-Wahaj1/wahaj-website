import Link from 'next/link';

import { socials } from '@/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">Muhammad Wahaj</p>
          <p className="mt-2 text-sm text-muted-foreground">Cloud & DevOps Engineer</p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p><Link href="/about" className="hover:text-foreground">About</Link></p>
          <p><Link href="/projects" className="hover:text-foreground">Projects</Link></p>
          <p><Link href="/contact" className="hover:text-foreground">Contact</Link></p>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p><a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a></p>
          <p><a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></p>
          <p><a href={socials.resume} target="_blank" rel="noreferrer" className="hover:text-foreground">Resume</a></p>
        </div>
      </div>
    </footer>
  );
}
