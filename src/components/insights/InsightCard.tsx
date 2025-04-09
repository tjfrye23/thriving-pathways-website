
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface InsightCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const InsightCard = ({
  title,
  excerpt,
  date,
  author,
  category,
  slug,
  featured = false
}: InsightCardProps) => {
  return (
    <Card className={`card-hover h-full flex flex-col overflow-hidden ${featured ? 'border-primary/30' : ''}`}>
      <div className={`h-3 w-full ${featured ? 'bg-primary' : 'bg-secondary/50'}`} />
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={featured ? "default" : "outline"} className="mb-4">
            {category}
          </Badge>
          {featured && <Badge variant="secondary">Featured</Badge>}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-5 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="ghost" 
          className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group"
          asChild
        >
          <Link to={`/insights/${slug}`}>
            Read More 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InsightCard;
