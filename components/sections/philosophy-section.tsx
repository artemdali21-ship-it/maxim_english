import Image from 'next/image';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 leading-tight tracking-tight text-primary">
              «Выучить английский<br />за два месяца»?<br />
              <span className="text-accent">Давайте начистоту.</span>
            </h2>

            <div className="max-w-xl text-lg leading-relaxed space-y-8 font-light text-foreground/90">
              <p className="font-semibold text-foreground">
                Факты из моей практики:
              </p>
              <p>
                <span className="font-semibold">90% студентов не слышат разницы</span> между звуками в словах "stuff" и "staff", "dead" и "dad". Упорно не слышат — месяцами, после множества тренировок.
              </p>
              <p>
                <span className="font-semibold">80% путают подлежащее с существительным</span>, а сказуемое с глаголом. И это образованные взрослые люди.
              </p>
              <p>
                <span className="font-semibold">90% не могут отличить предлог местонахождения от предлога движения.</span> Результат: "He went in school", "He is on the kitchen". Зато — за два месяца.
              </p>
              <p>
                Я не обещаю легко. Я обещаю, что вы поймёте, как язык устроен на самом деле. А это — навсегда.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-border/30 text-left">
              <p className="text-lg font-serif font-semibold text-primary">— Максим Онуфриев</p>
            </div>
          </div>

          {/* Right - Library Image */}
          <div className="relative hidden md:block overflow-hidden border border-border/50 h-full min-h-96">
            <Image
              src="/philosophy-library.jpg"
              alt="Премиальная библиотека - место знаний"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
