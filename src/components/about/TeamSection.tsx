
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alexandra Morgan",
    role: "Founder & CEO",
    bio: "Alexandra founded Thriving Pathways with a vision to create a community where personal and professional growth intersect with financial success.",
    avatar: "AM"
  },
  {
    name: "David Chen",
    role: "Chief Operating Officer",
    bio: "David brings 15+ years of leadership experience and is passionate about organizational culture and operational excellence.",
    avatar: "DC"
  },
  {
    name: "Sophia Rodriguez",
    role: "Head of Mentorship",
    bio: "Sophia leads our mentorship programs, focusing on personal development and leadership training for our community members.",
    avatar: "SR"
  },
  {
    name: "Marcus Johnson",
    role: "Product Development Director",
    bio: "Marcus oversees our product portfolio, ensuring we offer solutions that truly enhance wellness and lifestyle.",
    avatar: "MJ"
  }
];

const TeamSection = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate individuals behind our mission to empower and uplift.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover border border-border/50">
              <CardContent className="p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    <Mail size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
