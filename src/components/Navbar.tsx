
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-800 text-amber-50 py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6" />
          <span className="font-semibold text-xl">American Coffee Shop</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-amber-200 transition-colors">Home</Link>
          <Link to="/menu" className="hover:text-amber-200 transition-colors">Menu</Link>
          <Link to="/about" className="hover:text-amber-200 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-amber-200 transition-colors">Contact</Link>
          <Button variant="outline" className="bg-amber-600 text-white border-amber-400 hover:bg-amber-700">
            <Link to="/order">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 pt-2 pb-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/" className="py-2 hover:text-amber-200" onClick={toggleMenu}>Home</Link>
            <Link to="/menu" className="py-2 hover:text-amber-200" onClick={toggleMenu}>Menu</Link>
            <Link to="/about" className="py-2 hover:text-amber-200" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="py-2 hover:text-amber-200" onClick={toggleMenu}>Contact</Link>
            <Button variant="outline" className="bg-amber-600 text-white border-amber-400 hover:bg-amber-700 w-full">
              <Link to="/order" onClick={toggleMenu}>Order Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
