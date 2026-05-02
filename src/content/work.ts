export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  packageLabel: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
};

export const workItems: WorkItem[] = [
  {
    slug: "lagoon-retreat",
    title: "The Designers Framework by Anita Vwede",
    category: "2026",
    packageLabel: "VISUAL IDENTITY",
    excerpt:
      "A hospitality concept needed a calm, elevated identity across web, social, and signage. We delivered a mark, palette, and pattern language that feels sun-warmed and intentional—extended into launch campaigns and on-property touchpoints.",
    imageSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=2400&q=95",
    imageAlt: "Resort pool at sunset",
  },
  {
    slug: "farm-folio-kitchen",
    title: "Design Week Lagos",
    category: "2025",
    packageLabel: "FULLY-CUSTOM WEBSITE DESIGN",
    excerpt:
      "A weekly micro-bakery and supper club wanted ordering to feel as considered as the food. We structured a mobile-first journey with preorder windows, rotating menus, and email capture that keeps the community loop tight.",
    imageSrc:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&w=2400&q=95",
    imageAlt: "Artisan bread and pastries on a wooden table",
  },
  {
    slug: "meridian-apparel",
    title: "Raise The Spirits Campaign",
    category: "2026",
    packageLabel: "INSTAGRAM + TIKTOK",
    excerpt:
      "Organic growth through narrative: founder story, product drops, and UGC—in a testing cadence that turned reach into repeat buyers without diluting brand heat.",
    imageSrc:
      "https://images.unsplash.com/photo-1441986300917-e64e3c4b3b62?auto=format&w=2400&q=95",
    imageAlt: "Clothing retail interior with warm lighting",
  },
];

export function getWorkBySlug(slug: string) {
  return workItems.find((w) => w.slug === slug);
}
