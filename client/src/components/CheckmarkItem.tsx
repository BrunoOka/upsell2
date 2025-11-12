import { Check } from "lucide-react";

interface CheckmarkItemProps {
  text: string;
}

export default function CheckmarkItem({ text }: CheckmarkItemProps) {
  return (
    <div className="flex items-center gap-3 py-2" data-testid={`checkmark-${text.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="w-4 h-4 text-primary-foreground" />
      </div>
      <p className="text-foreground text-base">{text}</p>
    </div>
  );
}
