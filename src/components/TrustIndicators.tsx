import { Shield, Award, Users, CheckCircle, Star, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Participants",
    color: "text-earth-green"
  },
  {
    icon: CheckCircle,
    value: "500+",
    label: "Successful Campaigns",
    color: "text-nature-blue"
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Average Rating",
    color: "text-energy-orange"
  },
  {
    icon: Heart,
    value: "95%",
    label: "Return Participants",
    color: "text-secondary"
  }
];

const certifications = [
  {
    icon: Shield,
    title: "Safety Certified",
    description: "All campsites meet national safety standards"
  },
  {
    icon: Award,
    title: "Impact Verified",
    description: "Transparent reporting on campaign outcomes"
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Premium amenities and expert facilitation"
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-sky-light/30">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-current/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-campaign transition-smooth">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4 max-w-3xl mx-auto">
            "CampEdge has revolutionized how our team approaches CSR. The impact is real, 
            the experience is transformative, and the organization is flawless."
          </blockquote>
          <cite className="text-muted-foreground">
            — Priya Sharma, HR Director at TechCorp India
          </cite>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;