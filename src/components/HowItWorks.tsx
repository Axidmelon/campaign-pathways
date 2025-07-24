import { Search, Calendar, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Discover Campaigns",
    description: "Browse campaigns by cause, location, or date. Filter for environmental, social, or political impact opportunities that match your passion.",
    color: "text-earth-green"
  },
  {
    icon: Calendar,
    title: "Choose Your Dates",
    description: "Select campaigns that fit your schedule. From weekend adventures to week-long intensives, find the perfect timing for your impact journey.",
    color: "text-nature-blue"
  },
  {
    icon: CreditCard,
    title: "Secure Your Spot",
    description: "Simple booking with transparent pricing. Pay securely and receive instant confirmation with detailed itinerary and packing list.",
    color: "text-energy-orange"
  },
  {
    icon: MapPin,
    title: "Show Up & Impact",
    description: "Arrive at our fully-equipped campsites. Everything is organized—just bring your enthusiasm and be part of meaningful change.",
    color: "text-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            How CampEdge Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From discovery to impact in just a few simple steps. No campaign planning, no logistics headaches—just meaningful action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="relative bg-card shadow-card rounded-2xl p-8 text-center hover:shadow-campaign transition-smooth hover:scale-105 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 ${step.color} bg-gradient-to-br from-current/10 to-current/5 rounded-full flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="campaign" size="lg" className="group">
            Start Your Impact Journey
            <MapPin className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;