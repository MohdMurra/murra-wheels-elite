
import React from 'react';
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Users, Handshake, Calendar } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Murra Cars</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium vehicles with exceptional service since 2010. Your journey to the perfect car starts with us.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2010, Murra Cars began with a simple vision: to provide high-quality vehicles with transparent, 
              customer-focused service. What started as a small dealership with just five cars has grown into one of the 
              region's most trusted automotive retailers.
            </p>
            <p className="text-lg mb-4">
              Our founder, James Murra, believed that buying a car should be an exciting and positive experience, never 
              intimidating or confusing. This philosophy continues to guide our business today as we help customers find 
              their perfect vehicle match.
            </p>
            <p className="text-lg">
              Over the years, we've expanded our inventory and services, but our commitment to exceptional customer 
              service and quality vehicles has never wavered.
            </p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-8 h-full">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center">
              {/* Placeholder for image */}
              <div className="text-center p-12">
                <Car className="w-20 h-20 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Dealership image</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <CardDescription>
                  We believe in transparency in every interaction. No hidden fees, no pressure tactics, 
                  just honest advice and fair deals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <CardDescription>
                  Every vehicle in our inventory undergoes a rigorous 150-point inspection. 
                  We only sell cars we would be proud to drive ourselves.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
                <CardDescription>
                  We're not just selling cars – we're building relationships. Your satisfaction drives our business, 
                  and we're committed to supporting you long after the sale.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="aspect-square bg-secondary/50 rounded-full mb-4 mx-auto max-w-[200px] flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-bold">Team Member {member}</h3>
                <p className="text-sm text-muted-foreground mb-2">Position Title</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
          <div className="space-y-12">
            {[
              { year: "2010", title: "Foundation", description: "Murra Cars was established with a small lot of 5 premium vehicles." },
              { year: "2013", title: "Expansion", description: "Opened our flagship showroom and expanded inventory to over 50 vehicles." },
              { year: "2016", title: "Service Center", description: "Added full-service maintenance and repair facilities." },
              { year: "2019", title: "Digital Transformation", description: "Launched online inventory and virtual shopping experience." },
              { year: "2023", title: "Premium Partnership", description: "Became an authorized dealer for luxury European brands." },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.year} - {item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
