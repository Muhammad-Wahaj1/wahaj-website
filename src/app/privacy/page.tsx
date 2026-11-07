import { SectionHeading } from '@/components/section-heading';

export default function PrivacyPage() {
  return (
    <div className="container-shell section-shell">
      <SectionHeading
        eyebrow="Privacy"
        title="Privacy policy"
        description="This portfolio uses contact data only for the purpose of responding to inquiries made through the site."
      />

      <div className="mt-10 space-y-5 text-base text-muted-foreground">
        <p>Messages submitted through the contact form are processed only to respond to your inquiry and may be routed to the configured contact email address.</p>
        <p>Analytics, tracking, or third-party account integrations are not added without explicit intent and documentation.</p>
        <p>Environment variables and credentials are kept server-side and never exposed in frontend code.</p>
      </div>
    </div>
  );
}
