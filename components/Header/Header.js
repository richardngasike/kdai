"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { nav, siteInfo } from "@/lib/siteData";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <div className={styles.topbarLeft}>
            <span className={styles.topbarItem}>
              <FiPhone aria-hidden="true" /> {siteInfo.phone}
            </span>
            <span className={styles.topbarItem}>
              <FiMail aria-hidden="true" /> {siteInfo.email}
            </span>
            <span className={styles.topbarItem}>
              <FiMapPin aria-hidden="true" /> {siteInfo.location}
            </span>
          </div>
          <div className={styles.topbarSocial}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={12} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={12} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={12} />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp size={12} />
            </a>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.logoMark}>
              <img src="/images/logo.jpeg" alt="K.D.A.I logo" width={52} height={52} />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>Kimunyak K.D.A.I</span>
              <span className={styles.brandSub}>Differently Abled Initiative</span>
            </span>
          </Link>

          <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.headerActions}>
            <Link href="/get-involved/" className="btn btnGold">
              Donate Now
            </Link>
            <button
              className={styles.menuToggle}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
