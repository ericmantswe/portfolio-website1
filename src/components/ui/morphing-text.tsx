'use client';

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export const MorphingText = ({ texts, className }: MorphingTextProps) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const morphTime = 1;
  const cooldownTime = 2;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  const setMorph = useCallback((fraction: number) => {
    if (!text1Ref.current || !text2Ref.current) return;

    text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  }, [texts, textIndex]);

  const doCooldown = useCallback(() => {
    morph = 0;
    if (!text1Ref.current || !text2Ref.current) return;

    text2Ref.current.style.filter = "";
    text2Ref.current.style.opacity = "100%";

    text1Ref.current.style.filter = "";
    text1Ref.current.style.opacity = "0%";
  }, []);

  const doMorph = useCallback(() => {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }, [cooldown, setMorph]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [doMorph, doCooldown]);

  return (
    <div className={cn("relative inline-block w-full h-[1.2em]", className)}>
      <svg id="filters" className="hidden">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center w-full h-full"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className="absolute inline-block w-full text-center select-none"
        ></span>
        <span
          ref={text2Ref}
          className="absolute inline-block w-full text-center select-none"
        ></span>
      </div>
    </div>
  );
};
