
import React, { useState } from 'react';
import { Search, Shield, Ban, User, MoreHorizontal, Eye } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Mock data for users
const mockUsers = [
  { 
    id: '1', 
    name: 'John Smith', 
    email: 'john.smith@example.com', 
    role: 'User', 
    status: 'Active',
    joinDate: '2023-05-15',
    lastLogin: '2023-06-30',
  },
  { 
    id: '2', 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    role: 'Admin', 
    status: 'Active',
    joinDate: '2022-12-01',
    lastLogin: '2023-06-29',
  },
  { 
    id: '3', 
    name: 'Michael Brown', 
    email: 'michael.b@example.com', 
    role: 'User', 
    status: 'Banned',
    joinDate: '2023-02-10',
    lastLogin: '2023-04-05',
  },
  { 
    id: '4', 
    name: 'Emily Davis', 
    email: 'emily.d@example.com', 
    role: 'User', 
    status: 'Active',
    joinDate: '2023-01-22',
    lastLogin: '2023-06-28',
  },
  { 
    id: '5', 
    name: 'David Wilson', 
    email: 'david.w@example.com', 
    role: 'User', 
    status: 'Active',
    joinDate: '2023-03-14',
    lastLogin: '2023-06-25',
  },
];

const AdminUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { toast } = useToast();

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBanUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? {...user, status: user.status === 'Banned' ? 'Active' : 'Banned'} : user
    ));
    
    const targetUser = users.find(user => user.id === userId);
    const newStatus = targetUser?.status === 'Banned' ? 'Active' : 'Banned';
    
    toast({
      title: `User ${newStatus === 'Banned' ? 'banned' : 'unbanned'}`,
      description: `${targetUser?.name} has been ${newStatus === 'Banned' ? 'banned' : 'unbanned'}.`,
    });
  };

  const handlePromoteUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? {...user, role: user.role === 'Admin' ? 'User' : 'Admin'} : user
    ));
    
    const targetUser = users.find(user => user.id === userId);
    const newRole = targetUser?.role === 'Admin' ? 'User' : 'Admin';
    
    toast({
      title: `User role updated`,
      description: `${targetUser?.name} is now a ${newRole}.`,
    });
  };
  
  const viewUserDetails = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Manage Users</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search users..." 
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
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'Admin' ? 'default' : 'outline'}>
                        {user.role === 'Admin' && <Shield className="h-3 w-3 mr-1" />}
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Active' ? 'outline' : 'destructive'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => viewUserDetails(user)}>
                            <Eye className="mr-2 h-4 w-4" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handlePromoteUser(user.id)}>
                            <Shield className="mr-2 h-4 w-4" /> 
                            {user.role === 'Admin' ? 'Remove Admin' : 'Make Admin'}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleBanUser(user.id)}>
                            <Ban className="mr-2 h-4 w-4" /> 
                            {user.status === 'Banned' ? 'Unban User' : 'Ban User'}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                    No users found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* User Details Dialog */}
      {selectedUser && (
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>
                Complete information about this user.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-muted-foreground/20 rounded-full p-8">
                  <User className="h-16 w-16 text-muted-foreground" />
                </div>
              </div>
              <dl className="space-y-3">
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Name</dt>
                  <dd>{selectedUser.name}</dd>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Email</dt>
                  <dd>{selectedUser.email}</dd>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Role</dt>
                  <dd>
                    <Badge variant={selectedUser.role === 'Admin' ? 'default' : 'outline'}>
                      {selectedUser.role === 'Admin' && <Shield className="h-3 w-3 mr-1" />}
                      {selectedUser.role}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Status</dt>
                  <dd>
                    <Badge variant={selectedUser.status === 'Active' ? 'outline' : 'destructive'}>
                      {selectedUser.status}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Joined</dt>
                  <dd>{new Date(selectedUser.joinDate).toLocaleDateString()}</dd>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <dt className="font-medium">Last Login</dt>
                  <dd>{new Date(selectedUser.lastLogin).toLocaleDateString()}</dd>
                </div>
              </dl>
            </div>
            <DialogFooter className="flex space-x-2 justify-between">
              <Button 
                variant={selectedUser.status === 'Banned' ? 'outline' : 'destructive'} 
                onClick={() => {
                  handleBanUser(selectedUser.id);
                  setIsDetailsOpen(false);
                }}
              >
                <Ban className="mr-2 h-4 w-4" /> 
                {selectedUser.status === 'Banned' ? 'Unban User' : 'Ban User'}
              </Button>
              <Button onClick={() => setIsDetailsOpen(false)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminUsers;
