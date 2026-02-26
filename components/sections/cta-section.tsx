'use client';

import Image from 'next/image';

export function CTASection() {
  return (
    <section id="cta" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Maxim's Photo with Green Frame */}
          <div className="hidden md:block relative">
            <div className="relative inline-block w-full border-4 border-[#3D5E3D]" style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}>
              <Image
                src="/maxim-library.jpeg"
                alt="Максим Онуфриев в библиотеке"
                width={400}
                height={500}
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Right - CTA Content */}
          <div className="text-left md:text-left">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight leading-tight">
              Запишитесь<br />
              <span className="text-accent">на консультацию</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-light">
              Обсудим ваш уровень, цели и подберём формат.
            </p>

            <div className="mb-8 inline-flex items-center gap-3 px-6 py-4 bg-accent/10 border border-accent/30 rounded">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <p className="text-sm font-semibold text-accent">
                Осталось 3 свободных места на март
              </p>
            </div>

            <div className="bg-secondary/50 backdrop-blur p-8 border border-border/50 mb-10 rounded-none">
              <h3 className="text-lg font-serif font-bold text-primary mb-3">Для новых учеников:</h3>
              <p className="text-lg text-foreground mb-2 font-semibold">
                При покупке 5 занятий — 1 в подарок.
              </p>
              <p className="text-foreground/70 font-light text-sm">
                Узнайте подробности на консультации.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://t.me/Max_Onny"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-200 border border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 text-sm uppercase tracking-widest text-center"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/79853806657"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-primary text-primary hover:bg-secondary transition-all duration-200 font-semibold text-sm uppercase tracking-widest text-center"
              >
                WhatsApp
              </a>
              <a
                href="mailto:maximxiaoping@gmail.com"
                className="px-8 py-3.5 border border-primary text-primary hover:bg-secondary transition-all duration-200 font-semibold text-sm uppercase tracking-widest text-center"
              >
                Email
              </a>
            </div>

            <p className="text-xs text-foreground/60 uppercase tracking-wider">
              Обычно отвечаю в течение нескольких часов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
