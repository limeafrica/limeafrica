export type BlogPost = {
  slug: string;
  title: string;
  /** Topic line (e.g. Strategy, Culture) */
  category: string;
  /** Shown on detail hero, e.g. May 2026 */
  publishedAt: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  storyParagraphs: string[];
  gallerySrcs: readonly string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "positioning-before-pixels",
    title: "The Power of Social Media for Small Businesses",
    category: "Strategy",
    publishedAt: "May 2026",
    excerpt:
      "Why the brief matters more than the mood board when you need creative that converts — and how we align stakeholders before anyone opens Figma.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&w=2400&q=95",
    imageAlt: "Team workshop at a whiteboard",
    gallerySrcs: ["/slider2.avif", "/Slider1.avif"] as const,
    storyParagraphs: [
      "Most broken launches do not fail in production. They fail in the room where nobody agreed what success meant.",
      "We start with positioning: who this is for, what tension they feel, and what change we are asking them to make. That clarity keeps visual and copy decisions honest when timelines shrink.",
      "When positioning is settled early, pixels move faster. Designers get constraints they can push against; writers get a spine for tone; media teams know which signals to amplify.",
      "If your next sprint starts with a deck full of references but empty on outcomes, pause. Name the promise in one sentence. Everything else gets easier after that.",
    ],
  },
  {
    slug: "channels-with-a-through-line",
    title: "SEO Best Practices to Boost Your Online Presence",
    category: "Channels",
    publishedAt: "April 2026",
    excerpt:
      "Paid, organic, and email only compound when they tell one story. Here is how we sequence messages so each touchpoint earns the next.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&w=2400&q=95",
    imageAlt: "Analytics dashboard on a laptop",
    gallerySrcs: ["/slider3B.webp", "/slider2.avif"] as const,
    storyParagraphs: [
      "Fragmented channel plans feel busy but read as noise. Audiences forgive an imperfect post; they rarely forgive a brand that contradicts itself across surfaces.",
      "We map the journey first: attention, consideration, proof, action. Each channel owns a job within that arc instead of competing for the same moment.",
      "Organic builds familiarity; paid accelerates the best-performing narratives; email deepens trust for people already leaning in. The creative brief is shared; only the format changes.",
      "Measure continuity, not just clicks. When message pull-through is strong, efficiency follows — often without raising spend.",
    ],
  },
  {
    slug: "creative-ops-that-scale",
    title: "How to Create Engaging Content That Converts",
    category: "Operations",
    publishedAt: "March 2026",
    excerpt:
      "Templates, reviews, and asset hygiene are not bureaucracy — they are how small teams ship premium work every week without burning out.",
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=2400&q=95",
    imageAlt: "Creative team collaborating at a table",
    gallerySrcs: ["/Slider1.avif", "/slider3B.webp"] as const,
    storyParagraphs: [
      "High-performing brands do not win because they have more ideas. They win because they finish more of the right ideas on schedule.",
      "Creative ops is the connective tissue: naming conventions, approval paths, and reusable components that keep campaigns coherent when five people touch the same asset.",
      "We bias toward lightweight rituals — short async reviews, single sources of truth for copy, and shot lists that respect production realities.",
      "The goal is not process for its own sake. It is fewer emergency fixes, clearer feedback, and room for craft where it actually moves the brand.",
    ],
  },
  {
    slug: "events-and-the-long-tail",
    title: "Events and the Long Tail",
    category: "Experiences",
    publishedAt: "February 2026",
    excerpt:
      "A flagship moment deserves a content system: before, during, and after — so the energy of one week carries into months of discovery and nurture.",
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&w=2400&q=95",
    imageAlt: "Conference hall with audience",
    gallerySrcs: ["/slider2.avif", "/slider3B.webp", "/Slider1.avif"] as const,
    storyParagraphs: [
      "Events concentrate attention. The mistake is treating that peak as the whole campaign.",
      "We plan capture and distribution alongside the run of show: stories that tease the themes beforehand, live moments worth resharing, and follow-ups that turn curiosity into conversation.",
      "Partnerships and panels extend reach when each activation ladders back to the same narrative — not a scatter of logos.",
      "When the lights go down, nurture keeps working: recap edits, attendee-specific routes, and paid retargeting that speaks to what people actually saw.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
