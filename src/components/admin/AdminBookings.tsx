
import React, { useState } from 'react';
import { Search, Calendar, Check, X, Car, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Mock data for bookings
const mockBookings = [
  { 
    id: '1', 
    customerName: 'John Smith', 
    customerEmail: 'john.smith@example.com', 
    customerPhone: '(555) 123-4567',
    car: '2023 Tesla Model Y',
    appointmentType: 'Test Drive',
    date: '2023-07-05T10:30:00',
    status: 'Scheduled',
    notes: 'Customer is interested in the premium trim level, specifically asking about the self-driving capabilities.'
  },
  { 
    id: '2', 
    customerName: 'Sarah Johnson', 
    customerEmail: 'sarah.j@example.com', 
    customerPhone: '(555) 234-5678',
    car: '2022 BMW 3 Series',
    appointmentType: 'Test Drive',
    date: '2023-07-06T14:00:00',
    status: 'Confirmed',
    notes: 'Customer previously owned a BMW 5 Series and is looking to downsize.'
  },
  { 
    id: '3', 
    customerName: 'Michael Brown', 
    customerEmail: 'michael.b@example.com', 
    customerPhone: '(555) 345-6789',
    car: '2024 Ford Mustang',
    appointmentType: 'Test Drive',
    date: '2023-07-07T11:15:00',
    status: 'Completed',
    notes: 'Customer is comparing with a Dodge Challenger they test drove last week.'
  },
  { 
    id: '4', 
    customerName: 'Emily Davis', 
    customerEmail: 'emily.d@example.com', 
    customerPhone: '(555) 456-7890',
    car: '2023 Toyota RAV4',
    appointmentType: 'Test Drive',
    date: '2023-07-08T16:30:00',
    status: 'Cancelled',
    notes: "Customer called to reschedule but hasn't picked a new date yet."
  },
  { 
    id: '5', 
    customerName: 'David Wilson', 
    customerEmail: 'david.w@example.com', 
    customerPhone: '(555) 567-8901',
    car: '2022 Honda Civic',
    appointmentType: 'Test Drive',
    date: '2023-07-10T13:45:00',
    status: 'Scheduled',
    notes: 'First-time car buyer, looking for something economical and reliable.'
  },
];

const AdminBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<typeof mockBookings[0] | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const filteredBookings = bookings.filter(booking => 
    booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.car.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.appointmentType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateStatus = (bookingId: string, newStatus: string) => {
    setBookings(bookings.map(booking => 
      booking.id === bookingId ? {...booking, status: newStatus} : booking
    ));
    
    toast({
      title: "Booking updated",
      description: `The booking status has been updated to ${newStatus}.`
    });
    
    setIsDetailsOpen(false);
  };
  
  const viewBookingDetails = (booking: typeof mockBookings[0]) => {
    setSelectedBooking(booking);
    setIsDetailsOpen(true);
  };

  // Status badge styling
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Scheduled': 
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Scheduled</Badge>;
      case 'Confirmed':
        return <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Confirmed</Badge>;
      case 'Completed':
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">Completed</Badge>;
      case 'Cancelled':
        return <Badge variant="outline" className="bg-red-500/10 text-red-500 hover:bg-red-500/20">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Test Drive Appointments</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search appointments..." 
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
                <TableHead>Customer</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.customerName}</TableCell>
                    <TableCell>{booking.car}</TableCell>
                    <TableCell>
                      {new Date(booking.date).toLocaleDateString()} {new Date(booking.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => viewBookingDetails(booking)}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No appointments found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Booking Details Dialog */}
      {selectedBooking && (
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Appointment Details</DialogTitle>
              <DialogDescription>
                Test drive appointment information
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center mb-2 text-lg font-medium">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <h3>{selectedBooking.appointmentType}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm mt-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(selectedBooking.date).toLocaleDateString()} 
                        at {new Date(selectedBooking.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedBooking.car}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Main Dealership Location</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="font-medium">Customer Information</p>
                  <p>{selectedBooking.customerName}</p>
                  <p className="text-sm text-muted-foreground">{selectedBooking.customerEmail}</p>
                  <p className="text-sm text-muted-foreground">{selectedBooking.customerPhone}</p>
                </div>
                
                <div>
                  <p className="font-medium">Status</p>
                  <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                </div>
                
                <div className="col-span-2">
                  <p className="font-medium">Notes</p>
                  <p className="text-sm mt-1">{selectedBooking.notes}</p>
                </div>
              </div>
            </div>
            <DialogFooter className="flex flex-wrap gap-2">
              {selectedBooking.status === 'Scheduled' && (
                <>
                  <Button 
                    variant="default" 
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'Confirmed')}
                  >
                    <Check className="mr-2 h-4 w-4" /> Confirm
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={() => handleUpdateStatus(selectedBooking.id, 'Cancelled')}
                  >
                    <X className="mr-2 h-4 w-4" /> Cancel
                  </Button>
                </>
              )}
              
              {selectedBooking.status === 'Confirmed' && (
                <Button 
                  variant="default" 
                  onClick={() => handleUpdateStatus(selectedBooking.id, 'Completed')}
                >
                  <Check className="mr-2 h-4 w-4" /> Mark as Completed
                </Button>
              )}
              
              <Button 
                variant="outline" 
                onClick={() => setIsDetailsOpen(false)}
                className="ml-auto"
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminBookings;
