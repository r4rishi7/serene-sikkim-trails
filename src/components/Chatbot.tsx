import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MessageCircle, Send, MapPin, Navigation, Clock, Info } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to Sikkim Digital Monasteries! I'm here to help you navigate and find information about our monasteries. Ask me about directions, timings, or monastery facilities!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickActions = [
    {
      icon: MapPin,
      text: "Where is the meditation hall?",
      action: "meditation_hall"
    },
    {
      icon: Navigation,
      text: "How to reach cafeteria?",
      action: "cafeteria"
    },
    {
      icon: Clock,
      text: "Prayer timings",
      action: "prayer_times"
    },
    {
      icon: Info,
      text: "Monastery rules",
      action: "rules"
    }
  ];

  const botResponses: { [key: string]: string } = {
    meditation_hall: "The meditation hall is located on the first floor of the main monastery building. Take the stairs near the entrance and turn left. It's open from 5:00 AM to 8:00 PM daily.",
    cafeteria: "The monastery cafeteria is on the ground floor, adjacent to the main prayer hall. Follow the signs for 'Dining Hall' or ask any monk for directions. Meals are served at 7 AM, 12 PM, and 6 PM.",
    prayer_times: "Daily prayer sessions: Morning prayers at 5:30 AM, Afternoon prayers at 12:00 PM, Evening prayers at 6:00 PM. Special ceremonies are announced separately.",
    rules: "Monastery guidelines: Remove shoes before entering prayer halls, maintain silence in meditation areas, photography may be restricted in certain areas, dress modestly, and follow the guidance of monks and volunteers.",
    directions: "I can help you get directions! Please share your current location or let me know which monastery you'd like to visit. I can also integrate with Google Maps for precise navigation.",
    default: "I understand you're looking for information about our monasteries. I can help with directions, timings, facilities, and general information. Feel free to ask specific questions!"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = botResponses.default;
      
      const lowerInput = inputText.toLowerCase();
      if (lowerInput.includes('meditation') || lowerInput.includes('hall')) {
        botResponse = botResponses.meditation_hall;
      } else if (lowerInput.includes('cafeteria') || lowerInput.includes('dining') || lowerInput.includes('food')) {
        botResponse = botResponses.cafeteria;
      } else if (lowerInput.includes('prayer') || lowerInput.includes('time') || lowerInput.includes('timing')) {
        botResponse = botResponses.prayer_times;
      } else if (lowerInput.includes('rule') || lowerInput.includes('guideline') || lowerInput.includes('dress')) {
        botResponse = botResponses.rules;
      } else if (lowerInput.includes('direction') || lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('how to reach')) {
        botResponse = botResponses.directions;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickAction = (action: string, text: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[action] || botResponses.default,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="bg-monastery-gradient text-white shadow-elevation rounded-full p-4 hover:shadow-glow transition-monastery animate-monastery-glow"
            size="icon"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-[400px] bg-white flex flex-col h-full">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-monastery-green flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Monastery Assistant
            </SheetTitle>
            <SheetDescription>
              Get instant help with navigation, directions, and monastery information
            </SheetDescription>
          </SheetHeader>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 mt-4 mb-4 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-monastery-light text-monastery-green'
                        : 'bg-monastery-gradient text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-muted-foreground' : 'text-white/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickAction(action.action, action.text)}
                  className="border-monastery-light text-monastery-green hover:bg-monastery-light"
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  <span className="text-xs">{action.text.split(' ')[0]}...</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="flex space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about directions, timings, facilities..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 border-monastery-light focus:ring-monastery-green"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-monastery-gradient text-white hover:bg-primary-dark"
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-4 p-3 bg-monastery-light/30 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 <strong>Pro tip:</strong> I can help with Google Maps integration! 
              Just ask for directions to any monastery from your location.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Chatbot;