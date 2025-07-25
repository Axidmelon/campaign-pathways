import { Button } from "@/components/ui/button";
import CampaignCard from "./CampaignCard";
import { ArrowRight } from "lucide-react";
import forestImage from "@/assets/forest-campaign.jpg";
import corporateImage from "@/assets/corporate-campaign.jpg";
import educationImage from "@/assets/education-campaign.jpg";

const featuredCampaigns = [
  {
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
    type: "Both" as const
  },
  {
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
    type: "Corporate" as const
  },
  {
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
    type: "Individual" as const
  }
];

const FeaturedCampaigns = () => {
  return (
    <section id="campaigns" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Featured Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover upcoming campaigns that combine adventure, learning, and real-world impact. 
            Each experience is carefully curated for maximum social good.
          </p>
          
          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="sm" className="hover:bg-earth-green/10 hover:text-earth-green hover:border-earth-green">
              Environmental
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-nature-blue/10 hover:text-nature-blue hover:border-nature-blue">
              Social Impact
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-energy-orange/10 hover:text-energy-orange hover:border-energy-orange">
              Political Action
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-secondary/10 hover:text-secondary hover:border-secondary">
              Corporate Teams
            </Button>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group" onClick={() => window.location.href = '/campaigns'}>
            View All Campaigns
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            200+ more campaigns available across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;