
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Car, Clock, DollarSign, Fuel, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { cars, CarType } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import SaveButton from '@/components/SaveButton';
import ShareDialog from '@/components/ShareDialog';
import FinancingCalculator from '@/components/FinancingCalculator';
import PreApprovalForm from '@/components/PreApprovalForm';

const CarDetail = () => {
  const { carId } = useParams<{ carId: string }>();
  const car = cars.find(c => c.id === carId);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Get related cars (same brand or body style)
  const relatedCars = cars
    .filter(c => c.id !== carId && (c.brand === car?.brand || c.bodyStyle === car?.bodyStyle))
    .slice(0, 3);
  
  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  // Format mileage
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };
  
  // Calculate estimated monthly payment
  const calculateMonthlyPayment = (price: number, downPayment: number = 0, term: number = 60, interestRate: number = 3.99) => {
    const loanAmount = price - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const monthlyPayment = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, term) / (Math.pow(1 + monthlyInterest, term) - 1);
    return Math.round(monthlyPayment);
  };
  
  if (!car) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Car not found</h2>
          <p className="text-muted-foreground mb-6">
            The car you are looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/inventory">Browse Inventory</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const monthlyPayment = calculateMonthlyPayment(car.price);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb and Back Link */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <Button variant="ghost" asChild className="mb-2">
            <Link to="/inventory">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Inventory
            </Link>
          </Button>
          <div className="flex gap-2 items-center">
            <SaveButton itemId={car.id} />
            <ShareDialog 
              title={car.title}
              url={window.location.href}
            />
          </div>
        </div>
        
        {/* Car Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="font-normal">
              {car.brand}
            </Badge>
            <Badge variant="outline" className="font-normal">
              {car.bodyStyle}
            </Badge>
            {car.isFeatured && (
              <Badge variant="default" className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">{car.title}</h1>
            <div className="text-xl md:text-2xl font-bold text-primary">
              {formatPrice(car.price)}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Car Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={car.images[selectedImage]} 
                  alt={car.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {car.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${
                      selectedImage === index ? 'border-accent' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${car.title} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Car Information Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Vehicle Overview</h2>
                <p className="text-muted-foreground mb-4">{car.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium">Year</span>
                    </div>
                    <span className="text-lg">{car.year}</span>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Mileage</span>
                    </div>
                    <span className="text-lg">{formatMileage(car.mileage)} mi</span>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Fuel className="h-5 w-5 text-primary" />
                      <span className="font-medium">Fuel Type</span>
                    </div>
                    <span className="text-lg">{car.fuelType}</span>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="h-5 w-5 text-primary" />
                      <span className="font-medium">Transmission</span>
                    </div>
                    <span className="text-lg">{car.transmission}</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Features & Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="pt-4">
                <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
                
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="font-medium">{car.engine}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Horsepower</span>
                    <span className="font-medium">{car.horsepower} hp</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Transmission</span>
                    <span className="font-medium">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Body Style</span>
                    <span className="font-medium">{car.bodyStyle}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Exterior Color</span>
                    <span className="font-medium">{car.exteriorColor}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Interior Color</span>
                    <span className="font-medium">{car.interiorColor}</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Section - Contact and Financing */}
          <div>
            {/* Contact Card */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Interested in this vehicle?</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-2 items-center font-medium">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Estimated Payment</span>
                </div>
                <div className="flex justify-between items-center bg-secondary p-3 rounded-lg">
                  <span className="text-muted-foreground">Monthly Payment</span>
                  <span className="text-xl font-bold">${monthlyPayment}/mo*</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  *Estimated payment with $0 down, 60 month term, and 3.99% APR. Actual terms may vary.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <Link to={`/test-drive/${car.id}`}>Schedule a Test Drive</Link>
                </Button>
                <PreApprovalForm>
                  <Button variant="outline" className="w-full">Get Pre-Approved</Button>
                </PreApprovalForm>
                <FinancingCalculator carPrice={car.price}>
                  <Button variant="secondary" className="w-full">Calculate Payment</Button>
                </FinancingCalculator>
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="font-medium mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-muted-foreground mr-2">Phone:</span>
                  <a href="tel:(555) 123-4567" className="hover:text-primary">(555) 123-4567</a>
                </p>
                <p>
                  <span className="text-muted-foreground mr-2">Email:</span>
                  <a href="mailto:sales@murracars.com" className="hover:text-primary">sales@murracars.com</a>
                </p>
                <p>
                  <span className="text-muted-foreground mr-2">Location:</span>
                  123 Luxury Lane, Prestige City
                </p>
              </div>
            </div>
            
            {/* Trade-In Estimator */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Trade-In Value Estimator</h2>
              <p className="text-muted-foreground mb-4">
                Find out how much your current vehicle is worth as a trade-in.
              </p>
              <Button className="w-full" asChild>
                <Link to="/trade-in">Get Trade-In Value</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map(relatedCar => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </section>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDetail;
