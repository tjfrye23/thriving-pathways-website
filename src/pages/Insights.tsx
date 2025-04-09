
import Layout from "@/components/layout/Layout";
import InsightHeader from "@/components/insights/InsightHeader";
import InsightsList from "@/components/insights/InsightsList";
import NewsletterSection from "@/components/insights/NewsletterSection";

const Insights = () => {
  return (
    <Layout>
      <InsightHeader />
      <InsightsList />
      <NewsletterSection />
    </Layout>
  );
};

export default Insights;
