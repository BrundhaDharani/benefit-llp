import Hero from "../components/home/Hero";
import WhyBenefit from "../components/home/whyBenifit";
import Reviews from "../components/home/Reviews";
import ContactBanner from "../components/home/ContactBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyBenefit />
      <Reviews />
      <ContactBanner />
    </>
  );
}