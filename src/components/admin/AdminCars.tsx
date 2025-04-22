
import React, { useState } from 'react';
import { Plus, Search, Pencil, Trash2, MoreHorizontal, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

// Mock data for car listings
const mockCars = [
  { id: '1', name: '2023 Tesla Model Y', price: '$45,000', status: 'Available', year: 2023, brand: 'Tesla' },
  { id: '2', name: '2022 BMW 3 Series', price: '$38,500', status: 'Available', year: 2022, brand: 'BMW' },
  { id: '3', name: '2024 Ford Mustang', price: '$52,000', status: 'Sold', year: 2024, brand: 'Ford' },
  { id: '4', name: '2023 Toyota RAV4', price: '$32,500', status: 'Available', year: 2023, brand: 'Toyota' },
  { id: '5', name: '2022 Honda Civic', price: '$25,000', status: 'Reserved', year: 2022, brand: 'Honda' },
  { id: '6', name: '2023 Audi Q5', price: '$55,000', status: 'Available', year: 2023, brand: 'Audi' },
  { id: '7', name: '2024 Kia Telluride', price: '$44,000', status: 'Available', year: 2024, brand: 'Kia' },
  { id: '8', name: '2022 Mazda CX-5', price: '$30,500', status: 'Available', year: 2022, brand: 'Mazda' },
];

const AdminCars = () => {
  const [cars, setCars] = useState(mockCars);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setCars(cars.filter(car => car.id !== id));
    setIsDeleteDialogOpen(false);
    toast({
      title: "Car listing deleted",
      description: "The car listing has been successfully removed."
    });
  };

  const confirmDelete = (id: string) => {
    setCarToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  // Status badge color mapping
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'available': return 'bg-green-500';
      case 'sold': return 'bg-gray-500';
      case 'reserved': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Car Listings</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Car
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Car</DialogTitle>
              <DialogDescription>
                Enter the details for the new car listing.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="col-span-2">
                <Label htmlFor="car-name">Car Name</Label>
                <Input id="car-name" placeholder="e.g., 2023 Tesla Model Y" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="car-brand">Brand</Label>
                <Input id="car-brand" placeholder="e.g., Tesla" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="car-year">Year</Label>
                <Input id="car-year" type="number" placeholder="e.g., 2023" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="car-price">Price</Label>
                <Input id="car-price" placeholder="e.g., $45,000" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="car-status">Status</Label>
                <select id="car-status" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="available">Available</option>
                  <option value="reserved">Reserved</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              <div className="col-span-2">
                <Label htmlFor="car-image">Upload Images</Label>
                <Input id="car-image" type="file" multiple className="mt-1" />
              </div>
              <div className="col-span-2">
                <Label htmlFor="car-description">Description</Label>
                <textarea 
                  id="car-description" 
                  placeholder="Enter car description" 
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                ></textarea>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {}}>Cancel</Button>
              <Button onClick={() => {
                toast({
                  title: "Car added",
                  description: "The new car has been successfully added to your inventory."
                });
              }}>Add Car</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search cars..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell className="font-medium">{car.name}</TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{car.brand}</TableCell>
                    <TableCell>{car.price}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(car.status)}>{car.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => confirmDelete(car.id)}>
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No cars found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Car Listing</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this car listing? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex space-x-2 justify-end">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => carToDelete && handleDelete(carToDelete)}
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCars;
