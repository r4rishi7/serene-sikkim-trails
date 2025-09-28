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
      {/* Enhanced Hero Section with 3D Effects */}
      <section className="relative min-h-screen overflow-hidden perspective-3d py-20 px-4 bg-gradient-to-br from-bright-yellow via-sunny-gold to-cadmium-orange">
        {/* 3D Monastery Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 animate-float-3d">
          <img 
            src={monasteryHeroBg} 
            alt="Sikkim Monastery" 
            className="w-full max-w-5xl h-auto object-contain transform rotate-1 hover:rotate-0 transition-transform duration-1000"
          />
        </div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cadmium-orange/30 via-transparent to-bright-yellow/20 animate-gradient-wave"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-sunny-gold rounded-full animate-float-3d opacity-80 shadow-glow"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-cadmium-orange rounded-full animate-wave opacity-70 shadow-wave"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-bright-yellow rounded-full animate-float opacity-90 shadow-3d" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-monastery-gold rounded-full animate-3d-float opacity-60" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* 3D Card Container */}
        <div className="relative max-w-7xl mx-auto text-center card-3d">
          <div className="animate-monastery-fade">
            <Badge className="mb-8 bg-gradient-to-r from-bright-yellow/30 to-cadmium-orange/20 text-primary border-sunny-gold/50 px-8 py-3 text-xl backdrop-blur-lg hover-wave shadow-wave">
              <Church className="w-6 h-6 mr-3 animate-pulse-soft" />
              Sikkim Digital Monasteries
            </Badge>
            
            {/* Enhanced 3D Title with Wave Effects */}
            <div className="relative mb-8">
              <h1 className="text-7xl md:text-9xl font-black mb-6 text-glow wave-title perspective-3d">
                <span className="block bg-gradient-to-r from-bright-yellow via-sunny-gold to-monastery-gold bg-clip-text text-transparent animate-gradient-wave bg-[length:300%_100%] hover-3d">
                  Sacred Heritage
                </span>
                <span className="block bg-gradient-to-r from-cadmium-orange via-spiritual-orange to-bright-yellow bg-clip-text text-transparent animate-title-wave hover-wave">
                  of the Himalayas
                </span>
              </h1>
              
              {/* Animated Wave Lines */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
                <div className="h-2 bg-gradient-to-r from-transparent via-sunny-gold to-transparent rounded-full animate-title-wave opacity-80"></div>
                <div className="h-1 bg-gradient-to-r from-transparent via-cadmium-orange to-transparent rounded-full animate-wave mt-2 opacity-60" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            <p className="text-xl md:text-3xl text-primary/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-monastery-slide font-medium">
              Discover the spiritual treasures of Sikkim's ancient monasteries. Experience sacred traditions, 
              book authentic visits, and connect with centuries of Buddhist wisdom through our immersive digital platform.
            </p>
            
            {/* Enhanced 3D Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => navigate('/tourism')} 
                className="btn-3d text-white text-xl px-12 py-6 transform-gpu hover-wave"
              >
                <MapPin className="w-6 h-6 mr-3 animate-float" />
                Plan Your Visit
              </Button>
              <Button 
                onClick={() => navigate('/events')} 
                className="bg-gradient-to-r from-bright-yellow/20 to-cadmium-orange/10 border-2 border-sunny-gold/60 text-primary hover:bg-gradient-to-r hover:from-sunny-gold/30 hover:to-bright-yellow/20 hover:border-cadmium-orange text-xl px-12 py-6 backdrop-blur-lg hover-3d shadow-wave"
              >
                <Calendar className="w-6 h-6 mr-3 animate-wave" />
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Special Section with 3D Cards */}
      <section className="py-24 px-4 bg-gradient-to-b from-monastery-light via-prayer-cream to-bright-yellow/30 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sunny-gold/10 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-cadmium-orange/10 rounded-full blur-2xl animate-wave"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 animate-monastery-slide">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cadmium-orange via-sunny-gold to-bright-yellow bg-clip-text text-transparent mb-8 hover-3d wave-title">
              What Makes Sikkim's Monasteries Special?
            </h2>
            <p className="text-2xl text-primary/70 max-w-4xl mx-auto leading-relaxed">
              Nestled in the Eastern Himalayas, Sikkim's monasteries are living repositories of 
              Buddhist wisdom, architectural marvels, and spiritual sanctuaries that transcend time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20 perspective-3d">
            {monasteryHighlights.map((monastery, index) => (
              <Card key={index} className="glass-bg border-sunny-gold/30 hover:border-cadmium-orange card-3d hover-wave shadow-3d animate-monastery-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-primary font-bold">{monastery.name}</CardTitle>
                    <Badge className="bg-gradient-to-r from-cadmium-orange/20 to-sunny-gold/30 text-primary border-monastery-gold/40 px-4 py-2">
                      Est. {monastery.established}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-primary/70 leading-relaxed">
                    {monastery.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Enhanced 3D Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-3d">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group glass-bg border-sunny-gold/30 hover:border-cadmium-orange cursor-pointer animate-monastery-fade card-3d hover-wave shadow-3d" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader className="p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:animate-float-3d shadow-wave transform-gpu`}>
                    <feature.icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-2xl text-primary group-hover:text-cadmium-orange transition-all duration-300 font-bold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-primary/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Button className="w-full btn-3d text-lg py-4 group-hover:shadow-wave">
                    Explore Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Digital Experience Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-cadmium-orange/20 via-sunny-gold/10 to-bright-yellow/30 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-bright-yellow/15 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cadmium-orange/10 rounded-full blur-3xl animate-wave"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sunny-gold/5 rounded-full blur-3xl animate-gradient-wave"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative perspective-3d">
          <div className="animate-monastery-fade">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-bright-yellow via-cadmium-orange to-sunny-gold bg-clip-text text-transparent mb-12 hover-3d wave-title">
              Experience Sikkim Monasteries Digitally
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center card-3d hover-wave" style={{animationDelay: '0.1s'}}>
                <div className="w-28 h-28 bg-gradient-to-br from-bright-yellow to-sunny-gold rounded-full flex items-center justify-center mb-6 shadow-3d animate-float-3d hover-glow">
                  <Mountain className="w-14 h-14 text-white animate-float" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Himalayan Serenity</h3>
                <p className="text-xl text-primary/70 leading-relaxed">Experience the tranquil atmosphere of monasteries nestled in the world's highest mountains through immersive 3D tours</p>
              </div>
              
              <div className="flex flex-col items-center card-3d hover-wave" style={{animationDelay: '0.2s'}}>
                <div className="w-28 h-28 bg-gradient-to-br from-cadmium-orange to-spiritual-orange rounded-full flex items-center justify-center mb-6 shadow-3d animate-float-3d hover-glow">
                  <Church className="w-14 h-14 text-white animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Ancient Wisdom</h3>
                <p className="text-xl text-primary/70 leading-relaxed">Access centuries-old Buddhist teachings, digitized manuscripts, and traditional practices preserved for future generations</p>
              </div>
              
              <div className="flex flex-col items-center card-3d hover-wave" style={{animationDelay: '0.3s'}}>
                <div className="w-28 h-28 bg-gradient-to-br from-sunny-gold to-monastery-gold rounded-full flex items-center justify-center mb-6 shadow-3d animate-float-3d hover-glow">
                  <Heart className="w-14 h-14 text-white animate-wave" style={{animationDelay: '1s'}} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Spiritual Journey</h3>
                <p className="text-xl text-primary/70 leading-relaxed">Begin your personal spiritual journey with guided meditation sessions and authentic monk teachings</p>
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