
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Car, Calendar, Search, Shield, Star, Users } from 'lucide-react';
import { cars, bodyStyles, brands, priceRanges } from '@/data/cars';
import CarCard from '@/components/CarCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedBodyStyle, setSelectedBodyStyle] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury cars" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow animate-fade-in">
              Experience Luxury <span className="text-accent">Performance</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Discover your dream car with Murra Cars. Premium selection, competitive prices, and exceptional service.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/inventory">Browse Inventory</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/30 backdrop-blur-sm hover:bg-background/50">
                <Link to="/contact">Schedule Test Drive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="bg-card py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Car</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={selectedBodyStyle} onValueChange={setSelectedBodyStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Body Style" />
                  </SelectTrigger>
                  <SelectContent>
                    {bodyStyles.map(style => (
                      <SelectItem key={style} value={style}>{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Vehicles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of premium vehicles, hand-picked for their exceptional quality and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/inventory">View All Inventory</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Murra Cars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on delivering an exceptional car buying experience with our premium service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">
                Curated inventory of luxury and performance vehicles from top manufacturers.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Rigorous inspection process ensures every vehicle meets our high standards.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our knowledgeable team provides personalized guidance throughout your journey.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg text-center">
              <div className="h-14 w-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Financing</h3>
              <p className="text-muted-foreground">
                Customized financing options to suit your budget and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Customer Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear what our customers have to say about their Murra Cars experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The team at Murra Cars made my car buying experience seamless and enjoyable. Their attention to detail and customer service is unmatched."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <div>
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-xs text-muted-foreground">Mercedes-Benz S-Class Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "I was impressed by the selection of premium vehicles and the expertise of the staff. They helped me find the perfect car within my budget."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">JS</span>
                </div>
                <div>
                  <h4 className="font-medium">Jane Smith</h4>
                  <p className="text-xs text-muted-foreground">BMW 7 Series Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The financing options offered by Murra Cars were competitive and transparent. The entire process was quick and without any hidden surprises."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <span className="text-sm font-medium">RJ</span>
                </div>
                <div>
                  <h4 className="font-medium">Robert Johnson</h4>
                  <p className="text-xs text-muted-foreground">Tesla Model S Owner</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/testimonials">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/80 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" 
            alt="Luxury car" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Dream Car?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Visit our showroom today or schedule a test drive online. Our team is ready to help you find the perfect vehicle that matches your lifestyle and preferences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/inventory">Browse Inventory</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
