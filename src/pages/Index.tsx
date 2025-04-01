
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Clock, MapPin, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomePage = () => {
  const menuHighlights = [
    { name: "Signature Blend Coffee", price: "$3.25", description: "Our house specialty, rich and aromatic" },
    { name: "Caramel Macchiato", price: "$4.50", description: "Espresso with velvety milk and caramel" },
    { name: "Avocado Toast", price: "$8.95", description: "Sourdough bread with fresh avocado and toppings" },
    { name: "Chocolate Croissant", price: "$3.75", description: "Buttery pastry with rich chocolate filling" }
  ];

  const testimonials = [
    { author: "Sarah M.", text: "The coffee here is exceptional! I stop by every morning on my way to work." },
    { author: "Michael T.", text: "Love the atmosphere and the friendly staff. Great place to work remotely." },
    { author: "Jessica K.", text: "Their pastries are to die for! Perfect with their signature coffee blend." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-amber-900 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          aria-hidden="true"
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-amber-50">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to American Coffee Shop</h1>
            <p className="text-xl mb-8">Serving quality coffee and delicious food in a warm, inviting atmosphere at Oakland Park.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" size="lg">
                <Link to="/menu">View Our Menu</Link>
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-50 hover:bg-amber-800" size="lg">
                <Link to="/order">Order Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105">
              <Coffee className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Coffee</h3>
              <p className="text-gray-600">We source and brew the finest coffee beans for an exceptional experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105">
              <Clock className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Daily</h3>
              <p className="text-gray-600">Monday to Friday: 6AM - 8PM<br />Weekends: 7AM - 9PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105">
              <MapPin className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">41 Prospect Rd, Oakland Park, FL<br />Free parking available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Menu Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our most popular coffee drinks and food items, made with love and quality ingredients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{item.price}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/menu" className="flex items-center gap-1">
                Full Menu <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Cozy Atmosphere</h2>
              <p className="text-gray-600 mb-6">
                Experience our warm and inviting café atmosphere, perfect for catching up with friends, 
                working remotely, or simply enjoying a moment of peace with a perfect cup of coffee.
              </p>
              <p className="text-gray-600 mb-6">
                Our shop offers comfortable seating, free Wi-Fi, and a friendly environment where you'll 
                feel right at home. Join us and become part of our growing community.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Cozy café interior" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 bg-amber-700 rounded-lg shadow-md text-center">
                    <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                    <p className="font-medium text-amber-200">— {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Delicious Coffee?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Visit us today at American Coffee Shop or place an order online for pickup.
            We're looking forward to serving you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white" size="lg">
              <Link to="/order">Order Online</Link>
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-800 hover:bg-amber-100" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
