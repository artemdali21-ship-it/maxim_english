export function FormatSection() {
  return (
    <section id="format" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk tracking-tight">
          Как устроены занятия
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded border border-border text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-space-grotesk">Формат</h3>
            <p className="text-foreground leading-relaxed">
              Индивидуальные занятия: онлайн (Zoom / Google Meet) или очно.
              Программа выстраивается под ваш уровень, возраст и цели.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded border border-border text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-space-grotesk">Длительность</h3>
            <p className="text-foreground leading-relaxed">
              1 час (60 минут). Рекомендуемая частота — 2-3 раза в неделю.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded border border-border text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 font-space-grotesk">Первая встреча</h3>
            <p className="text-foreground leading-relaxed">
              Бесплатная консультация: 30 минут.
              Знакомство, определение уровня, обсуждение целей и формата.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
