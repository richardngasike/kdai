import Link from "next/link";
import styles from "./PageHero.module.css";

export default function PageHero({ title, image, crumb }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.crumbs}>
          <Link href="/">Home</Link> <span>/</span> <span>{crumb || title}</span>
        </p>
      </div>
    </section>
  );
}
