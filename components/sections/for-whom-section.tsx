export function ForWhomSection() {
  return (
    <section id="for-whom" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk tracking-tight">
          Кому подойдут занятия
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Взрослым</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Смотрите Netflix с субтитрами, хотя учите английский 10 лет</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Прошли три курса — до сих пор не можете вести рабочий звонок</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Нужен язык для карьеры, переезда или международной среды</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Хотите наконец понять, как язык устроен, а не зубрить правила</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Детям и подросткам от 10 лет</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Системное изучение, а не натаскивание на тесты</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Произношение и слух — с первых занятий</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Программа, адаптированная под возраст и интересы</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">—</span>
                <span className="text-foreground">Видимый результат: ребёнок понимает фильмы в оригинале</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
