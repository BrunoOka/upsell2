import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialMinutes?: number;
  onExpire?: () => void;
}

export default function CountdownTimer({ initialMinutes = 10, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      onExpire?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const getColorClass = () => {
    if (timeLeft <= 120) return "text-destructive";
    if (timeLeft <= 300) return "text-warning";
    return "text-neon-green";
  };

  if (isExpired) {
    return (
      <div className="text-center text-destructive font-bold text-2xl md:text-4xl" data-testid="text-timer-expired">
        OFERTA EXPIRADA
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2" data-testid="container-countdown">
      <div className={`font-bold text-4xl md:text-6xl tabular-nums ${getColorClass()} transition-colors`}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
}
