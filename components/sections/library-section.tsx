import Image from 'next/image';

export function LibrarySection() {
  return (
    <section id="library" className="py-0 px-0 bg-background overflow-hidden">
      <div className="relative w-full h-96 md:h-screen">
        <Image
          src="/library-hero.jpg"
          alt="Премиум домашняя библиотека с деревянными полками и кожаным диваном"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk tracking-tight max-w-4xl leading-tight">
            Знания — это структура, не информация
          </h3>
          <p className="text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed">
            Каждый кирпичик на месте. Каждое правило служит смыслу.
          </p>
        </div>
      </div>
    </section>
  );
}
