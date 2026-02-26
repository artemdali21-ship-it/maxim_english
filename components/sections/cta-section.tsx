'use client';

export function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk tracking-tight">
          Запишитесь на консультацию
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Обсудим ваш уровень, цели и подберём формат.
          <br />
          30 минут. Без обязательств.
        </p>

        <div className="mb-8 inline-block px-4 py-2 bg-red-100 border border-red-300 rounded">
          <p className="text-sm font-semibold text-red-700">
            Осталось 3 свободных места на март
          </p>
        </div>

        <div className="bg-secondary p-8 rounded border border-border mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Для новых учеников:</h3>
          <p className="text-lg text-foreground mb-2 font-semibold">
            При покупке 5 занятий — 1 в подарок.
          </p>
          <p className="text-muted-foreground">
            Запишитесь на консультацию, чтобы узнать подробности.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://t.me/Max_Onny"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-primary font-bold hover:opacity-90 transition uppercase tracking-wide"
          >
            TELEGRAM
          </a>
          <a
            href="https://wa.me/79853806657"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary hover:bg-secondary transition uppercase tracking-wide font-bold"
          >
            WHATSAPP
          </a>
          <a
            href="mailto:maximxiaoping@gmail.com"
            className="px-8 py-3 border border-primary text-primary hover:bg-secondary transition uppercase tracking-wide font-bold"
          >
            EMAIL
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Обычно отвечаю в течение нескольких часов.
        </p>
      </div>
    </section>
  );
}
