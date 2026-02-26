'use client';

import Image from 'next/image';

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
          <div className="flex flex-col gap-4">
            <audio controls className="w-full">
              <source src="/maxim-pronunciation.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-muted-foreground text-center">
              Послушайте, как Максим переключается между четырьмя акцентами
            </p>
          </div>
        </div>

        {/* Accent Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 - London */}
          <div className="group relative rounded overflow-hidden border border-border hover:border-accent transition cursor-pointer h-96">
            <Image
              src="/accent-london.jpg"
              alt="London Calling - Британский уличный английский"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">London Calling</h3>
              <p className="text-sm">Уличный лондонский. Живой, энергичный.</p>
            </div>
          </div>

          {/* Card 2 - Harvard */}
          <div className="group relative rounded overflow-hidden border border-border hover:border-accent transition cursor-pointer h-96">
            <Image
              src="/accent-harvard.jpg"
              alt="Harvard Accent - Американский английский"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">General American</h3>
              <p className="text-sm">Деловой, прямолинейный американский.</p>
            </div>
          </div>

          {/* Card 3 - Downton Abbey */}
          <div className="group relative rounded overflow-hidden border border-border hover:border-accent transition cursor-pointer h-96">
            <Image
              src="/accent-downton.jpg"
              alt="Downton Abbey - Posh Upper Class английский"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Posh Upper Class</h3>
              <p className="text-sm">Аристократический, элегантный английский.</p>
            </div>
          </div>

          {/* Card 4 - Cambridge */}
          <div className="group relative rounded overflow-hidden border border-border hover:border-accent transition cursor-pointer h-96">
            <Image
              src="/accent-cambridge.jpg"
              alt="Cambridge Professor - Академический английский"
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">RP Academic</h3>
              <p className="text-sm">Академический, безупречный английский.</p>
            </div>
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
