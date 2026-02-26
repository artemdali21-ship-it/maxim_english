import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk tracking-tight">
          Филолог. Системный<br />преподаватель.<br />С 2010 года.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative rounded overflow-hidden border border-border aspect-square">
            <Image
              src="/maxim-portrait.jpg"
              alt="Максим Онуфриев - профессиональный портрет"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Меня зовут Максим Онуфриев. Я окончил филологический факультет МГУ
              и преподаю английский язык с 2010 года.
            </p>
            <p>
              За это время я провёл более сотни студентов через свою систему —
              от школьников до топ-менеджеров DHL, юристов Linklaters
              и сотрудников Яндекса.
            </p>
            <p>
              Я разработал методологию, в которой грамматика, разговорная речь,
              фонетика и произношение работают как единое целое. Не четыре
              отдельных курса — а одна архитектура языка.
            </p>
            <p>
              На моих занятиях вы не «учите правила». Вы начинаете иначе видеть
              структуру языка — и это меняет всё: от того, как вы строите фразу,
              до того, как вы слышите речь носителей.
            </p>
            <p>
              Я требовательный преподаватель. Если вы ошиблись — я поправлю.
              Именно эта строгость даёт результат, ради которого ко мне приходят.
            </p>

            <div className="bg-secondary p-6 rounded border border-border mt-8">
              <p className="text-sm font-semibold text-accent mb-2">Факт</p>
              <p className="text-sm leading-relaxed">
                Помимо английского, я изучал китайский — один из сложнейших языков мира.
                Это дало мне уникальное понимание того, как люди осваивают фонетику
                и структуру чужого языка.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">2010</p>
              <p className="text-xs text-muted-foreground">Преподаю<br />английский</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">МГУ</p>
              <p className="text-xs text-muted-foreground">Филологическое<br />образование</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</p>
              <p className="text-xs text-muted-foreground">Студентов прошли<br />систему</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">5</p>
              <p className="text-xs text-muted-foreground">Корпоративных<br />клиентов</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2">4</p>
              <p className="text-xs text-muted-foreground">Авторских<br />направлений</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
