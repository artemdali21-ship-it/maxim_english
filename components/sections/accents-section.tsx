'use client';

import Image from 'next/image';

export function AccentsSection() {
  return (
    <section id="accents" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 tracking-tight leading-tight">
          Какой английский<br />
          <span className="text-accent">вы хотите?</span>
        </h2>
        <p className="text-lg text-foreground/80 mb-16 max-w-2xl font-light">
          Нажмите play — услышьте, как один преподаватель звучит четырьмя совершенно разными способами.
        </p>

        {/* Audio Player */}
        <div className="bg-secondary/40 backdrop-blur p-8 mb-16 border border-border/50">
          <div className="flex flex-col gap-4">
            <audio controls className="w-full">
              <source src="/maxim-pronunciation.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-foreground/60 text-center">
              Послушайте четыре акцента в исполнении Максима
            </p>
          </div>
        </div>

        {/* Accent Cards Grid - Horizontal Banners */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Card 1 - London */}
          <div className="group relative overflow-hidden border border-border hover:border-accent transition">
            <Image
              src="/accent-london.jpg"
              alt="London Calling - Британский уличный английский"
              width={800}
              height={400}
              className="w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Card 2 - Harvard */}
          <div className="group relative overflow-hidden border border-border hover:border-accent transition">
            <Image
              src="/accent-harvard.jpg"
              alt="Harvard Accent - Американский английский"
              width={800}
              height={400}
              className="w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Card 3 - Downton Abbey */}
          <div className="group relative overflow-hidden border border-border hover:border-accent transition">
            <Image
              src="/accent-downton.jpg"
              alt="Downton Abbey - Posh Upper Class английский"
              width={800}
              height={400}
              className="w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Card 4 - Cambridge */}
          <div className="group relative overflow-hidden border border-border hover:border-accent transition">
            <Image
              src="/accent-cambridge.jpg"
              alt="Cambridge Professor - Академический английский"
              width={800}
              height={400}
              className="w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <p className="text-lg text-foreground text-center max-w-2xl mx-auto font-light leading-relaxed">
          На моих занятиях вы научитесь не только говорить — но и слышать разницу между этими мирами. А потом выбрать свой.
        </p>
      </div>
    </section>
  );
}
