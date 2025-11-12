import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  text: string;
}

export default function TrustBadge({ icon: Icon, text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm" data-testid={`badge-${text.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}>
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
