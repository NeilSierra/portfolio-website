"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface InteractivePortraitProps {
  className?: string;
  name: string;
}

const POSES = [
  {
    id: "crossed-arms",
    src: "/assets/profile/profile-cutout-crossed-arms.png",
    label: "crossed arms",
  },
  {
    id: "waving",
    src: "/assets/profile/profile-cutout-waving.png",
    label: "waving hello",
  },
  {
    id: "thumbs-up",
    src: "/assets/profile/profile-cutout-thumbs-up.png",
    label: "thumbs up",
  },
] as const;

// Sequence: 1 (wave) -> 2 (thumbs up) -> 0 (crossed arms) -> repeat
const HOVER_SEQUENCE = [1, 2, 0];

export function InteractivePortrait({ className = "", name }: InteractivePortraitProps) {
  const [poseIndex, setPoseIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const stepRef = useRef<number>(0);

  const startAnimation = useCallback(() => {
    // Immediately switch to wave
    stepRef.current = 0;
    setPoseIndex(HOVER_SEQUENCE[0]);

    if (intervalRef.current) clearInterval(intervalRef.current);

    // After 1 second, cycle to thumbs-up, then crossed arms, then repeat
    intervalRef.current = setInterval(() => {
      stepRef.current = (stepRef.current + 1) % HOVER_SEQUENCE.length;
      setPoseIndex(HOVER_SEQUENCE[stepRef.current]);
    }, 1000);
  }, []);

  const stopAnimation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stepRef.current = 0;
    setPoseIndex(0); // Return back to default resting crossed arms
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      className={`relative group/portrait cursor-pointer select-none ${className}`}
      title="Hover to say hi!"
    >
      {POSES.map((pose, idx) => (
        <Image
          key={pose.id}
          src={pose.src}
          alt={`Portrait of ${name} (${pose.label})`}
          width={1024}
          height={1024}
          quality={100}
          unoptimized
          priority
          className={`w-auto h-full object-contain object-bottom drop-shadow-sm pointer-events-none transition-opacity duration-150 ${
            idx === 0 ? "relative z-10" : "absolute inset-0 z-10 mx-auto"
          } ${poseIndex === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

