'use client';

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight font-space-grotesk">
            Master English Like a Professional
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Transform your pronunciation, perfect your business communication, and unlock new professional opportunities with personalized English training from an expert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Start Your Journey
            </button>
            <button className="px-8 py-3 border border-primary text-primary hover:bg-secondary transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center text-muted-foreground">
          [Hero Image - Coming Soon]
        </div>
      </div>
    </section>
  );
}
