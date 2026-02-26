import Image from 'next/image';

export function LibrarySection() {
  return (
    <section id="library" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/library-bg.jpg"
        alt="Премиум домашняя библиотека"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6 py-24 md:py-32 text-white">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 leading-tight tracking-tight">
          Знания —<br />это структура,<br />не информация
        </h2>

        <div className="text-lg leading-relaxed space-y-8 font-light">
          <p>
            Каждый кирпичик на месте. Каждое правило служит смыслу. Не случайный набор фактов, а единая архитектура языка.
          </p>
          <p>
            Когда вы учите английский отрывочно — по видео-урокам, курсам в приложениях, спонтанным советам в интернете — у вас в голове собирается хаос.
          </p>
          <p>
            Вы учите фразы, но не понимаете, почему именно так. Вы говорите, но не слышите. Вы запоминаете правила, но не видите, как они работают в живой речи.
          </p>
          <p>
            <span className="font-semibold">Результат: вы застреваете на одном уровне месяцами.</span>
          </p>
          <p className="text-xl font-semibold border-t border-white/10 pt-8 mt-12">
            На моих занятиях другой подход.
          </p>
          <p>
            Мы начинаем не с фраз. Мы начинаем со структуры. Вы узнаёте, как на самом деле устроен язык — что кроется за каждым звуком, каждым правилом, каждым исключением.
          </p>
          <p>
            И только потом — когда вы видите эту архитектуру — вы начинаете говорить. Правильно. Уверенно. Навсегда.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 text-right">
          <p className="text-lg font-serif font-semibold">— Максим Онуфриев</p>
        </div>
      </div>
    </section>
  );
}
