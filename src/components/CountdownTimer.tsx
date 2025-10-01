import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Data do sorteio: 09/10/2025 às 20:00 (horário de Brasília)
    const targetDate = new Date('2025-10-09T20:00:00-03:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-primary text-primary-foreground py-2 sticky top-0 z-50 shadow-lg">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Título */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold flex items-center justify-center md:justify-start gap-1">
              <span className="text-base">⏰</span>
              Sorteio em:
            </h2>
          </div>
          
          {/* Cronômetro */}
          <div className="flex items-center gap-2 text-lg font-mono font-bold">
            <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[50px]">
              <div>{timeLeft.days.toString().padStart(2, '0')}</div>
              <div className="text-xs font-normal opacity-80">dias</div>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[50px]">
              <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs font-normal opacity-80">horas</div>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[50px]">
              <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs font-normal opacity-80">min</div>
            </div>
            <span className="text-white/60">:</span>
            <div className="bg-white/10 rounded-lg px-2 py-1 min-w-[50px]">
              <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs font-normal opacity-80">seg</div>
            </div>
          </div>
          
          {/* Data */}
          <div className="text-center md:text-left">
            <p className="text-xs opacity-90">
              📅 09 de Outubro de 2025 • 20:00h (Horário de Brasília) • Instagram @vivaa_cademy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}