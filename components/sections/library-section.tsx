import Image from 'next/image';

export function LibrarySection() {
  return (
    <section id="library" className="relative py-16 md:py-32 px-4 md:px-6 text-white overflow-hidden">
      {/* Background Image Layer */}
      <Image
        src="/library-bg.jpg"
        alt="Премиум домашняя библиотека с деревянными полками и кожаным диваном"
        fill
        className="absolute inset-0 object-cover -z-20"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-space-grotesk tracking-tight leading-tight">
          Знания — это структура, не информация
        </h2>

        <div className="max-w-4xl text-lg leading-relaxed space-y-6">
          <p>
            Каждый кирпичик на месте. Каждое правило служит смыслу.
            Не случайный набор фактов, а единая архитектура языка.
          </p>
          <p>
            Когда вы учите английский отрывочно — по видео-урокам,
            курсам в приложениях, спонтанным советам в интернете —
            у вас в голове собирается хаос.
          </p>
          <p>
            Вы учите фразы, но не понимаете, почему именно так.
            Вы говорите, но не слышите. Вы запоминаете правила,
            но не видите, как они работают в живой речи.
          </p>
          <p>
            <span className="font-semibold">Результат: вы застреваете на одном уровне месяцами.</span>
          </p>
          <p className="text-xl font-semibold border-t border-white/30 pt-6 mt-8">
            На моих занятиях другой подход.
          </p>
          <p>
            Мы начинаем не с фраз. Мы начинаем со структуры.
            Вы узнаёте, как на самом деле устроен язык —
            что кроется за каждым звуком, каждым правилом, каждым исключением.
          </p>
          <p>
            И только потом — когда вы видите эту архитектуру —
            вы начинаете говорить. Правильно. Уверенно. Навсегда.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/30 text-right">
          <p className="text-lg font-semibold">— Максим Онуфриев</p>
        </div>
      </div>
    </section>
  );
}
