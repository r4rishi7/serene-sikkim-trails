import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Church, Home, Calendar, MapPin, Music, BookOpen, Gift, Map, Phone, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Tourism', path: '/tourism', icon: MapPin },
    { name: 'Music', path: '/music', icon: Music },
    { name: 'Manuscripts', path: '/manuscripts', icon: BookOpen },
    { name: 'Maps', path: '/maps', icon: Map },
    { name: 'Donations', path: '/donations', icon: Gift },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Feedback', path: '/feedback', icon: MessageSquare },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-monastery-light shadow-monastery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-monastery-gradient rounded-lg flex items-center justify-center group-hover:animate-monastery-glow transition-monastery">
              <Church className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-monastery-green">Sikkim Digital</span>
              <div className="text-xs text-muted-foreground">Monasteries</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-monastery ${
                  isActive(item.path)
                    ? 'bg-monastery-light text-monastery-green'
                    : 'text-muted-foreground hover:text-monastery-green hover:bg-monastery-light/50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-monastery-green">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-monastery-light">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-monastery-gradient rounded-lg flex items-center justify-center">
                  <Church className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-monastery-green">Sikkim Digital</span>
                  <div className="text-xs text-muted-foreground">Monasteries</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-monastery ${
                      isActive(item.path)
                        ? 'bg-monastery-light text-monastery-green'
                        : 'text-muted-foreground hover:text-monastery-green hover:bg-monastery-light/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;