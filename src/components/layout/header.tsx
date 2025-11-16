'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Blocks, BookOpen, MessageSquare, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/glossary', label: 'Glossary', icon: BookOpen },
  { href: '/forum', label: 'Forum', icon: MessageSquare },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Blocks className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Web3Begin</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav could be added here with a Sheet component if needed */}
        
      </div>
    </header>
  );
}
