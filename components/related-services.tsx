import { Button } from "@/components/ui/button"
import Heading from "@/components/heading"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    href: "/diensten/particulier",
    title: "Particuliere dienstverlening",
    text: "Bij Financieel en Fiscaal Evenwicht ondersteunen we particulieren met uiteenlopende financiële vraagstukken. Van belastingaangiften en toeslagen tot begeleiding bij belangrijke levensgebeurtenissen.",
  },
  {
    href: "/diensten/zakelijk",
    title: "Zakelijke dienstverlening",
    text: "Voor ondernemers en bedrijven bieden wij complete financiële en fiscale ondersteuning. Van het bijhouden van uw administratie tot het verzorgen van uw belastingaangiften en jaarrekeningen.",
  },
  {
    href: "/diensten/bewindvoering",
    title: "Bewindvoering",
    text: "Soms lukt het niet (meer) om de eigen financiën goed te overzien. Bewindvoering of budgetcoaching kan in zulke situaties uitkomst bieden. We kijken samen met u wat het beste past bij uw persoonlijke situatie.",
  },
]

export default function RelatedServices({ exclude }: { exclude: string }) {
  const items = services.filter((service) => service.href !== exclude)

  return (
    <section className="section section--paper">
      <div className="wrap">
        <Heading align="center" eyebrow="Diensten" title="Andere diensten" />
        <div className="text-grid">
          {items.map((service) => (
            <article key={service.href} className="text-card">
              <h3 className="card__title">{service.title}</h3>
              <p>{service.text}</p>
              <div className="actions">
                <Button asChild variant="outline">
                  <Link href={service.href}>
                    Meer informatie
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
