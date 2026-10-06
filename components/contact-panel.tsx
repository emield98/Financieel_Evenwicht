import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type ContactPanelProps = {
  title: string
  text: string
}

export default function ContactPanel({ title, text }: ContactPanelProps) {
  return (
    <div className="panel">
      <p className="eyebrow">Contact</p>
      <h3 className="section-title">{title}</h3>
      <span className="rule" aria-hidden="true" />
      <p>{text}</p>
      <div className="actions">
        <Button asChild>
          <Link href="/contact">
            Contact opnemen
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  )
}
