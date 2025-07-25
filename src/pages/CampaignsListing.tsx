import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import CampaignCard from "@/components/CampaignCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// Expanded campaign data with more locations and 1-day campaigns
const allCampaigns = [
  {
    id: "1",
    title: "Beach Cleanup Drive",
    description: "Join our one-day beach restoration effort. Remove plastic waste, educate visitors, and enjoy a sustainable beach picnic.",
    image: "/placeholder.svg",
    location: "Marina Beach, Chennai",
    date: "Mar 10, 2024",
    duration: "1 day",
    capacity: 60,
    enrolled: 45,
    price: 1200,
    category: "Environmental",
    rating: 4.6,
    difficulty: "Easy" as const,
    type: "Individual" as const
  },
  {
    id: "2",
    title: "Urban Garden Workshop",
    description: "Learn sustainable urban farming techniques in a single day. Build raised beds and plant organic vegetables.",
    image: "/placeholder.svg",
    location: "Lodhi Gardens, Delhi",
    date: "Mar 12, 2024",
    duration: "1 day",
    capacity: 40,
    enrolled: 28,
    price: 1500,
    category: "Environmental",
    rating: 4.7,
    difficulty: "Easy" as const,
    type: "Individual" as const
  },
  {
    id: "3",
    title: "Corporate Team Building for Good",
    description: "One-day intensive program combining team challenges with community service. Build homes with local families.",
    image: "/placeholder.svg",
    location: "Pune, Maharashtra",
    date: "Mar 15, 2024",
    duration: "1 day",
    capacity: 50,
    enrolled: 32,
    price: 3500,
    category: "Social",
    rating: 4.8,
    difficulty: "Medium" as const,
    type: "Corporate" as const
  },
  {
    id: "4",
    title: "River Restoration Weekend",
    description: "Three-day intensive program focusing on river cleanup and water conservation awareness.",
    image: "/placeholder.svg",
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
    id: "5",
    title: "Digital Literacy Campaign",
    description: "Teach digital skills to rural communities. One day of training and technology setup in remote villages.",
    image: "/placeholder.svg",
    location: "Nashik, Maharashtra",
    date: "Mar 18, 2024",
    duration: "1 day",
    capacity: 30,
    enrolled: 15,
    price: 2000,
    category: "Social",
    rating: 4.9,
    difficulty: "Easy" as const,
    type: "Individual" as const
  },
  {
    id: "6",
    title: "Mangrove Restoration",
    description: "Single-day mangrove planting and coastal ecosystem conservation in the Sundarbans region.",
    image: "/placeholder.svg",
    location: "Kolkata, West Bengal",
    date: "Mar 20, 2024",
    duration: "1 day",
    capacity: 45,
    enrolled: 30,
    price: 1800,
    category: "Environmental",
    rating: 4.5,
    difficulty: "Medium" as const,
    type: "Individual" as const
  },
  {
    id: "7",
    title: "Corporate Social Impact Retreat",
    description: "Team-building through meaningful action. Work with local NGOs on education initiatives.",
    image: "/placeholder.svg",
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
    id: "8",
    title: "Mountain Trail Conservation",
    description: "One-day hiking trail maintenance and mountain ecosystem preservation in the Western Ghats.",
    image: "/placeholder.svg",
    location: "Coorg, Karnataka",
    date: "Mar 25, 2024",
    duration: "1 day",
    capacity: 35,
    enrolled: 20,
    price: 2200,
    category: "Environmental",
    rating: 4.7,
    difficulty: "Hard" as const,
    type: "Individual" as const
  },
  {
    id: "9",
    title: "Renewable Energy Awareness",
    description: "Learn about solar and wind energy while setting up renewable systems in rural communities.",
    image: "/placeholder.svg",
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
  },
  {
    id: "10",
    title: "Community Health Workshop",
    description: "Single-day health awareness and basic medical training program for underserved communities.",
    image: "/placeholder.svg",
    location: "Hyderabad, Telangana",
    date: "Apr 8, 2024",
    duration: "1 day",
    capacity: 25,
    enrolled: 12,
    price: 1600,
    category: "Social",
    rating: 4.8,
    difficulty: "Easy" as const,
    type: "Individual" as const
  },
  {
    id: "11",
    title: "Waste Management Innovation",
    description: "One-day workshop on innovative waste management solutions and recycling techniques.",
    image: "/placeholder.svg",
    location: "Bangalore, Karnataka",
    date: "Apr 12, 2024",
    duration: "1 day",
    capacity: 40,
    enrolled: 22,
    price: 1400,
    category: "Environmental",
    rating: 4.6,
    difficulty: "Easy" as const,
    type: "Individual" as const
  },
  {
    id: "12",
    title: "Rural Education Initiative",
    description: "Three-day program teaching in rural schools and setting up learning resources.",
    image: "/placeholder.svg",
    location: "Shimla, Himachal Pradesh",
    date: "Apr 15-17, 2024",
    duration: "3 days",
    capacity: 35,
    enrolled: 28,
    price: 5500,
    category: "Social",
    rating: 4.9,
    difficulty: "Medium" as const,
    type: "Both" as const
  }
];

