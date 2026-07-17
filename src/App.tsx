import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollManager from "./components/common/scrol";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ReviewPage from "./pages/Review"; 
import WhyBenefitPage from "./pages/WhyBenefitPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <ScrollManager />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/why-benefit" element={<WhyBenefitPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;