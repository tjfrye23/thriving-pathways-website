
import Layout from "@/components/layout/Layout";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactUs = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center font-heading mb-8">
          Get in Touch
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have questions about our services or want to join our community? 
          We'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mt-8">
          <ContactInfo />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
