import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 Maxim Onufriev | English Language Tutor
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link 
              href="/public-offer"
              className="hover:text-accent transition"
            >
              Оферта
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <Link 
              href="/terms-of-service"
              className="hover:text-accent transition"
            >
              Условия
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <Link 
              href="/privacy-policy"
              className="hover:text-accent transition"
            >
              Конфиденциальность
            </Link>
            <span className="text-primary-foreground/40">·</span>
            <Link 
              href="/cookie-policy"
              className="hover:text-accent transition"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
