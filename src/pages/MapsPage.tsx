import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Download, Navigation, Mail, Map, Route, Compass } from 'lucide-react';

const MapsPage = () => {
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <main className="min-h-screen bg-spiritual-gradient py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-monastery-fade">
          <h1 className="text-5xl font-bold text-monastery-green mb-4">Interactive Maps</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate Sikkim's monasteries with detailed routes, offline maps, and comprehensive travel guides
          </p>
        </div>

        {/* Interactive Map Display */}
        <Card className="mb-12 border-monastery-light animate-monastery-slide">
          <CardHeader>
            <CardTitle className="text-monastery-green flex items-center">
              <Map className="w-6 h-6 mr-2" />
              Sikkim Monastery Map
            </CardTitle>
            <CardDescription>Interactive map showing all major monasteries and travel routes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-monastery-light rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-24 h-24 text-monastery-green mx-auto mb-4" />
                <p className="text-monastery-green font-semibold">Interactive Map Loading...</p>
                <p className="text-sm text-muted-foreground">Explore Sikkim's monasteries with detailed navigation</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="btn-monastery">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-monastery-light">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Offline Maps
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-monastery-green">Get Offline Maps</DialogTitle>
                    <DialogDescription>Receive detailed monastery maps and route guides in your email</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreeToTerms}
                        onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">I agree to receive maps and travel updates</Label>
                    </div>
                    <Button className="w-full btn-monastery" disabled={!email || !agreeToTerms}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Maps to Email
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Route Planning */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-monastery-light hover-monastery">
            <CardHeader>
              <CardTitle className="text-monastery-green flex items-center">
                <Route className="w-5 h-5 mr-2" />
                Monastery Route Planner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Plan your perfect monastery tour route with our interactive planner.</p>
              <Button className="w-full btn-monastery">
                <Compass className="w-4 h-4 mr-2" />
                Start Route Planning
              </Button>
            </CardContent>
          </Card>

          <Card className="border-monastery-light hover-monastery">
            <CardHeader>
              <CardTitle className="text-monastery-green flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Offline Map Downloads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Download high-quality maps for offline use during your monastery visits.</p>
              <Button className="w-full btn-spiritual">
                <Download className="w-4 h-4 mr-2" />
                Download Maps
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default MapsPage;