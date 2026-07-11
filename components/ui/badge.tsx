import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-mono tracking-tight transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-muted text-foreground",
        outline: "border-border bg-transparent text-muted-foreground",
        gradient:
          "border-transparent text-white bg-[linear-gradient(120deg,var(--color-electric),var(--color-violet))]",
        cyan: "border-cyan/30 bg-cyan/10 text-cyan",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
