import Hero from "@/components/Hero/Hero";
import StatsBar from "@/components/StatsBar/StatsBar";
import ProgramsGrid from "@/components/ProgramsGrid/ProgramsGrid";
import CTASection from "@/components/CTASection/CTASection";
import PartnersStrip from "@/components/PartnersStrip/PartnersStrip";
import Newsletter from "@/components/Newsletter/Newsletter";

export const metadata = {
  title: "Home",
  description:
    "Kimunyak Differently Abled Initiative (K.D.A.I) empowers persons with disabilities in Samburu County, Kenya through education, health, livelihoods and advocacy.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <section className="section" aria-labelledby="programs-heading">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>
            What We Do
          </p>
          <h2 id="programs-heading" className="sectionTitle">Our Core Programs</h2>
          <p className="sectionSub">
            We run life-changing programs that create real impact across
            Samburu County.
          </p>
          <ProgramsGrid />
        </div>
      </section>

      <section className="container">
        <CTASection />
      </section>

      <section className="section" style={{ paddingBottom: 8 }}>
        <div className="container">
          <PartnersStrip />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
