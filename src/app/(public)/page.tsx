import { Suspense } from "react";
import dynamic from "next/dynamic";

// --- 1. STATIC IMPORTS (CRITICAL) ---
// Komponen yang muncul pertama kali di layar (Above the Fold) jangan di-lazy load.
import { HeroSection } from "@/components/home/hero";
import { PromoSection } from "@/components/home/promo";
import { SectionLoading } from "@/components/shared/section-loading";

// --- 2. SERVER COMPONENTS (DATA FETCHING) ---
// Import biasa, tapi nanti dibungkus Suspense di JSX agar streaming data jalan.
import ClientSection from "@/components/home/client";
import { PortfolioSection } from "@/components/home/portfolio";

// --- 3. DYNAMIC IMPORTS (LAZY LOAD) ---
// Komponen UI berat yang ada di bawah, di-load saat user scroll.
// Kita gunakan .then((mod) => mod.NamaComponent) karena Anda pakai named export.

const AboutIntro = dynamic(
  () => import("@/components/home/about-intro").then((mod) => mod.AboutIntro),
  { loading: () => <div className="h-40 w-full bg-transparent" /> } // Placeholder ringan
);

const WhyUsSection = dynamic(
  () => import("@/components/home/why-us").then((mod) => mod.WhyUsSection),
  { loading: () => <SectionLoading /> }
);

const ProcessSection = dynamic(
  () => import("@/components/home/process").then((mod) => mod.ProcessSection),
  { loading: () => <SectionLoading /> }
);

const PricingSection = dynamic(
  () => import("@/components/home/pricing").then((mod) => mod.PricingSection),
  { loading: () => <SectionLoading /> }
);

const TestimonialSection = dynamic(
  () =>
    import("@/components/home/testimonial").then(
      (mod) => mod.TestimonialSection
    ),
  { loading: () => <SectionLoading /> }
);

const FAQSection = dynamic(
  () => import("@/components/home/faq").then((mod) => mod.FAQSection),
  { loading: () => <SectionLoading /> }
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-primary">
      {/* 1. HERO & PROMO (Langsung Muncul) */}
      <HeroSection />
      <PromoSection />

      {/* 2. SECTION STATIS (Lazy Load JS-nya) */}
      <AboutIntro />
      <WhyUsSection />
      <ProcessSection />

      {/* 3. PORTFOLIO (Fetch Database + Suspense) */}
      {/* Loading muncul hanya di kotak portfolio sampai data siap */}
      <Suspense fallback={<SectionLoading />}>
        <PortfolioSection />
      </Suspense>

      {/* 4. PRICING & TESTIMONI (Lazy Load) */}
      <PricingSection />
      <TestimonialSection />

      {/* 5. CLIENT (Fetch Database + Suspense) */}
      <Suspense fallback={<SectionLoading />}>
        <ClientSection />
      </Suspense>

      {/* 6. FAQ (Lazy Load - Paling Bawah) */}
      <FAQSection />
    </main>
  );
}
