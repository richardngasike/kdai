import PageHero from "@/components/PageHero/PageHero";
import NewsGrid from "@/components/NewsGrid/NewsGrid";

export const metadata = {
  title: "News & Media",
  description:
    "Stay updated with the latest news, events, stories and media from K.D.A.I's work in Samburu County.",
  alternates: { canonical: "/news/" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero title="News & Media" image="/images/news-hero.jpg" />
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ display: "block", textAlign: "center" }}>Latest Updates</p>
          <h2 className="sectionTitle">Stay Updated With Our Latest News</h2>
          <NewsGrid />
        </div>
      </section>
    </>
  );
}
