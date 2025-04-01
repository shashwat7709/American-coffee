
import { Coffee, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6" />
              <span className="font-semibold text-xl">American Coffee Shop</span>
            </div>
            <p className="mb-4 text-amber-200">
              Serving quality coffee and delicious food in a warm, inviting atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-amber-200 hover:text-white">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-amber-200 hover:text-white">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-200 hover:text-white">Home</Link></li>
              <li><Link to="/menu" className="text-amber-200 hover:text-white">Menu</Link></li>
              <li><Link to="/about" className="text-amber-200 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-amber-200 hover:text-white">Contact</Link></li>
              <li><Link to="/order" className="text-amber-200 hover:text-white">Order Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-200" />
                <span>41 Prospect Rd, Oakland Park, FL</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-200" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-200" />
                <span>info@americancoffeeshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-sm text-amber-400">
          <p>&copy; {new Date().getFullYear()} American Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
