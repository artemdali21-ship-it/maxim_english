export function MethodSection() {
  const methods = [
    {
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current level, goals, and learning style'
    },
    {
      title: 'Strategy',
      description: 'Custom learning plan designed specifically for your needs'
    },
    {
      title: 'Practice',
      description: 'Interactive exercises, real-world scenarios, and continuous feedback'
    },
    {
      title: 'Mastery',
      description: 'Achieve your goals with proven techniques and consistent support'
    },
  ];

  return (
    <section id="method" className="py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk">
          The Training Method
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {methods.map((method, idx) => (
            <div key={idx} className="bg-background p-8 text-center border border-border">
              <div className="text-4xl font-bold text-accent mb-4 font-space-grotesk">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
              <p className="text-muted-foreground text-sm">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
