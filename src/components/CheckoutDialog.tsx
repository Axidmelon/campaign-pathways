import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Users, IndianRupee, Shield, CheckCircle } from "lucide-react";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: {
    id: string;
    title: string;
    price: number;
    date: string;
    location: string;
    image: string;
  };
}

const CheckoutDialog = ({ isOpen, onClose, campaign }: CheckoutDialogProps) => {
  const [participants, setParticipants] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRequirements: "",
    specialRequests: ""
  });

  const subtotal = campaign.price * participants;
  const taxes = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + taxes;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    // Here you would integrate with your payment system
    console.log("Processing booking:", { campaign: campaign.id, participants, formData, total });
    // For now, just close the dialog
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <CreditCard className="w-6 h-6 mr-2 text-primary" />
            Complete Your Booking
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
              
              {/* Number of Participants */}
              <div className="space-y-2">
                <Label htmlFor="participants">Number of Participants</Label>
                <Select value={participants.toString()} onValueChange={(value) => setParticipants(parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Primary Participant Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Emergency Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    placeholder="Contact person name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                  <Input
                    id="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Requirements</Label>
                <Input
                  id="dietary"
                  value={formData.dietaryRequirements}
                  onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                  placeholder="Any allergies or dietary restrictions"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  placeholder="Any special accommodations needed"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Campaign Summary */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Campaign Summary</h3>
              <div className="flex space-x-4">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{campaign.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.location}</p>
                  <p className="text-sm text-muted-foreground">{campaign.date}</p>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <IndianRupee className="w-5 h-5 mr-2" />
                Price Breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    ₹{campaign.price.toLocaleString()} × {participants} {participants === 1 ? 'person' : 'people'}
                  </span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes (GST 18%)</span>
                  <span className="font-medium">₹{taxes.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-earth-green/10 border border-earth-green/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-earth-green" />
                <div>
                  <h4 className="font-medium text-earth-green">Secure Booking</h4>
                  <p className="text-sm text-muted-foreground">Your payment is protected with bank-grade security</p>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-card rounded-xl p-4">
              <h4 className="font-medium mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-earth-green" />
                Cancellation Policy
              </h4>
              <p className="text-sm text-muted-foreground">
                Free cancellation up to 48 hours before the event. 50% refund within 24 hours.
              </p>
            </div>

            {/* Book Now Button */}
            <Button 
              variant="campaign" 
              size="lg" 
              className="w-full"
              onClick={handleBooking}
            >
              Complete Booking - ₹{total.toLocaleString()}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By booking, you agree to our Terms & Conditions and Privacy Policy
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;