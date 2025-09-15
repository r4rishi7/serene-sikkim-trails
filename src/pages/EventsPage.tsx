import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, MapPin, Users, Play, BookMarked, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [currentUpcomingSlide, setCurrentUpcomingSlide] = useState(0);
  const [currentRecordedSlide, setCurrentRecordedSlide] = useState(0);
  const [currentMeditationSlide, setCurrentMeditationSlide] = useState(0);

  const upcomingEvents = [
    {
      title: "Annual Losar Festival",
      monastery: "Rumtek Monastery",
      date: "February 25, 2024",
      time: "6:00 AM - 8:00 PM",
      description: "Celebrate the Tibetan New Year with traditional dances, prayers, and community feast",
      capacity: "500 participants",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Full Moon Meditation Retreat",
      monastery: "Pemayangtse Monastery",
      date: "March 10, 2024",
      time: "5:00 PM - 9:00 PM",
      description: "Special meditation session under the full moon with guided teachings",
      capacity: "50 participants",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Buddha Jayanti Celebration",
      monastery: "Enchey Monastery",
      date: "May 12, 2024",
      time: "4:00 AM - 10:00 PM",
      description: "Commemorate Lord Buddha's birth, enlightenment, and nirvana",
      capacity: "1000 participants",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Monsoon Meditation Workshop",
      monastery: "Dubdi Monastery",
      date: "July 15, 2024",
      time: "7:00 AM - 6:00 PM",
      description: "Learn advanced meditation techniques during the peaceful monsoon season",
      capacity: "30 participants",
      image: "/api/placeholder/400/200"
    }
  ];

  const recordedEvents = [
    {
      title: "Cham Dance Performance 2023",
      monastery: "Rumtek Monastery",
      duration: "45 minutes",
      date: "December 2023",
      description: "Traditional masked dance performed during winter festival",
      views: "15,234",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Morning Prayer Session",
      monastery: "Pemayangtse Monastery",
      duration: "30 minutes",
      date: "January 2024",
      description: "Daily morning prayers with monks chanting",
      views: "8,456",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Monastery Architecture Tour",
      monastery: "Enchey Monastery",
      duration: "1 hour 15 minutes",
      date: "November 2023",
      description: "Detailed tour of monastery architecture and symbolism",
      views: "22,891",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Traditional Music Performance",
      monastery: "Tashiding Monastery",
      duration: "55 minutes",
      date: "October 2023",
      description: "Sacred musical instruments and traditional chants",
      views: "12,340",
      image: "/api/placeholder/400/200"
    }
  ];

  const meditationVideos = [
    {
      title: "Mindfulness Meditation for Beginners",
      instructor: "Lama Tenzin",
      duration: "20 minutes",
      level: "Beginner",
      description: "Learn the basics of mindfulness meditation with breathing techniques",
      plays: "45,234",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Walking Meditation in Nature",
      instructor: "Ani Dolma",
      duration: "35 minutes",
      level: "Intermediate",
      description: "Practice mindful walking while connecting with nature",
      plays: "28,567",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Advanced Visualization Techniques",
      instructor: "Rinpoche Lobsang",
      duration: "50 minutes",
      level: "Advanced",
      description: "Deep visualization practices for spiritual development",
      plays: "18,234",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Loving-Kindness Meditation",
      instructor: "Lama Pemba",
      duration: "25 minutes",
      level: "All Levels",
      description: "Cultivate compassion and loving-kindness towards all beings",
      plays: "31,892",
      image: "/api/placeholder/400/200"
    }
  ];

  const nextSlide = (current: number, total: number, setter: (value: number) => void) => {
    setter((current + 1) % total);
  };

  const prevSlide = (current: number, total: number, setter: (value: number) => void) => {
    setter(current === 0 ? total - 1 : current - 1);
  };

  const RegistrationDialog = ({ event }: { event: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-monastery w-full">
          <Users className="w-4 h-4 mr-2" />
          Register Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-monastery-green">Register for {event.title}</DialogTitle>
          <DialogDescription>
            Fill in your details to register for this event
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <div>
            <Label htmlFor="participants">Number of Participants</Label>
            <Input id="participants" type="number" min="1" max="10" defaultValue="1" />
          </div>
          <Button className="w-full btn-monastery">Complete Registration</Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <main className="min-h-screen bg-spiritual-gradient py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-monastery-fade">
          <h1 className="text-5xl font-bold text-monastery-green mb-4">
            Events & Meditation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover upcoming monastery events, watch recorded ceremonies, and practice guided meditation
          </p>
        </div>

        {/* Upcoming Events Slider */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-monastery-green">Upcoming Events</h2>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => prevSlide(currentUpcomingSlide, upcomingEvents.length, setCurrentUpcomingSlide)}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => nextSlide(currentUpcomingSlide, upcomingEvents.length, setCurrentUpcomingSlide)}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.slice(currentUpcomingSlide, currentUpcomingSlide + 3).map((event, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale">
                <div className="aspect-video bg-monastery-light rounded-t-lg flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-monastery-green" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{event.title}</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">{event.monastery}</Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {event.capacity}
                    </div>
                  </div>
                  <RegistrationDialog event={event} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recorded Events Slider */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-monastery-green">Recorded Events</h2>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => prevSlide(currentRecordedSlide, recordedEvents.length, setCurrentRecordedSlide)}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => nextSlide(currentRecordedSlide, recordedEvents.length, setCurrentRecordedSlide)}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedEvents.slice(currentRecordedSlide, currentRecordedSlide + 3).map((event, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale group">
                <div className="aspect-video bg-monastery-light rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Play className="w-12 h-12 text-monastery-green group-hover:scale-110 transition-monastery" />
                  <div className="absolute inset-0 bg-monastery-green/10 group-hover:bg-monastery-green/20 transition-monastery"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{event.title}</CardTitle>
                    <Badge variant="secondary">{event.duration}</Badge>
                  </div>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.monastery}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Play className="w-4 h-4 mr-2" />
                      {event.views} views
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-monastery-light text-monastery-green hover:bg-monastery-light">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Meditation Videos Slider */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-monastery-green">Meditation Videos</h2>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => prevSlide(currentMeditationSlide, meditationVideos.length, setCurrentMeditationSlide)}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => nextSlide(currentMeditationSlide, meditationVideos.length, setCurrentMeditationSlide)}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditationVideos.slice(currentMeditationSlide, currentMeditationSlide + 3).map((video, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale group">
                <div className="aspect-video bg-spiritual-gradient rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <BookMarked className="w-12 h-12 text-monastery-green group-hover:scale-110 transition-monastery" />
                  <div className="absolute inset-0 bg-monastery-green/10 group-hover:bg-monastery-green/20 transition-monastery"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{video.title}</CardTitle>
                    <Badge 
                      className={`${
                        video.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        video.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        video.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {video.level}
                    </Badge>
                  </div>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {video.instructor}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {video.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Play className="w-4 h-4 mr-2" />
                      {video.plays} plays
                    </div>
                  </div>
                  <Button className="w-full btn-spiritual">
                    <Play className="w-4 h-4 mr-2" />
                    Start Meditation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventsPage;