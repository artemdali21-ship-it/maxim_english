'use client';

import Image from 'next/image';

export function MethodSection() {
  const methods = [
    {
      title: 'Modern English Grammar',
      description: 'Не зубрёжка таблиц, а понимание логики. Морфология, синтаксис, архитектура предложения — от артиклей до Complex Subject. Каждая тема завершается устным экзаменом.',
      image: '/method-books-flat.jpg'
    },
    {
      title: 'Modern Spoken English',
      description: 'Полностью на английском. Русского на занятии нет. Подкасты Luke Thompson (600+ выпусков), фильмы, книги. Настоящий язык, не учебные диалоги.',
      image: '/method-dark-shelves.jpg'
    },
    {
      title: 'Фонетика и произношение',
      description: 'Авторский курс, отточенный за 15 лет. Британская система, акценты: London, Irish, Australian, New York. Posh и Cockney. Вы начнёте различать то, что казалось одинаковым.',
      image: '/method-library-room.jpg'
    },
    {
      title: 'British Slang & Informal Speech',
      description: 'То, чему не учат нигде. Британские выражения, разговорные конструкции, культурный контекст. Мост между «правильным» и «живым» английским.',
      image: '/method-british-slang.jpg'
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
            <div key={idx} className="group relative overflow-hidden rounded border border-border hover:border-accent transition h-96">
              {/* Background Image */}
              <Image
                src={method.image}
                alt={method.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3 font-space-grotesk">{method.title}</h3>
                <p className="text-sm leading-relaxed text-white/90">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
