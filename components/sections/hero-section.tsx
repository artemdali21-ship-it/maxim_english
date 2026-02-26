'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background Video - positioned absolutely */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%'
          }}
          crossOrigin="anonymous"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Enhanced geometric overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
        style={{ zIndex: 1 }}
      ></div>

      {/* Content - Mobile: flex column, Desktop: 2 column grid */}
      <div className="max-w-7xl mx-auto w-full relative" style={{ zIndex: 10 }}>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-stretch gap-4">
          {/* LEFT COLUMN - Title + Description + CTA */}
          <div className="flex flex-col justify-start space-y-6 md:space-y-8 order-1 md:order-1">
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
              Не обещаю<br />быстро.<br />
              <span className="text-accent">Обещаю правильно.</span>
            </h1>

            <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-xl font-light">
              Максим Онуфриев — филолог МГУ, преподаватель английского с 2010 года. Авторская система: грамматика, живая речь, фонетика и произношение как единая структура языка.
            </p>

            <div className="space-y-4">
              <a 
                href="https://t.me/Max_Onny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-all duration-200 border border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                Записаться на консультацию
              </a>
              <p className="text-xs text-white/70 uppercase tracking-wider font-medium">
                30 минут · Без обязательств
              </p>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <p className="text-sm text-white font-medium">
                Осталось 3 свободных места
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Photo (Mobile: full width square, Desktop: full height) */}
          <div className="relative order-2 md:order-2 w-full md:w-full">
            <div className="relative w-full aspect-square md:h-full overflow-hidden border-4 md:border-6 border-[#F7F5F0]" style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="/maxim-balcony.jpg"
                alt="Максим Онуфриев - портрет"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 border border-white/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
