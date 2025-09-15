import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, CreditCard, Gift, Smartphone } from 'lucide-react';

const DonationsPage = () => {
  const [amount, setAmount] = useState(100);
  const [showThankYou, setShowThankYou] = useState(false);

  const predefinedAmounts = [20, 50, 100, 500, 1000, 5000, 10000];

  const handleDonation = () => {
    setShowThankYou(true);
  };

  return (
    <main className="min-h-screen bg-spiritual-gradient py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-monastery-fade">
          <h1 className="text-5xl font-bold text-monastery-green mb-4">Support Our Monasteries</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help preserve Sikkim's spiritual heritage and support monastery maintenance, education, and community programs
          </p>
        </div>

        <Card className="border-monastery-light animate-monastery-slide">
          <CardHeader>
            <CardTitle className="text-monastery-green flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              Make a Donation
            </CardTitle>
            <CardDescription>Your contribution helps maintain these sacred spaces for future generations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Selection */}
            <div>
              <Label className="text-lg font-semibold text-monastery-green">Select Donation Amount</Label>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {predefinedAmounts.map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset ? "default" : "outline"}
                    onClick={() => setAmount(preset)}
                    className={amount === preset ? "bg-monastery-green" : "border-monastery-light"}
                  >
                    ₹{preset}
                  </Button>
                ))}
              </div>
              <div className="mt-4">
                <Label htmlFor="custom-amount">Custom Amount (₹20 - ₹10,000)</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min="20"
                  max="10000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-monastery-green">Donor Information (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name (optional)" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number (optional)" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address (optional)" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email (optional)" />
                <p className="text-sm text-muted-foreground mt-1">
                  Provide email to receive updates about monastery events and activities
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-monastery-green">Payment Method</h3>
              <Button 
                className="w-full btn-monastery text-lg py-6"
                onClick={handleDonation}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Pay ₹{amount} via UPI
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Dialog */}
        <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-monastery-green text-center text-2xl">Thank You! 🙏</DialogTitle>
              <DialogDescription className="text-center text-lg">
                "May your generosity bring you peace and happiness, and may it help preserve our sacred traditions for future generations."
                <br />
                <em className="text-monastery-green">- Ancient Buddhist Blessing</em>
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-4">
              <p className="text-muted-foreground">
                Your UPI payment request has been sent. Please complete the payment in your UPI app.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default DonationsPage;