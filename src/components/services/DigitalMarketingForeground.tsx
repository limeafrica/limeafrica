import Image from "next/image";
import {
  collageObjectPositionClass,
  type CollageObjectPosition,
} from "@/content/services";

type DigitalMarketingForegroundProps = {
  foregroundSrc: string;
  objectPosition?: CollageObjectPosition;
  className?: string;
};

/** Framed photo used in the digital marketing collage (desktop + mobile). */
export function DigitalMarketingForeground({
  foregroundSrc,
  objectPosition = "center",
  className = "",
}: DigitalMarketingForegroundProps) {
  return (
    <div
      className={
        "border-[14px] border-[color:var(--brand-white)] bg-[color:var(--brand-white)] " +
        "shadow-[0_32px_80px_-36px_rgba(26,22,18,0.55)] xl:border-[18px] " +
        className
      }
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={foregroundSrc}
          alt=""
          fill
          unoptimized
          className={`object-cover ${collageObjectPositionClass(objectPosition)}`}
          sizes="(max-width: 1023px) 70vw, 28vw"
        />
      </div>
    </div>
  );
}
