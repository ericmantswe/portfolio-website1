
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

  const morphTime = 1.5;
  const cooldownTime = 1.5;

  const state = useRef({
    textIndex: texts.length - 1,
    time: new Date(),
    morph: 0,
    cooldown: cooldownTime,
  });

  const setMorph = useCallback((fraction: number) => {
    if (!text1Ref.current || !text2Ref.current) return;

    // Text 2 (incoming)
    const blur2 = Math.min(8 / fraction - 8, 100);
    const opacity2 = Math.pow(fraction, 0.4);
    text2Ref.current.style.filter = `blur(${blur2}px)`;
    text2Ref.current.style.opacity = `${opacity2}`;

    // Text 1 (outgoing)
    const f1 = 1 - fraction;
    const blur1 = Math.min(8 / f1 - 8, 100);
    const opacity1 = Math.pow(f1, 0.4);
    text1Ref.current.style.filter = `blur(${blur1}px)`;
    text1Ref.current.style.opacity = `${opacity1}`;

    text1Ref.current.textContent = texts[state.current.textIndex % texts.length];
    text2Ref.current.textContent = texts[(state.current.textIndex + 1) % texts.length];
  }, [texts]);

  const doCooldown = useCallback(() => {
    state.current.morph = 0;
    if (!text1Ref.current || !text2Ref.current) return;

    text2Ref.current.style.filter = "";
    text2Ref.current.style.opacity = "1";

    text1Ref.current.style.filter = "";
    text1Ref.current.style.opacity = "0";
  }, []);

  const doMorph = useCallback(() => {
    state.current.morph -= state.current.cooldown;
    state.current.cooldown = 0;

    let fraction = state.current.morph / morphTime;

    if (fraction > 1) {
      state.current.cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }, [setMorph, cooldownTime, morphTime]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = state.current.cooldown > 0;
      const dt = (newTime.getTime() - state.current.time.getTime()) / 1000;
      state.current.time = newTime;

      state.current.cooldown -= dt;

      if (state.current.cooldown <= 0) {
        if (shouldIncrementIndex) {
          state.current.textIndex++;
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
    <div className={cn("relative inline-block w-full h-[1.1em] overflow-visible", className)}>
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
