import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Church, Heart, MapPin, Calendar, Music, BookOpen, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Chatbot from '@/components/Chatbot';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Events & Meditation",
      description: "Upcoming monastery events, recorded sessions, and guided meditation videos",
      path: "/events",
      color: "from-monastery-green to-primary"
    },
    {
      icon: MapPin,
      title: "Tourism & Booking",
      description: "Book monastery visits, accommodations, and traditional Sikkimese meals",
      path: "/tourism",
      color: "from-himalayan-blue to-spiritual-purple"
    },
    {
      icon: Music,
      title: "Sacred Music",
      description: "Traditional Om chants, monk songs, and spiritual audio experiences",
      path: "/music",
      color: "from-prayer-orange to-accent"
    },
    {
      icon: BookOpen,
      title: "Digital Manuscripts",
      description: "Ancient texts, sacred scriptures, and historical documents digitized",
      path: "/manuscripts",
      color: "from-spiritual-purple to-monastery-green"
    },
    {
      icon: MapPin,
      title: "Interactive Maps",
      description: "Navigate Sikkim's monasteries with detailed routes and offline maps",
      path: "/maps",
      color: "from-monastery-gold to-primary-light"
    },
    {
      icon: Gift,
      title: "Donations",
      description: "Support monasteries and help preserve Sikkim's spiritual heritage",
      path: "/donations",
      color: "from-accent to-monastery-gold"
    }
  ];

  const monasteryHighlights = [
    {
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, seat of the Karmapa",
      established: "1966"
    },
    {
      name: "Pemayangtse Monastery",
      description: "One of the oldest monasteries, perfect monastery of Sikkim",
      established: "1705"
    },
    {
      name: "Enchey Monastery",
      description: "Beautiful monastery overlooking Gangtok city",
      established: "1909"
    }
  ];

  return (
    <main className="min-h-screen bg-spiritual-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 px-4">
        <div className="absolute inset-0 bg-monastery-green/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-monastery-fade">
            <Badge className="mb-6 bg-monastery-light text-monastery-green px-6 py-2 text-lg">
              <Church className="w-5 h-5 mr-2" />
              Sikkim Digital Monasteries
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 text-monastery-gradient">
              Sacred Heritage
              <br />
              <span className="text-monastery-gold">of the Himalayas</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the spiritual treasures of Sikkim's ancient monasteries. Experience sacred traditions, 
              book authentic visits, and connect with centuries of Buddhist wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/tourism')} 
                className="btn-monastery text-lg px-8 py-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Plan Your Visit
              </Button>
              <Button 
                onClick={() => navigate('/events')} 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-monastery-green text-lg px-8 py-4 transition-monastery"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Sikkim Special */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-monastery-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-monastery-green mb-6">
              What Makes Sikkim's Monasteries Special?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nestled in the Eastern Himalayas, Sikkim's monasteries are living repositories of 
              Buddhist wisdom, architectural marvels, and spiritual sanctuaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monasteryHighlights.map((monastery, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-monastery-green">{monastery.name}</CardTitle>
                    <Badge variant="secondary" className="bg-monastery-light text-monastery-green">
                      Est. {monastery.established}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {monastery.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover-monastery cursor-pointer border-monastery-light animate-monastery-fade bg-white/50 backdrop-blur-sm" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:animate-monastery-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-monastery-green group-hover:text-primary transition-monastery">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-monastery-green hover:bg-monastery-light group-hover:bg-monastery-green group-hover:text-white transition-monastery">
                    Explore Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 px-4 bg-monastery-light/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-monastery-fade">
            <h2 className="text-4xl md:text-5xl font-bold text-monastery-green mb-8">
              Experience Sikkim Monasteries Digitally
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-monastery-gradient rounded-full flex items-center justify-center mb-4 animate-monastery-glow">
                  <Mountain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-monastery-green mb-2">Himalayan Serenity</h3>
                <p className="text-muted-foreground">Experience the tranquil atmosphere of monasteries nestled in the world's highest mountains</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-monastery-gradient rounded-full flex items-center justify-center mb-4 animate-monastery-glow">
                  <Church className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-monastery-green mb-2">Ancient Wisdom</h3>
                <p className="text-muted-foreground">Access centuries-old Buddhist teachings, manuscripts, and traditional practices</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-monastery-gradient rounded-full flex items-center justify-center mb-4 animate-monastery-glow">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-monastery-green mb-2">Spiritual Journey</h3>
                <p className="text-muted-foreground">Begin your personal spiritual journey with guided meditation and monk teachings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </main>
  );
};

export default HomePage;