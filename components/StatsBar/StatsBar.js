import { FiTarget, FiUsers, FiFolder, FiHeart } from "react-icons/fi";
import { stats } from "@/lib/siteData";
import styles from "./StatsBar.module.css";

const icons = [FiTarget, FiUsers, FiFolder, FiHeart];

export default function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Our impact in numbers">
      <div className={`container ${styles.row}`}>
        {stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div className={styles.item} key={s.label}>
              <span className={styles.iconWrap}>
                <Icon aria-hidden="true" />
              </span>
              <div>
                <div className={styles.number}>{s.number}</div>
                <div className={styles.label}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
