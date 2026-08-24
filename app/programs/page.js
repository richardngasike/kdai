import PageHero from "@/components/PageHero/PageHero";
import { programs } from "@/lib/siteData";
import styles from "./programs.module.css";

export const metadata = {
  title: "Our Programs",
  description:
    "Explore K.D.A.I's core programs in education, health, economic empowerment and advocacy for persons with disabilities in Samburu County.",
  alternates: { canonical: "/programs/" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Our Programs" image="/images/about-hero.jpg" />

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>What We Do</p>
          <h2 className="sectionTitle">Programs That Transform Lives</h2>
          <p className="sectionSub">
            We implement impactful programs that uplift persons with
            disabilities and their communities across Samburu County.
          </p>

          <div className={styles.grid}>
            {programs.map((p) => (
              <article className={styles.card} key={p.slug}>
                <div className={styles.imgWrap}>
                  <img src={p.image} alt={p.title} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p>{p.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.approachWrap}>
            <p className="eyebrow">Our Approach</p>
            <p>
              K.D.A.I uses a rights-based, disability-led, people-centered and
              community-driven approach. We work with persons with disabilities,
              children and their families, caregivers, community leaders,
              schools, healthcare providers, government institutions and
              development partners to create sustainable and inclusive
              solutions. K.D.A.I believes that disability should never be a
              barrier to education, healthcare, economic opportunity,
              leadership, dignity or full participation in society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
