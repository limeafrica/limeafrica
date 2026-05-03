/** Structured copy for Terms, Privacy, and Cookies pages — align with site marketing copy in `site.ts` and `services.ts`. */

export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export const legalLastUpdated = "2 May 2026";

export const termsSections: readonly LegalSection[] = [
  {
    title: "Who we are",
    paragraphs: [
      "These Terms and Conditions (“Terms”) govern your use of the website operated by LimeAfrica (“we”, “us”, “our”), a Pan-African strategic media studio with operations referenced from Lagos, Nigeria.",
      "By browsing this site, submitting our contact or lead forms, downloading resources where offered, or otherwise using our digital properties, you agree to these Terms. If you do not agree, please discontinue use of the site.",
    ],
  },
  {
    title: "Services and website information",
    paragraphs: [
      "Our site describes strategic media services—including digital marketing execution, brand and campaign consulting, content creation, templates and educational resources, portfolio case references, and community programming. Package examples (such as content shoot bundles) illustrate typical offerings; final scope, fees, deliverables, and timelines are confirmed in a separate proposal, statement of work, or contract.",
      "Nothing on this website constitutes a binding offer. Availability, pricing, and package composition may change without notice until confirmed in writing between you and LimeAfrica.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless otherwise stated, all content on this site—including text, visuals, logos, layout, and downloadable assets made available through our channels—is owned by LimeAfrica or used under licence. You may not copy, scrape, redistribute, or commercially exploit site materials without our prior written consent.",
      "Client work shown in our portfolio remains subject to agreements with those clients; names and assets are displayed for illustration and may not be reproduced without permission from the rights holder.",
    ],
  },
  {
    title: "Your conduct",
    bullets: [
      "Use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.",
      "Do not attempt to gain unauthorised access to our systems, interfere with security, or transmit malware or harmful code.",
      "Do not misrepresent your identity or affiliation when contacting us or submitting forms.",
    ],
  },
  {
    title: "Third-party links",
    paragraphs: [
      "Our site may link to social platforms, partners, or tools we use in production. We are not responsible for the content or practices of third-party sites; your use of those services is governed by their respective terms and policies.",
    ],
  },
  {
    title: "Disclaimer and limitation of liability",
    paragraphs: [
      "The site and its content are provided on an “as is” basis. To the fullest extent permitted by applicable law, we disclaim warranties of any kind, whether express or implied, including fitness for a particular purpose and non-infringement.",
      "To the extent permitted by law, LimeAfrica shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of the site or reliance on information published here. Our total liability for any claim relating to the site shall not exceed the amount you paid us specifically for access to the same content or service giving rise to the claim in the twelve (12) months preceding the claim, or one hundred US dollars (USD 100), whichever is greater—except where such limitation is prohibited by law.",
    ],
  },
  {
    title: "Indemnity",
    paragraphs: [
      "You agree to indemnify and hold harmless LimeAfrica and its team from claims, damages, losses, or expenses (including reasonable legal fees) arising from your misuse of the site, violation of these Terms, or infringement of third-party rights.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles. Courts located in Nigeria shall have non-exclusive jurisdiction over disputes arising from these Terms or your use of the site, subject to any mandatory consumer protections in your place of residence.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update these Terms from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the site after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these Terms: hello@limeafrica.com.",
    ],
  },
];

