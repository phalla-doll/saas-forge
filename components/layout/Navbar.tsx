import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="size-8 transition-transform group-hover:scale-105" />
            <span className="font-display font-bold text-lg hidden sm:inline-block">SaaSForge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/explore" className="hover:text-foreground transition-colors">Explore</Link>
            <Link href="/sellers" className="hover:text-foreground transition-colors">For Sellers</Link>
            <Link href="/buyers" className="hover:text-foreground transition-colors">For Buyers</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search micro-SaaS..."
              className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
            />
          </div>
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
