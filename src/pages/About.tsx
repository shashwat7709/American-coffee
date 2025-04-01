
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Coffee, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-amber-900 text-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto">
            Learn more about American Coffee Shop, our story, values, and commitment to quality.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                American Coffee Shop was founded in 2010 with a simple mission: to create a warm, 
                welcoming space where the Oakland Park community could enjoy exceptional coffee 
                and delicious food.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small corner café has grown into a beloved local institution, 
                thanks to our commitment to quality ingredients, excellent service, and community 
                engagement. Over the years, we've expanded our menu and space, but we've never 
                lost sight of what matters most - creating a place that feels like home.
              </p>
              <p className="text-gray-700">
                Today, American Coffee Shop is proud to be a gathering place for locals and visitors 
                alike, where friendships are formed, ideas are shared, and everyone can find a moment 
                of comfort in their busy day.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" 
                  alt="Coffee shop interior with customers" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Coffee className="h-14 w-14 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source the finest coffee beans and ingredients, ensuring every cup and bite 
                offers an exceptional experience. Our commitment to quality is unwavering.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-14 w-14 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Focused</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our customers, suppliers, and 
                the local community. American Coffee Shop is more than a café—it's a community hub.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Clock className="h-14 w-14 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Consistency & Care</h3>
              <p className="text-gray-600">
                Whether it's your first visit or your hundredth, you can count on consistent quality 
                and service delivered with genuine care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-amber-600 mb-2">Owner & Head Barista</p>
              <p className="text-gray-600">
                Coffee enthusiast with over 15 years of experience in specialty coffee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Michael Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
              <p className="text-amber-600 mb-2">Head Chef</p>
              <p className="text-gray-600">
                Culinary artist who brings creativity and flavor to our food menu.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Emily Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Emily Chen</h3>
              <p className="text-amber-600 mb-2">Manager</p>
              <p className="text-gray-600">
                Dedicated to creating an exceptional experience for every customer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
