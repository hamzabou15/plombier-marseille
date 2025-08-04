"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/50",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline bg-transparent px-0 py-0",
        send: "bg-[#edeff5] text-[#E67E22] shadow-xs hover:bg-[#dcdfe9] transition-colors duration-300",
        read: "bg-[#E67E22] text-white shadow-xs hover:bg-[#212121] transition-colors duration-300",
        submit: "bg-[#E67E22] text-white shadow-xs hover:bg-[#cf6a1d] transition ease-out duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xlg: "h-16 w-auto px-4 has-[>svg]:px-6",
        icon: "h-9 w-9 p-2",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: false,
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    /**
     * Accessible label if the button has no textual children
     */
    "aria-label"?: string;
  };

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      loading = false,
      disabled,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Comp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(
          buttonVariants({ variant, size, rounded, className }),
          "relative",
          loading && "pointer-events-none"
        )}
        aria-busy={loading ? true : undefined}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        {...props}
      >
        {/* spinner overlay for loading */}
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm pointer-events-none rounded-md">
            <Loader2 className="h-5 w-5 animate-spin" aria-label="Loading" />
          </span>
        )}

        <span
          className={cn(
            "inline-flex items-center gap-2 transition-all",
            loading ? "opacity-0" : "opacity-100"
          )}
          aria-hidden={loading}
        >
          {startIcon && (
            <span className="flex items-center" aria-hidden="true">
              {startIcon}
            </span>
          )}
          {children}
          {endIcon && (
            <span className="flex items-center" aria-hidden="true">
              {endIcon}
            </span>
          )}
        </span>

        {/* fallback for screen readers when there's no visible text */}
        {!children && props["aria-label"] && !loading && (
          <span className="sr-only">{props["aria-label"]}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
