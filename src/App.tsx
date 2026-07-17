import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollManager from "./components/common/scrol";

// Lazy loading pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ReviewPage = lazy(() => import("./pages/Review"));
const WhyBenefitPage = lazy(() => import("./pages/WhyBenefitPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollManager />
      <Header />

      {/* min-h-screen ensures footer stays down */}
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
            <Route path="/why-benefit" element={<WhyBenefitPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;