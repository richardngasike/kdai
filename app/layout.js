import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { siteInfo } from "@/lib/siteData";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata = {
  metadataBase: new URL(siteInfo.domain),
  title: {
    default: "Kimunyak Differently Abled Initiative (K.D.A.I) | Samburu County, Kenya",
    template: "%s | K.D.A.I",
  },
  description:
    "K.D.A.I is a community-based organization in Samburu County, Kenya, promoting the rights, inclusion, dignity and well-being of persons with disabilities through education, healthcare, livelihoods and advocacy.",
  keywords: [
    "Kimunyak Differently Abled Initiative",
    "KDAI",
    "Samburu County disability organization",
    "persons with disabilities Kenya",
    "disability inclusion Samburu",
    "PWD advocacy Kenya",
  ],
  authors: [{ name: "Kimunyak Differently Abled Initiative" }],
  openGraph: {
    title: "Kimunyak Differently Abled Initiative (K.D.A.I)",
    description:
      "Empowering differently abled communities in Samburu County through education, healthcare, livelihoods and advocacy.",
    url: siteInfo.domain,
    siteName: "K.D.A.I",
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
    icon: "/images/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
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
