
import { Coffee, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="h-6 w-6 text-white" />
              <span className="font-light text-xl text-white tracking-wide">AMERICAN COFFEE</span>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed max-w-md">
              Serving quality coffee and delicious food in a warm, inviting atmosphere. 
              We're dedicated to crafting the perfect coffee experience for every customer.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-light text-lg text-white mb-6 tracking-wide">MENU</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors text-sm">Menu</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/order" className="text-gray-400 hover:text-white transition-colors text-sm">Order Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-light text-lg text-white mb-6 tracking-wide">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-sm">2219 N Commerce Pkwy, Weston, FL 33326</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-sm">(954) 389-8164</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-sm">info@americancoffeeshop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} American Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
