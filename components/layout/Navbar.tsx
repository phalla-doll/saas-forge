import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              S
            </div>
            <span className="font-display font-bold text-lg hidden sm:inline-block">SaaSForge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/explore" className="hover:text-foreground transition-colors">Explore</Link>
            <Link href="/sellers" className="hover:text-foreground transition-colors">For Sellers</Link>
            <Link href="/buyers" className="hover:text-foreground transition-colors">For Buyers</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="flex items-center gap-2">
            <Link href="/login" className="hidden sm:inline-block">
              <Button variant="ghost" className="font-medium">Log in</Button>
            </Link>
            <Link href="/list-saas">
              <Button>List your SaaS</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
