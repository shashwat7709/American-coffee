
import { Link } from "react-router-dom";

interface FeaturedProductProps {
  image: string;
  title: string;
  price: string;
  description: string;
}

export const FeaturedProduct = ({ image, title, price, description }: FeaturedProductProps) => {
  return (
    <div className="group">
      <Link to="/menu" className="block">
        <div className="overflow-hidden mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-light mb-2 tracking-wide">{title}</h3>
        <p className="text-gray-900 font-medium mb-2">{price}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </Link>
    </div>
  );
};
