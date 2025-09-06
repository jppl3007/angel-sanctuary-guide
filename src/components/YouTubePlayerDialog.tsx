import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface YouTubePlayerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoId: string;
  title?: string;
}

export function YouTubePlayerDialog({ open, onOpenChange, videoId, title = 'Reprodução de música' }: YouTubePlayerDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-oracle-title">{title}</DialogTitle>
        </DialogHeader>
        <AspectRatio ratio={16 / 9} className="w-full overflow-hidden rounded-lg border border-card-border">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </AspectRatio>
      </DialogContent>
    </Dialog>
  );
}
