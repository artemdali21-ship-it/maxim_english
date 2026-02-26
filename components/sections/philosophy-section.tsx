import Image from 'next/image';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-16 md:py-32 px-4 md:px-6 text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/philosophy-library.jpg"
          alt="Premium library with wooden shelves and books"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-space-grotesk tracking-tight leading-tight">
          «Выучить английский за два месяца»?<br />Давайте начистоту.
        </h2>

        <div className="max-w-4xl text-lg leading-relaxed space-y-6">
          <p>
            В интернете полно обещаний: «Заговорите за два месяца»,
            «Всё произношение за два часа», «Бросьте корпеть над грамматикой».
          </p>
          <p className="font-semibold">
            А вот факты из моей практики:
          </p>
          <p>
            <span className="font-semibold">90% студентов не слышат разницы</span> между звуками в словах
            "stuff" и "staff", "dead" и "dad". Упорно не слышат —
            месяцами, после множества тренировок.
          </p>
          <p>
            <span className="font-semibold">80% путают подлежащее с существительным</span>, а сказуемое с глаголом.
            И это образованные взрослые люди.
          </p>
          <p>
            <span className="font-semibold">90% не могут отличить предлог местонахождения от предлога движения.</span>
            Результат: "He went in school", "He is on the kitchen".
            Зато — за два месяца.
          </p>
          <p>
            Главная проблема «быстрых методов» — они распространяют ложь о том,
            что изучение языка — лёгкая прогулка. Человек, наслушавшись обещаний,
            сталкивается с реальностью — и опускает руки.
          </p>
          <p>
            Я не обещаю легко. Я обещаю, что вы поймёте, как язык устроен
            на самом деле. А это — навсегда.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-right">
          <p className="text-lg font-semibold">— Максим Онуфриев</p>
        </div>
      </div>
    </section>
  );
}
