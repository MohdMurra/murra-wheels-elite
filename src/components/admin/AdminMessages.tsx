
import React, { useState } from 'react';
import { Search, MessageSquare, Check, X, MailOpen, Mail } from 'lucide-react';
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
import { Textarea } from '@/components/ui/textarea';

// Mock data for messages
const mockMessages = [
  { 
    id: '1', 
    name: 'John Smith', 
    email: 'john.smith@example.com', 
    subject: 'Question about the 2023 Tesla Model Y', 
    message: 'I\'m interested in the 2023 Tesla Model Y listed on your site. Could you tell me if it has the full self-driving option? Also, what\'s the lowest you can go on the price?',
    date: '2023-06-28',
    status: 'Unread',
  },
  { 
    id: '2', 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    subject: 'Test drive appointment',
    message: 'Hi there, I\'d like to schedule a test drive for the BMW 3 Series you have listed. Is it available this weekend? I\'m particularly free on Saturday afternoon.',
    date: '2023-06-27',
    status: 'Read',
  },
  { 
    id: '3', 
    name: 'Michael Brown', 
    email: 'michael.b@example.com', 
    subject: 'Trade-in value inquiry',
    message: 'Hello, I\'m considering trading in my 2019 Honda Accord for one of your vehicles. It has 45,000 miles and is in excellent condition. Can you provide an estimate of what you might offer for it?',
    date: '2023-06-25',
    status: 'Responded',
  },
  { 
    id: '4', 
    name: 'Emily Davis', 
    email: 'emily.d@example.com', 
    subject: 'Financing options',
    message: 'I\'m looking at several cars on your site and I\'m wondering what financing options you have available. I have good credit but would like to know about your rates and terms before I make a decision.',
    date: '2023-06-22',
    status: 'Unread',
  },
  { 
    id: '5', 
    name: 'David Wilson', 
    email: 'david.w@example.com', 
    subject: 'Warranty information',
    message: 'Can you please provide more details about the warranty coverage for your certified pre-owned vehicles? I\'m specifically interested in powertrain coverage and what\'s included in the bumper-to-bumper warranty.',
    date: '2023-06-20',
    status: 'Read',
  },
];

const AdminMessages = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<typeof mockMessages[0] | null>(null);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [reply, setReply] = useState('');
  const { toast } = useToast();

  const filteredMessages = messages.filter(message => 
    message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenMessage = (message: typeof mockMessages[0]) => {
    // If message is unread, mark it as read
    if (message.status === 'Unread') {
      setMessages(messages.map(m => 
        m.id === message.id ? {...m, status: 'Read'} : m
      ));
    }
    setSelectedMessage(message);
    setIsMessageOpen(true);
    setReply('');
  };

  const handleSendReply = () => {
    if (!selectedMessage || !reply.trim()) return;
    
    // Update message status to responded
    setMessages(messages.map(m => 
      m.id === selectedMessage.id ? {...m, status: 'Responded'} : m
    ));
    
    // Show success toast
    toast({
      title: "Reply sent",
      description: `Your reply to ${selectedMessage.name} has been sent.`,
    });
    
    setIsMessageOpen(false);
  };

  // Message status icon/badge
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Unread': 
        return <Badge variant="destructive"><Mail className="h-3 w-3 mr-1" /> Unread</Badge>;
      case 'Read':
        return <Badge variant="outline"><MailOpen className="h-3 w-3 mr-1" /> Read</Badge>;
      case 'Responded':
        return <Badge variant="secondary"><Check className="h-3 w-3 mr-1" /> Responded</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Messages</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search messages..." 
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
                <TableHead>Sender</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.length > 0 ? (
                filteredMessages.map((message) => (
                  <TableRow key={message.id} className={message.status === 'Unread' ? 'font-medium' : ''}>
                    <TableCell>{message.name}</TableCell>
                    <TableCell>
                      {message.status === 'Unread' && <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>}
                      {message.subject}
                    </TableCell>
                    <TableCell>{new Date(message.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(message.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleOpenMessage(message)}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No messages found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Message Details Dialog */}
      {selectedMessage && (
        <Dialog open={isMessageOpen} onOpenChange={setIsMessageOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedMessage.subject}</DialogTitle>
              <DialogDescription>
                From: {selectedMessage.name} ({selectedMessage.email})
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="p-4 rounded-lg bg-muted/50 mb-4">
                <p>{selectedMessage.message}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Received: {new Date(selectedMessage.date).toLocaleString()}
                </p>
              </div>
              
              <div>
                <h4 className="mb-2 font-medium">Reply</h4>
                <Textarea 
                  placeholder="Type your reply here..." 
                  className="min-h-[120px]"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="flex space-x-2">
              <Button variant="outline" onClick={() => setIsMessageOpen(false)}>
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
              <Button onClick={handleSendReply} disabled={!reply.trim()}>
                <Check className="mr-2 h-4 w-4" /> Send Reply
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminMessages;
