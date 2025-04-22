
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PreApprovalFormProps {
  children?: React.ReactNode;
}

const PreApprovalForm = ({ children }: PreApprovalFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    income: '',
    creditScore: '',
    employmentStatus: ''
  });
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOpen(false);
      
      toast({
        title: "Pre-Approval Application Submitted",
        description: "We've received your application and will contact you shortly."
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        income: '',
        creditScore: '',
        employmentStatus: ''
      });
    }, 1500);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline">Get Pre-Approved</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get Pre-Approved for Financing</DialogTitle>
          <DialogDescription>
            Complete this quick form to start your financing approval process.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name*</Label>
              <Input 
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input 
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address*</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input 
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="income">Annual Income*</Label>
              <Input 
                id="income"
                name="income"
                type="number"
                min="0"
                value={formData.income}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="creditScore">Estimated Credit Score*</Label>
              <Select 
                value={formData.creditScore} 
                onValueChange={(value) => handleSelectChange('creditScore', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select credit range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent (720+)</SelectItem>
                  <SelectItem value="good">Good (680-719)</SelectItem>
                  <SelectItem value="fair">Fair (620-679)</SelectItem>
                  <SelectItem value="poor">Below 620</SelectItem>
                  <SelectItem value="unknown">Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="employmentStatus">Employment Status*</Label>
            <Select 
              value={formData.employmentStatus} 
              onValueChange={(value) => handleSelectChange('employmentStatus', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full-Time</SelectItem>
                <SelectItem value="partTime">Part-Time</SelectItem>
                <SelectItem value="selfEmployed">Self-Employed</SelectItem>
                <SelectItem value="retired">Retired</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-xs text-muted-foreground">
            <p>
              By submitting this form, you authorize Murra Cars to perform a soft credit check that won't affect your credit score.
            </p>
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Pre-Approval Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PreApprovalForm;
