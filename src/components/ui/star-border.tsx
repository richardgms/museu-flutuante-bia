import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "#f5d76e"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-80" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 30%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-80"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 30%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-10 border text-white text-center text-sm py-3 px-6 rounded-[20px]",
        "bg-gradient-to-b from-white/10 to-white/5 border-white/20",
        "backdrop-blur-sm transition-all duration-300",
        "hover:bg-gradient-to-b hover:from-white/20 hover:to-white/10 hover:border-white/30"
      )}>
        {children}
      </div>
    </Component>
  )
} 