"use client";

import { useEffect, useState, useCallback } from "react";
import { FiArrowUp } from "react-icons/fi";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="Scroll back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
}