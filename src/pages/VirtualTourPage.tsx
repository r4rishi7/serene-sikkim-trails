import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Play, RotateCcw, Eye, MapPin, Clock, Users, Star } from 'lucide-react';

const VirtualTourPage = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      description: "The largest monastery in Sikkim, seat of the Karmapa",
      location: "Gangtok, East Sikkim",
      established: "1966",
      rating: 4.9,
      visitors: "2000+/day",
      image: "🏛️",
      gallery: ["🏛️", "🧘‍♂️", "📿", "🕯️", "🎨", "📜"],
      videos: [
        { title: "Main Prayer Hall 360°", duration: "5:32", type: "360" },
        { title: "Morning Prayer Ceremony", duration: "12:45", type: "video" },
        { title: "Monastery Architecture Tour", duration: "8:20", type: "360" }
      ],
      highlights: [
        "Golden Stupa",
        "Main Prayer Hall", 
        "Monk Quarters",
        "Sacred Relics Room",
        "Traditional Library",
        "Meditation Gardens"
      ]
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      description: "One of the oldest monasteries, perfect monastery of Sikkim",
      location: "Pelling, West Sikkim", 
      established: "1705",
      rating: 4.8,
      visitors: "1500+/day",
      image: "🏰",
      gallery: ["🏰", "🎭", "📚", "🌸", "⛩️", "🔔"],
      videos: [
        { title: "Ancient Halls Virtual Walk", duration: "7:15", type: "360" },
        { title: "Traditional Cham Dance", duration: "15:30", type: "video" },
        { title: "Monastery Museum Tour", duration: "6:45", type: "360" }
      ],
      highlights: [
        "Wooden Sculptures",
        "Ancient Murals",
        "Traditional Architecture", 
        "Sacred Manuscripts",
        "Ritual Masks Collection",
        "Mountain Views"
      ]
    },
    {
      id: 3,
      name: "Enchey Monastery",
      description: "Beautiful monastery overlooking Gangtok city",
      location: "Gangtok Hill, East Sikkim",
      established: "1909", 
      rating: 4.7,
      visitors: "1200+/day",
      image: "⛩️",
      gallery: ["⛩️", "🌄", "🎋", "🏮", "🕉️", "🦚"],
      videos: [
        { title: "City View 360° Experience", duration: "4:20", type: "360" },
        { title: "Evening Prayer Session", duration: "9:15", type: "video" },
        { title: "Traditional Festival Celebration", duration: "11:50", type: "video" }
      ],
      highlights: [
        "City Panoramic Views",
        "Prayer Wheels",
        "Sacred Statues",
        "Traditional Paintings",
        "Meditation Spaces",
        "Festival Grounds"
      ]
    },
    {
      id: 4,
      name: "Tashiding Monastery",
      description: "Sacred monastery with holy water blessing ceremonies",
      location: "Tashiding, West Sikkim",
      established: "1641",
      rating: 4.6,
      visitors: "800+/day", 
      image: "🏔️",
      gallery: ["🏔️", "💧", "🌊", "🙏", "🎪", "🌺"],
      videos: [
        { title: "Holy Water Ceremony 360°", duration: "8:30", type: "360" },
        { title: "Mountain Pilgrimage Path", duration: "13:20", type: "video" },
        { title: "Sacred Rituals Documentary", duration: "16:45", type: "video" }
      ],
      highlights: [
        "Holy Water Springs",
        "Pilgrimage Path", 
        "Sacred Chortens",
        "Mountain Views",
        "Ritual Ceremonies",
        "Sacred Caves"
      ]
    }
  ];

  const VirtualViewer = ({ type, title }: { type: string, title: string }) => (
    <div className="relative bg-monastery-light/20 rounded-lg overflow-hidden aspect-video group cursor-pointer">
      <div className="absolute inset-0 flex items-center justify-center bg-monastery-gradient/80">
        <div className="text-center text-white">
          {type === "360" ? (
            <RotateCcw className="w-16 h-16 mx-auto mb-4 animate-spin" />
          ) : (
            <Play className="w-16 h-16 mx-auto mb-4" />
          )}
          <p className="text-lg font-medium">{title}</p>
          <p className="text-sm opacity-80">
            {type === "360" ? "360° Virtual Experience" : "HD Video Content"}
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <Badge className="bg-white/20 text-white border-white/30">
          {type === "360" ? "360°" : "HD"}
        </Badge>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-spiritual-gradient py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-monastery-fade">
          <Badge className="mb-6 bg-monastery-light text-monastery-green px-6 py-2 text-lg">
            <Camera className="w-5 h-5 mr-2" />
            Immersive Virtual Experience
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-monastery-green mb-6">
            Virtual Monastery Tours
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the sacred beauty of Sikkim's monasteries from anywhere in the world. 
            Immersive 360° views, HD videos, and detailed virtual walkthroughs.
          </p>
        </div>

        {/* Monastery Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {monasteries.map((monastery, index) => (
            <Card key={monastery.id} className="hover-monastery border-monastery-light animate-monastery-scale bg-white/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{monastery.image}</div>
                    <div>
                      <CardTitle className="text-monastery-green">{monastery.name}</CardTitle>
                      <CardDescription>{monastery.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-monastery-light text-monastery-green">
                    Est. {monastery.established}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div className="p-2">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{monastery.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="p-2">
                    <div className="flex items-center justify-center space-x-1">
                      <Users className="w-4 h-4 text-monastery-green" />
                      <span className="font-medium">{monastery.visitors}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Visitors</p>
                  </div>
                  <div className="p-2">
                    <div className="flex items-center justify-center space-x-1">
                      <MapPin className="w-4 h-4 text-monastery-green" />
                      <span className="font-medium text-xs">{monastery.location.split(',')[0]}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Location</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full btn-monastery mb-4">
                      <Eye className="w-4 h-4 mr-2" />
                      Start Virtual Tour
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-monastery-green flex items-center">
                        {monastery.image} {monastery.name}
                      </DialogTitle>
                      <DialogDescription>
                        {monastery.description} • {monastery.location}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <Tabs defaultValue="360tour" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="360tour">360° Tour</TabsTrigger>
                        <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
                        <TabsTrigger value="videos">Video Tours</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="360tour" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {monastery.videos.filter(v => v.type === "360").map((video, i) => (
                            <VirtualViewer key={i} type={video.type} title={video.title} />
                          ))}
                        </div>
                        
                        <Card className="bg-monastery-light/30">
                          <CardHeader>
                            <CardTitle className="text-monastery-green">Tour Highlights</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {monastery.highlights.map((highlight, i) => (
                                <Badge key={i} variant="outline" className="border-monastery-green text-monastery-green justify-center">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      
                      <TabsContent value="gallery" className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                          {monastery.gallery.map((photo, i) => (
                            <div key={i} className="aspect-square bg-monastery-light/30 rounded-lg flex items-center justify-center text-4xl cursor-pointer hover:bg-monastery-light/50 transition-monastery">
                              {photo}
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-center text-muted-foreground">
                          High-resolution gallery showcasing the monastery's architecture, 
                          sacred artifacts, and spiritual ambiance.
                        </p>
                      </TabsContent>
                      
                      <TabsContent value="videos" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {monastery.videos.map((video, i) => (
                            <Card key={i} className="border-monastery-light">
                              <CardContent className="p-4">
                                <VirtualViewer type={video.type} title={video.title} />
                                <div className="flex items-center justify-between mt-3">
                                  <h4 className="font-medium text-monastery-green">{video.title}</h4>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span>{video.duration}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                
                {/* Quick Preview */}
                <div className="grid grid-cols-6 gap-2">
                  {monastery.gallery.slice(0, 6).map((photo, i) => (
                    <div key={i} className="aspect-square bg-monastery-light/30 rounded text-center flex items-center justify-center text-lg">
                      {photo}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm text-center animate-monastery-fade">
            <CardContent className="py-8">
              <RotateCcw className="w-12 h-12 text-monastery-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-monastery-green mb-2">360° Virtual Reality</h3>
              <p className="text-muted-foreground">
                Immersive 360-degree experiences that let you explore every corner 
                of the monastery as if you're physically present.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm text-center animate-monastery-fade">
            <CardContent className="py-8">
              <Play className="w-12 h-12 text-monastery-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-monastery-green mb-2">HD Video Tours</h3>
              <p className="text-muted-foreground">
                High-definition video documentaries showcasing ceremonies, 
                daily life, and architectural details of each monastery.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm text-center animate-monastery-fade">
            <CardContent className="py-8">
              <Camera className="w-12 h-12 text-monastery-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-monastery-green mb-2">Photo Galleries</h3>
              <p className="text-muted-foreground">
                Curated photo collections capturing the beauty, serenity, 
                and sacred atmosphere of Sikkim's ancient monasteries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default VirtualTourPage;