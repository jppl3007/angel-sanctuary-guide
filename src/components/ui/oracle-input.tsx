import * as React from "react"
import { cn } from "@/lib/utils"

export interface OracleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const OracleInput = React.forwardRef<HTMLInputElement, OracleInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-input bg-input px-4 py-3 text-sm font-oracle-body placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 golden-glow transition-all backdrop-blur-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
OracleInput.displayName = "OracleInput"

export { OracleInput }