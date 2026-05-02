import { DigitalMarketingForeground } from "@/components/services/DigitalMarketingForeground";

type DigitalMarketingCollageProps = {
  foregroundSrc: string;
  /** Left editorial panel fill (default: `--ink`). */
  panelClassName?: string;
};

/**
 * Desktop (lg+): flush-left colored panel with framed image overlapping bottom-right.
 */
export function DigitalMarketingCollage({
  foregroundSrc,
  panelClassName = "bg-[color:var(--ink)]",
}: DigitalMarketingCollageProps) {
  return (
    <div
      className={
        "relative hidden w-full lg:block " +
        "h-[min(80vh,820px)] lg:min-h-[460px]"
      }
    >
      <div
        aria-hidden
        className={
          "absolute left-0 top-[38%] h-[min(64vh,600px)] w-[82%] max-w-[520px] " +
          `-translate-y-1/2 ${panelClassName}`
        }
      />

      {/* Framed overlap — bottom-right */}
      <div
        className={
          "absolute bottom-[9%] right-0 z-[1] w-[min(76%,500px)] max-w-[500px] xl:bottom-[10%]"
        }
      >
        <DigitalMarketingForeground foregroundSrc={foregroundSrc} />
      </div>
    </div>
  );
}
