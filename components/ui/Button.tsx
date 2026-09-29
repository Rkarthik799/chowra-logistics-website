"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variantStyles = {
      // Primary: Deep Navy with subtle glow
      primary:
        "bg-[#0B2D4D] text-white hover:bg-[#134575] focus-visible:ring-[#0B2D4D] shadow-sm hover:shadow",
      // Secondary: Logistics Blue
      secondary:
        "bg-[#1565C0] text-white hover:bg-[#0D47A1] focus-visible:ring-[#1565C0] shadow-sm hover:shadow",
      // Accent: Vibrant Safety Orange
      accent:
        "bg-[#FF7A00] text-white hover:bg-[#E66D00] focus-visible:ring-[#FF7A00] shadow-md hover:shadow-lg font-semibold",
      // Navy: Dark Corporate Navy
      navy:
        "bg-[#071E34] text-white hover:bg-[#0B2D4D] border border-white/10 hover:border-white/20",
      // Outline: High contrast border
      outline:
        "bg-transparent text-[#0B2D4D] border border-[#CBD5E1] hover:border-[#1565C0] hover:bg-slate-50 focus-visible:ring-[#1565C0]",
      // Ghost: Subdued
      ghost:
        "bg-transparent text-[#0B2D4D] hover:bg-slate-100 focus-visible:ring-[#0B2D4D]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
