export function ForWhomSection() {
  const audiences = [
    {
      title: 'Professionals',
      description: 'Executives, managers, and business professionals seeking competitive advantage',
      icon: '💼'
    },
    {
      title: 'Career Seekers',
      description: 'Job candidates aiming to improve their English for international opportunities',
      icon: '🚀'
    },
  ];

  return (
    <section id="for-whom" className="py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk">
          For Whom
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, idx) => (
            <div key={idx} className="bg-background p-8 border border-border rounded-lg">
              <div className="text-5xl mb-4">{audience.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3 font-space-grotesk">{audience.title}</h3>
              <p className="text-muted-foreground text-lg">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
