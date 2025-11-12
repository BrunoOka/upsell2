import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PrimaryCtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryCtaButton = forwardRef<HTMLButtonElement, PrimaryCtaButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative w-full py-6 px-12 rounded-md",
          "bg-neon-green text-neon-green-foreground",
          "font-bold text-lg md:text-xl uppercase tracking-wide",
          "border border-neon-green-border",
          "shadow-[0_0_20px_rgba(0,255,127,0.3)]",
          "hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] hover:scale-105",
          "active:scale-100",
          "transition-all duration-300",
          "animate-pulse",
          "min-h-[72px]",
          className
        )}
        data-testid="button-cta-primary"
        {...props}
      >
        {children}
      </button>
    );
  }
);

PrimaryCtaButton.displayName = "PrimaryCtaButton";

export default PrimaryCtaButton;
