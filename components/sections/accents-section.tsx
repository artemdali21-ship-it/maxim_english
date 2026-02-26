'use client';

export function AccentsSection() {
  return (
    <section id="accents" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-space-grotesk tracking-tight">
          Какой английский вы хотите?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Нажмите play — и услышьте, как один преподаватель
          звучит четырьмя совершенно разными способами.
        </p>

        {/* Audio Player */}
        <div className="bg-secondary rounded p-8 mb-12 border border-border">
          <div className="flex items-center gap-4 mb-4">
            <button className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition flex-shrink-0 text-2xl">
              ▶
            </button>
            <div className="flex-1">
              <div className="h-2 bg-border rounded-full mb-2"></div>
              <p className="text-sm text-muted-foreground">
                Послушайте, как Максим переключается между четырьмя акцентами
              </p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">1:47</span>
          </div>
          <audio controls className="w-full hidden">
            <source src="/audio/accents-demo.mp3" type="audio/mpeg" />
          </audio>
        </div>

        {/* Accent Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-secondary p-8 rounded border border-border">
            <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">Парень с улицы</h3>
            <p className="text-sm italic text-foreground mb-4 leading-relaxed">
              "Do you know what, mate? I don't like that buff geezer sitting there in the corner. He's a bit of a wanker, isn't he? Better yet, I've got enough of the bottle to make him put a sock in it."
            </p>
            <p className="text-sm text-muted-foreground">
              Уличный лондонский. Болельщик Arsenal. Пабы и прямой разговор.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary p-8 rounded border border-border">
            <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">Кембриджский профессор</h3>
            <p className="text-sm italic text-foreground mb-4 leading-relaxed">
              "A professor of Cambridge who would possibly give you a few nice comments on the way educated people should speak. Surrounded by well-mannered students who might have gone through a fairly similar system."
            </p>
            <p className="text-sm text-muted-foreground">
              Академический английский. Безупречная точность формулировок.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary p-8 rounded border border-border">
            <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">Аристократ из Downton Abbey</h3>
            <p className="text-sm italic text-foreground mb-4 leading-relaxed">
              "This would parade your highly appreciated nature of aristocratic fashions, your arrogance, your outdated obsession of victorious and splendid history of the British Empire."
            </p>
            <p className="text-sm text-muted-foreground">
              Posh English. Аристократическая речь. RP-произношение.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-secondary p-8 rounded border border-border">
            <h3 className="text-xl font-bold text-primary mb-4 font-space-grotesk">Американский сенатор</h3>
            <p className="text-sm italic text-foreground mb-4 leading-relaxed">
              "I gotta tell you this: our economy is gonna decline, so we gotta reduce taxes. No arguments. That's our future."
            </p>
            <p className="text-sm text-muted-foreground">
              General American. Деловой тон. Прямолинейность.
            </p>
          </div>
        </div>

        <p className="text-lg text-foreground text-center max-w-2xl mx-auto">
          На моих занятиях вы научитесь не только говорить —
          но и слышать разницу между этими мирами.
          А потом — выбрать свой.
        </p>
      </div>
    </section>
  );
}
