"use client";

import { useState } from "react";
import { newsCategories, newsArticles } from "@/lib/siteData";
import styles from "@/app/news/news.module.css";

export default function NewsGrid() {
  const [active, setActive] = useState(newsCategories[0]);
  const featured = newsArticles.find((a) => a.featured);
  const rest = newsArticles.filter((a) => !a.featured);

  return (
    <>
      <div className={styles.tabs}>
        {newsCategories.map((c) => (
          <button
            key={c}
            className={`${styles.tab} ${active === c ? styles.tabActive : ""}`}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <article className={styles.featured}>
          <div className={styles.featuredImg}>
            <img src={featured.image} alt={featured.title} />
            <span className={styles.dateBadge}>
              <span className="day">{featured.day}</span>
              <span className="month">{featured.month}</span>
            </span>
          </div>
          <div className={styles.featuredBody}>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
          </div>
        </article>
      )}

      <div className={styles.grid}>
        {rest.map((a) => (
          <article className={styles.card} key={a.title}>
            <div className={styles.cardImg}>
              <img src={a.image} alt={a.title} />
              <span className={styles.dateBadge}>
                <span className="day">{a.day}</span>
                <span className="month">{a.month}</span>
              </span>
            </div>
            <div className={styles.cardBody}>
              <h4>{a.title}</h4>
              <p>{a.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
