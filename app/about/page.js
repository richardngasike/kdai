import { FiEye, FiCompass, FiCheckCircle } from "react-icons/fi";
import { FaHandsHelping, FaBalanceScale, FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import PageHero from "@/components/PageHero/PageHero";
import { coreValuesAbout, values, objectives, focusAreas } from "@/lib/siteData";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Learn about K.D.A.I's story, vision, mission and values as a community-based organization advancing disability rights and inclusion in Samburu County.",
  alternates: { canonical: "/about/" },
};

const pillarIcons = [FaHandsHelping, FaHandHoldingHeart, FaBalanceScale];
const valueIcons = [FaUsers, FiCheckCircle, FaHandHoldingHeart, FaHandsHelping];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/images/kdai7.jpeg" />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Who We Are</p>
          <h2 className="sectionTitle" style={{ textAlign: "left", marginBottom: 30 }}>
            Our Story
          </h2>

          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <p>
                Kimunyak Differently Abled Initiative (K.D.A.I) is a registered
                Community-Based Organization operating primarily in Samburu
                County, Kenya. K.D.A.I works to promote the rights, inclusion,
                dignity and well-being of persons with disabilities, with a
                focus on women, men, youth and children.
              </p>
              <p>
                Through a rights-based and people-centered approach, K.D.A.I
                implements programs in advocacy, climate action, capacity
                building, mental health, digital inclusion, sustainable
                livelihoods, education, healthcare and social inclusion.
              </p>

              <div className={styles.pillars}>
                {coreValuesAbout.map((v, i) => {
                  const Icon = pillarIcons[i];
                  return (
                    <div className={styles.pillar} key={v.title}>
                      <span className={styles.pillarIcon}>
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <strong>{v.title}</strong>
                        <span>{v.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.storyImg}>
              <img src="/images/kdai99.jpeg" alt="K.D.A.I community member" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.vmWrap}>
            <div className={styles.vmCard}>
              <h3><FiEye aria-hidden="true" /> Our Vision</h3>
              <p>
                To create an inclusive, equitable and resilient society where
                persons with disabilities thrive and actively participate in
                decision-making.
              </p>
            </div>
            <div className={styles.vmCard}>
              <h3><FiCompass aria-hidden="true" /> Our Mission</h3>
              <p>
                To empower persons with disabilities through advocacy, capacity
                building and sustainable development initiatives that promote
                inclusion, climate resilience, education, healthcare and
                mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Core Objectives</p>
          <h2 className="sectionTitle">What We Are Working Toward</h2>
          <div className={styles.objectivesList}>
            {objectives.map((o) => (
              <div className={styles.objectiveItem} key={o}>
                <FiCheckCircle />
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Strategic Focus Areas</p>
          <h2 className="sectionTitle">Where We Focus Our Work</h2>
          <div className={styles.focusList}>
            {focusAreas.map((f, i) => (
              <div className={styles.focusItem} key={f.title}>
                <span className={styles.focusNum}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="sectionTitle">Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div className={styles.valueCard} key={v.title}>
                  <span className={styles.valueIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h4>{v.title}</h4>
                  <p>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
