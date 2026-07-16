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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500 py-4',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex flex-col">
          <span className={cn(
            "font-black text-lg tracking-tighter uppercase transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            {PROFILE_DATA.name.split(' ')[0]}
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-widest transition-colors",
            isScrolled ? "text-muted-foreground" : "text-white/40"
          )}>
            Portfolio
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div className={cn(
            "flex flex-col text-right text-[10px] tracking-[0.2em] font-bold uppercase",
            isScrolled ? "text-muted-foreground" : "text-white/40"
          )}>
            <span>Available for</span>
            <span className={isScrolled ? "text-foreground" : "text-white"}>Freelance</span>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className={cn(
              "rounded-full px-6 transition-all",
              isScrolled 
                ? "border-foreground hover:bg-foreground hover:text-background" 
                : "border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
            )}>
              <a href="#contact">Hire Me</a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background border-l-0">
                <SheetHeader>
                  <SheetTitle className="text-left text-2xl font-black uppercase tracking-tighter">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-start justify-center h-full gap-8 py-12">
                  <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Home</a>
                  <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors">About</a>
                  <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Portfolio</a>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors text-primary">Contact</a>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
