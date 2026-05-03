/** FAQ page — all user-facing copy (hero, items, closing, SEO). */

import { site } from "@/content/site";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Next.js `metadata` — title & description. */
export const faqPageMeta = {
  title: "FAQ",
  description: `Answers about working with ${site.name} — services, bundles, resources, and policies.`,
} as const;

/** `PageIntro` fields. */
export const faqHero = {
  eyebrow: "Help",
  title: "Frequently asked questions",
  subtitle:
    "Quick answers about how LimeAfrica works with brands—strategy, campaigns, content, and community. For a tailored conversation, use Work With Us.",
} as const;

export const faqItems: readonly FaqItem[] = [
  {
    question: "What does LimeAfrica do?",
    answer:
      "We are a Pan-African strategic media studio. We help brands clarify narrative and execute across digital channels—social, content, email, design, and campaign consulting—so marketing feels coherent and outcomes are measurable.",
  },
  {
    question: "Where are you based, and who do you work with?",
    answer:
      "Our studio is referenced from Lagos, Nigeria; we partner with brands across the continent and beyond. Geography matters less than fit—we look for teams that want thoughtful creative and disciplined execution.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the Work With Us page to tell us about your brand, goals, timeline, and budget range. We reply with next steps, which may include a discovery call and a written proposal or scope before any paid engagement begins.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our Services page outlines digital marketing execution (social, content, design, branding and strategy, email, and packages), one-to-one consulting, resource libraries, and content shoot bundles. Final deliverables and fees are always confirmed in writing for your specific brief.",
  },
  {
    question: "What are content bundles (e.g. Snap)?",
    answer:
      "Bundles are structured shoots for brands that want strong reusable assets without full ongoing social management. Each tier lists what is included—such as session length, creative direction on set, and delivery format. Posting to your accounts is not included unless explicitly contracted.",
  },
  {
    question: "Do you handle social media accounts for clients?",
    answer:
      "Yes, where scope includes management packages—access, scheduling, and channel stewardship are agreed upfront. For bundle-only or production-only work, we typically deliver assets for your team to publish unless we add management separately.",
  },
  {
    question: "What is the Community section about?",
    answer:
      "Community is where we highlight programmes, conversations, and partnerships that keep audiences connected to our work and to each other—aligned with how we build trust and long-term relationships beyond single campaigns.",
  },
  {
    question: "Are Resources and templates free?",
    answer:
      "Our Resources area gathers guides, templates, ebooks, courses, and webinars in one place. Some materials may be free and others paid or gated—we label access clearly on each asset or journey. When in doubt, ask via hello@limeafrica.com.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Public pages may show indicative package pricing (for example in local currency for content bundles). Custom retainers and campaigns are quoted after we understand scope. Taxes and third-party costs are clarified before you approve a proposal.",
  },
  {
    question: "Who owns the creative work?",
    answer:
      "Ownership and licensing of deliverables are defined in your contract—typically clients receive usage rights appropriate to the engagement once fees are settled. Portfolio use is covered separately so we can showcase work unless agreed otherwise.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Timelines depend on deliverables: a focused consulting sprint differs from a multi-month retainer. We align milestones in the proposal so you know what ships when.",
  },
  {
    question: "Where can I read your policies?",
    answer:
      "Our Privacy policy, Terms and conditions, and Cookies policy are linked in the site footer. They describe how we handle data, site use, and cookie preferences.",
  },
];

/** Bottom band below the accordion (links use `site.email` in the page). */
export const faqClosing = {
  lead: "Still unsure?",
  ctaLabel: "Start a brief",
  ctaHref: "/work-with-us",
  beforeEmail: "or email",
  trailing: ".",
} as const;
