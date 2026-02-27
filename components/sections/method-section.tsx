'use client';

import Image from 'next/image';

export function MethodSection() {
  const methods = [
    {
      title: 'Modern English Grammar',
      description: 'Домашняя работа — неотъемлемая часть учебного процесса: преподаватель не всунет знания вам в голову, но он даст логику освоения материала, чтобы пустая зубрёжка превратилась в осознанное познание. Это усилие двух сторон — IT TAKES TWO TO TANGO.',
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
      description: 'Традиционно этому мало уделяется внимания. А ведь наша речь должна быть не только правильной, но и живой: со словами-паразитами, которые помогают заполнить паузы, с неформальными выражениями, которые делают разговор естественным и лёгким.',
      image: '/british-slang-london.jpg'
    },
  ];

  return (
    <section id="method" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Четыре направления.<br />
          <span className="text-accent">Одна система.</span>
        </h2>
        <p className="text-lg text-foreground/80 mb-16 max-w-2xl font-light">
          Каждое направление усиливает остальные, создавая архитектуру мастерства.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, idx) => (
            <div key={idx} className="group relative overflow-hidden border border-border hover:border-accent transition h-96">
              <Image
                src={method.image}
                alt={method.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-serif font-bold mb-3">{method.title}</h3>
                <p className="text-sm leading-relaxed text-white/90 font-light">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
