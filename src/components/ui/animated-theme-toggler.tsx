
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps {
  className?: string;
  variant?: "default" | "diamond";
}

export function AnimatedThemeToggler({ className, variant = "diamond" }: AnimatedThemeTogglerProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("relative h-9 w-9", className)}>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = (event: React.MouseEvent) => {
    const isAppearanceTransition =
      // @ts-ignore
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(async () => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      document.documentElement.animate(
        {
          clipPath: [
            `polygon(${centerX}px ${centerY}px, ${centerX}px ${centerY}px, ${centerX}px ${centerY}px, ${centerX}px ${centerY}px)`,
            `polygon(${centerX}px ${centerY - endRadius * 1.5}px, ${centerX + endRadius * 1.5}px ${centerY}px, ${centerX}px ${centerY + endRadius * 1.5}px, ${centerX - endRadius * 1.5}px ${centerY}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-9 w-9 overflow-hidden transition-all duration-300",
        variant === "diamond" && "rotate-45 hover:rotate-[225deg] border border-primary/20 hover:border-primary/50",
        className
      )}
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: variant === "diamond" ? -45 : 0 }}
          animate={{ y: 0, opacity: 1, rotate: variant === "diamond" ? -45 : 0 }}
          exit={{ y: -20, opacity: 0, rotate: variant === "diamond" ? -45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center w-full h-full"
        >
          {isDark ? (
            <Moon className="h-[1.1rem] w-[1.1rem]" />
          ) : (
            <Sun className="h-[1.1rem] w-[1.1rem]" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
