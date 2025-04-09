
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="container mx-auto py-20 md:py-28 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-heading animate-fade-up leading-tight">
            Empower Your <span className="gradient-text">Full Potential</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Join our community dedicated to personal growth, professional development, and financial success through collaboration and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 rounded-full button-glow">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group rounded-full">
              Learn More 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
