
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SaveButtonProps {
  itemId: string;
  itemType?: 'car' | 'page';
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

const SaveButton = ({ 
  itemId,
  itemType = 'car', 
  size = 'sm',
  variant = 'outline'
}: SaveButtonProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    
    // Show toast notification based on save status
    if (!isSaved) {
      toast({
        title: `${itemType === 'car' ? 'Vehicle' : 'Item'} saved`,
        description: `This ${itemType} has been added to your saved items.`
      });
    } else {
      toast({
        title: `${itemType === 'car' ? 'Vehicle' : 'Item'} removed`,
        description: `This ${itemType} has been removed from your saved items.`
      });
    }
  };
  
  return (
    <Button 
      onClick={handleSave}
      variant={variant}
      size={size}
      className={`group ${isSaved ? 'bg-primary/10' : ''}`}
    >
      <Heart 
        className={`h-4 w-4 mr-2 transition-all ${isSaved ? 'fill-primary text-primary' : 'group-hover:fill-primary/20'}`}
      />
      {isSaved ? 'Saved' : 'Save'}
    </Button>
  );
};

export default SaveButton;
