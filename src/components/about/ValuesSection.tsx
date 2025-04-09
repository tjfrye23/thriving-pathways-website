
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  HeartHandshake, 
  LightbulbIcon, 
  Gem, 
  Target, 
  Award 
} from "lucide-react";

const values = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Community",
    description: "We foster a supportive network where members uplift and inspire one another."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Empowerment",
    description: "We equip individuals with the tools, knowledge, and support to take control of their future."
  },
  {
    icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
    title: "Growth Mindset",
    description: "We embrace challenges as opportunities to learn, develop, and evolve."
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Excellence",
    description: "We commit to the highest standards in our products, services, and interactions."
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Purpose-Driven",
    description: "We align our actions with meaningful goals that create positive impact."
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical principles in all we do."
  }
];

const ValuesSection = () => {
  return (
    <section className="section gradient-bg">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The guiding principles that drive our community and everything we do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="card-hover border border-border/50 bg-background/80"
            >
              <CardContent className="p-6">
                <div className="mb-5 p-3 inline-flex rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
