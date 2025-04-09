
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InsightCard, { InsightCardProps } from "./InsightCard";
import { Button } from "@/components/ui/button";

// Sample data
const insights: InsightCardProps[] = [
  {
    title: "The Future of Wellness: Trends to Watch in 2025",
    excerpt: "Explore emerging wellness practices and technologies that are transforming how we approach health and self-care, from personalized nutrition to mental fitness innovations.",
    date: "April 2, 2025",
    author: "Dr. Sarah Chen",
    category: "Wellness",
    slug: "future-wellness-trends",
    featured: true
  },
  {
    title: "Building Resilience: Strategies for Personal Growth Through Adversity",
    excerpt: "Discover practical approaches to developing mental toughness and emotional resilience that can help you thrive during challenging times.",
    date: "March 28, 2025",
    author: "Marcus Johnson",
    category: "Personal Development",
    slug: "building-resilience",
    featured: true
  },
  {
    title: "The Entrepreneur's Guide to Sustainable Business Practices",
    excerpt: "Learn how incorporating sustainability into your business model can drive innovation, attract customers, and contribute to long-term growth.",
    date: "March 21, 2025",
    author: "Alexandra Morgan",
    category: "Entrepreneurship",
    slug: "sustainable-business-practices"
  },
  {
    title: "Financial Wellness: Creating Stability in Uncertain Times",
    excerpt: "Explore strategies for building financial resilience, from emergency savings to diversified income streams and smart investment practices.",
    date: "March 15, 2025",
    author: "David Wong",
    category: "Finance",
    slug: "financial-wellness"
  },
  {
    title: "The Science of Habit Formation: Transforming Your Daily Routines",
    excerpt: "Understand the neuroscience behind habit formation and learn evidence-based techniques to build positive habits that stick.",
    date: "March 10, 2025",
    author: "Dr. Jessica Miller",
    category: "Personal Development",
    slug: "habit-formation"
  },
  {
    title: "Mindful Leadership: Bringing Presence to Your Professional Life",
    excerpt: "Discover how mindfulness practices can enhance your leadership capabilities, improve decision-making, and foster stronger team relationships.",
    date: "March 5, 2025",
    author: "Robert Thompson",
    category: "Leadership",
    slug: "mindful-leadership"
  }
];

const categories = ["All", "Wellness", "Personal Development", "Entrepreneurship", "Finance", "Leadership"];

const InsightsList = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredInsights = insights.filter(
    insight => activeTab === "All" || insight.category === activeTab
  );

  const loadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, filteredInsights.length));
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-4"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredInsights.slice(0, visibleCount).map((insight, index) => (
                <InsightCard key={index} {...insight} />
              ))}
            </div>
            
            {visibleCount < filteredInsights.length && (
              <div className="flex justify-center">
                <Button 
                  onClick={loadMore} 
                  variant="outline" 
                  size="lg"
                  className="min-w-[160px]"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InsightsList;
