import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-campaign.jpg";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="People participating in environmental campaign" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/60 via-primary/40 to-nature-blue/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 mb-8">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Join 10,000+ Changemakers Across India</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover & Book Your Next
            <span className="block bg-gradient-to-r from-energy-orange to-secondary bg-clip-text text-transparent animate-glow">
              Impact Adventure
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join inspiring social, political, and environmental campaigns at premium campsites. 
            No planning required—just show up and make a difference.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-energy-orange" />
              <span className="text-lg font-semibold">500+ Campaigns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-energy-orange" />
              <span className="text-lg font-semibold">50+ Causes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-energy-orange" />
              <span className="text-lg font-semibold">100+ Locations</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" className="group" onClick={() => window.location.href = '/campaigns'}>
              Explore Campaigns
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/50 hover:bg-primary-foreground/10 text-slate-950">
              How it Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm opacity-75">
            <p className="mb-2">Trusted by leading organizations and 10,000+ participants</p>
            <div className="flex items-center justify-center space-x-6 text-xs">
              <span>✓ Verified Campsites</span>
              <span>✓ Safety Assured</span>
              <span>✓ Expert Facilitation</span>
              <span>✓ Impact Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-energy-orange/20 rounded-full animate-float" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-nature-blue/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute bottom-20 right-32 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{
      animationDelay: '2s'
    }} />
    </section>;
};
export default Hero;