export function FormatSection() {
  const formats = [
    {
      title: 'One-on-One Sessions',
      description: 'Intensive personalized training with full attention on your progress',
      price: '€60/hour'
    },
    {
      title: 'Group Workshops',
      description: 'Collaborative learning with peers in a dynamic environment',
      price: '€35/person'
    },
    {
      title: 'Corporate Training',
      description: 'Customized programs for your entire team with flexible scheduling',
      price: 'Custom'
    },
  ];

  return (
    <section id="format" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk">
          Training Formats
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((format, idx) => (
            <div key={idx} className="border border-border rounded-lg p-8 hover:border-accent transition flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-3 font-space-grotesk">{format.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{format.description}</p>
              <div className="text-xl font-bold text-accent">{format.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
