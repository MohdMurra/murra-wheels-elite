
import React from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Car, Users, MessageSquare, Calendar, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import AdminOverview from '@/components/admin/AdminOverview';
import AdminCars from '@/components/admin/AdminCars';
import AdminUsers from '@/components/admin/AdminUsers';
import AdminMessages from '@/components/admin/AdminMessages';
import AdminBookings from '@/components/admin/AdminBookings';

const AdminDashboard = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/admin', label: 'Overview', icon: LayoutDashboard },
    { path: '/admin/cars', label: 'Car Listings', icon: Car },
    { path: '/admin/users', label: 'Users', icon: Users },
    { path: '/admin/messages', label: 'Messages', icon: MessageSquare },
    { path: '/admin/bookings', label: 'Bookings', icon: Calendar },
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border hidden md:block">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center">
            <Car className="mr-2 h-6 w-6 text-primary" />
            <span>Admin Dashboard</span>
          </h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/admin'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-2 px-4 py-2 rounded-md transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden w-full bg-card p-4 border-b border-border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <Car className="mr-2 h-6 w-6 text-primary" />
            <span>Admin Dashboard</span>
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-2 pb-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-1 px-3 py-2 rounded-md whitespace-nowrap text-sm',
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )
              }
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<AdminOverview />} />
          <Route path="/cars" element={<AdminCars />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/messages" element={<AdminMessages />} />
          <Route path="/bookings" element={<AdminBookings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
