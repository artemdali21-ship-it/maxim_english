import Link from 'next/link';

export function FooterSection() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#method" className="hover:opacity-100 transition">Method</a></li>
              <li><a href="#format" className="hover:opacity-100 transition">Formats</a></li>
              <li><a href="#accents" className="hover:opacity-100 transition">Accents</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition">About Maxim</a></li>
              <li><a href="#philosophy" className="hover:opacity-100 transition">Philosophy</a></li>
              <li><a href="#testimonials" className="hover:opacity-100 transition">Reviews</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Instagram</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Email</a></li>
              <li><a href="#" className="hover:opacity-100 transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">© 2026 Maxim Onufriev. All rights reserved.</p>
          <div className="flex gap-4 text-sm opacity-80">
            <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
