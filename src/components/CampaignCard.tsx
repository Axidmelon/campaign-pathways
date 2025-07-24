import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Clock, Star } from "lucide-react";

interface CampaignCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  duration: string;
  capacity: number;
  enrolled: number;
  price: number;
  category: string;
  rating: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'Individual' | 'Corporate' | 'Both';
}

const CampaignCard = ({
  title,
  description,
  image,
  location,
  date,
  duration,
  capacity,
  enrolled,
  price,
  category,
  rating,
  difficulty,
  type
}: CampaignCardProps) => {
  const spotsLeft = capacity - enrolled;
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
    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-campaign transition-smooth hover:scale-105 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge className={getCategoryColor(category)}>
            {category}
          </Badge>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
          {isAlmostFull && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              Almost Full!
            </Badge>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-energy-orange fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        {/* Type Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className="bg-primary-foreground/90 text-foreground">
            {type}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-earth-green" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-nature-blue" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-energy-orange" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-secondary" />
            {enrolled}/{capacity} enrolled • {spotsLeft} spots left
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground">₹{price.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">per person</div>
          </div>
          <Button variant="campaign" className="group">
            Book Now
            <Calendar className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;