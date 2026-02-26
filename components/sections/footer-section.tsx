import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Maxim</h3>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
              English Language Education
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <a 
              href="https://t.me/Max_Onny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Telegram
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link 
                href="/public-offer"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Public Offer
              </Link>
              <Link 
                href="/terms-of-service"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/privacy-policy"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Privacy
              </Link>
              <Link 
                href="/cookie-policy"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © 2026 Maxim Onufriev. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Designed for excellence in language education
          </p>
        </div>
      </div>
    </footer>
  );
}
