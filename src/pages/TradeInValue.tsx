
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Car, CarFront, Mail, Phone, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TradeInValue = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState("");
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate processing and generating a trade-in estimate
    setTimeout(() => {
      setIsLoading(false);
      
      // Generate a random value for demo purposes
      const baseValue = parseInt(year) > 2020 ? 25000 : 15000;
      const randomFactor = Math.random() * 5000;
      const calculated = Math.round((baseValue + randomFactor) / 100) * 100;
      setEstimatedValue(calculated.toLocaleString('en-US'));
      
      setShowEstimate(true);
      
      toast({
        title: "Trade-In Request Processed",
        description: "We've generated an estimated value for your vehicle.",
      });
    }, 1500);
  };

  const closeDialog = () => {
    setShowEstimate(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Get Your Vehicle's Trade-In Value</h1>
            <p className="text-muted-foreground">
              Complete the form below to receive an estimated trade-in value for your vehicle. 
              Our team will follow up with a detailed assessment.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <CarFront className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Trade-In Value Estimator</CardTitle>
                  <CardDescription>Tell us about your current vehicle</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Vehicle Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="make">Make</Label>
                      <Input 
                        id="make" 
                        placeholder="e.g., Toyota" 
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="model">Model</Label>
                      <Input 
                        id="model" 
                        placeholder="e.g., Camry" 
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Input 
                        id="year" 
                        placeholder="e.g., 2020" 
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mileage">Mileage</Label>
                      <Input 
                        id="mileage" 
                        placeholder="e.g., 45000" 
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition">Overall Condition</Label>
                    <select 
                      id="condition"
                      className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      required
                    >
                      <option value="">Select condition...</option>
                      <option value="excellent">Excellent - Like new</option>
                      <option value="good">Good - Minor wear and tear</option>
                      <option value="fair">Fair - Some mechanical or cosmetic issues</option>
                      <option value="poor">Poor - Significant issues</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Details (Optional)</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Please describe any additional features, modifications, or issues with the vehicle..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="flex">
                      <div className="bg-muted flex items-center justify-center px-3 rounded-l-md border-y border-l border-input">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-l-none"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex">
                        <div className="bg-muted flex items-center justify-center px-3 rounded-l-md border-y border-l border-input">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input 
                          id="email" 
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="rounded-l-none"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="flex">
                        <div className="bg-muted flex items-center justify-center px-3 rounded-l-md border-y border-l border-input">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Input 
                          id="phone" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="rounded-l-none"
                          required 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Get Trade-In Estimate"}
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
              <p>
                This tool provides an estimate only. Final trade-in value will be determined 
                after an in-person inspection by our team.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Dialog open={showEstimate} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Estimated Trade-In Value</DialogTitle>
            <DialogDescription>
              Based on the information provided
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-primary">${estimatedValue}</div>
              <p className="text-sm text-muted-foreground mt-1">Estimated Value Range</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-md">
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{year} {make} {model}</p>
                    <p className="text-sm text-muted-foreground">{mileage} miles</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm">
                This is an initial estimate based on the information you've provided. For a more 
                accurate appraisal, please bring your vehicle to our dealership for an in-person 
                inspection. One of our representatives will contact you shortly to schedule an appointment.
              </p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={closeDialog}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default TradeInValue;
