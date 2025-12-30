import Image from "next/image"
import { cn } from "@/lib/utils"

interface GlitchLogoProps {
  src?: string // Allow overriding image source
  width?: number
  height?: number
  className?: string // Wrapper class
  imageClassName?: string
  sizes?: string
}

export function GlitchLogo({ 
  src = "/logo-v2.png",
  width = 128, 
  height = 128, 
  className,
  imageClassName,
  sizes
}: GlitchLogoProps) {
  return (
    <div className={cn("glitch-wrapper inline-block relative overflow-hidden rounded-2xl", className)}>
      <style jsx>{`
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          background-image: url('${src}');
        }
      `}</style>
      <Image 
        src={src} 
        alt="Troupers Logo" 
        width={width} 
        height={height}
        sizes={sizes}
        className={cn("rounded-2xl", imageClassName)}
      />
    </div>
  )
}
