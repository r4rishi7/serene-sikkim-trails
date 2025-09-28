import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, Download, Music, Headphones, Volume2, ChevronLeft, ChevronRight, Mail, Clock, Star } from 'lucide-react';

const MusicPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGuidanceSlide, setCurrentGuidanceSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const traditionalMusic = [
    {
      title: "Om Mani Padme Hum",
      type: "Sacred Chant",
      duration: "12:30",
      monastery: "Rumtek Monastery",
      description: "Traditional Tibetan Buddhist mantra chanted by monks",
      downloads: "25,434",
      rating: 4.9,
      fileSize: "18.5 MB",
      format: "MP3 320kbps"
    },
    {
      title: "Morning Prayer Bells",
      type: "Temple Bells",
      duration: "8:45",
      monastery: "Pemayangtse Monastery",
      description: "Peaceful monastery bells for morning meditation",
      downloads: "18,231",
      rating: 4.8,
      fileSize: "12.8 MB",
      format: "MP3 320kbps"
    },
    {
      title: "Tara Mantra",
      type: "Sacred Chant",
      duration: "15:20",
      monastery: "Enchey Monastery",
      description: "Green Tara mantra for protection and compassion",
      downloads: "22,891",
      rating: 4.9,
      fileSize: "22.1 MB",
      format: "MP3 320kbps"
    },
    {
      title: "Tibetan Bowls Meditation",
      type: "Instrumental",
      duration: "20:15",
      monastery: "Tashiding Monastery",
      description: "Healing sound therapy with traditional singing bowls",
      downloads: "31,567",
      rating: 5.0,
      fileSize: "29.3 MB",
      format: "MP3 320kbps"
    }
  ];

  const tourGuidanceAudio = [
    {
      title: "Rumtek Monastery Complete Guide",
      type: "Tour Guide",
      duration: "25:30",
      language: "English",
      description: "Complete audio tour of Rumtek Monastery with history and significance",
      downloads: "8,234",
      rating: 4.7,
      fileSize: "36.8 MB",
      format: "MP3 192kbps"
    },
    {
      title: "Pemayangtse Sacred Sites",
      type: "Tour Guide",
      duration: "18:42",
      language: "English",
      description: "Guided tour of sacred sites and artifacts at Pemayangtse",
      downloads: "6,789",
      rating: 4.6,
      fileSize: "27.1 MB",
      format: "MP3 192kbps"
    },
    {
      title: "Sikkim Monastery Trail",
      type: "Route Guide",
      duration: "45:15",
      language: "English",
      description: "Complete guide to visiting all major monasteries in Sikkim",
      downloads: "12,456",
      rating: 4.8,
      fileSize: "65.4 MB",
      format: "MP3 192kbps"
    },
    {
      title: "Cultural Significance Explained",
      type: "Educational",
      duration: "32:20",
      language: "English",
      description: "Learn about Buddhist culture and monastery traditions",
      downloads: "9,123",
      rating: 4.9,
      fileSize: "46.7 MB",
      format: "MP3 192kbps"
    }
  ];

  const nextSlide = (current: number, total: number, setter: (value: number) => void) => {
    setter((current + 1) % total);
  };

  const prevSlide = (current: number, total: number, setter: (value: number) => void) => {
    setter(current === 0 ? total - 1 : current - 1);
  };

  const EmailDialog = ({ type }: { type: 'music' | 'guidance' }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-monastery-light text-monastery-green hover:bg-monastery-light">
          <Mail className="w-4 h-4 mr-2" />
          Email {type === 'music' ? 'Music' : 'Guide'} Collection
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-monastery-green">
            Get {type === 'music' ? 'Sacred Music' : 'Tour Guide Audio'} Collection
          </DialogTitle>
          <DialogDescription>
            {type === 'music' 
              ? 'Receive our complete sacred music collection in your email' 
              : 'Get detailed tour guide audio files sent to your email'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="email-input">Email Address</Label>
            <Input
              id="email-input"
              type="email"
              placeholder="Enter your email address"
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
            <Label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to receive {type === 'music' ? 'sacred music' : 'tour guide audio'} files and updates from Sikkim Digital Monasteries
            </Label>
          </div>

          <div className="bg-monastery-light/30 p-4 rounded-lg">
            <h4 className="font-semibold text-monastery-green mb-2">What you'll receive:</h4>
            <ul className="text-sm space-y-1">
              {type === 'music' ? (
                <>
                  <li>• High-quality MP3 files (320kbps)</li>
                  <li>• Complete sacred chant collection</li>
                  <li>• Traditional instrument recordings</li>
                  <li>• Meditation background music</li>
                </>
              ) : (
                <>
                  <li>• Complete monastery tour guides</li>
                  <li>• Cultural significance explanations</li>
                  <li>• Route guidance audio</li>
                  <li>• Historical context narrations</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> Email is optional. We'll only send you the requested {type === 'music' ? 'music' : 'audio guide'} files and occasional updates about monastery events. You can unsubscribe anytime.
            </p>
          </div>

          <Button 
            className="w-full btn-monastery" 
            disabled={!email || !agreeToTerms}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send {type === 'music' ? 'Music' : 'Guide'} Collection
          </Button>
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
            Sacred Music & Audio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the spiritual sounds of Sikkim's monasteries through traditional chants, instrumental music, and guided audio tours
          </p>
        </div>

        {/* Traditional Music Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-monastery-green">Traditional Sacred Music</h2>
              <p className="text-muted-foreground mt-2">Authentic monastery chants and traditional music for meditation and spiritual practice</p>
            </div>
            <div className="flex space-x-2">
              <EmailDialog type="music" />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => prevSlide(currentSlide, traditionalMusic.length, setCurrentSlide)}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => nextSlide(currentSlide, traditionalMusic.length, setCurrentSlide)}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalMusic.slice(currentSlide, currentSlide + 3).map((music, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale group">
                <div className="aspect-square bg-monastery-gradient rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Music className="w-16 h-16 text-white group-hover:scale-110 transition-monastery" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-monastery"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{music.title}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{music.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{music.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="secondary">{music.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {music.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Monastery</span>
                      <span className="font-medium">{music.monastery}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Downloads</span>
                      <span className="font-medium">{music.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Format</span>
                      <span className="font-medium">{music.format}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-monastery-light">
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                    <Button className="flex-1 btn-spiritual">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tour Guidance Audio Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-monastery-green">Tour Guidance Audio</h2>
              <p className="text-muted-foreground mt-2">Professional audio guides to enhance your monastery visits and cultural understanding</p>
            </div>
            <div className="flex space-x-2">
              <EmailDialog type="guidance" />
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => prevSlide(currentGuidanceSlide, tourGuidanceAudio.length, setCurrentGuidanceSlide)}
                className="border-monastery-light"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => nextSlide(currentGuidanceSlide, tourGuidanceAudio.length, setCurrentGuidanceSlide)}
                className="border-monastery-light"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourGuidanceAudio.slice(currentGuidanceSlide, currentGuidanceSlide + 3).map((audio, index) => (
              <Card key={index} className="hover-monastery border-monastery-light animate-monastery-scale group">
                <div className="aspect-square bg-himalayan-blue/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Headphones className="w-16 h-16 text-himalayan-blue group-hover:scale-110 transition-monastery" />
                  <div className="absolute inset-0 bg-himalayan-blue/0 group-hover:bg-himalayan-blue/10 transition-monastery"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-monastery-green">{audio.title}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">{audio.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{audio.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="secondary" className="bg-himalayan-blue/20 text-himalayan-blue">{audio.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {audio.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Language</span>
                      <span className="font-medium">{audio.language}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Downloads</span>
                      <span className="font-medium">{audio.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">File Size</span>
                      <span className="font-medium">{audio.fileSize}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-himalayan-blue/30 text-himalayan-blue hover:bg-himalayan-blue/10">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button className="flex-1 bg-himalayan-blue hover:bg-himalayan-blue/80 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="mb-16">
          <Card className="border-monastery-light animate-monastery-fade">
            <CardHeader>
              <CardTitle className="text-monastery-green flex items-center">
                <Headphones className="w-6 h-6 mr-2" />
                How to Use Our Audio Collection
              </CardTitle>
              <CardDescription>Make the most of your spiritual and cultural audio experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-monastery-green mb-4">Sacred Music Guidelines</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Use headphones for the best meditation experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Listen in a quiet, peaceful environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Respect the sacred nature of the chants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-monastery-green rounded-full mt-2 mr-3"></span>
                      <span>Share mindfully with others seeking spiritual peace</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-monastery-green mb-4">Tour Guide Audio Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-himalayan-blue rounded-full mt-2 mr-3"></span>
                      <span>Download before visiting monasteries (offline access)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-himalayan-blue rounded-full mt-2 mr-3"></span>
                      <span>Use with maps for complete navigation experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-himalayan-blue rounded-full mt-2 mr-3"></span>
                      <span>Pause and explore at your own pace</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-himalayan-blue rounded-full mt-2 mr-3"></span>
                      <span>Share with travel companions for group tours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Copyright Notice */}
        <section>
          <Card className="border-monastery-light bg-monastery-light/20">
            <CardContent className="text-center py-8">
              <h3 className="text-lg font-semibold text-monastery-green mb-4">Copyright & Usage Notice</h3>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                All sacred music and audio content is provided for personal spiritual practice and cultural education. 
                Commercial use requires permission. These recordings were made with the blessing and participation of the respective monasteries. 
                Please respect the sacred nature of these materials and use them mindfully.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default MusicPage;