export const privacySections: readonly LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "LimeAfrica (“we”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, store, and share personal information when you visit limeafrica.com, use our contact or lead forms, engage our services, or interact with our community and marketing channels.",
      "By using our site or submitting information to us, you acknowledge this Policy. If you do not agree, please do not use the site or submit personal data.",
    ],
  },
  {
    title: "What we collect",
    bullets: [
      "Identity and contact details you provide—such as name, email address, company or brand name, role, and message content—when you use “Work With Us”, subscribe to updates, or email us directly.",
      "Technical data from your visit, which may include IP address, browser type, device type, approximate region, and pages viewed, collected through cookies and similar technologies (see our Cookies policy).",
      "Engagement data relating to campaigns, deliverables, or programmes we run with you under contract—handled according to the relevant agreement.",
    ],
  },
  {
    title: "How we use your information",
    bullets: [
      "To respond to enquiries, qualify project fit, and deliver contracted strategic media, consulting, and production work.",
      "To operate and improve our website, resources, and community touchpoints.",
      "To send updates or marketing where you have opted in or where permitted by law; you can opt out of non-essential communications at any time.",
      "To comply with legal obligations, enforce our terms, and protect the rights, safety, and security of our clients, team, and visitors.",
    ],
  },
  {
    title: "Legal bases (where applicable)",
    paragraphs: [
      "Depending on your location, we rely on one or more of: your consent; performance of a contract or steps prior to contracting; our legitimate interests in running a professional studio and communicating with prospective clients; and compliance with legal duties.",
    ],
  },
  {
    title: "Sharing and processors",
    paragraphs: [
      "We do not sell your personal information. We may share data with trusted service providers who host our site, deliver email, or provide analytics—only as needed for those purposes and under appropriate safeguards. We may also disclose information if required by law or to protect our legal rights.",
    ],
  },
  {
    title: "International transfers",
    paragraphs: [
      "As a Pan-African studio we may process data in Nigeria and other countries where we or our tools operate. Where required, we use appropriate mechanisms (such as contractual clauses or your consent) to protect cross-border transfers.",
    ],
  },
  {
    title: "Retention",
    paragraphs: [
      "We keep personal data only as long as needed for the purposes above, including satisfying legal, accounting, or reporting requirements. Enquiry records and client files may be retained for different periods; contact us for more detail about specific categories.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Depending on applicable law, you may have the right to access, correct, delete, or restrict processing of your personal data, to object to certain processing, to data portability, and to withdraw consent where processing is consent-based.",
      "To exercise these rights, email hello@limeafrica.com. You may also lodge a complaint with your local data protection authority.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We implement reasonable technical and organisational measures to protect personal information. No online transmission is completely secure; use the site at your own risk beyond what we reasonably control.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "Our services and site are directed at businesses and adults. We do not knowingly collect personal information from children under the age where parental consent is required in their jurisdiction.",
    ],
  },
  {
    title: "Updates",
    paragraphs: [
      "We may revise this Privacy Policy from time to time. Material changes will be reflected by updating the “Last updated” date on this page.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Privacy questions: hello@limeafrica.com.",
    ],
  },
];

export const cookiesSections: readonly LegalSection[] = [
  {
    title: "What are cookies?",
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. They help the site remember preferences, understand how pages are used, and—in some cases—support marketing measurement.",
    ],
  },
  {
    title: "How LimeAfrica uses cookies",
    bullets: [
      "Essential cookies: required for basic site operation, security, and load balancing.",
      "Functional cookies: remember choices such as language or region where those features exist.",
      "Analytics cookies: help us understand traffic patterns and improve content and navigation (often via third-party tools configured for privacy-conscious settings).",
      "Marketing cookies (if enabled): may support measuring campaign effectiveness across platforms we use to promote our studio.",
    ],
  },
  {
    title: "Your choices",
    paragraphs: [
      "You can control cookies through your browser settings—blocking or deleting cookies may affect how certain parts of our site work.",
      "Where we deploy a consent banner or preference centre, you can adjust non-essential categories there. Essential cookies may remain active regardless, as they are necessary to deliver the service.",
    ],
  },
  {
    title: "Third parties",
    paragraphs: [
      "Some cookies are set by third-party services embedded on our site (for example analytics or video hosts). Those providers have their own privacy and cookie policies.",
    ],
  },
  {
    title: "Updates",
    paragraphs: [
      "We may update this Cookies policy when our practices or regulations change. Check the “Last updated” date on this page for the latest version.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about cookies: hello@limeafrica.com.",
    ],
  },
];
