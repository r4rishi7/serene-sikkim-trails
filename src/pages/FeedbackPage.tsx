import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Star, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const FeedbackPage = () => {
  const [selectedMonasteries, setSelectedMonasteries] = useState<string[]>([]);
  const [ratings, setRatings] = useState({
    hospitality: '',
    food: '',
    cleanliness: '',
    sikkim: '',
    tours: ''
  });
  const [feedback, setFeedback] = useState({
    hospitality: '',
    food: '',
    sikkim: '',
    tours: '',
    grievances: '',
    suggestions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const monasteries = [
    'Rumtek Monastery',
    'Pemayangtse Monastery', 
    'Enchey Monastery',
    'Tashiding Monastery',
    'Sangachoeling Monastery',
    'Dubdi Monastery',
    'Ralang Monastery',
    'Phensang Monastery',
    'Kartok Monastery',
    'Ralong Monastery'
  ];

  const ratingOptions = ['Excellent', 'Very Good', 'Good', 'Average', 'Poor'];

  const handleMonasteryChange = (monastery: string, checked: boolean) => {
    if (checked) {
      setSelectedMonasteries(prev => [...prev, monastery]);
    } else {
      setSelectedMonasteries(prev => prev.filter(m => m !== monastery));
    }
  };

  const handleRatingChange = (category: string, value: string) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const handleFeedbackChange = (category: string, value: string) => {
    setFeedback(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMonasteries.length === 0) {
      toast("Please select at least one monastery you visited.");
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    toast("Thank you for your valuable feedback! Your response has been recorded.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedMonasteries([]);
      setRatings({
        hospitality: '',
        food: '',
        cleanliness: '',
        sikkim: '',
        tours: ''
      });
      setFeedback({
        hospitality: '',
        food: '',
        sikkim: '',
        tours: '',
        grievances: '',
        suggestions: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-spiritual-gradient flex items-center justify-center px-4">
        <Card className="max-w-2xl mx-auto border-monastery-light bg-white/90 backdrop-blur-sm animate-monastery-fade">
          <CardContent className="text-center py-16">
            <div className="w-20 h-20 bg-monastery-gradient rounded-full flex items-center justify-center mx-auto mb-6 animate-monastery-glow">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-monastery-green mb-4">Feedback Submitted Successfully!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for sharing your experience with Sikkim's monasteries. 
              Your feedback helps us improve our services.
            </p>
            <div className="bg-monastery-light/50 p-4 rounded-lg">
              <p className="text-monastery-green font-medium italic">
                "May your spiritual journey bring you peace and enlightenment. 
                The mountains hold ancient wisdom for those who seek it."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Ancient Sikkimese Blessing</p>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-spiritual-gradient py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-monastery-fade">
          <Badge className="mb-6 bg-monastery-light text-monastery-green px-6 py-2 text-lg">
            <MessageSquare className="w-5 h-5 mr-2" />
            Share Your Experience
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-monastery-green mb-6">
            Feedback & Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us improve the monastery experience for future visitors. 
            Your honest feedback is valuable and anonymous.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Monastery Selection */}
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-scale">
            <CardHeader>
              <CardTitle className="text-monastery-green">Which monasteries did you visit?</CardTitle>
              <CardDescription>Select all monasteries you visited during your trip</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {monasteries.map((monastery) => (
                  <div key={monastery} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-monastery-light/50 transition-monastery">
                    <Checkbox
                      id={monastery}
                      checked={selectedMonasteries.includes(monastery)}
                      onCheckedChange={(checked) => handleMonasteryChange(monastery, checked as boolean)}
                    />
                    <label htmlFor={monastery} className="text-sm cursor-pointer flex-1">{monastery}</label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rating Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Hospitality Rating */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
              <CardHeader>
                <CardTitle className="text-monastery-green flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Hospitality Experience
                </CardTitle>
                <CardDescription>How was the hospitality and welcome you received?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={ratings.hospitality} onValueChange={(value) => handleRatingChange('hospitality', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate the hospitality" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Share your hospitality experience..."
                  value={feedback.hospitality}
                  onChange={(e) => handleFeedbackChange('hospitality', e.target.value)}
                  className="border-monastery-light focus:ring-monastery-green"
                />
              </CardContent>
            </Card>

            {/* Food Rating */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
              <CardHeader>
                <CardTitle className="text-monastery-green flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Food Quality
                </CardTitle>
                <CardDescription>Rate the food quality and variety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={ratings.food} onValueChange={(value) => handleRatingChange('food', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate the food" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Tell us about the food experience..."
                  value={feedback.food}
                  onChange={(e) => handleFeedbackChange('food', e.target.value)}
                  className="border-monastery-light focus:ring-monastery-green"
                />
              </CardContent>
            </Card>

            {/* Cleanliness Rating */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
              <CardHeader>
                <CardTitle className="text-monastery-green flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Cleanliness & Hygiene
                </CardTitle>
                <CardDescription>How clean and hygienic were the facilities?</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={ratings.cleanliness} onValueChange={(value) => handleRatingChange('cleanliness', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate cleanliness" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Sikkim Overall */}
            <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
              <CardHeader>
                <CardTitle className="text-monastery-green flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Overall Sikkim Experience
                </CardTitle>
                <CardDescription>Your overall impression of Sikkim</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select value={ratings.sikkim} onValueChange={(value) => handleRatingChange('sikkim', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rate Sikkim experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratingOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="What did you love about Sikkim?..."
                  value={feedback.sikkim}
                  onChange={(e) => handleFeedbackChange('sikkim', e.target.value)}
                  className="border-monastery-light focus:ring-monastery-green"
                />
              </CardContent>
            </Card>
          </div>

          {/* Tours Rating */}
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
            <CardHeader>
              <CardTitle className="text-monastery-green flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Tours & Guidance
              </CardTitle>
              <CardDescription>Rate the tour guidance and information provided</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={ratings.tours} onValueChange={(value) => handleRatingChange('tours', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Rate tour experience" />
                </SelectTrigger>
                <SelectContent>
                  {ratingOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="How was the tour guidance and information?..."
                value={feedback.tours}
                onChange={(e) => handleFeedbackChange('tours', e.target.value)}
                className="border-monastery-light focus:ring-monastery-green"
              />
            </CardContent>
          </Card>

          {/* Public Grievances */}
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
            <CardHeader>
              <CardTitle className="text-monastery-green">Public Grievances & Issues</CardTitle>
              <CardDescription>Any problems or issues you faced during your visit</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Please share any problems, inconveniences, or issues you encountered..."
                value={feedback.grievances}
                onChange={(e) => handleFeedbackChange('grievances', e.target.value)}
                className="border-monastery-light focus:ring-monastery-green min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card className="border-monastery-light bg-white/50 backdrop-blur-sm animate-monastery-fade">
            <CardHeader>
              <CardTitle className="text-monastery-green">Suggestions for Improvement</CardTitle>
              <CardDescription>Help us improve the monastery experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What improvements would you suggest for monasteries, facilities, or services?..."
                value={feedback.suggestions}
                onChange={(e) => handleFeedbackChange('suggestions', e.target.value)}
                className="border-monastery-light focus:ring-monastery-green min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit"
              className="btn-monastery text-lg px-12 py-4"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Submit Feedback
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Your feedback is anonymous and helps improve services for future visitors
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default FeedbackPage;