export type ClientLogo = {
  /** Display name (used for alt text). */
  name: string;
  /** Path under `public/`. */
  logoSrc: string;
};

const BASE = "/Pictures/Client%20Logos";

export const clientLogos: ClientLogo[] = [
  { name: "Aretewood", logoSrc: `${BASE}/ARETEWOOD%20RESZED.png` },
  { name: "Camdal", logoSrc: `${BASE}/CAMDAL%20RESIZED.png` },
  { name: "Chop Chop", logoSrc: `${BASE}/CHOPCHOP.png` },
  { name: "Crafted Living", logoSrc: `${BASE}/CRAFTED%20LIVING%20RESIZED.png` },
  { name: "Kronospan", logoSrc: `${BASE}/KRONOSPAN%20RESIZED.png` },
  { name: "Matrix", logoSrc: `${BASE}/MATRIX%20RESIZED.png` },
  { name: "Noani", logoSrc: `${BASE}/NOANI%20RESIZED.png` },
  { name: "Quench", logoSrc: `${BASE}/QUENCH%20RESIZED.png` },
  { name: "Tey", logoSrc: `${BASE}/TEY%20RESIZED.png` },
  { name: "TOD", logoSrc: `${BASE}/TOD%20RESIZED.png` },
  { name: "Yaji", logoSrc: `${BASE}/YAJI%20RESIZED.png` },
];
