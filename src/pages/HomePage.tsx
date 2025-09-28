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
      {/* Enhanced Hero Section with 3D Effects */}
      <section className="relative overflow-hidden hero-bg min-h-screen flex items-center justify-center py-20 px-4">
        {/* 3D Wave Effects */}
        <div className="wave-container absolute inset-0">
          <div className="wave-lines">
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
          </div>
        </div>
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-orange-900/30 to-black/80"></div>
        
        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="animate-monastery-fade">
            {/* Badge */}
            <Badge className="mb-8 bg-orange-500/20 border border-orange-400/50 text-orange-100 px-8 py-3 text-lg backdrop-blur-sm">
              <Church className="w-6 h-6 mr-2" />
              Sikkim Digital Monasteries
            </Badge>
            
            {/* 3D Title with Wave Effects */}
            <div className="relative mb-12">
              <h1 className="title-3d text-center relative z-10" style={{animation: 'title-glow 4s ease-in-out infinite'}}>
                SACRED HERITAGE
                <br />
                <span className="block mt-2">OF THE HIMALAYAS</span>
              </h1>
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-orange-100/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the spiritual treasures of Sikkim's ancient monasteries. Experience sacred traditions, 
              book authentic visits, and connect with centuries of Buddhist wisdom through our immersive digital platform.
            </p>
            
            {/* 3D Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => navigate('/tourism')} 
                className="btn-3d text-lg px-10 py-5 font-bold"
              >
                <MapPin className="w-6 h-6 mr-3" />
                Plan Your Sacred Journey
              </Button>
              <Button 
                onClick={() => navigate('/events')} 
                className="relative bg-orange-500/10 border-2 border-orange-400/50 text-orange-100 hover:bg-orange-400 hover:text-white text-lg px-10 py-5 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Explore Sacred Events
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* What Makes Sikkim Special - Enhanced with 3D Effects */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-monastery-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 relative">
              What Makes Sikkim's Monasteries Special?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nestled in the Eastern Himalayas, Sikkim's monasteries are living repositories of 
              Buddhist wisdom, architectural marvels, and spiritual sanctuaries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {monasteryHighlights.map((monastery, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl border-orange-200/50 animate-monastery-scale bg-white/90 backdrop-blur-sm relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-orange-600 group-hover:text-orange-700 transition-colors">{monastery.name}</CardTitle>
                    <Badge className="bg-orange-100 text-orange-600 border border-orange-200 group-hover:bg-orange-200">
                      Est. {monastery.established}
                    </Badge>
                  </div>
                  <CardDescription className="text-base text-gray-600 group-hover:text-gray-700 transition-colors">
                    {monastery.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Enhanced Features Grid with 3D Effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer border-orange-200/50 animate-monastery-fade bg-white/80 backdrop-blur-sm relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl" 
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(feature.path)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 group-hover:text-gray-700">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button className="w-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 group-hover:scale-105 border border-orange-200">
                    Explore Now →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Special Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50/50 to-orange-100/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-monastery-fade">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-12 relative">
              Experience Sikkim Monasteries Digitally
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center group transform transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <Mountain className="w-10 h-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">Himalayan Serenity</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">Experience the tranquil atmosphere of monasteries nestled in the world's highest mountains</p>
              </div>
              <div className="flex flex-col items-center group transform transition-all duration-500 hover:scale-105" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <Church className="w-10 h-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">Ancient Wisdom</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">Access centuries-old Buddhist teachings, manuscripts, and traditional practices</p>
              </div>
              <div className="flex flex-col items-center group transform transition-all duration-500 hover:scale-105" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <Heart className="w-10 h-10 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">Spiritual Journey</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">Begin your personal spiritual journey with guided meditation and monk teachings</p>
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