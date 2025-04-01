import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, CoffeeIcon } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FeaturedProduct } from "@/components/FeaturedProduct";

const HomePage = () => {
  const testimonials = [
    { author: "Sarah M.", text: "The coffee here is exceptional! I stop by every morning on my way to work." },
    { author: "Michael T.", text: "Love the atmosphere and the friendly staff. Great place to work remotely." },
    { author: "Jessica K.", text: "Their pastries are to die for! Perfect with their signature coffee blend." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg')`
          }}
          aria-hidden="true"
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center flex flex-col md:flex-row items-center">
          <div className="mx-auto max-w-3xl md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-white tracking-wide">AMERICAN COFFEE SHOP</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 font-light max-w-xl mx-auto">
              Serving quality coffee and delicious food in a warm, inviting atmosphere.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="bg-white hover:bg-gray-200 text-black rounded-none text-sm px-8 py-6" size="lg">
                <Link to="/menu">SHOP NOW</Link>
              </Button>
              <Button variant="outline" className="border-white bg-white hover:bg-gray-100 rounded-none text-sm px-8 py-6" size="lg">
                <Link to="/about" className="text-black">ABOUT US</Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative flex items-center justify-center">
            <div className="bg-amber-800/40 backdrop-blur-sm rounded-full w-64 h-64 flex items-center justify-center">
              <CoffeeIcon className="h-24 w-24 text-amber-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">FEATURED COFFEE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeaturedProduct 
              image="/images/products/mae-mu-kID9sxbJ3BQ-unsplash.jpg" 
              title="Signature Blend" 
              price="$16.99"
              description="Our house specialty, rich and aromatic with notes of chocolate and caramel."
            />
            <FeaturedProduct 
              image="/images/products/nicholas-doyle-t7jTtJ9iyUE-unsplash.jpg" 
              title="Single Origin" 
              price="$18.99"
              description="Carefully selected beans from premium coffee growing regions."
            />
            <FeaturedProduct 
              image="/images/products/simon-takatomi-OIJudXjmIxs-unsplash.jpg" 
              title="Espresso Blend" 
              price="$17.99"
              description="Bold and balanced, perfect for espresso drinks and cold brew."
            />
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="border-black text-black hover:bg-black/5 rounded-none">
              <Link to="/menu" className="flex items-center gap-2 px-6 py-2">
                VIEW ALL PRODUCTS <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">OUR COFFEE SHOP</h2>
          <GalleryGrid />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMjclHZpBkpxhAwMcKFv0MQ-HqNIajnm5O0a-Vq=w1080-h608-p-no-v0" 
                alt="Coffee shop interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="text-3xl font-light mb-6 tracking-wide">OUR STORY</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                American Coffee Shop was founded with a simple mission: to create a space where quality coffee, 
                delicious food, and warm hospitality combine to create an exceptional experience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in Weston, Florida, our shop has become a beloved community gathering place. 
                We source the finest beans and prepare them with care and precision, ensuring every cup 
                meets our exacting standards.
              </p>
              <Button variant="outline" className="border-black text-black hover:bg-black/5 rounded-none">
                <Link to="/about" className="px-6 py-2">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">WHAT PEOPLE SAY</h2>
          
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 text-center">
                    <p className="text-xl italic mb-6 text-gray-300 leading-relaxed">"{testimonial.text}"</p>
                    <p className="font-medium text-white">— {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6 text-white tracking-wide">VISIT US TODAY</h2>
          <p className="text-amber-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            We're located at 2219 N Commerce Pkwy, Weston, FL 33326.<br/>
            Open Monday to Friday: 7AM - 5:30PM • Saturday: 8AM - 3PM
          </p>
          <Button className="bg-white hover:bg-gray-200 text-amber-900 rounded-none" size="lg">
            <Link to="/contact" className="px-8 py-2">CONTACT US</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
