import { BookOpenText, Briefcase, Download, GitBranch, GraduationCap, Link2 } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { profile, socials } from '@/content';

export default function AboutPage() {
  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="About"
        title="Cloud-first engineer with a practical background in automation, operations, and full-stack development."
        description={profile.bio}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="card-surface flex min-h-[360px] items-center justify-center p-8">
          <div className="flex h-52 w-52 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-sky-500/20 via-sky-200/10 to-violet-500/20 text-4xl font-semibold text-foreground">
            MW
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-surface p-6">
            <p className="text-lg text-muted-foreground">{profile.summary}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-surface p-6">
              <div className="mb-4 flex items-center gap-3 text-primary"><Briefcase size={18} /> <span className="font-medium text-foreground">Focus areas</span></div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cloud infrastructure</li>
                <li>DevOps automation</li>
                <li>CI/CD and release management</li>
                <li>Infrastructure as code</li>
                <li>Cloud operations</li>
                <li>Full-stack development</li>
              </ul>
            </div>

            <div className="card-surface p-6">
              <div className="mb-4 flex items-center gap-3 text-primary"><GitBranch size={18} /> <span className="font-medium text-foreground">Engineering approach</span></div>
              <p className="text-sm text-muted-foreground">I prefer resilient systems, maintainable automation, and clear operational practices that keep teams responsive under pressure.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-6">
          <div className="mb-4 flex items-center gap-3 text-primary"><GraduationCap size={18} /> <span className="font-medium text-foreground">Education</span></div>
          <h3 className="text-xl font-semibold text-foreground">{profile.education.institution}</h3>
          <p className="mt-3 text-muted-foreground">{profile.education.degree}</p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.education.dates}</p>
          <p className="mt-2 text-sm text-muted-foreground">CGPA: {profile.education.cgpa}</p>
        </div>

        <div className="card-surface p-6">
          <div className="mb-4 flex items-center gap-3 text-primary"><BookOpenText size={18} /> <span className="font-medium text-foreground">Professional links</span></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={socials.resume} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4" /> Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href={socials.linkedin} target="_blank" rel="noreferrer"><Link2 className="mr-2 h-4 w-4" /> LinkedIn</a>
            </Button>
            <Button asChild variant="outline">
              <a href={socials.github} target="_blank" rel="noreferrer"><GitBranch className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
