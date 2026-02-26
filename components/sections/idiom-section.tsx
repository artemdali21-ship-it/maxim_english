import Image from 'next/image';

export function IdiomSection() {
  return (
    <section id="idiom" className="py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 font-space-grotesk tracking-tight text-center">
          Idiom of the Week
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-primary font-space-grotesk tracking-tight">
              "To have a mare"
            </h3>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-accent">
                British informal — совершить грубую ошибку, провалиться по полной.
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Сокращение от "nightmare". Употребляется в разговорной
                британской речи, особенно в контексте спорта и работы.
              </p>

              <div className="bg-background p-6 rounded border border-border space-y-3 italic">
                <p className="text-foreground">
                  — <span className="not-italic font-semibold">I had an absolute mare</span> in that meeting —<br/>
                  forgot the client's name twice.
                </p>
                <p className="text-foreground">
                  — Did you see the match? <span className="not-italic font-semibold">The goalkeeper<br/>
                  had a complete mare.</span>
                </p>
              </div>

              <p className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded inline-block">
                Уровень: C1+ / Fluent
              </p>
            </div>

            <p className="text-sm text-muted-foreground border-t border-border pt-4">
              Обновляется каждую неделю · Из практики преподавания
            </p>
          </div>

          {/* Right - Visual Image */}
          <div className="relative h-96 rounded overflow-hidden border border-border shadow-lg">
            <Image
              src="/british-desk.jpg"
              alt="British gentleman's desk - Idiom of the Week"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
