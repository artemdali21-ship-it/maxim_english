export function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">
          Ready to Transform Your English?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Take the first step toward professional excellence. Schedule your free consultation call today and discover how personalized training can accelerate your career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-primary text-primary-foreground font-bold hover:opacity-90 transition text-lg">
            Schedule Consultation
          </button>
          <button className="px-10 py-4 border-2 border-primary text-primary hover:bg-secondary transition font-bold text-lg">
            Learn More
          </button>
        </div>

        <p className="mt-8 text-muted-foreground text-sm">
          No commitment required. First consultation is completely free.
        </p>
      </div>
    </section>
  );
}
