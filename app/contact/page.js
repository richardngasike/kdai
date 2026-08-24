import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import PageHero from "@/components/PageHero/PageHero";
import ContactForm from "@/components/ContactForm/ContactForm";
import { siteInfo } from "@/lib/siteData";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kimunyak Differently Abled Initiative (K.D.A.I) in Samburu County, Kenya.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" image="/images/contact-hero.jpg" />

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Get In Touch</p>
          <h2 className="sectionTitle">We&apos;d Love to Hear From You</h2>
          <p className="sectionSub">Reach out to us anytime.</p>

          <div className={styles.grid}>
            <div className={styles.detailsCard}>
              <h3>Contact Details</h3>
              <div className={styles.detailRow}>
                <FiMapPin />
                <div>
                  <strong>Location</strong>
                  <span>{siteInfo.location}</span>
                </div>
              </div>
              <div className={styles.detailRow}>
                <FiPhone />
                <div>
                  <strong>Phone</strong>
                  <span>{siteInfo.phone}</span>
                </div>
              </div>
              <div className={styles.detailRow}>
                <FiMail />
                <div>
                  <strong>Email</strong>
                  <span>{siteInfo.email}</span>
                </div>
              </div>
              <div className={styles.detailRow}>
                <FiClock />
                <div>
                  <strong>Working Hours</strong>
                  <span>{siteInfo.hours}</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="K.D.A.I location map"
              src="https://www.google.com/maps?q=Samburu%20County%2C%20Kenya&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
