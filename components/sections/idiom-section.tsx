import Image from 'next/image';

export function IdiomSection() {
  const idioms = [
    {
      title: "Bob's your uncle",
      type: 'Идиома недели',
      translation: '«И всё готово!» / «Вот и всё!» / «Дело в шляпе!»',
      meaning: 'Идиома используется, когда что-то очень легко сделать, особенно если нужно выполнить несколько простых шагов — и результат гарантирован. Часто употребляется после перечисления действий: "Do this, then that — Bob\'s your uncle!" То есть: «Сделай это, потом то — и готово!»',
      origin: 'Считается, что выражение появилось в XIX веке и связано с премьер-министром Великобритании Robert Gascoyne-Cecil, которого звали Боб. По одной из версий, он продвинул своего племянника по службе, и выражение стало означать: если у тебя есть влиятельный дядя Боб — всё устроится легко.'
    },
    {
      title: 'Chin-wag',
      type: 'Сленг недели',
      translation: '«Поболтать» / «Потрепаться» / «Поговорить по душам»',
      meaning: 'Chin-wag — это неформальная, дружеская беседа, обычно лёгкая и непринуждённая. Чаще всего: "to have a chin-wag" — устроить болтовню, посидеть и пообщаться. Слово типично британское и звучит тепло и немного фамильярно.',
      origin: 'Пример: "— Fancy a quick chin-wag before the meeting? — Yeah, go on then. I need a break anyway." (Поболтаем немного перед встречей? — Давай, мне всё равно нужен перерыв.)'
    }
  ];

  return (
    <section id="idiom" className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          <span className="text-accent">Idiom & Slang</span><br />of the Week
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {idioms.map((idiom, idx) => (
            <div key={idx} className="bg-background/50 backdrop-blur border border-border/50 p-10 md:p-12 space-y-6 hover:border-accent/30 transition-all duration-300">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">{idiom.type}</p>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary break-words">
                  {idiom.title}
                </h3>
              </div>

              <div className="space-y-4 border-t border-border/30 pt-6">
                <div>
                  <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Перевод</p>
                  <p className="text-base text-foreground/85 font-light leading-relaxed">
                    {idiom.translation}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Значение</p>
                  <p className="text-base text-foreground/85 font-light leading-relaxed">
                    {idiom.meaning}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Происхождение / Пример</p>
                  <p className="text-base text-foreground/85 font-light leading-relaxed italic">
                    {idiom.origin}
                  </p>
                </div>
              </div>

              <div className="text-xs text-muted-foreground pt-4 border-t border-border/30">
                Обновляется еженедельно · Из практики преподавания
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
