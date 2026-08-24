import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { nav, siteInfo, programs } from "@/lib/siteData";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <span className={styles.logo}>
                <img src="/images/logo.jpeg" alt="K.D.A.I logo" width={44} height={44} />
              </span>
              <span className={styles.brandName}>Kimunyak D.A.I</span>
            </div>
            <p className={styles.desc}>
              Kimunyak Differently Abled Initiative (K.D.A.I) is dedicated to creating
              an inclusive society where persons with disabilities in Samburu County
              live with dignity, equality and opportunity.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook"><FaFacebookF size={14} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={14} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={14} /></a>
            </div>
          </div>

          <div>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Our Programs</h3>
            <ul className={styles.linkList}>
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href="/programs/">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <div className={styles.contactItem}>
              <FiMapPin /> <span>{siteInfo.location}</span>
            </div>
            <div className={styles.contactItem}>
              <FiPhone /> <span>{siteInfo.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <FiMail /> <span>{siteInfo.email}</span>
            </div>
            <div className={styles.contactItem}>
              <FiClock /> <span>{siteInfo.hours}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {year} Kimunyak Differently Abled Initiative (K.D.A.I). All Rights Reserved.</span>
          <span>Designed for Inclusion</span>
        </div>
      </div>
    </footer>
  );
}
