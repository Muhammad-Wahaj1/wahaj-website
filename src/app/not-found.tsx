import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="container-shell section-shell">
      <div className="card-surface mx-auto max-w-2xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">This page isn’t here.</h1>
        <p className="mt-4 text-base text-muted-foreground">The content you’re looking for may have moved or may not exist.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">View projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
