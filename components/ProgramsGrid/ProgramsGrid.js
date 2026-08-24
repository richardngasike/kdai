import Link from "next/link";
import { FiBookOpen, FiHeart, FiTrendingUp, FiMic, FiArrowRight } from "react-icons/fi";
import { programs } from "@/lib/siteData";
import styles from "./ProgramsGrid.module.css";

const icons = [FiBookOpen, FiHeart, FiTrendingUp, FiMic];

export default function ProgramsGrid({ linkToDetail = false }) {
  return (
    <div className={styles.grid}>
      {programs.map((p, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div className={styles.card} key={p.slug}>
            <div className={styles.imgWrap}>
              <img src={p.image} alt={p.title} />
            </div>
            <div className={styles.body}>
              <span className={styles.iconBadge}>
                <Icon aria-hidden="true" />
              </span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.summary}>{p.summary}</p>
              <Link href="/programs/" className={styles.link}>
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
