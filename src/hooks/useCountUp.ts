"use client";

import { type RefObject, useCallback, useEffect, useRef, useState } from "react";
import { easeOutCubic, prefersReducedMotion, supportsInViewTracking } from "@/lib/motion";

export type CountUpTiming = Readonly<{ firstViewMs: number; changeMs: number }>;

const FIRST_VIEW_THRESHOLD = 0.35;

/**
 * Returns the number to display. Counts up from zero the first time `ref` is in view,
 * then tweens between values when `target` changes. Shows `target` directly otherwise.
 */
export function useCountUp(target: number, ref: RefObject<HTMLElement | null>, timing: CountUpTiming): number {
  const [tweenValue, setTweenValue] = useState<number | null>(null);
  const shownRef = useRef(target);
  const targetRef = useRef(target);
  const frameRef = useRef(0);
  const hasBeenSeenRef = useRef(false);

  const tween = useCallback((from: number, to: number, durationMs: number) => {
    cancelAnimationFrame(frameRef.current);
    const startedAt = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / durationMs);
      const value = from + (to - from) * easeOutCubic(progress);
      shownRef.current = value;
      setTweenValue(progress < 1 ? value : null);
      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion() || !supportsInViewTracking()) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        hasBeenSeenRef.current = true;
        tween(0, targetRef.current, timing.firstViewMs);
      },
      { threshold: FIRST_VIEW_THRESHOLD },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, tween, timing.firstViewMs]);

  useEffect(() => {
    targetRef.current = target;
    if (!hasBeenSeenRef.current || prefersReducedMotion()) {
      shownRef.current = target;
      return;
    }
    tween(shownRef.current, target, timing.changeMs);
  }, [target, tween, timing.changeMs]);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return tweenValue ?? target;
}
