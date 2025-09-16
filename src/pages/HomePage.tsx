import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Church, Heart, MapPin, Calendar, Music, BookOpen, Gift, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Chatbot from '@/components/Chatbot';
import sikkimMap from '@/assets/sikkim-map.png';

const HomePage = () => {
  const navigate = useNavigate();
  const [hoveredMonastery, setHoveredMonastery] = useState<string | null>(null);

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
      established: "1966",
      position: { top: '60%', left: '75%' }
    },
    {
      name: "Pemayangtse Monastery",
      description: "One of the oldest monasteries, perfect monastery of Sikkim",
      established: "1705",
      position: { top: '75%', left: '25%' }
    },
    {
      name: "Enchey Monastery",
      description: "Beautiful monastery overlooking Gangtok city",
      established: "1909",
      position: { top: '65%', left: '70%' }
    },
    {
      name: "Tashiding Monastery",
      description: "Sacred monastery with holy cave and sacred water",
      established: "1641",
      position: { top: '70%', left: '35%' }
    },
    {
      name: "Dubdi Monastery",
      description: "First monastery built in Sikkim",
      established: "1701",
      position: { top: '78%', left: '30%' }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-3d relative overflow-hidden">
      {/* 3D Floating Monk Character */}
      <div className="fixed top-20 right-8 z-50 monk-character animate-monk-float">
        <div className="w-16 h-16 bg-monastery-gold rounded-full flex items-center justify-center shadow-floating cursor-pointer hover:animate-monk-interact">
          <span className="text-2xl">🧘‍♂️</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-monastery-green text-white px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
          HOME PAGE
        </div>
      </div>

      {/* Hero Section with 3D Effects */}
      <section className="relative overflow-hidden bg-gradient-3d py-24 px-4">
        <div className="absolute inset-0 bg-monastery-green/5"></div>
        
        {/* 3D Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-monastery-gold/20 rounded-full blur-3xl animate-3d-wave"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-spiritual-purple/20 rounded-full blur-3xl animate-3d-wave" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-himalayan-blue/10 rounded-full blur-3xl animate-3d-wave" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-monastery-fade">
            <Badge className="mb-8 bg-monastery-light text-monastery-green px-8 py-3 text-xl shadow-3d hover-3d-lift">
              <Church className="w-6 h-6 mr-3" />
              Sikkim Digital Monasteries
            </Badge>
            <h1 className="text-6xl md:text-9xl font-bold text-primary-foreground mb-8 text-monastery-gradient text-3d-depth">
              Sacred Heritage
              <br />
              <span className="text-monastery-gold animate-3d-wave">of the Himalayas</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed text-3d-depth">
              Discover the spiritual treasures of Sikkim's ancient monasteries. Experience sacred traditions, 
              book authentic visits, and connect with centuries of Buddhist wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => navigate('/tourism')} 
                className="btn-monastery text-xl px-12 py-6 btn-3d-wave hover-wave"
              >
                <MapPin className="w-6 h-6 mr-3" />
                Plan Your Visit
              </Button>
              <Button 
                onClick={() => navigate('/events')} 
                variant="outline" 
                className="bg-white/10 border-white text-white hover:bg-white hover:text-monastery-green text-xl px-12 py-6 transition-monastery hover-3d-lift btn-3d-wave hover-wave"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Sikkim Map Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-monastery-slide">
            <h2 className="text-5xl md:text-6xl font-bold text-monastery-green mb-8 text-3d-depth">
              Explore Sikkim's Sacred Geography
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Navigate through the mystical monasteries scattered across the Himalayan landscape
            </p>
          </div>

          <div className="interactive-map max-w-4xl mx-auto mb-16 aspect-[4/3] relative">
            <img 
              src={sikkimMap} 
              alt="Sikkim Monasteries Map" 
              className="w-full h-full object-contain rounded-2xl shadow-floating"
            />
            
            {/* Interactive Monastery Markers */}
            {monasteryHighlights.map((monastery, index) => (
              <div
                key={index}
                className="monastery-marker"
                style={{
                  top: monastery.position.top,
                  left: monastery.position.left,
                  animationDelay: `${index * 0.5}s`
                }}
                onMouseEnter={() => setHoveredMonastery(monastery.name)}
                onMouseLeave={() => setHoveredMonastery(null)}
                onClick={() => navigate('/tourism')}
              >
                {hoveredMonastery === monastery.name && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-monastery-green text-white p-3 rounded-lg shadow-floating min-w-48 animate-monastery-scale">
                    <h4 className="font-semibold text-sm">{monastery.name}</h4>
                    <p className="text-xs opacity-90">{monastery.description}</p>
                    <p className="text-xs text-monastery-gold">Est. {monastery.established}</p>
                  </div>
                )}
              </div>
            ))}
            
            {/* 3D Navigation Compass */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-monastery-gold rounded-full flex items-center justify-center shadow-3d hover-3d-lift cursor-pointer">
              <Navigation className="w-8 h-8 text-white animate-3d-wave" />
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
            {monasteryHighlights.slice(0, 3).map((monastery, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale card-3d shadow-3d" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-monastery-green text-3d-depth">{monastery.name}</CardTitle>
                    <Badge variant="secondary" className="bg-monastery-light text-monastery-green shadow-elevation">
                      Est. {monastery.established}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg">
                    {monastery.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Features Grid with 3D Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover-monastery cursor-pointer border-monastery-light animate-monastery-fade bg-white/60 backdrop-blur-lg card-3d shadow-3d" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:animate-3d-wave shadow-3d`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-monastery-green group-hover:text-primary transition-monastery text-3d-depth">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-monastery-green hover:bg-monastery-light group-hover:bg-monastery-green group-hover:text-white transition-monastery btn-3d-wave hover-wave text-lg py-3">
                    Explore Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features with 3D Depth */}
      <section className="py-24 px-4 bg-gradient-to-br from-monastery-light/40 via-prayer-cream/30 to-spiritual-purple/20 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-monastery-gold/10 rounded-full blur-3xl animate-3d-wave"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-himalayan-blue/10 rounded-full blur-3xl animate-3d-wave" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-monastery-fade">
            <h2 className="text-5xl md:text-6xl font-bold text-monastery-green mb-12 text-3d-depth">
              Experience Sikkim Monasteries Digitally
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center group">
                <div className="w-28 h-28 bg-gradient-3d rounded-full flex items-center justify-center mb-6 shadow-floating hover-3d-lift cursor-pointer">
                  <Mountain className="w-14 h-14 text-white animate-3d-wave" />
                </div>
                <h3 className="text-2xl font-semibold text-monastery-green mb-4 text-3d-depth">Himalayan Serenity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Experience the tranquil atmosphere of monasteries nestled in the world's highest mountains</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-28 h-28 bg-gradient-3d rounded-full flex items-center justify-center mb-6 shadow-floating hover-3d-lift cursor-pointer" style={{animationDelay: '0.5s'}}>
                  <Church className="w-14 h-14 text-white animate-3d-wave" />
                </div>
                <h3 className="text-2xl font-semibold text-monastery-green mb-4 text-3d-depth">Ancient Wisdom</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Access centuries-old Buddhist teachings, manuscripts, and traditional practices</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-28 h-28 bg-gradient-3d rounded-full flex items-center justify-center mb-6 shadow-floating hover-3d-lift cursor-pointer" style={{animationDelay: '1s'}}>
                  <Heart className="w-14 h-14 text-white animate-3d-wave" />
                </div>
                <h3 className="text-2xl font-semibold text-monastery-green mb-4 text-3d-depth">Spiritual Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">Begin your personal spiritual journey with guided meditation and monk teachings</p>
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