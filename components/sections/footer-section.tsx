import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16">
          {/* Brand - Russian */}
          <div className="space-y-2">
            <h3 className="text-2xl font-serif font-bold">
              Максим Онуфриев
            </h3>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
              English Language Education
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
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

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Документы</h4>
            <nav className="space-y-2 text-sm flex flex-col">
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

        {/* Bottom Footer */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-xs text-primary-foreground/60">
            © 2026 Максим Онуфриев. Все права защищены.
          </p>
          <p className="text-xs text-primary-foreground/60 md:text-right">
            Системное обучение английскому языку
          </p>
        </div>
      </div>
    </footer>
  );
}
