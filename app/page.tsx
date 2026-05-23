import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sectors } from "@/components/sections/Sectors";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barquisimeto",
      addressRegion: "Lara",
      addressCountry: "VE",
    },
    serviceType: [
      "Cobertura de commodities",
      "Cobertura cambiaria",
      "Cobertura de metales",
      "Asesoría macroeconómica",
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <Sectors />
        <WhyUs />
        <CaseStudy />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
