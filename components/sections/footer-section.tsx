import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid - Proper alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 py-20 md:py-24 items-start">
          {/* Brand - Left */}
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-bold">
              Максим Онуфриев
            </h3>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70 font-medium">
              Преподаватель английского языка
            </p>
          </div>

          {/* Contact - Center */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Контакты</h4>
            <a 
              href="https://t.me/Max_Onny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block"
            >
              Telegram
            </a>
          </div>

          {/* Legal - Right */}
          <div className="space-y-4 md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Документы</h4>
            <nav className="space-y-3 text-sm flex flex-col md:items-end">
              <Link 
                href="/public-offer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Оферта
              </Link>
              <Link 
                href="/terms-of-service"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Условия использования
              </Link>
              <Link 
                href="/privacy-policy"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Конфиденциальность
              </Link>
              <Link 
                href="/cookie-policy"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Cookie
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10"></div>

        {/* Bottom Footer - Equal proportion text alignment */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2">
          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            © 2026 Максим Онуфриев.<br />Все права защищены.
          </p>
          <p className="text-xs text-primary-foreground/60 leading-relaxed md:text-right mt-6 md:mt-0">
            Обычно отвечаю<br />в течение 1 часа
          </p>
        </div>
      </div>
    </footer>
  );
}
