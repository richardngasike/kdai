"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  }

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.row}`}>
        <div className={styles.left}>
          <img src="/images/logo.jpeg" alt="" aria-hidden="true" />
          <p>
            Kimunyak Differently Abled Initiative (K.D.A.I) is dedicated to
            creating an inclusive society. Subscribe to stay updated.
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
            Email address
          </label>
          <input
            id="newsletter-email"
            className={styles.input}
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.submit} type="submit">
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
