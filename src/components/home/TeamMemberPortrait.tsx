"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";

type TeamMemberPortraitProps = {
  name: string;
  src: string;
  role: string;
  bio: string;
};

export function TeamMemberPortrait({
  name,
  src,
  role,
  bio,
}: TeamMemberPortraitProps) {
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [hasFineHover, setHasFineHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const sync = () => setHasFineHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showBack = hovered || toggled;

  const handleClick = useCallback(() => {
    if (!hasFineHover) setToggled((t) => !t);
  }, [hasFineHover]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setToggled((t) => !t);
    }
  }, []);

  return (
    <div
      className="relative isolate w-full cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--brand-yellow)]"
      style={{ aspectRatio: "4 / 5" }}
      onMouseEnter={() => hasFineHover && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={showBack}
      aria-label={`${name}, ${role}. ${showBack ? "Bio visible" : "Hover or tap to read bio"}.`}
    >
      <div className="relative h-full w-full [perspective:1200px]">
        <div
          className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d]"
          style={{
            transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-xl bg-[color:var(--hairline)] ring-1 ring-[color:var(--hairline)] [backface-visibility:hidden]">
            <Image
              src={src}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 639px) min(calc(100vw - 2rem), 100vw), (max-width: 1023px) 45vw, (max-width: 1536px) 22vw, 280px"
              className="object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-0 flex max-h-full flex-col justify-center overflow-y-auto rounded-xl bg-[color:var(--ink)] p-5 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6"
          >
            <p className="font-title text-lg font-bold leading-snug text-[color:var(--brand-white)] sm:text-xl">
              {name}
            </p>
            <p className="font-sans mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--brand-yellow)]">
              {role}
            </p>
            <p className="font-sans mt-4 text-sm leading-relaxed text-[color:var(--brand-white)]/88 sm:text-[0.9375rem]">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
