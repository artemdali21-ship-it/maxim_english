export function IdiomSection() {
  return (
    <section id="idiom" className="py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-8 font-space-grotesk tracking-tight text-center">
          Idiom of the Week
        </h2>

        <div className="bg-background p-12 rounded border border-border">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center" style={{ fontFamily: 'monospace' }}>
            "To have a mare"
          </h3>

          <div className="text-left space-y-4 mb-8">
            <p className="font-semibold text-primary text-center">
              British informal — совершить грубую ошибку, провалиться по полной.
            </p>
            <p className="text-foreground leading-relaxed text-center">
              Сокращение от "nightmare". Употребляется в разговорной
              британской речи, особенно в контексте спорта и работы.
            </p>

            <div className="bg-secondary p-4 rounded italic space-y-2 text-foreground text-center">
              <p>— I had an absolute mare in that meeting —<br/>
              forgot the client's name twice.</p>
              <p className="mt-2">— Did you see the match? The goalkeeper<br/>
              had a complete mare.</p>
            </div>

            <p className="text-sm text-muted-foreground text-center font-semibold">
              Уровень: C1+ / Fluent
            </p>
          </div>

          <p className="text-sm text-muted-foreground text-center border-t border-border pt-4">
            Обновляется каждую неделю
          </p>
        </div>
      </div>
    </section>
  );
}
