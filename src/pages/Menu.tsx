
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  
  const categories = [
    { id: "coffee", name: "Coffee" },
    { id: "tea", name: "Tea" },
    { id: "pastries", name: "Pastries" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
  ];
  
  const menuItems = {
    coffee: [
      { name: "House Blend", price: "$3.25", description: "Our signature blend with notes of chocolate and caramel" },
      { name: "Espresso", price: "$2.75", description: "Rich and bold single shot" },
      { name: "Americano", price: "$3.00", description: "Espresso with hot water" },
      { name: "Latte", price: "$4.25", description: "Espresso with steamed milk and a light layer of foam" },
      { name: "Cappuccino", price: "$4.25", description: "Equal parts espresso, steamed milk, and foam" },
      { name: "Mocha", price: "$4.75", description: "Espresso with chocolate and steamed milk" },
      { name: "Caramel Macchiato", price: "$4.50", description: "Vanilla, steamed milk, espresso, and caramel drizzle" },
      { name: "Cold Brew", price: "$4.50", description: "Smooth coffee brewed cold for 12 hours" },
    ],
    tea: [
      { name: "Earl Grey", price: "$3.00", description: "Black tea with bergamot" },
      { name: "Green Tea", price: "$3.00", description: "Traditional green tea" },
      { name: "Chai Latte", price: "$4.25", description: "Spiced tea with steamed milk" },
      { name: "Herbal Tea", price: "$3.00", description: "Caffeine-free herbal blend" },
      { name: "Iced Tea", price: "$3.25", description: "House-brewed iced tea" },
    ],
    pastries: [
      { name: "Croissant", price: "$3.25", description: "Buttery, flaky pastry" },
      { name: "Chocolate Croissant", price: "$3.75", description: "Croissant with rich chocolate filling" },
      { name: "Muffin", price: "$3.50", description: "Blueberry or chocolate chip" },
      { name: "Cinnamon Roll", price: "$4.25", description: "Freshly baked with cream cheese frosting" },
      { name: "Scone", price: "$3.75", description: "Cranberry orange or vanilla bean" },
    ],
    breakfast: [
      { name: "Avocado Toast", price: "$8.95", description: "Sourdough bread with avocado, egg, and toppings" },
      { name: "Breakfast Sandwich", price: "$7.50", description: "Egg, cheese, and choice of meat on a bagel" },
      { name: "Yogurt Parfait", price: "$5.25", description: "Greek yogurt with granola and berries" },
      { name: "Oatmeal", price: "$4.75", description: "Steel cut oats with choice of toppings" },
      { name: "Breakfast Burrito", price: "$8.25", description: "Eggs, cheese, potatoes, and vegetables" },
    ],
    lunch: [
      { name: "Turkey Club", price: "$9.50", description: "Turkey, bacon, lettuce, tomato, and mayo on sourdough" },
      { name: "Caprese Sandwich", price: "$8.95", description: "Fresh mozzarella, tomato, basil, and balsamic on ciabatta" },
      { name: "Chicken Caesar Wrap", price: "$9.25", description: "Grilled chicken, romaine, parmesan, and Caesar dressing" },
      { name: "Quinoa Bowl", price: "$10.25", description: "Quinoa, roasted vegetables, and tahini dressing" },
      { name: "Soup of the Day", price: "$5.75", description: "Ask about our daily selection" },
    ],
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-amber-900 text-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="max-w-2xl mx-auto">
            Explore our selection of handcrafted coffee drinks, teas, pastries, and delicious food items,
            all made with quality ingredients.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={activeCategory === category.id 
                ? "bg-amber-600 hover:bg-amber-700 text-white" 
                : "border-amber-600 text-amber-800 hover:bg-amber-100"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-amber-600 font-medium">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Place your order online for quick pickup, or visit us at American Coffee Shop!
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link to="/order">Order Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
