import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <div className={styles.wrap}>
      <div className={styles.bg}>
        <img src="/images/kdai14.jpeg" alt="K.D.A.I community members together" />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>Together, We Can Build an Inclusive Tomorrow</h2>
        <p className={styles.text}>
          We believe in a world where everyone, regardless of ability, has the
          chance to live a full and meaningful life.
        </p>
        <div className={styles.actions}>
          <Link href="/get-involved/" className="btn btnGold">Donate Now</Link>
          <Link href="/get-involved/" className="btn btnOutlineLight">Partner With Us</Link>
        </div>
      </div>
      <button className={styles.playBtn} aria-label="Play video">
        <FiPlay />
      </button>
    </div>
  );
}
