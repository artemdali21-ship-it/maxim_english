export function IdiomSection() {
  return (
    <section id="idiom" className="py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 font-space-grotesk">
          Idiom of the Week
        </h2>
        
        <div className="bg-background p-8 md:p-12 border border-border rounded-lg">
          <div className="mb-6">
            <p className="text-accent font-space-grotesk font-bold text-sm uppercase tracking-wide mb-2">Featured Expression</p>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">
              "Hit the Ground Running"
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              To start something with great energy and enthusiasm, beginning immediately with effectiveness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-primary mb-2">Example Usage:</p>
              <p className="text-muted-foreground italic">
                "In my new role, I wanted to hit the ground running, so I prepared thoroughly before my first day."
              </p>
            </div>
            <div>
              <p className="font-bold text-primary mb-2">Context:</p>
              <p className="text-muted-foreground">
                Commonly used in business and professional settings when discussing starting new projects or roles effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
