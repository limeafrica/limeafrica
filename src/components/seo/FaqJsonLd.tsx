import { faqItems } from "@/content/faq";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
        url: absoluteUrl("/faq"),
        isPartOf: { "@id": `${siteUrl}/#website` },
      }}
    />
  );
}
