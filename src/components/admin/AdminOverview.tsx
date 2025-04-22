
import React from 'react';
import { Car, Users, MessageSquare, Calendar, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AdminOverview = () => {
  // Mock data for the dashboard
  const stats = [
    { title: 'Total Cars', value: '45', icon: Car, trend: '+5% from last month', color: 'bg-blue-500' },
    { title: 'Total Users', value: '1,234', icon: Users, trend: '+12% from last month', color: 'bg-green-500' },
    { title: 'Messages', value: '89', icon: MessageSquare, trend: '+3% from last month', color: 'bg-yellow-500' },
    { title: 'Bookings', value: '32', icon: Calendar, trend: '+7% from last month', color: 'bg-purple-500' },
  ];

  const popularListings = [
    { id: '1', name: '2023 Tesla Model Y', views: 1245, bookings: 8, price: '$45,000' },
    { id: '2', name: '2022 BMW 3 Series', views: 980, bookings: 5, price: '$38,500' },
    { id: '3', name: '2024 Ford Mustang', views: 875, bookings: 4, price: '$52,000' },
    { id: '4', name: '2023 Toyota RAV4', views: 740, bookings: 6, price: '$32,500' },
    { id: '5', name: '2022 Honda Civic', views: 690, bookings: 3, price: '$25,000' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <span className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</span>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-xs flex items-center mt-1 text-muted-foreground">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    {stat.trend}
                  </p>
                </div>
                <div className={`${stat.color} bg-opacity-20 p-3 rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Popular Listings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Most Viewed Listings</CardTitle>
          <CardDescription>Cars with the highest number of views and bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Car Name</TableHead>
                <TableHead className="text-right"><Eye className="h-4 w-4 inline mr-1" /> Views</TableHead>
                <TableHead className="text-right"><Calendar className="h-4 w-4 inline mr-1" /> Bookings</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {popularListings.map((car) => (
                <TableRow key={car.id}>
                  <TableCell className="font-medium">{car.name}</TableCell>
                  <TableCell className="text-right">{car.views.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{car.bookings}</TableCell>
                  <TableCell className="text-right">{car.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOverview;
