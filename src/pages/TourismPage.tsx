import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MapPin, Star, Users, Clock, CalendarIcon, CreditCard, Bed, Utensils, Camera, Mountain } from 'lucide-react';
import { format } from 'date-fns';

const TourismPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedMonastery, setSelectedMonastery] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const monasteries = [
    {
      id: 'rumtek',
      name: 'Rumtek Monastery',
      location: 'Gangtok, Sikkim',
      rating: 4.8,
      price: 2500,
      duration: 'Full Day',
      highlights: ['Largest monastery in Sikkim', 'Seat of the Karmapa', 'Traditional architecture', 'Prayer wheels'],
      visitingHours: '6:00 AM - 6:00 PM',
      bestTime: 'March to June, September to November',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 'pemayangtse',
      name: 'Pemayangtse Monastery',
      location: 'Pelling, Sikkim',
      rating: 4.7,
      price: 3000,
      duration: 'Full Day + Stay',
      highlights: ['Perfect monastery', 'Scenic mountain views', 'Ancient artifacts', 'Historical significance'],
      visitingHours: '5:00 AM - 7:00 PM',
      bestTime: 'April to May, October to December',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 'enchey',
      name: 'Enchey Monastery',
      location: 'Gangtok, Sikkim',
      rating: 4.6,
      price: 1800,
      duration: 'Half Day',
      highlights: ['City monastery', 'Beautiful architecture', 'Peaceful environment', 'Cultural events'],
      visitingHours: '6:00 AM - 6:00 PM',
      bestTime: 'Year round',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 'tashiding',
      name: 'Tashiding Monastery',
      location: 'Tashiding, Sikkim',
      rating: 4.5,
      price: 2200,
      duration: 'Full Day',
      highlights: ['Sacred mountain top', 'Bumchu festival', 'Ancient stupa', 'Spiritual significance'],
      visitingHours: '5:30 AM - 6:30 PM',
      bestTime: 'March to May, October to December',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 'dubdi',
      name: 'Dubdi Monastery',
      location: 'Yuksom, Sikkim',
      rating: 4.4,
      price: 2800,
      duration: 'Full Day + Trek',
      highlights: ['First monastery of Sikkim', 'Trekking experience', 'Historical importance', 'Forest setting'],
      visitingHours: '6:00 AM - 5:00 PM',
      bestTime: 'March to May, September to November',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 'phensang',
      name: 'Phensang Monastery',
      location: 'Kewzing, Sikkim',
      rating: 4.3,
      price: 2000,
      duration: 'Half Day',
      highlights: ['Modern monastery', 'Beautiful murals', 'Meditation center', 'Cultural activities'],
      visitingHours: '6:00 AM - 6:00 PM',
      bestTime: 'Year round',
      image: '/api/placeholder/400/300',
      featured: false
    }
  ];

  const packages = [
    {
      id: 'spiritual-journey',
      name: 'Spiritual Journey Package',
      duration: '3 Days / 2 Nights',
      price: 8500,
      includes: ['Accommodation', 'All meals', 'Monastery visits', 'Meditation sessions', 'Local guide'],
      monasteries: ['Rumtek', 'Enchey', 'Pemayangtse'],
      meals: 'Traditional Sikkimese cuisine',
      accommodation: '3-star monastery guesthouse'
    },
    {
      id: 'heritage-explorer',
      name: 'Heritage Explorer Package',
      duration: '5 Days / 4 Nights',
      price: 15000,
      includes: ['Luxury accommodation', 'All meals', 'All monastery visits', 'Cultural shows', 'Photography tour'],
      monasteries: ['All major monasteries', 'Hidden gems', 'Private ceremonies'],
      meals: 'Mix of local and continental',
      accommodation: '4-star heritage hotel'
    },
    {
      id: 'meditation-retreat',
      name: 'Meditation Retreat Package',
      duration: '7 Days / 6 Nights',
      price: 12000,
      includes: ['Simple accommodation', 'Vegetarian meals', 'Daily meditation', 'Monk teachings', 'Silence periods'],
      monasteries: ['Pemayangtse', 'Tashiding', 'Remote monasteries'],
      meals: 'Traditional monastery meals',
      accommodation: 'Monastery guest rooms'
    }
  ];

  const accommodations = [
    {
      name: 'Monastery Guest House',
      type: 'Traditional Stay',
      price: 1500,
      rating: 4.2,
      amenities: ['Simple rooms', 'Shared bathrooms', 'Monastery meals', 'Prayer hall access']
    },
    {
      name: 'Heritage Mountain Resort',
      type: 'Luxury Hotel',
      price: 5500,
      rating: 4.8,
      amenities: ['Mountain views', 'Spa services', 'Multi-cuisine restaurant', 'Cultural programs']
    },
    {
      name: 'Traditional Sikkimese Homestay',
      type: 'Homestay',
      price: 2500,
      rating: 4.5,
      amenities: ['Family atmosphere', 'Home-cooked meals', 'Local experiences', 'Organic gardens']
    }
  ];

  const BookingDialog = ({ monastery }: { monastery: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-monastery w-full">
          <CreditCard className="w-4 h-4 mr-2" />
          Book Now - ₹{monastery.price}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-monastery-green">Book Visit to {monastery.name}</DialogTitle>
          <DialogDescription>
            Complete your booking details for a memorable monastery experience
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-monastery-green">Personal Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
            </div>
          </div>

          <Separator />

          {/* Visit Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-monastery-green">Visit Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Visit Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="visitors">Number of Visitors</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select visitors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="accommodation">Accommodation</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation" />
                </SelectTrigger>
                <SelectContent>
                  {accommodations.map((acc, index) => (
                    <SelectItem key={index} value={acc.name}>
                      {acc.name} - ₹{acc.price}/night ({acc.type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="meals">Meal Preference</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select meal preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Traditional Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="no-meals">No Meals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="special">Special Requirements</Label>
              <Textarea 
                id="special" 
                placeholder="Any special requirements, dietary restrictions, or accessibility needs..."
                className="min-h-[80px]"
              />
            </div>
          </div>

          <Separator />

          {/* Booking Summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-monastery-green">Booking Summary</h3>
            <div className="bg-monastery-light/30 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Monastery Visit</span>
                <span>₹{monastery.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Charges</span>
                <span>₹200</span>
              </div>
              <div className="flex justify-between font-semibold text-monastery-green">
                <span>Total Amount</span>
                <span>₹{monastery.price + 200}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">
              Save for Later
            </Button>
            <Button className="flex-1 btn-monastery">
              <CreditCard className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-monastery-fade">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-4">
            Tourism & Booking
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
            Book authentic monastery visits, accommodations, and traditional Sikkimese experiences
          </p>
        </div>

        {/* Quick Booking Form */}
        <Card className="mb-12 border-monastery-light animate-monastery-slide">
          <CardHeader>
            <CardTitle className="text-monastery-green flex items-center">
              <Mountain className="w-6 h-6 mr-2" />
              Quick Monastery Booking
            </CardTitle>
            <CardDescription>
              Find and book your perfect monastery experience in Sikkim
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="monastery-select">Choose Monastery</Label>
                <Select value={selectedMonastery} onValueChange={setSelectedMonastery}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select monastery" />
                  </SelectTrigger>
                  <SelectContent>
                    {monasteries.map((monastery) => (
                      <SelectItem key={monastery.id} value={monastery.id}>
                        {monastery.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Visit Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "MMM dd") : "Pick date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="package-select">Package Type</Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full btn-monastery">
                  Search & Book
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Monasteries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-monastery-green mb-8">Featured Monasteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monasteries.filter(m => m.featured).map((monastery, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale group">
                <div className="aspect-video bg-monastery-light rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Mountain className="w-12 h-12 text-monastery-green group-hover:scale-110 transition-monastery" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{monastery.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{monastery.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {monastery.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-medium">{monastery.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Best Time</span>
                      <span className="text-sm font-medium">{monastery.bestTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Visiting Hours</span>
                      <span className="text-sm font-medium">{monastery.visitingHours}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-monastery-green mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-1">
                      {monastery.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-monastery-green">₹{monastery.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">per person</span>
                    </div>
                  </div>

                  <BookingDialog monastery={monastery} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Monasteries */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-monastery-green mb-8">All Monasteries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monasteries.map((monastery, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-fade">
                <div className="aspect-video bg-monastery-light rounded-t-lg flex items-center justify-center">
                  <Mountain className="w-12 h-12 text-monastery-green" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{monastery.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{monastery.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {monastery.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-monastery-green">₹{monastery.price}</span>
                    <Badge variant="outline" className="border-monastery-light">
                      {monastery.duration}
                    </Badge>
                  </div>
                  <BookingDialog monastery={monastery} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-monastery-green mb-8">Complete Travel Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale">
                <CardHeader>
                  <CardTitle className="text-monastery-green">{pkg.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-monastery-green">Includes:</h4>
                    <ul className="text-sm space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-monastery-green rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{pkg.accommodation}</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{pkg.meals}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-monastery-green">₹{pkg.price}</span>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Button className="w-full btn-monastery">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Book Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TourismPage;