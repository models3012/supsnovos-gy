import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const CookieConsent: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = (all: boolean) => {
    localStorage.setItem('cookie_consent', all ? 'all' : 'essential');
    setOpen(false);
    // Google Consent Mode v2 logic would go here
    if (all && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sua privacidade importa</DialogTitle>
          <DialogDescription>
            Usamos cookies para fazer o site funcionar, medir desempenho e personalizar ofertas. 
            Conforme a LGPD, você decide o que aceitar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => handleAccept(false)}>Recusar opcionais</Button>
          <Button onClick={() => handleAccept(true)}>Aceitar todos</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
