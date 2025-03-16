import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground shadow hover:bg-primary/90 animate-pulse-fuchsia":
                            variant === "default",
                        "border border-primary bg-transparent hover:bg-primary/10 text-primary": variant === "outline",
                        "hover:bg-primary/10 text-primary": variant === "ghost",
                        "h-10 px-4 py-2 text-sm": size === "default",
                        "h-9 px-3 text-xs": size === "sm",
                        "h-12 px-6 text-base": size === "lg",
                    },
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
GlowButton.displayName = "GlowButton"

export { GlowButton }

