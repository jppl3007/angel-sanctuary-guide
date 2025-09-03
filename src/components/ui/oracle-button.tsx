import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const oracleButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground golden-glow",
        sacred: "bg-card border border-card-border text-foreground backdrop-blur-sm hover:border-primary golden-glow",
        mystical: "bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/50 text-foreground hover:from-primary/30 hover:to-secondary/30 golden-glow animate-cosmic-shimmer",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-3",
        lg: "h-14 px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface OracleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof oracleButtonVariants> {
  asChild?: boolean
}

const OracleButton = React.forwardRef<HTMLButtonElement, OracleButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(oracleButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
OracleButton.displayName = "OracleButton"

export { OracleButton, oracleButtonVariants }