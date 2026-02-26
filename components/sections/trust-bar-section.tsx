export function TrustBarSection() {
  const companies = ['DHL', 'Yandex', 'IVI', 'Linklaters', 'FTL'];

  return (
    <section className="py-12 px-4 md:px-6 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8 font-space-grotesk uppercase tracking-wide">
          Trusted by professionals at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company} className="text-muted-foreground font-medium text-sm">
              [Logo: {company}]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
