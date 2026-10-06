import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col border border-[#e6dfdb] bg-white">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 30vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-6">
        <h3 className="text-xl font-semibold leading-snug text-foreground">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Meer informatie
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
