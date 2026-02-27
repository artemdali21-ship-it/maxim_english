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
              Меня зовут Максим Онуфриев. Я окончил ИСАА МГУ и преподаю английский язык с 2010 года.
            </p>
            <p className="text-lg font-light">
              За это время я провел более сотни студентов через свою систему — от школьников до топ-менеджеров DHL, юристов Linklaters и сотрудников Яндекса.
            </p>
            <p className="text-lg font-light">
              Я разработал авторскую методологию, где грамматика, речь, фонетика и произношение связаны между собой. Не четыре отдельных курса — одна системная архитектура языка.
            </p>

            <div className="bg-secondary/50 p-8 border border-border/50 mt-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Факт</p>
              <p className="text-sm leading-relaxed text-foreground/90">
                Я требовательный преподаватель. Если вы ошиблись — я поправлю.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
