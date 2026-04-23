import Image from "next/image";

type TeamMemberPortraitProps = {
  name: string;
  src: string;
};

export function TeamMemberPortrait({ name, src }: TeamMemberPortraitProps) {
  return (
    <div
      className="relative isolate w-full overflow-hidden rounded-xl bg-[color:var(--hairline)] shadow-[0_20px_48px_-28px_rgba(26,22,18,0.22)] ring-1 ring-[color:var(--hairline)]"
      style={{ aspectRatio: "4 / 5" }}
    >
      <Image
        src={src}
        alt={`Portrait of ${name}`}
        fill
        unoptimized
        sizes="(max-width: 639px) min(calc(100vw - 2rem), 100vw), (max-width: 1023px) 33vw, 320px"
        className="object-cover object-center"
      />
    </div>
  );
}
