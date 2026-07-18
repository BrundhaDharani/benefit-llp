import Hero from "../components/home/Hero";
import ProductRange from "../components/home/ProductRange";
import WhyBenefit from "../components/home/whyBenifit";
import Reviews from "../components/home/Reviews";
import ContactBanner from "../components/home/ContactBanner";


export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 md:gap-24 overflow-x-hidden">
      <Hero />
      <ProductRange />
      <WhyBenefit />
      <Reviews />
      <ContactBanner />
    </div>
  );
}