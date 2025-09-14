"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA } from '@/lib/data';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col text-sm uppercase tracking-wider">
          <span className="font-bold text-base">{PROFILE_DATA.name}</span>
          <span className="text-foreground/60 text-xs">{PROFILE_DATA.title}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm uppercase tracking-widest">
            <div className="flex flex-col text-right">
                <span>AVAILABLE FOR FREELANCE</span>
                <span className="text-foreground/60">WORK & PROJECTS</span>
            </div>
            <Button asChild variant="default" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse-gradient">
              <a href="#contact">Contact</a>
            </Button>
            <ThemeToggle />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-sm">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
                  <div className="text-sm uppercase tracking-widest">
                      <p>AVAILABLE FOR FREELANCE</p>
                      <p className="text-foreground/60">WORK & PROJECTS</p>
                  </div>
                  <Button asChild variant="default" size="lg" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse-gradient" onClick={() => setIsMobileMenuOpen(false)}>
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
