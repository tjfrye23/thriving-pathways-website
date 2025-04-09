
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Lightbulb, Heart } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Supportive Community",
    description: "Connect with like-minded individuals who inspire and uplift one another on the journey to success."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Personal Growth",
    description: "Access mentorship programs focused on developing leadership skills and unlocking your potential."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Financial Success",
    description: "Learn strategies and access resources designed to help you achieve your financial goals."
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Wellness Products",
    description: "Discover world-class products that enhance health, wellness, and lifestyle."
  }
];

const FeaturesSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section gradient-bg">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Our comprehensive approach combines products, mentorship, and community to support your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover border border-border/50 bg-background/80"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
