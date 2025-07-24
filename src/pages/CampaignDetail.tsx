import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Clock, Star, ArrowLeft, CheckCircle, Wifi, Car, Utensils, Bed } from "lucide-react";
import { useState } from "react";
import CheckoutDialog from "@/components/CheckoutDialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import forestImage from "@/assets/forest-campaign.jpg";
import corporateImage from "@/assets/corporate-campaign.jpg";
import educationImage from "@/assets/education-campaign.jpg";

const campaignData = {
  "1": {
    id: "1",
    title: "River Restoration & Tree Planting Drive",
    description: "Join us for a transformative weekend cleaning the Ganges tributaries and planting native trees. Includes expert-led workshops on water conservation and sustainable living practices.",
    image: forestImage,
    location: "Rishikesh, Uttarakhand",
    date: "Mar 15-17, 2024",
    duration: "3 days",
    capacity: 50,
    enrolled: 42,
    price: 4500,
    category: "Environmental",
    rating: 4.8,
    difficulty: "Medium" as const,
    type: "Both" as const,
    fullDescription: "Experience the power of collective action as we work together to restore the sacred Ganges river system. This comprehensive 3-day program combines hands-on environmental work with educational workshops led by renowned conservationists and local experts. You'll participate in river cleanup activities, plant native tree species, and learn about sustainable water management practices that you can implement in your daily life.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        activities: [
          "10:00 AM - Welcome & camp setup",
          "11:00 AM - Introduction to river ecosystem",
          "2:00 PM - First cleanup session at Ganges tributary",
          "6:00 PM - Community dinner & bonfire"
        ]
      },
      {
        day: "Day 2", 
        title: "Tree Planting & Workshop",
        activities: [
          "7:00 AM - Morning yoga by the river",
          "9:00 AM - Native tree planting drive",
          "2:00 PM - Water conservation workshop",
          "4:00 PM - Traditional cooking with local ingredients",
          "7:00 PM - Cultural evening with local artists"
        ]
      },
      {
        day: "Day 3",
        title: "Final Impact & Departure", 
        activities: [
          "8:00 AM - Final cleanup session",
          "11:00 AM - Impact measurement & reflection",
          "1:00 PM - Farewell lunch",
          "3:00 PM - Departure"
        ]
      }
    ],
    amenities: [
      { icon: Bed, name: "Comfortable tents", description: "Weather-proof tents with sleeping bags" },
      { icon: Utensils, name: "All meals included", description: "Organic, locally-sourced vegetarian meals" },
      { icon: Wifi, name: "WiFi available", description: "Limited connectivity for emergencies" },
      { icon: Car, name: "Transportation", description: "Bus pickup from Delhi & return" }
    ],
    included: [
      "Accommodation in comfortable tents",
      "All vegetarian meals (6 meals total)",
      "Professional guidance and workshops", 
      "All equipment and tools",
      "Transportation from Delhi",
      "Certificate of participation"
    ],
    notIncluded: [
      "Personal items and toiletries",
      "Travel insurance",
      "Additional snacks or beverages",
      "Personal transportation to Delhi pickup point"
    ]
  },
  "2": {
    id: "2",
    title: "Corporate Social Impact Retreat",
    description: "Team-building through meaningful action. Work with local NGOs on education initiatives while strengthening team bonds in nature. Perfect for corporate CSR goals.",
    image: corporateImage,
    location: "Lonavala, Maharashtra",
    date: "Mar 22-24, 2024",
    duration: "3 days",
    capacity: 30,
    enrolled: 18,
    price: 8500,
    category: "Social",
    rating: 4.9,
    difficulty: "Easy" as const,
    type: "Corporate" as const,
    fullDescription: "Transform your team while making a lasting impact on local communities. This unique corporate retreat combines professional team-building activities with meaningful social work, creating an experience that strengthens both team bonds and social responsibility.",
    itinerary: [
      {
        day: "Day 1",
        title: "Team Building & Community Introduction",
        activities: [
          "9:00 AM - Arrival & team icebreakers",
          "11:00 AM - Visit to local schools",
          "2:00 PM - Teaching session with children",
          "6:00 PM - Team reflection & dinner"
        ]
      },
      {
        day: "Day 2",
        title: "Skills Workshop & Implementation",
        activities: [
          "8:00 AM - Leadership workshop",
          "10:00 AM - Educational material creation",
          "2:00 PM - Community interaction session",
          "5:00 PM - Team challenges in nature",
          "7:00 PM - Cultural exchange dinner"
        ]
      },
      {
        day: "Day 3",
        title: "Impact Assessment & Future Planning",
        activities: [
          "9:00 AM - Project presentation by teams",
          "11:00 AM - Feedback session with NGO partners",
          "1:00 PM - Action planning for continued support",
          "3:00 PM - Departure"
        ]
      }
    ],
    amenities: [
      { icon: Bed, name: "Premium accommodation", description: "Luxury tents with modern amenities" },
      { icon: Utensils, name: "Gourmet meals", description: "Chef-prepared meals with dietary options" },
      { icon: Wifi, name: "High-speed WiFi", description: "Full connectivity for work needs" },
      { icon: Car, name: "Luxury transport", description: "AC bus with refreshments" }
    ],
    included: [
      "Premium tent accommodation",
      "All meals and refreshments",
      "Professional facilitation",
      "Team building activities",
      "Educational materials",
      "Transportation from Mumbai",
      "CSR impact report"
    ],
    notIncluded: [
      "Alcohol (available for purchase)",
      "Personal laundry",
      "Extended stay accommodation",
      "International participants' visas"
    ]
  },
  "3": {
    id: "3", 
    title: "Renewable Energy Awareness Campaign",
    description: "Learn about solar and wind energy while setting up renewable systems in rural communities. Hands-on workshops with sustainability experts and local engineers.",
    image: educationImage,
    location: "Jaisalmer, Rajasthan",
    date: "Apr 5-7, 2024",
    duration: "3 days",
    capacity: 40,
    enrolled: 25,
    price: 6200,
    category: "Environmental",
    rating: 4.7,
    difficulty: "Medium" as const,
    type: "Individual" as const,
    fullDescription: "Dive deep into the world of renewable energy while making a tangible difference in rural Rajasthan. This technical yet accessible program teaches you about solar and wind energy systems while you help install them in remote communities.",
    itinerary: [
      {
        day: "Day 1",
        title: "Solar Energy Fundamentals",
        activities: [
          "8:00 AM - Arrival in Jaisalmer",
          "10:00 AM - Solar energy workshop",
          "1:00 PM - Site visit to existing installations",
          "4:00 PM - Hands-on panel assembly",
          "7:00 PM - Desert sunset & dinner"
        ]
      },
      {
        day: "Day 2",
        title: "Wind Energy & Installation",
        activities: [
          "6:00 AM - Sunrise camel ride",
          "9:00 AM - Wind energy systems training",
          "12:00 PM - Community installation project",
          "3:00 PM - Electrical connections workshop",
          "6:00 PM - Cultural program in village"
        ]
      },
      {
        day: "Day 3",
        title: "System Testing & Education",
        activities: [
          "8:00 AM - System testing and troubleshooting",
          "11:00 AM - Teaching locals about maintenance",
          "1:00 PM - Impact celebration lunch",
          "3:00 PM - Departure to Jaisalmer station"
        ]
      }
    ],
    amenities: [
      { icon: Bed, name: "Desert camps", description: "Traditional Rajasthani tents under stars" },
      { icon: Utensils, name: "Local cuisine", description: "Authentic Rajasthani vegetarian meals" },
      { icon: Wifi, name: "Basic connectivity", description: "Limited WiFi at base camp" },
      { icon: Car, name: "4WD transport", description: "Desert-capable vehicles for remote areas" }
    ],
    included: [
      "Desert camp accommodation",
      "All meals (traditional Rajasthani cuisine)",
      "Expert technical training",
      "Installation equipment and tools",
      "Camel ride experience",
      "Local transportation",
      "Technical certification"
    ],
    notIncluded: [
      "Train/flight to Jaisalmer",
      "Personal sun protection gear",
      "Photography equipment",
      "Tips for local guides and drivers"
    ]
  }
};

const CampaignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const campaign = campaignData[id as keyof typeof campaignData];

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const spotsLeft = campaign.capacity - campaign.enrolled;
  const isAlmostFull = spotsLeft <= 5;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-earth-green text-primary-foreground';
      case 'Medium': return 'bg-energy-orange text-primary-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'environmental': return 'bg-earth-green/10 text-earth-green border-earth-green/20';
      case 'social': return 'bg-nature-blue/10 text-nature-blue border-nature-blue/20';
      case 'political': return 'bg-energy-orange/10 text-energy-orange border-energy-orange/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Campaigns
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge className={getCategoryColor(campaign.category)}>
                  {campaign.category}
                </Badge>
                <Badge className={getDifficultyColor(campaign.difficulty)}>
                  {campaign.difficulty}
                </Badge>
                {isAlmostFull && (
                  <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                    Almost Full!
                  </Badge>
                )}
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1">
                <Star className="w-4 h-4 text-energy-orange fill-current" />
                <span className="font-medium">{campaign.rating}</span>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {campaign.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {campaign.fullDescription}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-2xl">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-earth-green" />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">{campaign.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-nature-blue" />
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium">{campaign.date}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-energy-orange" />
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-medium">{campaign.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                  <div className="font-medium">{spotsLeft} spots left</div>
                </div>
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {campaign.itinerary.map((day, index) => (
                  <div key={index} className="bg-card rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {day.day}: {day.title}
                    </h3>
                    <div className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-earth-green mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Camp Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {campaign.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-xl">
                    <amenity.icon className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">{amenity.name}</h4>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-earth-green">What's Included</h3>
                <div className="space-y-2">
                  {campaign.included.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-earth-green mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-energy-orange">Not Included</h3>
                <div className="space-y-2">
                  {campaign.notIncluded.map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-4 h-4 border-2 border-energy-orange rounded-full mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">₹{campaign.price.toLocaleString()}</div>
                <div className="text-muted-foreground">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Participants</span>
                  <span className="font-medium">{campaign.enrolled}/{campaign.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Spots remaining</span>
                  <span className={`font-medium ${isAlmostFull ? 'text-destructive' : 'text-earth-green'}`}>
                    {spotsLeft}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Type</span>
                  <Badge variant="secondary">{campaign.type}</Badge>
                </div>
              </div>

              <Button 
                variant="campaign" 
                size="lg" 
                className="w-full group"
                onClick={() => setIsCheckoutOpen(true)}
              >
                Book Now
                <Calendar className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free cancellation up to 48 hours before the event
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <CheckoutDialog 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        campaign={campaign}
      />
    </div>
  );
};

export default CampaignDetail;