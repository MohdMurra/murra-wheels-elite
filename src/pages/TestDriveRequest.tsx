
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
import { useToast } from "@/hooks/use-toast";
import { Car, Calendar, Mail, Phone, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

const TestDriveRequest = () => {
  const { carId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [alternateDate, setAlternateDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate processing the test drive request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Test Drive Scheduled",
        description: "We've received your request and will contact you shortly to confirm.",
      });
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setPreferredDate("");
      setAlternateDate("");
      setNotes("");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Schedule a Test Drive</CardTitle>
            <CardDescription>
              {carId ? "Complete the form below to schedule a test drive for your selected vehicle." : 
                "Complete the form below to schedule a test drive for any vehicle in our inventory."}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {carId && (
                <div className="p-4 bg-secondary/50 rounded-lg mb-4">
                  <div className="flex items-center gap-3">
                    <Car className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Selected Vehicle</h3>
                      <p className="text-sm text-muted-foreground">Car ID: {carId}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {!carId && (
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle of Interest (Optional)</Label>
                  <Input 
                    id="vehicle" 
                    placeholder="e.g., 2023 Honda Accord or Any SUV" 
                  />
                </div>
              )}
              
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date & Time</Label>
                  <Input 
                    id="preferredDate" 
                    type="datetime-local"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="alternateDate">Alternate Date & Time (Optional)</Label>
                  <Input 
                    id="alternateDate" 
                    type="datetime-local"
                    value={alternateDate}
                    onChange={(e) => setAlternateDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any specific questions or requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Schedule Test Drive"}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
            <p>
              By submitting this form, you agree to be contacted by our team regarding your test drive request.
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestDriveRequest;
