import { Mail, MapPin } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';
import { profile, socials } from '@/content';

export default function ContactPage() {
  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about infrastructure, automation, or product engineering."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-4">
          <div className="card-surface p-6">
            <div className="mb-3 flex items-center gap-3 text-primary"><Mail size={18} /> <span className="font-medium text-foreground">Email</span></div>
            <a href={`mailto:${socials.email}`} className="text-muted-foreground hover:text-foreground">{socials.email}</a>
          </div>

          <div className="card-surface p-6">
            <div className="mb-3 flex items-center gap-3 text-primary"><MapPin size={18} /> <span className="font-medium text-foreground">Location</span></div>
            <p className="text-muted-foreground">{profile.location}</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
