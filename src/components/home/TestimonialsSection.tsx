
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote: "Joining this community has been transformative for my personal growth and professional development. The support I've received has been invaluable.",
    author: "Sarah Johnson",
    role: "Entrepreneur",
    avatar: "SJ"
  },
  {
    quote: "The mentorship program provided me with the guidance and tools I needed to take my career to the next level. I'm grateful for the connections I've made.",
    author: "Michael Chen",
    role: "Marketing Director",
    avatar: "MC"
  },
  {
    quote: "The products and resources available through this community have significantly improved my well-being and financial outlook. Highly recommended!",
    author: "James Wilson",
    role: "Wellness Coach",
    avatar: "JW"
  },
  {
    quote: "I've found a supportive network that truly understands the challenges and celebrates the victories. It's more than just a community; it's like family.",
    author: "Diana Rodriguez",
    role: "Financial Advisor",
    avatar: "DR"
  }
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [itemsPerView, setItemsPerView] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(1); // Mobile
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Hear from members who have experienced transformation through our community and programs.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-border/50 bg-background/80 card-hover">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 text-primary text-4xl font-serif">"</div>
                    <p className="text-foreground mb-6 flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src="" alt={testimonial.author} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
