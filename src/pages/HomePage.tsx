import Hero from "../components/home/Hero";
import WhyBenefit from "../components/home/whyBenifit";
import Reviews from "../components/home/Reviews";
import ContactBanner from "../components/home/ContactBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      <Hero />
      <WhyBenefit />
      <Reviews />
      <ContactBanner />
    </div>
  );
}