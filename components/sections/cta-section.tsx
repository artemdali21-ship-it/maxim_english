'use client';

export function CTASection() {
  return (
    <section id="cta" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight leading-tight">
          Запишитесь<br />
          <span className="text-accent">на консультацию</span>
        </h2>
        <p className="text-lg text-foreground/80 mb-12 leading-relaxed font-light">
          Обсудим ваш уровень, цели и подберём формат.<br />
          30 минут. Без обязательств.
        </p>

        <div className="mb-12 inline-flex items-center gap-3 px-6 py-4 bg-accent/10 border border-accent/30 rounded">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <p className="text-sm font-semibold text-accent">
            Осталось 3 свободных места на март
          </p>
        </div>

        <div className="bg-secondary/50 backdrop-blur p-10 border border-border/50 mb-12 rounded-none">
          <h3 className="text-xl font-serif font-bold text-primary mb-4">Для новых учеников:</h3>
          <p className="text-lg text-foreground mb-2 font-semibold">
            При покупке 5 занятий — 1 в подарок.
          </p>
          <p className="text-foreground/70 font-light">
            Запишитесь на консультацию, чтобы узнать подробности.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://t.me/Max_Onny"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-200 border border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 text-sm uppercase tracking-widest"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/79853806657"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-primary text-primary hover:bg-secondary transition-all duration-200 font-semibold text-sm uppercase tracking-widest"
          >
            WhatsApp
          </a>
          <a
            href="mailto:maximxiaoping@gmail.com"
            className="px-8 py-3.5 border border-primary text-primary hover:bg-secondary transition-all duration-200 font-semibold text-sm uppercase tracking-widest"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-foreground/60 uppercase tracking-wider">
          Обычно отвечаю в течение нескольких часов
        </p>
      </div>
    </section>
  );
}
