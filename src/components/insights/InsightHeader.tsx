
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const InsightHeader = () => {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-32 gradient-bg relative">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
          Market Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Stay informed with the latest trends, research, and opportunities in wellness, personal development, and entrepreneurship.
        </p>
        
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <Input 
              placeholder="Search insights..." 
              className="pl-10 h-12 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightHeader;
