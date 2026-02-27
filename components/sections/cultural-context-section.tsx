'use client';

import Image from 'next/image';

export function CulturalContextSection() {
  return (
    <section id="cultural-context" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Кроме языка —<br />
          <span className="text-accent">страна</span>
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 font-light italic mb-12 md:mb-16">Beyond Language</p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-light">
              Кроме знания самого языка, важно и понимание культурного контекста в странах, где он является родным. Иначе возникают ситуации, когда в разговоре проскальзывает какая-то ассоциация, или пример, или цитата, или аллюзия, которые могут быть буквально понятны иностранцу, но он не видит за этим сути. Все засмеялись, а вы — нет, так как находитесь вне необходимого контекста.
            </p>
            
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-light">
              Поэтому важно изучать не только язык, но и страну. На моих разговорных занятиях мы беседуем о британской и американской политике, культуре (музыка, искусство), привычках (британские пабы в отличие от американских баров), традициях (английское дворянство и баталии в парламенте о лисьей охоте), текущих событиях в обществе и т.д.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-lg border border-border/50 shadow-lg">
              <Image
                src="/vinni-docent.jpg"
                alt="Винни-Пуха и Доцента из Джентльменов удачи"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed font-light italic">
              Винни-Пуха и Доцента из «Джентльменов удачи» озвучил один и тот же актёр — Евгений Леонов. Иностранец поймёт слова, но не увидит за этим ничего. Вот так работает культурный контекст.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
