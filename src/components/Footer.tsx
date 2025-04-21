
import { Car, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-montserrat">
                Murra<span className="text-primary">Cars</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Murra Cars provides premium vehicles with exceptional service. 
              We are dedicated to finding the perfect car for our customers.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Luxury Lane, Prestige City</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@murracars.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-muted-foreground hover:text-accent transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Vehicle Sales
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Trade-In Appraisals
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Vehicle Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Extended Warranties
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on our latest inventory and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 bg-muted text-white rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Murra Cars. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
