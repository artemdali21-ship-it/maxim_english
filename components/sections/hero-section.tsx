'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with overlay */}
      <Image
        src="/hero-bg-oxford.jpg"
        alt="Oxford University courtyard"
        fill
        className="absolute inset-0 object-cover -z-20"
        priority
      />
      
      {/* Enhanced geometric overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 -z-10"></div>
      {/* Additional dark overlay on left side for text */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
            Не обещаю<br />быстро.<br />
            <span className="text-accent">Обещаю правильно.</span>
          </h1>
          
          <p className="text-lg text-white/95 leading-relaxed max-w-xl font-light">
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

        <div className="relative z-20 hidden md:block">
          <div className="relative aspect-square overflow-hidden border border-white/15">
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
    </section>
  );
}
