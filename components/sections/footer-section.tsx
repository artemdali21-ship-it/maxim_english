import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Maxim Onufriev | English Language Tutor
          </p>
          <Link 
            href="/offer"
            className="text-sm hover:text-accent transition"
          >
            Оферта
          </Link>
        </div>
      </div>
    </footer>
  );
}
