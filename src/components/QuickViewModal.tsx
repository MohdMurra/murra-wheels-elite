
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Fuel, Car } from 'lucide-react';
import { CarType } from '@/data/cars';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  car: CarType;
  trigger?: React.ReactNode;
}

const QuickViewModal = ({ car, trigger }: QuickViewModalProps) => {
  const [open, setOpen] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline" size="sm">Quick View</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{car.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <Badge variant="outline" className="font-normal">
              {car.brand}
            </Badge>
            <Badge variant="outline" className="font-normal">
              {car.bodyStyle}
            </Badge>
            <span className="text-primary font-bold">{formatPrice(car.price)}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img 
                src={car.images[0]} 
                alt={car.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Overview</h3>
              <p className="text-muted-foreground text-sm">{car.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Mileage</p>
                    <p className="font-medium">{formatMileage(car.mileage)} mi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Fuel Type</p>
                    <p className="font-medium">{car.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Transmission</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mt-6">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2">
                {car.features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col mt-6 gap-2">
                <Button asChild>
                  <Link to={`/car/${car.id}`}>View Full Details</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={`/test-drive/${car.id}`}>Schedule Test Drive</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
