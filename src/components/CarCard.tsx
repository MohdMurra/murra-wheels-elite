
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CarType } from '@/data/cars';

interface CarCardProps {
  car: CarType;
}

const CarCard = ({ car }: CarCardProps) => {
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
    <Card className="car-card group overflow-hidden">
      <div className="relative overflow-hidden h-52">
        <img
          src={car.images[0]}
          alt={car.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button
            className="bg-background/80 hover:bg-background text-white p-1.5 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
        {car.isFeatured && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium line-clamp-1">{car.title}</h3>
          <span className="text-primary font-bold">{formatPrice(car.price)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center text-muted-foreground text-sm">
            <span className="text-xs">{car.year}</span>
          </div>
          <div className="flex items-center justify-end text-muted-foreground text-sm">
            <span className="text-xs">{formatMileage(car.mileage)} mi</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <span className="text-xs">{car.transmission}</span>
          </div>
          <div className="flex items-center justify-end text-muted-foreground text-sm">
            <span className="text-xs">{car.fuelType}</span>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm"
          >
            Quick View
          </Button>
          <Link to={`/car/${car.id}`}>
            <Button variant="default" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
