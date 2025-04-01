import { Link } from "react-router-dom";

interface FeaturedProductProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

export const FeaturedProduct = ({ image, title, price, description }: FeaturedProductProps) => {
  return (
    <div className="group relative">
      <Link to="/menu" className="block">
        <div className="relative overflow-hidden mb-6 aspect-square rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>
        <div className="transform transition-all duration-300 group-hover:translate-x-2">
          <h3 className="text-xl font-light mb-3 tracking-wide group-hover:text-amber-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-amber-900 font-medium mb-3 tracking-wider">{price}</p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};
