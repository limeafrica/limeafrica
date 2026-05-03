export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  packageLabel: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  /** Long-form narrative for portfolio detail */
  storyParagraphs: string[];
  /** Gallery below copy on case page */
  gallerySrcs: readonly string[];
};

export const workItems: WorkItem[] = [
  {
    slug: "designers-framework-anita-vwede-2026",
    title: "The Designers Framework by Anita Vwede",
    category: "2026",
    packageLabel: "DIGITAL ROLLOUT & COMMUNITY",
    excerpt:
      "A six-week masterclass by Anita Vwede for designers refining their craft. We built the digital presence end to end—creative direction, branding, content, social, filmed lessons, and community care—so the launch felt as elevated as the program. Over 350 students joined the inaugural class.",
    imageSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&w=2400&q=95",
    imageAlt: "Interior design mood board and materials",
    gallerySrcs: ["/Slider1.avif", "/slider2.avif", "/slider3B.webp"] as const,
    storyParagraphs: [
      "The Designers Framework is a six week masterclass convened by Anita Vwede, a renowned interior designer who has catered to the top 1% in Nigeria and beyond. The program was designed to help designers refine their craft and build structure around their work.",
      "For this project, our focus was on building a strong and consistent digital presence that reflected the value of the program and attracted the right audience.",
      "We handled the creative direction, design and branding, content creation, social media management, filming of pre-recorded class videos and supported the overall digital rollout for the launch and promotion of the masterclass.",
      "Every part of the process was designed to feel clear, intentional and aligned with the standard of the brand.",
      "Beyond promotion, we also managed the community throughout the program, ensuring participants stayed engaged, informed, and connected across the six weeks, creating a more interactive and seamless experience.",
      "Our efforts led to over 350 students enrolling in the inaugural class.",
    ],
  },
  {
    slug: "design-week-lagos-2025",
    title: "Our Strategy for Design Week Lagos 2025",
    category: "2025",
    packageLabel: "EVENT & SOCIAL STRATEGY",
    excerpt:
      "A milestone year at Lime: three clients at Design Week Lagos 2025—two exhibitors and one panelist—with tailored strategies, content, collaborations, and paid campaigns so each brand showed up with clarity before, during, and after the event. Strategy, storytelling, and a returning client who trusted us again.",
    imageSrc:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&w=2400&q=95",
    imageAlt: "Conference hall with stage lighting",
    gallerySrcs: ["/slider2.avif", "/Slider1.avif", "/slider3B.webp"] as const,
    storyParagraphs: [
      "Design Week Lagos 2025 marked a major milestone for us at Lime.",
      "After supporting one brand the previous year, we worked with three clients for the 2025 edition; two exhibitors and one panelist. Each brand showed up with clarity, confidence and a strong digital presence, backed by intentional strategy and storytelling.",
      "Our work started weeks before the event. We developed tailored digital strategies for each client, created focused content, supported collaborations and executed paid campaigns to ensure they stood out before, during, and after Design Week.",
      "One of the highlights for us was working again with a returning client. Trusting us for a second year affirmed that the strategy worked and the impact was real.",
      "Seeing our clients bring their ideas to life on such a big stage reminded us why we do what we do. For us, it’s not just about visibility. It’s about helping brands show up confidently in spaces that matter and making sure their stories are seen, heard, and remembered.",
      "Design Week Lagos 2025 was another reminder that when strategy meets storytelling, the results speak for themselves.",
    ],
  },
  {
    slug: "raise-the-spirits-2025",
    title: "Raise The Spirits Campaign",
    category: "2025",
    packageLabel: "END-TO-END CAMPAIGN",
    excerpt:
      "Raise The Spirits for Quench Beverages: awareness, visibility, and engagement built from planning and creative direction through full event coordination, influencers, email, and content—plus sustained engagement after launch. Clear lift in brand awareness and sales.",
    imageSrc:
      "https://images.unsplash.com/photo-1514362548157-3e27bf68a6dd?auto=format&w=2400&q=95",
    imageAlt: "Evening social gathering with drinks",
    gallerySrcs: ["/slider3B.webp", "/Slider1.avif", "/slider2.avif"] as const,
    storyParagraphs: [
      "The Raise The Spirits campaign for Quench Beverages was designed to build awareness, increase visibility and drive engagement for the brand.",
      "We handled the campaign end to end, from planning and creative direction to full event coordination. We also sourced and collaborated with relevant influencers to extend reach, while managing email marketing and content planning to keep communication clear and consistent throughout.",
      "Beyond the event, we focused on sustaining momentum by driving continued engagement around the campaign, ensuring it didn’t end as a one-time moment but stayed active and relevant.",
      "The campaign contributed to increased brand awareness and a noticeable boost in sales for Quench Beverages.",
    ],
  },
  {
    slug: "design-week-lagos-2024",
    title: "Our Strategy For Design Week Lagos 2024",
    category: "2024",
    packageLabel: "SPONSORSHIP & SOCIAL",
    excerpt:
      "We supported our client as a proud sponsor of Design Week Lagos 2024 with a digital marketing strategy that started weeks before the event—targeted content, collaborations, and paid ads—until attendees were finding the booth entirely through social.",
    imageSrc:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&w=2400&q=95",
    imageAlt: "Design exhibition booth and signage",
    gallerySrcs: ["/Slider1.avif", "/slider3B.webp", "/slider2.avif"] as const,
    storyParagraphs: [
      "Design Week Lagos 2024 was an exciting experience for us, especially since we supported our client, a proud sponsor of the event. With a solid digital marketing strategy (that started weeks before ‘D’ day) in place, we created targeted content, partnered on collaborations, and ran paid ads across our client’s social media platforms to ensure maximum visibility.",
      "The best part? Hearing attendees say they found the booth entirely through social media. It’s always rewarding to see the strategy pay off and prove that social media, when done right, really works.",
    ],
  },
];

export function getWorkBySlug(slug: string) {
  return workItems.find((w) => w.slug === slug);
}
