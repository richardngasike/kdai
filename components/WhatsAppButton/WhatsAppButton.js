import { FaWhatsapp } from "react-icons/fa";
import { siteInfo } from "@/lib/siteData";
import styles from "./WhatsAppButton.module.css";


export default function WhatsAppButton({ message }) {
  const digits = siteInfo.phone.replace(/\D/g, "");
  const text = encodeURIComponent(
    message || "Hello K.D.A.I, I would like to know more about your programs."
  );
  const href = `https://wa.me/${digits}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}