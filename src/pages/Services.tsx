
import React from 'react';
import { Car, DollarSign, Wrench, FileText, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Vehicle Sales",
      description: "Browse our extensive inventory of premium vehicles from top manufacturers. Our team will help you find the perfect match for your needs and preferences.",
      icon: Car
    },
    {
      id: 2,
      title: "Financing Options",
      description: "We offer competitive financing solutions tailored to your budget. Our finance experts will guide you through available options to ensure you get the best terms.",
      icon: DollarSign
    },
    {
      id: 3,
      title: "Trade-In Appraisals",
      description: "Get a fair and transparent valuation for your current vehicle. Our appraisal process is quick and straightforward, giving you maximum value for your trade-in.",
      icon: Calculator
    },
    {
      id: 4,
      title: "Vehicle Maintenance",
      description: "Keep your vehicle in optimal condition with our professional maintenance services. Our certified technicians use state-of-the-art equipment for all service needs.",
      icon: Wrench
    },
    {
      id: 5,
      title: "Extended Warranties",
      description: "Protect your investment with our comprehensive extended warranty options. Drive with peace of mind knowing you're covered beyond the manufacturer's warranty.",
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Murra Cars, we offer a comprehensive range of automotive services to meet all your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Our highly trained professionals have years of experience in the automotive industry.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Best Value</h3>
              <p className="text-muted-foreground">We provide exceptional service at competitive prices, ensuring you get the best value.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Transparent Process</h3>
              <p className="text-muted-foreground">No hidden fees or surprises—just honest, straightforward service from start to finish.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
