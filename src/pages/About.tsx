
import Layout from "@/components/layout/Layout";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const About = () => {
  return (
    <Layout>
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CallToActionSection />
    </Layout>
  );
};

export default About;
