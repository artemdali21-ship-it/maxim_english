export function ForWhomSection() {
  return (
    <section id="for-whom" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Кому подойдут<br />
          <span className="text-accent">занятия</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-primary">Взрослым</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Смотрите Netflix с субтитрами, хотя учите английский 10 лет</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Прошли три курса — до сих пор не можете вести рабочий звонок</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Нужен язык для карьеры, переезда или международной среды</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Хотите наконец понять, как язык устроен, а не зубрить правила</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-bold text-primary">Детям и подросткам от 10 лет</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Системное изучение, а не натаскивание на тесты</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Произношение и слух — с первых занятий</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Программа, адаптированная под возраст и интересы</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold text-xl flex-shrink-0 mt-1">—</span>
                <span className="text-foreground/80 font-light leading-relaxed">Видимый результат: ребёнок понимает фильмы в оригинале</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
