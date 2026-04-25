import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
                S
              </div>
              <span className="font-display font-bold">SaaSForge</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The premium marketplace for developers to buy, sell, and discover the next micro-SaaS.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Marketplace</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/explore" className="hover:text-foreground transition-colors">Explore Listings</Link></li>
              <li><Link href="/recent" className="hover:text-foreground transition-colors">Recently Added</Link></li>
              <li><Link href="/sold" className="hover:text-foreground transition-colors">Recently Sold</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/guide" className="hover:text-foreground transition-colors">Valuation Guide</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/legal" className="hover:text-foreground transition-colors">Legal Docs</Link></li>
              <li><Link href="/escrow" className="hover:text-foreground transition-colors">Escrow Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} SaaSForge Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="sr-only">Social links</span>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">Twitter (X)</a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
