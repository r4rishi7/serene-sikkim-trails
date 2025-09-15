import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Phone, MapPin, Utensils, AlertTriangle, Car, Home, HelpCircle } from 'lucide-react';

const Helpline = () => {
  const [isOpen, setIsOpen] = useState(false);

  const helplineContacts = [
    {
      category: 'Emergency',
      icon: AlertTriangle,
      color: 'text-red-600',
      contacts: [
        { name: 'Police Emergency', number: '100', description: 'Immediate police assistance' },
        { name: 'Medical Emergency', number: '108', description: 'Ambulance and medical help' },
        { name: 'Fire Services', number: '101', description: 'Fire emergency services' },
        { name: 'Tourist Helpline', number: '1363', description: '24/7 tourist assistance' }
      ]
    },
    {
      category: 'Travel & Transport',
      icon: Car,
      color: 'text-himalayan-blue',
      contacts: [
        { name: 'Sikkim Tourism', number: '+91-3592-202688', description: 'Official tourism department' },
        { name: 'Taxi Services', number: '+91-9832012345', description: 'Local taxi booking' },
        { name: 'Bus Services', number: '+91-3592-222444', description: 'Inter-state bus services' },
        { name: 'Airport Transfer', number: '+91-9876543210', description: 'Bagdogra airport transfers' }
      ]
    },
    {
      category: 'Accommodation',
      icon: Home,
      color: 'text-monastery-green',
      contacts: [
        { name: 'Hotel Bookings', number: '+91-9832098765', description: 'Hotel reservation assistance' },
        { name: 'Homestay Network', number: '+91-9832087654', description: 'Traditional homestay bookings' },
        { name: 'Monastery Stays', number: '+91-9832076543', description: 'Authentic monastery accommodation' }
      ]
    },
    {
      category: 'Food & Dining',
      icon: Utensils,
      color: 'text-prayer-orange',
      contacts: [
        { name: 'Traditional Cuisine', number: '+91-9832065432', description: 'Authentic Sikkimese food guide' },
        { name: 'Monastery Meals', number: '+91-9832054321', description: 'Traditional monastery dining' },
        { name: 'Food Delivery', number: '+91-9832043210', description: 'Local food delivery services' }
      ]
    },
    {
      category: 'Monastery Visits',
      icon: MapPin,
      color: 'text-spiritual-purple',
      contacts: [
        { name: 'Rumtek Monastery', number: '+91-3592-252468', description: 'Visit arrangements & timings' },
        { name: 'Pemayangtse Monastery', number: '+91-3595-250283', description: 'Guided tours & permissions' },
        { name: 'Enchey Monastery', number: '+91-3592-223637', description: 'Visit coordination' },
        { name: 'General Monastery Info', number: '+91-9832032109', description: 'All monastery information' }
      ]
    }
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="bg-monastery-gradient text-white shadow-elevation rounded-full p-4 hover:shadow-glow transition-monastery animate-monastery-glow"
            size="icon"
          >
            <HelpCircle className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[500px] bg-white overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-monastery-green flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              Helpline Directory
            </SheetTitle>
            <SheetDescription>
              24/7 assistance for all your Sikkim monastery visit needs. Select a category below to find relevant contacts.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {helplineContacts.map((category, index) => (
              <Card key={index} className="border-monastery-light hover-monastery">
                <CardHeader>
                  <CardTitle className={`flex items-center ${category.color}`}>
                    <category.icon className="w-5 h-5 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.contacts.map((contact, contactIndex) => (
                    <div key={contactIndex} className="flex items-start justify-between p-3 bg-monastery-light/30 rounded-lg hover:bg-monastery-light/50 transition-monastery">
                      <div className="flex-1">
                        <div className="font-semibold text-monastery-green">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">{contact.description}</div>
                      </div>
                      <a 
                        href={`tel:${contact.number}`}
                        className="bg-monastery-green text-white px-3 py-1 rounded-lg text-sm hover:bg-primary-dark transition-monastery"
                      >
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-monastery-light/50 rounded-lg">
            <h4 className="font-semibold text-monastery-green mb-2">Important Notes:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All emergency numbers are toll-free</li>
              <li>• Tourist helpline operates 24/7</li>
              <li>• Keep local contact numbers handy when visiting remote monasteries</li>
              <li>• Emergency services have English-speaking operators</li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Helpline;