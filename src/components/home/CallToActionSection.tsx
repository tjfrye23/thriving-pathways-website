
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="section gradient-bg">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-primary">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-10 text-muted-foreground">
            Join our community today and discover what's possible when you surround yourself with support and step into a path designed for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="default" 
              className="text-white hover:text-white/90 font-medium rounded-full"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/20 hover:text-primary font-medium group rounded-full"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

