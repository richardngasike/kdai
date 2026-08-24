import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "center", minHeight: "50vh" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: 16 }}>Page Not Found</h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 28 }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btnPrimary">Back to Home</Link>
    </section>
  );
}
