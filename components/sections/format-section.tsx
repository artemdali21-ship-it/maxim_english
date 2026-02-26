export function FormatSection() {
  return (
    <section id="format" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Как устроены<br />
          <span className="text-accent">занятия</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-secondary/30 backdrop-blur p-10 border border-border/50 space-y-4">
            <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center">
              <span className="text-accent font-serif text-2xl">①</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary">Формат</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              Индивидуальные занятия: онлайн (Zoom / Google Meet) или очно. Программа выстраивается под ваш уровень, возраст и цели.
            </p>
          </div>

          <div className="bg-secondary/30 backdrop-blur p-10 border border-border/50 space-y-4">
            <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center">
              <span className="text-accent font-serif text-2xl">②</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary">Длительность</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              1 час (60 минут). Рекомендуемая частота — 2-3 раза в неделю для максимального эффекта.
            </p>
          </div>

          <div className="bg-secondary/30 backdrop-blur p-10 border border-border/50 space-y-4">
            <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center">
              <span className="text-accent font-serif text-2xl">③</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary">Первая встреча</h3>
            <p className="text-foreground/80 leading-relaxed font-light">
              Бесплатная консультация: 30 минут. Знакомство, определение уровня и обсуждение целей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
