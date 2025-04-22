
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, DollarSign } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface FinancingCalculatorProps {
  carPrice: number;
  children?: React.ReactNode;
}

const FinancingCalculator = ({ carPrice, children }: FinancingCalculatorProps) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(carPrice);
  const [downPayment, setDownPayment] = useState(Math.round(carPrice * 0.2));
  const [term, setTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(3.99);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const calculateMonthlyPayment = () => {
    const loanAmount = price - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const calculatedPayment = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, term) / (Math.pow(1 + monthlyInterest, term) - 1);
    return Math.round(calculatedPayment);
  };
  
  useEffect(() => {
    const payment = calculateMonthlyPayment();
    setMonthlyPayment(payment);
  }, [price, downPayment, term, interestRate]);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="secondary">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Payment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Financing Calculator</DialogTitle>
          <DialogDescription>
            Estimate your monthly payments based on your preferences.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Estimated Monthly Payment</h3>
            <div className="text-3xl font-bold text-primary">
              ${monthlyPayment}
              <span className="text-sm font-normal text-muted-foreground">/mo*</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="price">Vehicle Price</Label>
                <span className="text-sm font-medium">{formatCurrency(price)}</span>
              </div>
              <Input
                id="price"
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="down-payment">Down Payment</Label>
                <span className="text-sm font-medium">{formatCurrency(downPayment)}</span>
              </div>
              <Slider
                id="down-payment"
                min={0}
                max={price}
                step={500}
                value={[downPayment]}
                onValueChange={(value) => setDownPayment(value[0])}
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="term">Term (months)</Label>
                <span className="text-sm font-medium">{term} months</span>
              </div>
              <Slider
                id="term"
                min={12}
                max={72}
                step={12}
                value={[term]}
                onValueChange={(value) => setTerm(value[0])}
              />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>12 mo</span>
                <span>72 mo</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                <span className="text-sm font-medium">{interestRate}%</span>
              </div>
              <Slider
                id="interest-rate"
                min={0}
                max={10}
                step={0.01}
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
              />
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0%</span>
                <span>10%</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground">
            *This is only an estimate. Your actual payment may vary based on credit approval, 
            final vehicle price, taxes, fees, and other factors. Contact us for actual terms.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinancingCalculator;
