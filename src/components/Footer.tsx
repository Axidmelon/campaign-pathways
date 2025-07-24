import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">CampEdge</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Connecting changemakers with impactful campaigns across India. 
              Join us in creating positive social and environmental change.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#campaigns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Browse Campaigns</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">How it Works</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#corporate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Corporate Programs</a></li>
              <li><a href="#safety" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Safety & Guidelines</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Booking Help</a></li>
              <li><a href="#cancellation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cancellation Policy</a></li>
              <li><a href="#terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-energy-orange" />
                <div>
                  <p className="text-primary-foreground/80">hello@campedge.in</p>
                  <p className="text-primary-foreground/60 text-sm">General inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-energy-orange" />
                <div>
                  <p className="text-primary-foreground/80">+91 98765 43210</p>
                  <p className="text-primary-foreground/60 text-sm">Support hotline</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-energy-orange" />
                <div>
                  <p className="text-primary-foreground/80">Bangalore, India</p>
                  <p className="text-primary-foreground/60 text-sm">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-12 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated on New Campaigns</h4>
            <p className="text-primary-foreground/80 mb-6">
              Be the first to know about exciting new campaigns and exclusive early-bird offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-energy-orange"
              />
              <Button variant="secondary" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 CampEdge. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;