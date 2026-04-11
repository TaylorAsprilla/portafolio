import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";

    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90 glow-hover": variant === "default",
        "border border-primary/50 bg-transparent hover:bg-primary/10 glass": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90":
          variant === "destructive",
      },
      {
        "h-10 px-6 py-2": size === "default",
        "h-9 rounded-md px-3 text-sm": size === "sm",
        "h-11 rounded-lg px-8 text-lg": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (asChild) {
      return (
        <span className={classes} ref={ref as React.Ref<HTMLSpanElement>}>
          {props.children}
        </span>
      );
    }

    return <button className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
