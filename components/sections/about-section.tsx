export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">
              About Maxim
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience teaching English to professionals, Maxim specializes in pronunciation training and business communication. His students include executives from Fortune 500 companies and renowned international organizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maxim's unique methodology combines linguistic expertise with practical business insights, ensuring every lesson translates directly to real-world impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-secondary p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="bg-secondary p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="bg-secondary p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">40+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-lg aspect-video flex items-center justify-center text-muted-foreground">
          [About Photo - Coming Soon]
        </div>
      </div>
    </section>
  );
}
