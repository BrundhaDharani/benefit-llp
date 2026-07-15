import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import ProductRange from "../components/home/ProductRange";
import WhyBenefit from "../components/home/WhyBenefit";
import Reviews from "../components/home/Reviews";
import ContactBanner from "../components/home/ContactBanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ProductRange />
        <WhyBenefit />
        <Reviews />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
