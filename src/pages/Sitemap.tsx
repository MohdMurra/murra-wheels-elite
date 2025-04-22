
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sitemap = () => {
  const siteLinks = [
    {
      section: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "Inventory", path: "/inventory" },
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Testimonials", path: "/testimonials" },
        { title: "Services", path: "/services" },
      ]
    },
    {
      section: "Account",
      links: [
        { title: "Sign In", path: "/signin" },
        { title: "Register", path: "/register" },
        { title: "Forgot Password", path: "/forgot-password" },
      ]
    },
    {
      section: "Car Services",
      links: [
        { title: "Test Drive Request", path: "/test-drive" },
        { title: "Trade-In Value", path: "/trade-in" },
        { title: "Financing Options", path: "/services" },
        { title: "Vehicle Maintenance", path: "/services" },
      ]
    },
    {
      section: "Legal",
      links: [
        { title: "Privacy Policy", path: "/privacy" },
        { title: "Terms of Service", path: "/terms" },
        { title: "Sitemap", path: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
          <p className="text-muted-foreground mb-8">
            Find quick links to all pages across our website.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteLinks.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold mb-4">{category.section}</h2>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-primary hover:underline flex items-center"
                      >
                        <span className="mr-2">•</span> {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
