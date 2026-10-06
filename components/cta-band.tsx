import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import Link from "next/link"

type CtaBandProps = {
  eyebrow?: string
  title: string
  text: string
  href: string
  label: string
}

export default function CtaBand({
  eyebrow = "Contact",
  title,
  text,
  href,
  label,
}: CtaBandProps) {
  return (
    <section className="section section--white">
      <div className="wrap wrap--narrow">
        <Heading align="center" eyebrow={eyebrow} title={title} intro={text} />
        <div className="actions actions--center">
          <Button asChild size="lg">
            <Link href={href}>{label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
