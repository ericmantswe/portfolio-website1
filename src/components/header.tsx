"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PROFILE_DATA } from '@/lib/data';

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-24 items-center justify-between text-sm uppercase tracking-widest">
        <Link href="/" className="flex flex-col">
          <span className="font-bold">{PROFILE_DATA.name}</span>
          <span className="text-foreground/60">Web Developer and Mechatronics Undergraduate</span>
        </Link>

        <div className="hidden md:flex flex-col text-right">
          <span>AVAILABLE FOR FREELANCE</span>
          <span className="text-foreground/60">WORK & PROJECTS</span>
        </div>
        
        <Button asChild variant="default" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse-gradient">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
