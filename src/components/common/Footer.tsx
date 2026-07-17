import { Link } from "react-router-dom";
import Logo from "./Logo";

const WHATSAPP_NUMBER = "919443212345";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#081c15] text-[#faf9f5]/90 border-t border-white/5 font-sans">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* 1. Company Info */}
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed text-gray-400">
            Leading FMCG company in Jayankondam, providing premium quality iodized salt, CTC tea, and detergent products.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="flex flex-col md:items-center">
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-5 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#d4a373] transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-[#d4a373] transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-[#d4a373] transition-colors">About Us</Link></li>
              <li><a href="/#reviews" className="hover:text-[#d4a373] transition-colors">Reviews</a></li>
            </ul>
          </div>
        </div>

        {/* 3. Get in Touch */}
        <div className="flex flex-col md:items-end">
          <div>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-5 border-b border-white/10 pb-2">Get in Touch</h3>
            <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
              <li>+91 94432 12345</li>
              <li className="break-all">contact@benefitllp.com</li>
              <li>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#d4a373] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-5 md:py-6">
        <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>© {year} Benefit LLP. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 font-medium text-[#d4a373]">
            <span>FSSAI Certified</span>
            <span className="hidden md:inline">|</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}