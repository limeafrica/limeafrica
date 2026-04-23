import Image from "next/image";
import Link from "next/link";
import { brandLogo, brandLogoFooter, site } from "@/content/site";

type SiteLogoProps = {
  variant?: "header" | "footer" | "mobile";
  className?: string;
  /** When false, render image only (e.g. wrapped by another Link). */
  link?: boolean;
};

const variantStyles: Record<NonNullable<SiteLogoProps["variant"]>, string> = {
  header:
    "h-[30px] w-auto max-w-[min(46vw,168px)] sm:h-[34px] sm:max-w-[190px]",
  mobile: "h-[30px] w-auto max-w-[168px]",
  footer:
    "h-[52px] w-auto max-w-[min(94vw,420px)] sm:h-[72px] sm:max-w-[min(92vw,520px)] lg:h-[96px] lg:max-w-[620px]",
};

export function SiteLogo({
  variant = "header",
  className = "",
  link = true,
}: SiteLogoProps) {
  const mark = variant === "footer" ? brandLogoFooter : brandLogo;
  const img = (
    <Image
      src={mark.src}
      alt=""
      width={mark.width}
      height={mark.height}
      unoptimized
      className={`${variantStyles[variant]} object-contain object-left ${className}`}
      priority={variant === "header"}
      sizes={
        variant === "footer"
          ? "(max-width: 640px) 94vw, (max-width: 1024px) 520px, 620px"
          : "(max-width: 640px) 46vw, 200px"
      }
    />
  );

  if (!link) {
    return img;
  }

  const linkClass =
    variant === "header"
      ? "relative inline-flex h-full min-h-0 shrink-0 items-center leading-none"
      : "relative inline-flex shrink-0 items-center leading-none";

  return (
    <Link href="/" className={linkClass} aria-label={`${site.name} home`}>
      {img}
    </Link>
  );
}
