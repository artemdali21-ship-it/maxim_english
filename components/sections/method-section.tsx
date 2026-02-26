export function MethodSection() {
  const methods = [
    {
      title: 'Modern English Grammar',
      description: 'Не зубрёжка таблиц, а понимание логики. Морфология, синтаксис, архитектура предложения — от артиклей до Complex Subject. Каждая тема завершается устным экзаменом.'
    },
    {
      title: 'Modern Spoken English',
      description: 'Полностью на английском. Русского на занятии нет. Подкасты Luke Thompson (600+ выпусков), фильмы, книги. Настоящий язык, не учебные диалоги.'
    },
    {
      title: 'Фонетика и произношение',
      description: 'Авторский курс, отточенный за 15 лет. Британская система, акценты: London, Irish, Australian, New York. Posh и Cockney. Вы начнёте различать то, что казалось одинаковым.'
    },
    {
      title: 'British Slang & Informal Speech',
      description: 'То, чему не учат нигде. Британские выражения, разговорные конструкции, культурный контекст. Мост между «правильным» и «живым» английским.'
    },
  ];

  return (
    <section id="method" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Четыре направления. Одна система.
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Каждое направление усиливает остальные.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, idx) => (
            <div key={idx} className="bg-secondary p-8 rounded border border-border hover:border-accent transition">
              <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">{method.title}</h3>
              <p className="text-foreground leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
