
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Order = () => {
  const { toast } = useToast();
  const [orderType, setOrderType] = useState("pickup");
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    pickupTime: "",
  });

  const menuCategories = [
    {
      id: "coffee",
      name: "Coffee",
      items: [
        { id: "house-blend", name: "House Blend", price: 3.25 },
        { id: "latte", name: "Latte", price: 4.25 },
        { id: "cappuccino", name: "Cappuccino", price: 4.25 },
        { id: "mocha", name: "Mocha", price: 4.75 },
      ],
    },
    {
      id: "food",
      name: "Food",
      items: [
        { id: "croissant", name: "Croissant", price: 3.25 },
        { id: "avocado-toast", name: "Avocado Toast", price: 8.95 },
        { id: "breakfast-sandwich", name: "Breakfast Sandwich", price: 7.50 },
      ],
    },
  ];

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${item.name} added to your order.`,
    });
  };

  const handleRemoveFromCart = (itemId) => {
    const existingItem = cart.find((cartItem) => cartItem.id === itemId);
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== itemId));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In a real app, you would send the order to a server here
    console.log("Order placed:", { orderType, cart, customerInfo });
    
    toast({
      title: "Order Placed!",
      description: "Thank you for your order. We'll have it ready for pickup soon!",
    });
    
    // Reset form and cart
    setCart([]);
    setCustomerInfo({
      name: "",
      phone: "",
      email: "",
      pickupTime: "",
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-amber-900 text-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Order Online</h1>
          <p className="max-w-2xl mx-auto">
            Place your order for pickup at American Coffee Shop.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            
            {menuCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <Card key={item.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>${item.price.toFixed(2)}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button 
                          className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Order
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary & Checkout */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
                <CardDescription>
                  {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in your cart`}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {cart.length > 0 ? (
                  <div className="space-y-4">
                    {/* Order Type Selection */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Order Type</h3>
                      <div className="flex">
                        <Button
                          type="button"
                          variant={orderType === "pickup" ? "default" : "outline"}
                          className={orderType === "pickup" ? "bg-amber-600 text-white" : ""}
                          onClick={() => setOrderType("pickup")}
                        >
                          Pickup
                        </Button>
                      </div>
                    </div>
                    
                    {/* Cart Items */}
                    <div>
                      <h3 className="font-medium mb-2">Items</h3>
                      <ul className="divide-y">
                        {cart.map((item) => (
                          <li key={item.id} className="py-2 flex justify-between">
                            <div>
                              <p>{item.name}</p>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => handleRemoveFromCart(item.id)}
                              >
                                -
                              </Button>
                              <span>{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => handleAddToCart(item)}
                              >
                                +
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Total */}
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                    
                    {/* Customer Information Form */}
                    <form onSubmit={handlePlaceOrder} className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          id="pickupTime"
                          name="pickupTime"
                          value={customerInfo.pickupTime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                      >
                        Place Order
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500 mb-4">Add items from the menu to start your order.</p>
                    <Button 
                      variant="outline" 
                      className="border-amber-600 text-amber-800 hover:bg-amber-100"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Browse Menu
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
