import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface DeclineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DeclineButton = forwardRef<HTMLButtonElement, DeclineButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full py-4 px-8 rounded-md",
          "bg-dark-gray text-dark-gray-foreground",
          "font-normal text-base",
          "border border-dark-gray-border",
          "hover:opacity-70 hover:blur-[0.5px]",
          "transition-all duration-200",
          "min-h-[56px]",
          className
        )}
        data-testid="button-decline"
        {...props}
      >
        {children}
      </button>
    );
  }
);

DeclineButton.displayName = "DeclineButton";

export default DeclineButton;
