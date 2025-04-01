
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Coffee, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className={`h-6 w-6 ${isScrolled ? 'text-amber-800' : 'text-white'}`} />
          <span className="font-light text-xl tracking-wide">AMERICAN COFFEE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-amber-400 transition-colors text-sm tracking-wide">HOME</Link>
          <Link to="/menu" className="hover:text-amber-400 transition-colors text-sm tracking-wide">MENU</Link>
          <Link to="/about" className="hover:text-amber-400 transition-colors text-sm tracking-wide">ABOUT</Link>
          <Link to="/contact" className="hover:text-amber-400 transition-colors text-sm tracking-wide">CONTACT</Link>
          <Link to="/order" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-sm tracking-wide">SHOP</span>
          </Link>
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
        <div className="md:hidden bg-white text-black pt-4 pb-6 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 hover:text-amber-800" onClick={toggleMenu}>HOME</Link>
            <Link to="/menu" className="py-2 hover:text-amber-800" onClick={toggleMenu}>MENU</Link>
            <Link to="/about" className="py-2 hover:text-amber-800" onClick={toggleMenu}>ABOUT</Link>
            <Link to="/contact" className="py-2 hover:text-amber-800" onClick={toggleMenu}>CONTACT</Link>
            <Link to="/order" className="py-2 hover:text-amber-800 flex items-center gap-1" onClick={toggleMenu}>
              <ShoppingBag className="h-5 w-5" />
              <span>SHOP</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
