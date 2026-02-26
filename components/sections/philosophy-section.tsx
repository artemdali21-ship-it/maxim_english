export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-space-grotesk">
          My Philosophy
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              English is not just a language—it's a gateway to global opportunities. Every student has unique goals and challenges. My approach isn't about memorizing rules; it's about building confidence and mastery through practical, personalized training.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Whether you're preparing for a boardroom presentation, mastering a challenging accent, or advancing your career, I'm committed to delivering measurable results that exceed expectations.
            </p>
          </div>
          <div className="bg-primary-foreground/10 p-8 rounded-lg border border-primary-foreground/20">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent text-xl mt-1">✓</span>
                <span>Personalized curriculum tailored to your goals</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl mt-1">✓</span>
                <span>Expert pronunciation and accent training</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl mt-1">✓</span>
                <span>Business communication focus</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl mt-1">✓</span>
                <span>Regular progress assessment and feedback</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent text-xl mt-1">✓</span>
                <span>Flexible scheduling for busy professionals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
