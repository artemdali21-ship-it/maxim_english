'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Oxford University courtyard"
        fill
        className="absolute inset-0 object-cover -z-20"
        priority
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-space-grotesk tracking-tight">
            Не обещаю быстро.<br />Обещаю правильно.
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
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
          <p className="text-sm text-white/80 mb-4">
            30 минут · Обсудим ваш уровень и цели · Без обязательств
          </p>
          <div className="inline-block px-4 py-2 bg-red-500/90 border border-red-400 rounded">
            <p className="text-sm font-semibold text-white">
              Осталось 3 свободных места на март
            </p>
          </div>
        </div>
        <div className="relative rounded aspect-square overflow-hidden border-4 border-white/20 shadow-2xl z-20">
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
