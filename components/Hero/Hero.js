"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { heroSlides } from "@/lib/siteData";
import styles from "./Hero.module.css";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[index];

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.blobBg} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <h1 className={styles.eyebrowRow}>
            <span className={styles.line1}>{slide.eyebrow}</span>
            <span className={styles.line2}>{slide.title}</span>
            <span className={styles.line3}>
              {slide.highlight} <span className={styles.location}>{slide.location}</span>
            </span>
          </h1>
          <p className={styles.description}>{slide.description}</p>
          <div className={styles.actions}>
            <Link href="/programs/" className="btn btnPrimary">Our Programs</Link>
            <Link href="/get-involved/" className="btn btnOutline">Get Involved</Link>
          </div>

          <div className={styles.dots}>
            {heroSlides.map((s, i) => (
              <button
                key={s.title}
                className={`${styles.dotIndicator} ${
                  i === index ? styles.dotIndicatorActive : ""
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.blobFrame}>
            <img src={slide.image} alt={slide.title} />
            <span className={`${styles.dot} ${styles.dotGold}`} aria-hidden="true" />
            <span className={`${styles.dot} ${styles.dotGreen}`} aria-hidden="true" />
          </div>
          <div className={styles.navArrows}>
            <button className={styles.arrowBtn} onClick={prev} aria-label="Previous slide">
              <FiArrowLeft />
            </button>
            <button className={styles.arrowBtn} onClick={next} aria-label="Next slide">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
