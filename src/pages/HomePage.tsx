import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Church, Heart, MapPin, Calendar, Music, BookOpen, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Chatbot from '@/components/Chatbot';
import monasteryHeroBg from '@/assets/monastery-hero-bg.png';

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
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black py-20 px-4">
        {/* Monastery Background Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img 
            src={monasteryHeroBg} 
            alt="Sikkim Monastery" 
            className="w-full max-w-4xl h-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-monastery-gold rounded-full animate-float opacity-60"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-monastery-saffron rounded-full animate-pulse-soft opacity-40"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-monastery-fade">
            <Badge className="mb-6 bg-monastery-gold/20 text-monastery-gold border-monastery-gold/30 px-6 py-2 text-lg backdrop-blur-sm micro-bounce">
              <Church className="w-5 h-5 mr-2 animate-pulse-soft" />
              Sikkim Digital Monasteries
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Sacred Heritage
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent text-glow">
                of the Himalayas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-monastery-slide">
              Discover the spiritual treasures of Sikkim's ancient monasteries. Experience sacred traditions, 
              book authentic visits, and connect with centuries of Buddhist wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/tourism')} 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-lg px-8 py-4 micro-bounce hover-glow shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-2 animate-pulse-soft" />
                Plan Your Visit
              </Button>
              <Button 
                onClick={() => navigate('/events')} 
                variant="outline" 
                className="bg-white/10 border-amber-400/50 text-amber-100 hover:bg-amber-400/20 hover:border-amber-400 text-lg px-8 py-4 micro-bounce backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Sikkim Special */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-monastery-slide">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-6 micro-bounce">
              What Makes Sikkim's Monasteries Special?
            </h2>
            <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
              Nestled in the Eastern Himalayas, Sikkim's monasteries are living repositories of 
              Buddhist wisdom, architectural marvels, and spiritual sanctuaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monasteryHighlights.map((monastery, index) => (
              <Card key={index} className="bg-slate-800/50 border-amber-500/20 hover:border-amber-400/50 backdrop-blur-sm hover-glow micro-bounce animate-monastery-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-amber-200">{monastery.name}</CardTitle>
                    <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-400/30">
                      Est. {monastery.established}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-amber-100/70">
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
                className="group bg-slate-800/60 border-amber-500/20 hover:border-amber-400 cursor-pointer animate-monastery-fade backdrop-blur-sm hover-glow micro-bounce" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:animate-monastery-glow micro-bounce`}>
                    <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-amber-200 group-hover:text-amber-100 transition-monastery">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-amber-100/70">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-amber-300 hover:bg-amber-500/20 group-hover:bg-amber-500/30 group-hover:text-amber-100 transition-monastery micro-bounce">
                    Explore Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-monastery-fade">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-8 micro-bounce">
              Experience Sikkim Monasteries Digitally
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center micro-bounce" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 animate-monastery-glow hover-glow">
                  <Mountain className="w-10 h-10 text-white animate-float" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200 mb-2">Himalayan Serenity</h3>
                <p className="text-amber-100/70">Experience the tranquil atmosphere of monasteries nestled in the world's highest mountains</p>
              </div>
              <div className="flex flex-col items-center micro-bounce" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mb-4 animate-monastery-glow hover-glow">
                  <Church className="w-10 h-10 text-white animate-pulse-soft" />
                </div>
                <h3 className="text-xl font-semibold text-amber-200 mb-2">Ancient Wisdom</h3>
                <p className="text-amber-100/70">Access centuries-old Buddhist teachings, manuscripts, and traditional practices</p>
              </div>
              <div className="flex flex-col items-center micro-bounce" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 animate-monastery-glow hover-glow">
                  <Heart className="w-10 h-10 text-white animate-float" style={{animationDelay: '1s'}} />
                </div>
                <h3 className="text-xl font-semibold text-amber-200 mb-2">Spiritual Journey</h3>
                <p className="text-amber-100/70">Begin your personal spiritual journey with guided meditation and monk teachings</p>
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