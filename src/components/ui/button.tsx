import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors";
    const solid = "bg-[#3B82F6] text-white hover:opacity-90 border border-transparent";
    const outline =
      "border border-white/20 bg-transparent text-[#6B7280] hover:text-white/90";

    return (
      <button
        ref={ref}
        className={[base, variant === "solid" ? solid : outline, className].join(" ")}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
