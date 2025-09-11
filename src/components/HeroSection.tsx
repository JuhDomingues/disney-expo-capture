import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-disney-christian.jpg";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 mt-16 drop-shadow-lg">
          Sonhe com a
          <span className="bg-gradient-golden bg-clip-text text-transparent block">
            Disney
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Participe do sorteio da Viva América + ExpoCristã e concorra a uma passagem para Orlando!
        </p>

        <div className="space-y-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              🎁 Prêmio Incrível
            </h2>
            <div className="space-y-2 text-left">
              <p className="text-white/90 text-lg">• Uma passagem de ida e volta para Disney</p>
              <p className="text-white/90 text-lg">• 5 dias de hospedagem</p>
              <p className="text-white/90 text-lg">• Ingresso para 1 parque da Disney</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-white font-semibold text-lg">
              📅 Sorteio no último dia da Expo Cristã
            </p>
            <p className="text-white/90">
              16 de Setembro de 2025 • Anhembi - São Paulo
            </p>
          </div>

        </div>

        <Button 
          onClick={scrollToForm}
          variant="golden"
          size="lg"
          className="text-xl px-12 py-6 h-auto"
        >
          Participar Agora
        </Button>

        <p className="text-white/80 text-sm mt-12 mb-16">
          Gratuito • Inscrições até 16/09/2025
        </p>
      </div>

    </section>
  );
}