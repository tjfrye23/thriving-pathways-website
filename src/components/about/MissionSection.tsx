
import { Button } from "@/components/ui/button";

const MissionSection = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title text-center">Our Mission</h1>
          <div className="bg-accent/10 rounded-lg p-8 mb-12 border border-accent/20">
            <p className="text-xl md:text-2xl font-medium text-center italic">
              "We are dedicated to empowering individuals to reach their fullest potential—personally, professionally, and financially."
            </p>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg">
              At Thriving Pathways, we believe success is best achieved through collaboration, support, and a shared vision, which is why we've built a thriving community of like-minded individuals who inspire and uplift one another every step of the way.
            </p>
            
            <p className="text-lg">
              Our approach combines world-class products designed to enhance health, wellness, and lifestyle with a unique mentorship program focused on personal growth and leadership development. Through one-on-one guidance, team support, and ongoing training, we provide the tools and resources you need to achieve your goals and build a life you love.
            </p>
            
            <p className="text-lg">
              When you join our community, you're not just getting access to exceptional products; you're becoming part of a movement that's redefining what it means to live with purpose, passion, and connection. Together, we're creating opportunities, cultivating confidence, and making a lasting impact.
            </p>
            
            <p className="text-lg font-medium">
              Discover what's possible when you surround yourself with a supportive community and step into a path designed for growth and success. Your journey starts here.
            </p>
            
            <div className="flex justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
