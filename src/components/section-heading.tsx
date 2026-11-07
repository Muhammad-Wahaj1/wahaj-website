type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-primary/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
