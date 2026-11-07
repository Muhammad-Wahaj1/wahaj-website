import { SectionHeading } from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { certifications } from '@/content';

export default function CertificationsPage() {
  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Microsoft credentials and technical milestones relevant to cloud engineering and operations."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.name} className="card-surface p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">{cert.issuer}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{cert.name}</h3>
              </div>
              <span className="rounded-xl border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{cert.badge}</span>
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
  );
}
