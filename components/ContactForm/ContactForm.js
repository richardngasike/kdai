"use client";

import { useState } from "react";
import styles from "@/app/contact/contact.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <div className={styles.formCard}>
      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Your Email</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>
        <div className={styles.fullField}>
          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required />
          </div>
        </div>
        <div className={styles.fullField}>
          <div className={styles.field}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
        </div>
        <button type="submit" className="btn btnPrimary">
          Send Message
        </button>
        {sent && (
          <p className={styles.status} role="status">
            Thank you — your message has been received.
          </p>
        )}
      </form>
    </div>
  );
}
