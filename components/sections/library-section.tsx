import Image from 'next/image';

export function LibrarySection() {
  return (
    <section id="library" className="py-0 px-0 bg-background overflow-hidden">
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/bookshelf-premium.jpg"
          alt="Премиум библиотека с книгами и предметами интерьера"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 font-space-grotesk tracking-tight max-w-3xl">
            Знания — это структура, не информация
          </h3>
          <p className="text-lg md:text-xl max-w-2xl text-white/90">
            Каждый кирпичик на месте. Каждое правило служит смыслу.
          </p>
        </div>
      </div>
    </section>
  );
}
