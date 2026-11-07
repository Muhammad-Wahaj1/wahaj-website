import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { profile, socials } from '@/content';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#contact', label: 'Contact' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">MW</span>
          <span>{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href={socials.resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
