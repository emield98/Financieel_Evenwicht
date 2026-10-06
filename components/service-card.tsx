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
    <article className="card">
      <div className="card__media">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 30vw, 100vw"
        />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
        <Link href={href} className="card__link">
          Meer informatie
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
