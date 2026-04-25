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

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden lg:flex items-center group">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              placeholder="Search micro-SaaS..."
              className="h-9 w-48 lg:w-56 rounded-md border border-input bg-muted/40 hover:bg-muted/60 pl-9 pr-12 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:bg-background placeholder:text-muted-foreground"
            />
            <div className="absolute right-1.5 flex h-5 items-center gap-0.5 rounded border bg-background/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground pointer-events-none select-none">
              <span className="text-xs">⌘</span>K
            </div>
          </div>
          
          <div className="h-5 w-px bg-border hidden lg:block mx-1" />
          
          <ThemeToggle />
          
          <div className="flex items-center gap-2 ml-1">
            <Link href="/login" className="hidden sm:inline-block">
              <Button variant="ghost" size="sm" className="font-medium px-4">Log in</Button>
            </Link>
            <Link href="/list-saas">
              <Button size="sm" className="px-4 font-medium">List your SaaS</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
