
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(99,102,241,0.1)_0%,rgba(99,102,241,0)_100%)]" />
      <div className="container mx-auto py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading animate-fade-up">
            Empower Your <span className="gradient-text">Full Potential</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Join our community dedicated to personal growth, professional development, and financial success through collaboration and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="text-lg px-6 py-6 bg-primary hover:bg-primary/90">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-6 py-6 group">
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
