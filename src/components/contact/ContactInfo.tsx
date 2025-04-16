
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-muted-foreground mb-8">
          Have questions? Feel free to reach out to us through any of these channels,
          and our team will respond as soon as possible.
        </p>
      </div>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="flex items-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:contact@thrivingpathways.com" className="text-primary hover:underline">
                contact@thrivingpathways.com
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-4">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">
                123 Growth Avenue, Suite 101<br />
                San Francisco, CA 94105
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
