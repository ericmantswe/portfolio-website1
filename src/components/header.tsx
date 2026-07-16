"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA } from '@/lib/data';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500 py-3 md:py-4',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-2 md:py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="group flex flex-col">
          <span className={cn(
            "font-black text-base md:text-lg tracking-tighter uppercase transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            {PROFILE_DATA.name.split(' ')[0]}
          </span>
          <span className={cn(
            "text-[8px] md:text-[10px] uppercase tracking-widest transition-colors",
            isScrolled ? "text-muted-foreground" : "text-white/40"
          )}>
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
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
            <AnimatedThemeToggler 
              variant="diamond"
              className={cn(isScrolled ? "text-foreground" : "text-white")} 
            />
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <AnimatedThemeToggler 
            variant="diamond"
            className={cn(isScrolled ? "text-foreground" : "text-white")} 
          />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("h-8 w-8", isScrolled ? "text-foreground" : "text-white")}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background border-l-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-start justify-center h-full gap-6 py-10">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Home</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">About</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors">Portfolio</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors text-primary">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
