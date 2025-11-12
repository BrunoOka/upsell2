import { LucideIcon } from "lucide-react";

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitItem({ icon: Icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-4 p-4" data-testid={`benefit-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
