import { AlertTriangle } from "lucide-react";

export default function ScarcityWarning() {
  return (
    <div
      className="bg-warning text-warning-foreground py-3 px-4 rounded-md flex items-center gap-3 text-sm md:text-base font-medium"
      data-testid="warning-scarcity"
    >
      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
      <p>
        <strong>Oferta relâmpago:</strong> Se sair desta página, ela não estará mais disponível.
      </p>
    </div>
  );
}
