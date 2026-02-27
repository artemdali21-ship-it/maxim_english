'use client';

import Image from 'next/image';

export function TrustBarSection() {
  const logos = [
    { src: '/logo-dhl.png', alt: 'DHL', width: 80, height: 40 },
    { src: '/logo-yandex.png', alt: 'Yandex', width: 80, height: 40 },
    { src: '/logo-ivi.webp', alt: 'IVI', width: 80, height: 40 },
    { src: '/logo-linklaters.png', alt: 'Linklaters', width: 80, height: 40 },
    { src: '/logo-advisers.png', alt: 'FTL Advisers', width: 80, height: 40 },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-background border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold text-muted-foreground mb-12 uppercase tracking-[0.15em]">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="relative flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 group"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain w-auto h-auto group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
