import { cn } from "@/lib/utils"
import Image from "next/image"

type MediaFrameProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export default function MediaFrame({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: MediaFrameProps) {
  return (
    <div className={cn("media", className)}>
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
    </div>
  )
}
