
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Share2, Copy, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareDialogProps {
  title: string;
  url?: string;
  children?: React.ReactNode;
}

const ShareDialog = ({ title, url = window.location.href, children }: ShareDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied to clipboard",
      description: "You can now paste it anywhere."
    });
  };
  
  const shareNetworks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
      color: "bg-[#3b5998] hover:bg-[#3b5998]/90"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color: "bg-[#1da1f2] hover:bg-[#1da1f2]/90"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "bg-[#0077b5] hover:bg-[#0077b5]/90"
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this: ${url}`)}`,
      color: "bg-[#dd4b39] hover:bg-[#dd4b39]/90"
    }
  ];
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share this {title} with others.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <label htmlFor="share-link" className="text-sm font-medium block mb-2">
              Copy link
            </label>
            <div className="flex">
              <Input 
                id="share-link" 
                value={url} 
                readOnly
                className="rounded-r-none"
              />
              <Button 
                onClick={handleCopyLink} 
                variant="secondary"
                className="rounded-l-none"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium mb-3">Share on social media</p>
            <div className="flex flex-wrap gap-2">
              {shareNetworks.map((network) => (
                <a
                  key={network.name}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-white ${network.color}`}
                >
                  <network.icon className="h-4 w-4 mr-2" />
                  {network.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
