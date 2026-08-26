import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { siteInfo } from "@/lib/siteData";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata = {
  metadataBase: new URL(siteInfo.domain),
  title: {
    default:
      "Kimunyak Differently Abled Initiative (K.D.A.I) | Disability CBO in Samburu County, Kenya",
    template: "%s | Kimunyak Differently Abled Initiative (K.D.A.I)",
  },
  description:
    "Kimunyak Differently Abled Initiative (K.D.A.I) is a Samburu County, Kenya community-based organization empowering persons with disabilities through education, healthcare, livelihoods, climate resilience and advocacy.",
  keywords: [
    "Kimunyak",
    "Kimunyak Differently Abled Initiative",
    "Kimunyak K.D.A.I",
    "K.D.A.I Samburu",
    "KDAI",
    "KDAI",
    "differently abled initiative Kenya",
    "differently abled Samburu County",
    "disability CBO Samburu",
    "disability organization Samburu County Kenya",
    "persons with disabilities Samburu",
    "persons with disabilities Kenya",
    "PWD advocacy Kenya",
    "PWD Samburu County",
    "disability rights Samburu",
    "disability inclusion Samburu",
    "children with disabilities Samburu",
    "inclusive education Samburu County",
    "community based organization Samburu",
    "Samburu County NGO disability",
  ],
  authors: [{ name: "Kimunyak Differently Abled Initiative" }],
  category: "Non-profit organization",
  openGraph: {
    title: "Kimunyak Differently Abled Initiative (K.D.A.I) | Samburu County, Kenya",
    description:
      "Empowering differently abled communities in Samburu County, Kenya through education, healthcare, livelihoods and advocacy.",
    url: siteInfo.domain,
    siteName: "Kimunyak Differently Abled Initiative (K.D.A.I)",
    images: ["/images/logo.jpeg"],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kimunyak Differently Abled Initiative (K.D.A.I)",
    description:
      "Empowering differently abled communities in Samburu County, Kenya.",
    images: ["/images/logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/images/logo.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  // Add real verification codes once available (Search Console, Bing Webmaster).
  // verification: { google: "xxxxxxxx", other: { "msvalidate.01": "xxxxxxxx" } },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Kimunyak Differently Abled Initiative",
  alternateName: "K.D.A.I",
  url: siteInfo.domain,
  logo: `${siteInfo.domain}/images/logo.jpeg`,
  description:
    "Kimunyak Differently Abled Initiative (K.D.A.I) is a community-based organization in Samburu County, Kenya, promoting the rights, inclusion, dignity and well-being of persons with disabilities.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Samburu County",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Samburu County, Kenya",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteInfo.phone,
    email: siteInfo.email,
    contactType: "customer service",
  },
  // Add real social profile URLs here once available — sameAs is a strong
  // trust/relevance signal for knowledge-panel and brand SEO.
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}