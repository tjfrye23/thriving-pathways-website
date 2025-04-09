
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold font-heading gradient-text">Thriving Pathways</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering individuals to reach their fullest potential—personally, professionally, and financially.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@thrivingpathways.com" className="text-muted-foreground hover:text-primary transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition">About Us</Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-primary transition">Market Insights</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Products</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Mentorship</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Events</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              Join our community and start your journey toward growth and success today.
            </p>
            <a 
              href="mailto:contact@thrivingpathways.com"
              className="inline-block text-primary hover:underline"
            >
              contact@thrivingpathways.com
            </a>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Thriving Pathways. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
