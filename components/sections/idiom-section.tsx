import Image from 'next/image';

export function IdiomSection() {
  return (
    <section id="idiom" className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight text-center">
          <span className="text-accent">Idiom</span> of the Week
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <h3 className="text-4xl font-serif font-bold text-primary tracking-tight">
              "To have a mare"
            </h3>

            <div className="space-y-6">
              <p className="text-lg font-semibold text-accent">
                British informal — совершить грубую ошибку, провалиться по полной.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed font-light">
                Сокращение от "nightmare". Употребляется в разговорной британской речи, особенно в контексте спорта и работы.
              </p>

              <div className="bg-background/50 backdrop-blur p-8 border border-border/50 space-y-4 italic">
                <p className="text-foreground/80 font-light">
                  — <span className="not-italic font-semibold">I had an absolute mare</span> in that meeting —<br/>
                  forgot the client's name twice.
                </p>
                <p className="text-foreground/80 font-light">
                  — Did you see the match? <span className="not-italic font-semibold">The goalkeeper had a complete mare.</span>
                </p>
              </div>

              <p className="text-xs font-semibold text-accent bg-accent/10 px-4 py-3 rounded inline-block uppercase tracking-wider">
                Уровень: C1+ / Fluent
              </p>
            </div>

            <p className="text-xs text-muted-foreground border-t border-border/30 pt-6 uppercase tracking-wider">
              Обновляется каждую неделю · Из практики преподавания
            </p>
          </div>

          {/* Right - Visual Image */}
          <div className="relative h-96 overflow-hidden border border-border/50">
            <Image
              src="/british-desk.jpg"
              alt="British gentleman's desk - Idiom of the Week"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
