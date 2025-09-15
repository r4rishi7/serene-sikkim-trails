import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, AlertTriangle, Clock, Users, Car, Utensils, Building, Shield } from 'lucide-react';

const ContactPage = () => {
  const emergencyContacts = [
    {
      category: "Emergency Services",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      contacts: [
        { name: "Police Emergency", number: "100", description: "24/7 Police assistance" },
        { name: "Medical Emergency", number: "108", description: "Ambulance & medical help" },
        { name: "Fire Emergency", number: "101", description: "Fire brigade services" },
        { name: "Tourist Helpline", number: "+91-3592-202411", description: "24/7 tourist assistance" }
      ]
    },
    {
      category: "Monastery Support",
      icon: Building,
      color: "from-monastery-green to-primary",
      contacts: [
        { name: "Rumtek Monastery Office", number: "+91-3592-252768", description: "Main office & information" },
        { name: "Pemayangtse Monastery", number: "+91-3595-250206", description: "Booking & guidance" },
        { name: "Enchey Monastery", number: "+91-3592-202637", description: "Events & ceremonies" },
        { name: "General Monastery Help", number: "+91-9832-555-001", description: "Security & assistance" }
      ]
    },
    {
      category: "Travel & Transport",
      icon: Car,
      color: "from-himalayan-blue to-spiritual-purple",
      contacts: [
        { name: "Sikkim Tourism Taxi", number: "+91-3592-202721", description: "Official taxi services" },
        { name: "Mountain Transport", number: "+91-9733-444-002", description: "Local guide assistance" },
        { name: "Helicopter Services", number: "+91-3592-280311", description: "Emergency transport" },
        { name: "Bus Terminal", number: "+91-3592-222648", description: "Public transport info" }
      ]
    },
    {
      category: "Accommodation & Food",
      icon: Utensils,
      color: "from-prayer-orange to-accent",
      contacts: [
        { name: "Tourism Board Booking", number: "+91-3592-221634", description: "Official accommodation" },
        { name: "Homestay Association", number: "+91-9832-100-200", description: "Verified homestays" },
        { name: "Food Safety Officer", number: "+91-3592-280455", description: "Food safety complaints" },
        { name: "Restaurant Guild", number: "+91-9733-200-300", description: "Restaurant information" }
      ]
    }
  ];

  const supportOffices = [
    {
      name: "Sikkim Tourism Office",
      address: "MG Marg, Gangtok, Sikkim 737101",
      phone: "+91-3592-221634",
      email: "sikkimtourism@gov.in",
      hours: "9:00 AM - 5:00 PM (Mon-Sat)"
    },
    {
      name: "Monastery Visitor Center",
      address: "Rumtek Road, East Sikkim 737135",
      phone: "+91-3592-252768",
      email: "info@sikkimmonasteries.org",
      hours: "6:00 AM - 8:00 PM (Daily)"
    },
    {
      name: "Emergency Response Center",
      address: "Police Station Road, Gangtok 737101",
      phone: "100 / +91-3592-202411",
      email: "emergency@sikkim.gov.in",
      hours: "24/7 Available"
    }
  ];

  return (
    <main className="min-h-screen bg-spiritual-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-monastery-fade">
          <Badge className="mb-6 bg-monastery-light text-monastery-green px-6 py-2 text-lg">
            <Shield className="w-5 h-5 mr-2" />
            Emergency Support & Contact
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-monastery-green mb-6">
            Contact & Emergency Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety and comfort are our priority. Find all emergency contacts, 
            support services, and assistance information for your monastery visits.
          </p>
        </div>

        {/* Emergency Contacts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {emergencyContacts.map((category, index) => (
            <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale bg-white/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-monastery-green">{category.category}</CardTitle>
                    <CardDescription>Essential contact information</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.contacts.map((contact, contactIndex) => (
                    <div key={contactIndex} className="flex items-center justify-between p-3 bg-monastery-light/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-monastery-green">{contact.name}</h4>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-monastery-green">{contact.number}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Offices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-monastery-green mb-8 text-center">Support Offices & Centers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportOffices.map((office, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-fade bg-white/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <CardTitle className="text-monastery-green flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-monastery-green mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-monastery-green" />
                    <span className="text-sm font-medium">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-monastery-green" />
                    <span className="text-sm text-muted-foreground">{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-monastery-green" />
                    <span className="text-sm text-muted-foreground">{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access Numbers */}
        <Card className="border-monastery-light bg-monastery-light/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-monastery-green">Quick Access Emergency Numbers</CardTitle>
            <CardDescription>Save these numbers in your phone before traveling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">100</div>
                <div className="text-sm text-muted-foreground">Police</div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">108</div>
                <div className="text-sm text-muted-foreground">Medical</div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">101</div>
                <div className="text-sm text-muted-foreground">Fire</div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-2xl font-bold text-monastery-green mb-1">202411</div>
                <div className="text-sm text-muted-foreground">Tourist Help</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ContactPage;