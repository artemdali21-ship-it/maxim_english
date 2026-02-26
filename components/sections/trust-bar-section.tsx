export function TrustBarSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-background border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
          Корпоративные клиенты
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center text-muted-foreground text-sm font-semibold border border-border">
            DHL
          </div>
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center text-muted-foreground text-sm font-semibold border border-border">
            Yandex
          </div>
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center text-muted-foreground text-sm font-semibold border border-border">
            IVI
          </div>
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center text-muted-foreground text-sm font-semibold border border-border">
            Linklaters
          </div>
          <div className="h-12 w-24 bg-secondary rounded flex items-center justify-center text-muted-foreground text-sm font-semibold border border-border">
            FTL
          </div>
        </div>
      </div>
    </section>
  );
}
