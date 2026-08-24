import Link from "next/link";
import { FiHeart, FiGift, FiUsers, FiShare2 } from "react-icons/fi";
import PageHero from "@/components/PageHero/PageHero";
import CTASection from "@/components/CTASection/CTASection";
import { helpWays } from "@/lib/siteData";
import styles from "./get-involved.module.css";

export const metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, partner or spread the word to support K.D.A.I's mission of inclusion and empowerment for persons with disabilities in Samburu County.",
  alternates: { canonical: "/get-involved/" },
};

const icons = [FiUsers, FiGift, FiHeart, FiShare2];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero title="Get Involved" image="/images/get-involved-hero.jpg" />

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Join Us</p>
          <h2 className="sectionTitle">There Are Many Ways to Support Our Mission</h2>
          <p className="sectionSub">
            Every contribution, big or small, helps us build a more inclusive
            Samburu.
          </p>

          <div className={styles.grid}>
            {helpWays.map((w, i) => {
              const Icon = icons[i];
              return (
                <div className={styles.card} key={w.title}>
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 72 }}>
        <CTASection />
      </section>

      <section className="section" style={{ paddingTop: 0, textAlign: "center" }}>
        <div className="container">
          <h2 className="sectionTitle">Together, We Can Create Change</h2>
          <p className="sectionSub">
            Join us in building an inclusive and empowered Samburu.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/contact/" className="btn btnPrimary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
