import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BonusPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BonusPopup({ open, onOpenChange }: BonusPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-golden bg-clip-text text-transparent">
            🌟 Bônus Especial
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-gradient-golden/10 rounded-lg p-6 border border-yellow-400/30">
            <p className="text-gray-800 text-lg mb-4 leading-relaxed">
              O ganhador que tiver comprado o acesso ao VivaAcademy, terá direito a levar um acompanhante + Acesso a 2 parques! 
            </p>
            <p className="text-gray-700 mb-4">
              Conheça nossa plataforma completa para quem quer imigrar para os EUA.
            </p>
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.open('https://academy.vivaamerica.com', '_blank')}
                variant="default"
                size="lg"
                className="w-full"
              >
                Conhecer VivaAcademy
              </Button>
              <Button 
                onClick={() => onOpenChange(false)}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}