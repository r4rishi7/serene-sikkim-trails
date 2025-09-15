import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, Star, Package, CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const MarketplacePage = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const products = [
    {
      id: 1,
      name: "Traditional Buddha Idol",
      price: 2500,
      image: "🧘‍♂️",
      description: "Handcrafted brass Buddha statue from local artisans",
      category: "Idols",
      rating: 4.8
    },
    {
      id: 2,
      name: "Tibetan Prayer Wheel",
      price: 1200,
      image: "☸️",
      description: "Authentic prayer wheel with sacred mantras",
      category: "Handicrafts",
      rating: 4.9
    },
    {
      id: 3,
      name: "Ancient Manuscript Copy",
      price: 800,
      image: "📜",
      description: "Digital print of ancient Buddhist manuscript",
      category: "Manuscripts",
      rating: 4.7
    },
    {
      id: 4,
      name: "Thangka Painting",
      price: 3500,
      image: "🎨",
      description: "Traditional Tibetan Buddhist painting on canvas",
      category: "Art",
      rating: 4.9
    },
    {
      id: 5,
      name: "Singing Bowl Set",
      price: 1800,
      image: "🥣",
      description: "Handmade singing bowl with striker and cushion",
      category: "Handicrafts",
      rating: 4.8
    },
    {
      id: 6,
      name: "Monastery Incense",
      price: 300,
      image: "🕯️",
      description: "Sacred incense blessed in Sikkim monasteries",
      category: "Spiritual",
      rating: 4.6
    },
    {
      id: 7,
      name: "Himalayan Mala Beads",
      price: 650,
      image: "📿",
      description: "108 bead mala for meditation and prayer",
      category: "Spiritual",
      rating: 4.7
    },
    {
      id: 8,
      name: "Traditional Khada Scarf",
      price: 450,
      image: "🧣",
      description: "White ceremonial scarf for blessings",
      category: "Textiles",
      rating: 4.5
    }
  ];

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast(`${product.name} added to cart!`);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast("Your cart is empty!");
      return;
    }
    setShowCheckout(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentMethod) {
      toast("Please select a payment method");
      return;
    }
    
    // Simulate order processing
    setOrderComplete(true);
    toast("🙏 Order placed successfully! Payment request sent to UPI.");
    
    // Reset after 5 seconds
    setTimeout(() => {
      setOrderComplete(false);
      setShowCheckout(false);
      setCart([]);
      setCustomerInfo({
        name: '',
        address: '',
        phone: '',
        email: ''
      });
      setPaymentMethod('');
    }, 5000);
  };

  if (orderComplete) {
    return (
      <main className="min-h-screen bg-spiritual-gradient flex items-center justify-center px-4">
        <Card className="max-w-2xl mx-auto border-monastery-light bg-white/90 backdrop-blur-sm animate-monastery-fade">
          <CardContent className="text-center py-16">
            <div className="w-20 h-20 bg-monastery-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-monastery-glow">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-monastery-green mb-4">Order Placed Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for supporting Sikkim's monasteries and local artisans. 
              Your UPI payment request has been sent.
            </p>
            <div className="bg-monastery-light/50 p-6 rounded-lg">
              <p className="text-monastery-green font-medium italic text-lg mb-2">
                "May these sacred items bring peace, prosperity, and spiritual growth to your life. 
                Each purchase helps preserve our ancient traditions and supports our monastery communities."
              </p>
              <p className="text-sm text-muted-foreground">- Blessing from Sikkim Monasteries</p>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Order Total: ₹{getTotalAmount()}</p>
              <p>You will receive order confirmation via email/SMS</p>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (showCheckout) {
    return (
      <main className="min-h-screen bg-spiritual-gradient py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-monastery-green mb-4">Checkout</h1>
            <p className="text-muted-foreground">Complete your sacred purchase</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            {/* Order Summary */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-monastery-green">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-bold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount:</span>
                    <span className="text-monastery-green">₹{getTotalAmount()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-monastery-green">Customer Information</CardTitle>
                <CardDescription>Your details for order processing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="border-monastery-light"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                    className="border-monastery-light"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="border-monastery-light"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="border-monastery-light"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Email helps us notify you about order updates and monastery events
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-monastery-green">Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpay">Google Pay</SelectItem>
                    <SelectItem value="phonepe">PhonePe</SelectItem>
                    <SelectItem value="paytm">Paytm</SelectItem>
                    <SelectItem value="bhim">BHIM UPI</SelectItem>
                    <SelectItem value="other">Other UPI Apps</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setShowCheckout(false)}
                className="flex-1"
              >
                Back to Cart
              </Button>
              <Button 
                type="submit"
                className="btn-monastery flex-1"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Pay ₹{getTotalAmount()}
              </Button>
            </div>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-spiritual-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-monastery-fade">
          <Badge className="mb-6 bg-monastery-light text-monastery-green px-6 py-2 text-lg">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Sacred Marketplace
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-monastery-green mb-6">
            Monastery Marketplace
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic handicrafts, sacred idols, and spiritual items blessed by Sikkim's monasteries. 
            Every purchase supports local artisans and monastery communities.
          </p>
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <Card className="mb-8 border-monastery-light bg-monastery-light/30 backdrop-blur-sm">
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <ShoppingCart className="w-5 h-5 text-monastery-green" />
                  <span className="font-medium">
                    {cart.reduce((total, item) => total + item.quantity, 0)} items in cart
                  </span>
                  <span className="text-2xl font-bold text-monastery-green">₹{getTotalAmount()}</span>
                </div>
                <Button onClick={handleCheckout} className="btn-monastery">
                  Proceed to Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="hover-monastery border-monastery-light animate-monastery-scale bg-white/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{product.image}</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <CardTitle className="text-monastery-green text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-monastery-light text-monastery-green">
                    {product.category}
                  </Badge>
                  <span className="text-2xl font-bold text-monastery-green">₹{product.price}</span>
                </div>
                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full btn-monastery"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Info */}
        <Card className="mt-16 border-monastery-light bg-monastery-light/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-monastery-green">Secure Payment & Support</CardTitle>
            <CardDescription>Supporting monasteries and local artisans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CreditCard className="w-8 h-8 text-monastery-green mx-auto mb-2" />
                <h3 className="font-medium">Secure UPI Payment</h3>
                <p className="text-sm text-muted-foreground">All major UPI apps supported</p>
              </div>
              <div>
                <Package className="w-8 h-8 text-monastery-green mx-auto mb-2" />
                <h3 className="font-medium">Authentic Products</h3>
                <p className="text-sm text-muted-foreground">Blessed and certified items</p>
              </div>
              <div>
                <CheckCircle2 className="w-8 h-8 text-monastery-green mx-auto mb-2" />
                <h3 className="font-medium">Community Support</h3>
                <p className="text-sm text-muted-foreground">Funds support monasteries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default MarketplacePage;