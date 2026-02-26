'use client';

export function AccentsSection() {
  const accents = [
    { title: 'American English', description: 'Master authentic American pronunciation and communication style' },
    { title: 'British English', description: 'Perfect your Queen\'s English with precision and elegance' },
    { title: 'Stress & Intonation', description: 'Learn proper word stress and natural speech patterns' },
    { title: 'Connected Speech', description: 'Master linking, reduction, and natural flow' },
  ];

  return (
    <section id="accents" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk">
          Accent & Pronunciation Showcase
        </h2>
        
        <div className="mb-12 bg-secondary rounded-lg p-8 flex items-center justify-center aspect-video">
          <div className="text-center">
            <div className="text-muted-foreground mb-4">🎙️</div>
            <p className="text-muted-foreground">[Audio Player - 1.5-2 min accent demonstrations]</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {accents.map((accent, idx) => (
            <div key={idx} className="bg-secondary p-6 border border-border hover:border-accent transition">
              <h3 className="text-xl font-bold text-primary mb-3 font-space-grotesk">{accent.title}</h3>
              <p className="text-muted-foreground">{accent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
