import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-16 tracking-tight leading-tight">
          Филолог.<br />Системный<br />преподаватель.<br />
          <span className="text-accent">С 2010 года.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="relative overflow-hidden aspect-square border border-border/30 group">
            <Image
              src="/maxim-portrait.jpg"
              alt="Максим Онуфриев - профессиональный портрет"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="space-y-8 text-foreground leading-relaxed flex flex-col justify-center">
            <p className="text-lg font-light">
              Меня зовут Максим Онуфриев. Я окончил филологический факультет МГУ и преподаю английский язык с 2010 года.
            </p>
            <p className="text-lg font-light">
              За это время я провёл более сотни студентов через свою систему — от школьников до топ-менеджеров DHL, юристов Linklaters и сотрудников Яндекса.
            </p>
            <p className="text-lg font-light">
              Я разработал методологию, в которой грамматика, разговорная речь, фонетика и произношение работают как единое целое. Не четыре отдельных курса — а одна архитектура языка.
            </p>

            <div className="bg-secondary/50 p-8 border border-border/50 mt-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Факт</p>
              <p className="text-sm leading-relaxed text-foreground/90">
                Я требовательный преподаватель. Если вы ошиблись — я поправлю. Помимо английского, я изучал китайский — один из сложнейших языков мира. Это дало мне уникальное понимание того, как люди осваивают фонетику и структуру чужого языка.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center space-y-2">
              <p className="text-5xl font-serif font-bold text-accent">2010</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">Преподаю<br />английский</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-serif font-bold text-accent">МГУ</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">Филологическое<br />образование</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-serif font-bold text-accent">100+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">Студентов<br />прошли систему</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-serif font-bold text-accent">5</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">Корпоративных<br />клиентов</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-serif font-bold text-accent">4</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">Авторских<br />направлений</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
