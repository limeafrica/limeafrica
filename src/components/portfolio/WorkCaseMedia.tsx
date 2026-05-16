"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ImageItem = { src: string; alt: string };

type WorkCaseMediaProps = {
  gallerySrcs: readonly string[];
  imageAlt: string;
};

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({
  className,
  direction,
}: {
  className?: string;
  direction: "left" | "right";
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

function MediaButton({
  src,
  alt,
  sizes,
  aspectClassName,
  priority,
  onOpen,
}: {
  src: string;
  alt: string;
  sizes: string;
  aspectClassName: string;
  priority?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={
        "group relative block w-full cursor-zoom-in overflow-hidden bg-[color:var(--hairline)] " +
        aspectClassName
      }
      aria-label={`Open image: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes={sizes}
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[color:var(--ink)]/0 transition duration-300 group-hover:bg-[color:var(--ink)]/40"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-white)]/95 text-[color:var(--ink)] shadow-lg ring-1 ring-[color:var(--hairline)] sm:h-14 sm:w-14">
          <ExpandIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
      </span>
    </button>
  );
}

function buildGalleryImages(
  gallerySrcs: readonly string[],
  imageAlt: string,
): ImageItem[] {
  return gallerySrcs.map((src) => ({ src, alt: imageAlt }));
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: ImageItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const current = images[index];
  const hasMultiple = images.length > 1;

  return (
    <LightboxBody
      images={images}
      index={index}
      onClose={onClose}
      onPrev={onPrev}
      onNext={onNext}
      current={current}
      hasMultiple={hasMultiple}
    />
  );
}

function LightboxBody({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  current,
  hasMultiple,
}: {
  images: ImageItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  current: ImageItem;
  hasMultiple: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--ink)]/96 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out"
        aria-label="Close image viewer"
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] transition hover:bg-[color:var(--brand-white)]/20 sm:right-6 sm:top-6"
        aria-label="Close"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] transition hover:bg-[color:var(--brand-white)]/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--brand-white)]/10 text-[color:var(--brand-white)] transition hover:bg-[color:var(--brand-white)]/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </>
      ) : null}

      <figure
        className="relative z-[1] h-full w-full max-h-[calc(100dvh-2rem)] max-w-[min(100%,72rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          unoptimized
          className="object-contain"
          sizes="100vw"
          priority
        />
        {hasMultiple ? (
          <figcaption className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 pb-2 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-white)]/70">
            {index + 1} / {images.length}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}

type WorkCaseMediaContextValue = {
  images: ImageItem[];
  openIndex: number | null;
  setOpenIndex: (index: number) => void;
  close: () => void;
  goPrev: () => void;
  goNext: () => void;
};

const WorkCaseMediaContext = createContext<WorkCaseMediaContextValue | null>(
  null,
);

function useWorkCaseMedia() {
  const ctx = useContext(WorkCaseMediaContext);
  if (!ctx) {
    throw new Error(
      "WorkCaseMedia components must be used within WorkCaseMediaProvider",
    );
  }
  return ctx;
}

export function WorkCaseMediaProvider({
  gallerySrcs,
  imageAlt,
  children,
}: WorkCaseMediaProps & { children: ReactNode }) {
  const images = useMemo(
    () => buildGalleryImages(gallerySrcs, imageAlt),
    [gallerySrcs, imageAlt],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, goPrev, goNext]);

  return (
    <WorkCaseMediaContext.Provider
      value={{
        images,
        openIndex,
        setOpenIndex,
        close,
        goPrev,
        goNext,
      }}
    >
      {children}
      {openIndex !== null ? (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={close}
          onPrev={goPrev}
          onNext={goNext}
        />
      ) : null}
    </WorkCaseMediaContext.Provider>
  );
}

export function WorkCaseGallery() {
  const { images, setOpenIndex } = useWorkCaseMedia();

  if (images.length === 0) return null;

  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((item, i) => (
        <MediaButton
          key={item.src}
          src={item.src}
          alt={item.alt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aspectClassName="aspect-[4/3]"
          onOpen={() => setOpenIndex(i)}
        />
      ))}
    </div>
  );
}