interface FilterState {
  search: string;
  category: string;
  location: string;
  duration: string;
  difficulty: string;
  type: string;
  priceRange: [number];
  sortBy: string;
}

const CampaignsListing = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    location: "",
    duration: "",
    difficulty: "",
    type: "",
    priceRange: [10000],
    sortBy: "date"
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCampaigns = useMemo(() => {
    let filtered = allCampaigns.filter(campaign => {
      const matchesSearch = campaign.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                          campaign.location.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = !filters.category || campaign.category === filters.category;
      const matchesLocation = !filters.location || campaign.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesDuration = !filters.duration || campaign.duration.includes(filters.duration);
      const matchesDifficulty = !filters.difficulty || campaign.difficulty === filters.difficulty;
      const matchesType = !filters.type || campaign.type === filters.type || campaign.type === "Both";
      const matchesPrice = campaign.price <= filters.priceRange[0];

      return matchesSearch && matchesCategory && matchesLocation && matchesDuration && 
             matchesDifficulty && matchesType && matchesPrice;
    });

    // Sort campaigns
    switch (filters.sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "date":
      default:
        return filtered.sort((a, b) => new Date(a.date.split(',')[0] + ", 2024").getTime() - new Date(b.date.split(',')[0] + ", 2024").getTime());
    }
  }, [filters]);

  const clearFilter = (filterKey: keyof FilterState) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: filterKey === 'priceRange' ? [10000] as [number] : ""
    }));
  };

  const getActiveFilters = () => {
    const active = [];
    if (filters.category) active.push({ key: 'category', value: filters.category });
    if (filters.location) active.push({ key: 'location', value: filters.location });
    if (filters.duration) active.push({ key: 'duration', value: filters.duration });
    if (filters.difficulty) active.push({ key: 'difficulty', value: filters.difficulty });
    if (filters.type) active.push({ key: 'type', value: filters.type });
    if (filters.priceRange[0] < 10000) active.push({ key: 'priceRange', value: `Under ₹${filters.priceRange[0]}` });
    return active;
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium mb-2 block">Category</label>
        <Select value={filters.category} onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            <SelectItem value="Environmental">Environmental</SelectItem>
            <SelectItem value="Social">Social Impact</SelectItem>
            <SelectItem value="Political">Political Action</SelectItem>
            <SelectItem value="Corporate">Corporate Teams</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Duration</label>
        <Select value={filters.duration} onValueChange={(value) => setFilters(prev => ({ ...prev, duration: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Any Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Duration</SelectItem>
            <SelectItem value="1 day">1 Day</SelectItem>
            <SelectItem value="2">2-3 Days</SelectItem>
            <SelectItem value="3">3+ Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Difficulty</label>
        <Select value={filters.difficulty} onValueChange={(value) => setFilters(prev => ({ ...prev, difficulty: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Any Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Difficulty</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Type</label>
        <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
          <SelectTrigger>
            <SelectValue placeholder="Any Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Type</SelectItem>
            <SelectItem value="Individual">Individual</SelectItem>
            <SelectItem value="Corporate">Corporate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Max Price: ₹{filters.priceRange[0]}</label>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number] }))}
          max={10000}
          min={1000}
          step={500}
          className="w-full"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Discover Campaigns
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Find the perfect campaign to make an impact. From single-day local actions to multi-day immersive experiences.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search campaigns, locations, or causes..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10"
                />
              </div>

              {/* Sort Dropdown */}
              <Select value={filters.sortBy} onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Earliest Date</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Button */}
              <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Campaigns</SheetTitle>
                    <SheetDescription>
                      Narrow down your search to find the perfect campaign.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters */}
            {getActiveFilters().length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {getActiveFilters().map((filter) => (
                  <Badge key={filter.key} variant="secondary" className="flex items-center gap-1">
                    {filter.value}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => clearFilter(filter.key as keyof FilterState)}
                    />
                  </Badge>
                ))}
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-muted-foreground">
              Showing {filteredCampaigns.length} of {allCampaigns.length} campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FilterContent />
                </CardContent>
              </Card>
            </div>

            {/* Campaign Grid */}
            <div className="lg:col-span-3">
              {filteredCampaigns.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCampaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} {...campaign} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No campaigns found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFilters({
                      search: "",
                      category: "",
                      location: "",
                      duration: "",
                      difficulty: "",
                      type: "",
                      priceRange: [10000] as [number],
                      sortBy: "date"
                    })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CampaignsListing;