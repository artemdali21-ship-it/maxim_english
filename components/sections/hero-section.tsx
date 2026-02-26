'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight font-space-grotesk tracking-tight">
            Не обещаю быстро.<br />Обещаю правильно.
          </h1>
          <p className="text-lg text-foreground mb-8 leading-relaxed max-w-lg">
            Максим Онуфриев — филолог МГУ, преподаватель английского с 2010 года.
            Авторская система: грамматика, живая речь, фонетика и произношение —
            как единая структура языка.
            <br /><br />
            Для взрослых и детей от 10 лет. Индивидуально. Онлайн и очно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a 
              href="https://t.me/Max_Onny"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-primary font-bold hover:opacity-90 transition text-center"
            >
              Записаться на консультацию
            </a>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            30 минут · Обсудим ваш уровень и цели · Без обязательств
          </p>
          <div className="inline-block px-4 py-2 bg-red-100 border border-red-300 rounded">
            <p className="text-sm font-semibold text-red-700">
              Осталось 3 свободных места на март
            </p>
          </div>
        </div>
        <div className="relative rounded aspect-square overflow-hidden border border-border">
          <Image
            src="/maxim-balcony.jpg"
            alt="Максим Онуфриев - портрет"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
