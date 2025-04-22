
import React from 'react';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Mercedes-Benz S-Class Owner",
      content: "The team at Murra Cars made my car buying experience seamless and enjoyable. Their attention to detail and customer service is unmatched.",
      rating: 5,
      initials: "JD"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "BMW 7 Series Owner",
      content: "I was impressed by the selection of premium vehicles and the expertise of the staff. They helped me find the perfect car within my budget.",
      rating: 5,
      initials: "JS"
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Tesla Model S Owner",
      content: "The financing options offered by Murra Cars were competitive and transparent. The entire process was quick and without any hidden surprises.",
      rating: 5,
      initials: "RJ"
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Audi A8 Owner",
      content: "After visiting several dealerships, Murra Cars stood out for their no-pressure approach and genuine care for my requirements. I left with exactly what I wanted.",
      rating: 4,
      initials: "ED"
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "Porsche Cayenne Owner",
      content: "The after-sales service at Murra Cars is exceptional. Even months after my purchase, they continue to check in and ensure everything is going well with my vehicle.",
      rating: 5,
      initials: "MW"
    },
    {
      id: 6,
      name: "Sarah Thompson",
      role: "Range Rover Sport Owner",
      content: "I appreciated the thoroughness of the vehicle inspection process. Knowing that each car is meticulously examined gave me confidence in my purchase.",
      rating: 5,
      initials: "ST"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our satisfied customers have to say about their experience with Murra Cars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary p-6 rounded-lg">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground"}`} 
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
