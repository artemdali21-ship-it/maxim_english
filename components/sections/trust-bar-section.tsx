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
    <section className="py-12 md:py-16 px-4 md:px-6 bg-background border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
          Корпоративные клиенты
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, idx) => (
            <div key={idx} className="h-12 relative flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
