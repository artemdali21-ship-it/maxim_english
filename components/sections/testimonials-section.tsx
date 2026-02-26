export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Elena Kozlov',
      role: 'CEO, Tech Startup',
      quote: 'Maxim transformed my English in just 3 months. My board presentations are now confident and impactful.'
    },
    {
      name: 'Marcus Weber',
      role: 'International Business Manager',
      quote: 'The accent training was incredible. My colleagues now say my English sounds natural and professional.'
    },
    {
      name: 'Sophie Laurent',
      role: 'Marketing Director',
      quote: 'Best investment I\'ve made for my career. Maxim\'s method is practical, engaging, and produces real results.'
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk">
          What My Students Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-secondary p-8 border border-border">
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
