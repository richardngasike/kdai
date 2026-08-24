import { FiFileText, FiBookOpen, FiPhoneCall, FiDownload } from "react-icons/fi";
import PageHero from "@/components/PageHero/PageHero";
import { siteInfo } from "@/lib/siteData";
import styles from "./resources.module.css";

export const metadata = {
  title: "Resources",
  description:
    "Access guides, policy briefs and referral information from Kimunyak Differently Abled Initiative for persons with disabilities in Samburu County.",
  alternates: { canonical: "/resources/" },
};

const resources = [
  {
    icon: FiFileText,
    title: "Disability Rights Guide",
    description:
      "A plain-language guide to the rights of persons with disabilities under Kenyan law.",
  },
  {
    icon: FiBookOpen,
    title: "Inclusive Education Toolkit",
    description:
      "Practical guidance for parents, caregivers and teachers supporting children with disabilities.",
  },
  {
    icon: FiPhoneCall,
    title: "Referral Directory",
    description:
      "Contacts for healthcare, rehabilitation and counseling services across Samburu County.",
  },
  {
    icon: FiDownload,
    title: "Annual Report",
    description: "Our latest annual report detailing programs, impact and finances.",
  },
  {
    icon: FiFileText,
    title: "Policy Briefs",
    description:
      "Position papers on climate resilience, SRHR and inclusion policy in Samburu County.",
  },
  {
    icon: FiBookOpen,
    title: "Community Handbook",
    description:
      "A resource for community leaders on building disability-inclusive programs.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" image="/images/about-hero.jpg" />

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Knowledge Hub</p>
          <h2 className="sectionTitle">Guides, Toolkits & Reports</h2>
          <p className="sectionSub">
            Resources to support persons with disabilities, their families and
            partners working toward inclusion in Samburu County.
          </p>

          <div className={styles.grid}>
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div className={styles.card} key={r.title}>
                  <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.description}</p>
                  <a className={styles.link} href={`mailto:${siteInfo.email}`}>
                    Request a Copy
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
