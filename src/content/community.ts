export const communityWhatsAppUrl =
  "https://chat.whatsapp.com/GR5H8nIt3PjB6k4GeoCQP5?mode=hqrt3" as const;

export const communityHero = {
  eyebrow: "Community",
  titleLead: "Join The",
  titleScript: "Lime",
  titleEnd: "Townhall",
  description:
    "A space for creatives in digital marketing to learn, grow, and connect.",
  supporting:
    "Access webinars, mentorship, real opportunities, and a community that actually helps you get better at what you do.",
  cta: "Join Community",
} as const;

export const communityIntro = {
  eyebrow: "The community",
  title: "Learn, Connect & Grow",
  /** Script accent under the title (matches About “what we do” pattern) */
  scriptLine: "Join the Lime Townhall",
  imageSrc: "/Pictures/1767983104924.webp" as const,
  paragraphs: [
    "The Lime Townhall is a space built for creatives in digital marketing who want to grow with clarity, build meaningful connections, and improve their craft.",
    "We focus on practical learning, shared experiences, and creating an environment where you’re not just consuming information but actively learning, contributing, and evolving alongside others in the industry.",
    "Whether you’re just starting out or already working with clients, the community is designed to support your growth at every stage.",
  ],
} as const;

export type CommunityOfferPlate = "dark" | "accent" | "gray" | "white" | "sand";

export type CommunityOfferTile = {
  slug: string;
  title: string;
  plate: CommunityOfferPlate;
  image: string;
  /** On-screen reading order (watermark 01–06) */
  visualOrder: number;
  gridArea: "c01" | "c02" | "c03" | "c04" | "c05" | "c06";
};

export const communityWhy = {
  eyebrow: "What you get",
  title: "Why Join the Lime Tribe?",
  tiles: [
    {
      slug: "webinars-workshops",
      title: "Access to exclusive webinars and skill building workshops",
      plate: "accent",
      image: "/Pictures/1767982390166.webp",
      visualOrder: 1,
      gridArea: "c01",
    },
    {
      slug: "networking",
      title: "Networking opportunities to connect with peers and pros",
      plate: "white",
      image: "/Pictures/1767982776036.webp",
      visualOrder: 2,
      gridArea: "c02",
    },
    {
      slug: "internships-jobs",
      title:
        "Internship and job opportunities to kickstart or elevate your career",
      plate: "dark",
      image: "/Pictures/1767982919719.webp",
      visualOrder: 3,
      gridArea: "c04",
    },
    {
      slug: "mentorship",
      title: "Mentorship from industry leaders",
      plate: "sand",
      image: "/Pictures/1767983218083.webp",
      visualOrder: 4,
      gridArea: "c03",
    },
    {
      slug: "collaborative-projects",
      title:
        "Collaborative projects to build hands on experience and improve your expertise",
      plate: "accent",
      image: "/Pictures/1767983600845.webp",
      visualOrder: 5,
      gridArea: "c06",
    },
    {
      slug: "tools-guidance",
      title:
        "Tools, tips, and guidance to sharpen your skills and become unstoppable in your role",
      plate: "dark",
      image: "/Pictures/1767984061340.webp",
      visualOrder: 6,
      gridArea: "c05",
    },
  ] satisfies readonly CommunityOfferTile[],
} as const;

export const communityVision = {
  title: "Beyond the Status Quo",
  body:
    "To become the ultimate destination for businesses seeking skilled social media managers and creative talent, fostering a community where professionals connect, grow, and deliver remarkable marketing results",
} as const;

export const communityClosingCta = {
  label: "Join the Townhall",
} as const;
