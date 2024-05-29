import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium",
  {
    variants: {
      variant: {
        default:
          "shadow-lg border border-red-200 shadow-red-500",
        subtract:
          "bg-blue-600 bg-opacity-85 ml-7 text-white text-xl",
        add:
          "bg-green-600 bg-opacity-85 mr-7 text-white text-xl "
    },  
    size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "size-16 text-xl",
        icon: "h-9 w-9",
      },
      transition: {
        default: "transition ease-in-out duration-300",
        hover: "hover:scale-105",
        active: "active:scale-95",
        floatZoom: "hover:-translate-y-1 hover:scale-90 hover:text-3xl transition ease-in-out delay duration-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean //this makes the button inherit the features of its children
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, transition, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, transition, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }