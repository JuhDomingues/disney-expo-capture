import vivaAmericaLogo from "@/assets/logo-vivaamerica.png";

export function Footer() {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={vivaAmericaLogo} alt="Viva America Academy" className="h-12 mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              Realizando sonhos e conectando pessoas através de experiências únicas de viagem.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <p>✉️ academy@vivaamerica.com</p>
              <p className="text-primary-foreground/80">
                Para dúvidas sobre o sorteio ou direitos de dados (LGPD)
              </p>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-primary-foreground/20" />
        
        <div className="text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Viva America. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este sorteio segue as normas da LGPD (Lei 13.709/2018) e regulamentação da SPA/MF.
          </p>
        </div>
      </div>
    </footer>
  );
}