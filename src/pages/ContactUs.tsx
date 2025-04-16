
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
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
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
