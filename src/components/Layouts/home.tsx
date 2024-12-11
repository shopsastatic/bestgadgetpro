import { Banner } from "./banner/banner";
import FeaturedReviews from "./home/FeaturedReviews";
import OurProcess from "./home/OurProcess";
import ProductReviewsGrid from "./home/ProductReviewsGrid";
import TrustSection from "./home/TrustSection";
import PageContainer from "./PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Banner />
      <ProductReviewsGrid />
      <OurProcess />
      <TrustSection />
      <FeaturedReviews />
    </PageContainer>
  );
}