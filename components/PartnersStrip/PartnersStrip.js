import { partners } from "@/lib/siteData";
import styles from "./PartnersStrip.module.css";

export default function PartnersStrip() {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Our Partners &amp; Supporters</p>
      <div className={styles.row}>
        {partners.map((p) => (
          <span className={styles.logo} key={p.name}>
            <img src={p.image} alt={p.name} />
          </span>
        ))}
      </div>
    </div>
  );
}
