import Image from "next/image";
import Link from "next/link";
import { brandLogo, site } from "@/content/site";

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
  footer: "h-9 w-auto max-w-[200px] sm:h-10 sm:max-w-[220px]",
};

export function SiteLogo({
  variant = "header",
  className = "",
  link = true,
}: SiteLogoProps) {
  const img = (
    <Image
      src={brandLogo.src}
      alt=""
      width={brandLogo.width}
      height={brandLogo.height}
      unoptimized
      className={`${variantStyles[variant]} object-contain object-left ${className}`}
      priority={variant === "header"}
      sizes="(max-width: 640px) 46vw, 200px"
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
